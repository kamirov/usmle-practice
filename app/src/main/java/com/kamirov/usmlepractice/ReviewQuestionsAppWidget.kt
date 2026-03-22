package com.kamirov.usmlepractice

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.BroadcastReceiver.PendingResult
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.view.View
import android.widget.RemoteViews
import kotlin.random.Random

class ReviewQuestionsAppWidgetReceiver : AppWidgetProvider() {
    override fun onUpdate(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetIds: IntArray,
    ) {
        super.onUpdate(context, appWidgetManager, appWidgetIds)
        refreshReviewWidgetIds(
            context = context,
            appWidgetManager = appWidgetManager,
            appWidgetIds = appWidgetIds,
        )
    }

    override fun onDeleted(context: Context, appWidgetIds: IntArray) {
        super.onDeleted(context, appWidgetIds)
        appWidgetIds.forEach { ReviewQuestionsWidgetPreferencesStore.clearWidgetState(context, it) }
    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)

        when (intent.action) {
            ACTION_REFRESH_REVIEW_QUESTIONS -> {
                val appWidgetId = requireAppWidgetId(intent) ?: return
                startRefreshReviewWidget(
                    context = context,
                    appWidgetId = appWidgetId,
                    pendingResult = goAsync(),
                )
            }

            ACTION_TOGGLE_REVIEW_ANSWER -> {
                val appWidgetId = requireAppWidgetId(intent) ?: return
                val tappedIndex = intent.getIntExtra(RandomQaAppWidgetReceiver.EXTRA_TAPPED_INDEX, -1)
                if (tappedIndex < 0) return

                val currentState = ReviewQuestionsWidgetPreferencesStore.loadWidgetState(context, appWidgetId)
                    as? ReviewQuestionsWidgetState.Loaded ?: return
                val visibleId = currentState.visibleIds.getOrNull(tappedIndex) ?: return
                rerenderReviewWidget(
                    context = context,
                    appWidgetId = appWidgetId,
                    state = currentState.copy(
                        expandedItemId = toggleExpandedReviewItemId(currentState.expandedItemId, visibleId)
                    ),
                )
            }

            ACTION_REMOVE_REVIEW_QUESTION -> {
                val appWidgetId = requireAppWidgetId(intent) ?: return
                val tappedIndex = intent.getIntExtra(RandomQaAppWidgetReceiver.EXTRA_TAPPED_INDEX, -1)
                if (tappedIndex < 0) return

                val currentState = ReviewQuestionsWidgetPreferencesStore.loadWidgetState(context, appWidgetId)
                    as? ReviewQuestionsWidgetState.Loaded ?: return
                val visibleId = currentState.visibleIds.getOrNull(tappedIndex) ?: return
                TroubleQuestionRepository(context).remove(visibleId)

                val nextVisibleIds = currentState.visibleIds.filterNot { it == visibleId }
                val nextExpandedItemId = currentState.expandedItemId.takeUnless { it == visibleId }
                val nextState = currentState.copy(
                    visibleIds = nextVisibleIds,
                    expandedItemId = nextExpandedItemId,
                )

                rerenderReviewWidget(
                    context = context,
                    appWidgetId = appWidgetId,
                    state = nextState,
                )
            }
        }
    }

    companion object {
        const val ACTION_REFRESH_REVIEW_QUESTIONS =
            "com.kamirov.usmlepractice.action.REFRESH_REVIEW_QUESTIONS"
        const val ACTION_TOGGLE_REVIEW_ANSWER =
            "com.kamirov.usmlepractice.action.TOGGLE_REVIEW_ANSWER"
        const val ACTION_REMOVE_REVIEW_QUESTION =
            "com.kamirov.usmlepractice.action.REMOVE_REVIEW_QUESTION"

        fun requestWidgetRefresh(context: Context) {
            val appWidgetManager = AppWidgetManager.getInstance(context)
            val appWidgetIds = appWidgetManager.getAppWidgetIds(
                ComponentName(context, ReviewQuestionsAppWidgetReceiver::class.java)
            )
            if (appWidgetIds.isNotEmpty()) {
                refreshReviewWidgetIds(context, appWidgetManager, appWidgetIds)
            }
        }
    }
}

private fun refreshReviewWidgetIds(
    context: Context,
    appWidgetManager: AppWidgetManager,
    appWidgetIds: IntArray,
) {
    appWidgetIds.forEach { appWidgetId ->
        val state = buildReviewWidgetState(context, random = Random.Default)
        ReviewQuestionsWidgetPreferencesStore.saveWidgetState(context, appWidgetId, state)
        ReviewQuestionsRemoteViewsRenderer.render(context, appWidgetManager, appWidgetId, state)
    }
}

private fun refreshSingleReviewWidget(
    context: Context,
    appWidgetId: Int,
) {
    refreshReviewWidgetIds(
        context = context,
        appWidgetManager = AppWidgetManager.getInstance(context),
        appWidgetIds = intArrayOf(appWidgetId),
    )
}

private fun startRefreshReviewWidget(
    context: Context,
    appWidgetId: Int,
    pendingResult: PendingResult,
) {
    val currentState = ReviewQuestionsWidgetPreferencesStore.loadWidgetState(context, appWidgetId)
    if (!shouldStartReviewRefresh(currentState)) {
        pendingResult.finish()
        return
    }

    rerenderReviewWidget(
        context = context,
        appWidgetId = appWidgetId,
        state = requireNotNull(currentState).toRefreshingState(),
    )

    Thread {
        try {
            refreshSingleReviewWidget(context, appWidgetId)
        } finally {
            pendingResult.finish()
        }
    }.start()
}

private fun rerenderReviewWidget(
    context: Context,
    appWidgetId: Int,
    state: ReviewQuestionsWidgetState,
) {
    ReviewQuestionsWidgetPreferencesStore.saveWidgetState(context, appWidgetId, state)
    ReviewQuestionsRemoteViewsRenderer.render(
        context = context,
        appWidgetManager = AppWidgetManager.getInstance(context),
        appWidgetId = appWidgetId,
        state = state,
    )
}

private fun buildReviewWidgetState(
    context: Context,
    random: Random,
): ReviewQuestionsWidgetState {
    val repository = TroubleQuestionRepository(context)
    return when (val result = repository.loadAll()) {
        is TroubleQuestionLoadResult.Error -> ReviewQuestionsWidgetState.Message(
            title = REVIEW_QUESTIONS_TITLE,
            message = result.message,
        )

        is TroubleQuestionLoadResult.Success -> {
            if (result.items.isEmpty()) {
                ReviewQuestionsWidgetState.Message(
                    title = REVIEW_QUESTIONS_TITLE,
                    message = "No review questions yet.",
                )
            } else {
                ReviewQuestionsWidgetState.Loaded(
                    visibleIds = selectReviewQuestionIds(
                        items = result.items,
                        maxVisible = MAX_REVIEW_QUESTIONS_VISIBLE,
                        random = random,
                    ),
                )
            }
        }
    }
}

internal fun shouldStartReviewRefresh(state: ReviewQuestionsWidgetState?): Boolean =
    state?.isRefreshing != true

internal fun toggleExpandedReviewItemId(
    currentExpandedItemId: String?,
    tappedItemId: String,
): String? = if (currentExpandedItemId == tappedItemId) null else tappedItemId

internal fun ReviewQuestionsWidgetState.toRefreshingState(): ReviewQuestionsWidgetState =
    when (this) {
        is ReviewQuestionsWidgetState.Loaded -> copy(isRefreshing = true)
        is ReviewQuestionsWidgetState.Message -> copy(isRefreshing = true)
    }

internal sealed interface ReviewQuestionsWidgetState {
    val isRefreshing: Boolean

    data class Loaded(
        val visibleIds: List<String>,
        val expandedItemId: String? = null,
        override val isRefreshing: Boolean = false,
    ) : ReviewQuestionsWidgetState

    data class Message(
        val title: String,
        val message: String,
        override val isRefreshing: Boolean = false,
    ) : ReviewQuestionsWidgetState
}

private object ReviewQuestionsRemoteViewsRenderer {
    fun render(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetId: Int,
        state: ReviewQuestionsWidgetState,
    ) {
        val views = when (state) {
            is ReviewQuestionsWidgetState.Message -> buildMessageViews(context, state)
            is ReviewQuestionsWidgetState.Loaded -> buildLoadedViews(context, appWidgetId, state)
        }

        appWidgetManager.updateAppWidget(appWidgetId, views)
    }

    private fun buildMessageViews(
        context: Context,
        state: ReviewQuestionsWidgetState.Message,
    ): RemoteViews {
        val views = RemoteViews(context.packageName, R.layout.random_qa_widget_message)
        views.setTextViewText(R.id.widget_title, state.title)
        views.setTextViewText(R.id.widget_message, state.message)
        return views
    }

    private fun buildLoadedViews(
        context: Context,
        appWidgetId: Int,
        state: ReviewQuestionsWidgetState.Loaded,
    ): RemoteViews {
        val views = RemoteViews(context.packageName, R.layout.review_questions_widget_note)
        val repository = TroubleQuestionRepository(context)
        val result = repository.loadAll()

        if (result is TroubleQuestionLoadResult.Error) {
            return buildMessageViews(
                context = context,
                state = ReviewQuestionsWidgetState.Message(
                    title = REVIEW_QUESTIONS_TITLE,
                    message = result.message,
                ),
            )
        }
        val items = orderedReviewItems((result as TroubleQuestionLoadResult.Success).items, state.visibleIds)

        views.setTextViewText(R.id.widget_note_title, REVIEW_QUESTIONS_TITLE)
        views.setViewVisibility(
            R.id.widget_loading_overlay,
            if (state.isRefreshing) View.VISIBLE else View.GONE,
        )
        if (!state.isRefreshing) {
            views.setOnClickPendingIntent(
                R.id.widget_refresh_button,
                reviewActionPendingIntent(
                    context = context,
                    appWidgetId = appWidgetId,
                    action = ReviewQuestionsAppWidgetReceiver.ACTION_REFRESH_REVIEW_QUESTIONS,
                    rowIndex = null,
                    requestCodeOffset = REQUEST_REFRESH_REVIEW,
                ),
            )
        }

        views.removeAllViews(R.id.widget_question_container)
        if (items.isEmpty()) {
            val emptyView = RemoteViews(context.packageName, R.layout.review_questions_widget_empty_row)
            emptyView.setTextViewText(
                R.id.widget_review_empty_text,
                if (result.items.isEmpty()) "No review questions yet." else "No review questions in this set. Tap Refresh."
            )
            views.addView(R.id.widget_question_container, emptyView)
            return views
        }

        items.forEachIndexed { index, item ->
            val rowView = RemoteViews(context.packageName, R.layout.review_questions_widget_question_row)
            val isExpanded = state.expandedItemId == item.id

            rowView.setTextViewText(R.id.widget_checkbox, "✓")
            rowView.setInt(R.id.widget_checkbox, "setBackgroundResource", R.drawable.widget_checkbox_checked_bg)
            rowView.setTextViewText(R.id.widget_question_topic, item.topic.ifBlank { "Unknown topic" })
            rowView.setTextViewText(R.id.widget_question_text, formatWidgetMarkdown(item.question))
            rowView.setTextViewText(R.id.widget_chevron, if (isExpanded) "▾" else "▸")

            if (isExpanded) {
                rowView.setViewVisibility(R.id.widget_answer_container, View.VISIBLE)
                rowView.setTextViewText(
                    R.id.widget_answer_text,
                    formatWidgetMarkdown(item.answer.ifBlank { "No answer provided." }),
                )
            } else {
                rowView.setViewVisibility(R.id.widget_answer_container, View.GONE)
            }

            if (!state.isRefreshing) {
                rowView.setOnClickPendingIntent(
                    R.id.widget_review_question_row,
                    reviewActionPendingIntent(
                        context = context,
                        appWidgetId = appWidgetId,
                        action = ReviewQuestionsAppWidgetReceiver.ACTION_TOGGLE_REVIEW_ANSWER,
                        rowIndex = index,
                        requestCodeOffset = REQUEST_TOGGLE_REVIEW_ANSWER,
                    ),
                )
                rowView.setOnClickPendingIntent(
                    R.id.widget_checkbox,
                    reviewActionPendingIntent(
                        context = context,
                        appWidgetId = appWidgetId,
                        action = ReviewQuestionsAppWidgetReceiver.ACTION_REMOVE_REVIEW_QUESTION,
                        rowIndex = index,
                        requestCodeOffset = REQUEST_REMOVE_REVIEW_QUESTION,
                    ),
                )
            }

            views.addView(R.id.widget_question_container, rowView)
        }

        return views
    }

    private fun reviewActionPendingIntent(
        context: Context,
        appWidgetId: Int,
        action: String,
        rowIndex: Int?,
        requestCodeOffset: Int,
    ): PendingIntent {
        val intent = Intent(context, ReviewQuestionsAppWidgetReceiver::class.java).apply {
            this.action = action
            putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, appWidgetId)
            rowIndex?.let { putExtra(RandomQaAppWidgetReceiver.EXTRA_TAPPED_INDEX, it) }
        }

        return PendingIntent.getBroadcast(
            context,
            requestCodeOffset + (appWidgetId * 1000) + (rowIndex ?: 0),
            intent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE,
        )
    }
}

internal fun orderedReviewItems(
    items: List<TroubleQuestionItem>,
    visibleIds: List<String>,
): List<TroubleQuestionItem> {
    val byId = items.associateBy { it.id }
    return visibleIds.mapNotNull(byId::get)
}

private object ReviewQuestionsWidgetPreferencesStore {
    private const val PREFS_NAME = "review_questions_widget_prefs"
    private const val KEY_PREFIX_MODE = "mode_"
    private const val KEY_PREFIX_VISIBLE_IDS = "visible_ids_"
    private const val KEY_PREFIX_EXPANDED_ITEM_ID = "expanded_item_id_"
    private const val KEY_PREFIX_TITLE = "title_"
    private const val KEY_PREFIX_MESSAGE = "message_"
    private const val KEY_PREFIX_REFRESHING = "refreshing_"

    fun saveWidgetState(
        context: Context,
        appWidgetId: Int,
        state: ReviewQuestionsWidgetState,
    ) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit().apply {
            when (state) {
                is ReviewQuestionsWidgetState.Loaded -> {
                    putString(KEY_PREFIX_MODE + appWidgetId, MODE_REVIEW_LOADED)
                    putString(KEY_PREFIX_VISIBLE_IDS + appWidgetId, state.visibleIds.joinToString("\n"))
                    putString(KEY_PREFIX_EXPANDED_ITEM_ID + appWidgetId, state.expandedItemId)
                    putBoolean(KEY_PREFIX_REFRESHING + appWidgetId, state.isRefreshing)
                    remove(KEY_PREFIX_TITLE + appWidgetId)
                    remove(KEY_PREFIX_MESSAGE + appWidgetId)
                }

                is ReviewQuestionsWidgetState.Message -> {
                    putString(KEY_PREFIX_MODE + appWidgetId, MODE_REVIEW_MESSAGE)
                    putString(KEY_PREFIX_TITLE + appWidgetId, state.title)
                    putString(KEY_PREFIX_MESSAGE + appWidgetId, state.message)
                    putBoolean(KEY_PREFIX_REFRESHING + appWidgetId, state.isRefreshing)
                    remove(KEY_PREFIX_VISIBLE_IDS + appWidgetId)
                    remove(KEY_PREFIX_EXPANDED_ITEM_ID + appWidgetId)
                }
            }
        }.apply()
    }

    fun loadWidgetState(
        context: Context,
        appWidgetId: Int,
    ): ReviewQuestionsWidgetState? {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val mode = prefs.getString(KEY_PREFIX_MODE + appWidgetId, null) ?: return null
        val isRefreshing = prefs.getBoolean(KEY_PREFIX_REFRESHING + appWidgetId, false)
        return if (mode == MODE_REVIEW_LOADED) {
            ReviewQuestionsWidgetState.Loaded(
                visibleIds = prefs.getString(KEY_PREFIX_VISIBLE_IDS + appWidgetId, "")
                    .orEmpty()
                    .split('\n')
                    .filter(String::isNotBlank),
                expandedItemId = prefs.getString(KEY_PREFIX_EXPANDED_ITEM_ID + appWidgetId, null),
                isRefreshing = isRefreshing,
            )
        } else {
            ReviewQuestionsWidgetState.Message(
                title = prefs.getString(KEY_PREFIX_TITLE + appWidgetId, REVIEW_QUESTIONS_TITLE)
                    ?: REVIEW_QUESTIONS_TITLE,
                message = prefs.getString(KEY_PREFIX_MESSAGE + appWidgetId, "") ?: "",
                isRefreshing = isRefreshing,
            )
        }
    }

    fun clearWidgetState(
        context: Context,
        appWidgetId: Int,
    ) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit()
            .remove(KEY_PREFIX_MODE + appWidgetId)
            .remove(KEY_PREFIX_VISIBLE_IDS + appWidgetId)
            .remove(KEY_PREFIX_EXPANDED_ITEM_ID + appWidgetId)
            .remove(KEY_PREFIX_TITLE + appWidgetId)
            .remove(KEY_PREFIX_MESSAGE + appWidgetId)
            .remove(KEY_PREFIX_REFRESHING + appWidgetId)
            .apply()
    }
}

private const val REVIEW_QUESTIONS_TITLE = "Review Questions"
private const val MAX_REVIEW_QUESTIONS_VISIBLE = 4
private const val MODE_REVIEW_LOADED = "loaded"
private const val MODE_REVIEW_MESSAGE = "message"
private const val REQUEST_REFRESH_REVIEW = 30_000
private const val REQUEST_TOGGLE_REVIEW_ANSWER = 40_000
private const val REQUEST_REMOVE_REVIEW_QUESTION = 50_000
