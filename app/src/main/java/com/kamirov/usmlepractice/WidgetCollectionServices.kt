package com.kamirov.usmlepractice

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.view.View
import android.widget.RemoteViews
import android.widget.RemoteViewsService

internal const val EXTRA_WIDGET_ACTION_KIND = "extra_widget_action_kind"

private const val ACTION_KIND_ROW_TOGGLE = "row_toggle"
private const val ACTION_KIND_TOGGLE_DIFFICULT = "toggle_difficult"
private const val ACTION_KIND_OPEN_NOTE = "open_note"
private const val ACTION_KIND_OPEN_ROW_CHAT = "open_row_chat"
private const val ACTION_KIND_REMOVE_REVIEW = "remove_review"

class RandomQaWidgetRemoteViewsService : RemoteViewsService() {
    override fun onGetViewFactory(intent: Intent): RemoteViewsFactory =
        RandomQaWidgetRemoteViewsFactory(
            context = applicationContext,
            appWidgetId = requireAppWidgetId(intent) ?: AppWidgetManager.INVALID_APPWIDGET_ID,
        )
}

class ReviewQuestionsWidgetRemoteViewsService : RemoteViewsService() {
    override fun onGetViewFactory(intent: Intent): RemoteViewsFactory =
        ReviewQuestionsWidgetRemoteViewsFactory(
            context = applicationContext,
            appWidgetId = requireAppWidgetId(intent) ?: AppWidgetManager.INVALID_APPWIDGET_ID,
        )
}

private class RandomQaWidgetRemoteViewsFactory(
    private val context: Context,
    private val appWidgetId: Int,
) : RemoteViewsService.RemoteViewsFactory {
    private var state: WidgetNoteState.Note? = null
    private var difficultIds: Set<String> = emptySet()

    override fun onCreate() = Unit

    override fun onDataSetChanged() {
        state = WidgetPreferencesStore.loadWidgetState(context, appWidgetId) as? WidgetNoteState.Note
        difficultIds = TroubleQuestionRepository(context).loadIds()
    }

    override fun onDestroy() = Unit

    override fun getCount(): Int = state?.widgetQaItems?.size ?: 0

    override fun getViewAt(position: Int): RemoteViews? {
        val currentState = state ?: return null
        val item = currentState.widgetQaItems.getOrNull(position) ?: return null
        val isExpanded = currentState.expandedIndex == position
        val isDifficult = item.questionId in difficultIds

        return RemoteViews(context.packageName, R.layout.random_qa_widget_question_row).apply {
            setTextViewText(R.id.widget_question_index, "${position + 1}.")
            setTextViewText(R.id.widget_question_text, formatWidgetMarkdown(item.question))
            setTextViewText(R.id.widget_checkbox, if (isDifficult) "✓" else "")
            setInt(
                R.id.widget_checkbox,
                "setBackgroundResource",
                if (isDifficult) R.drawable.widget_checkbox_checked_bg else R.drawable.widget_checkbox_unchecked_bg,
            )
            setTextViewText(R.id.widget_chevron, if (isExpanded) "▾" else "▸")

            if (isExpanded) {
                setViewVisibility(R.id.widget_answer_container, View.VISIBLE)
                setTextViewText(
                    R.id.widget_answer_text,
                    formatWidgetMarkdown(item.answer.ifBlank { "No answer provided." }),
                )
                setTextViewText(
                    R.id.widget_difficult_button,
                    context.getString(
                        if (isDifficult) R.string.widget_unmark_difficult else R.string.widget_mark_difficult
                    ),
                )
            } else {
                setViewVisibility(R.id.widget_answer_container, View.GONE)
            }

            if (!currentState.isRefreshing) {
                setOnClickFillInIntent(
                    R.id.widget_question_row,
                    collectionFillInIntent(
                        action = RandomQaAppWidgetReceiver.ACTION_TOGGLE_QUESTION,
                        appWidgetId = appWidgetId,
                        rowIndex = position,
                        actionKind = ACTION_KIND_ROW_TOGGLE,
                    ),
                )
                if (isExpanded) {
                    setOnClickFillInIntent(
                        R.id.widget_difficult_button,
                        collectionFillInIntent(
                            action = RandomQaAppWidgetReceiver.ACTION_TOGGLE_DIFFICULT,
                            appWidgetId = appWidgetId,
                            rowIndex = position,
                            actionKind = ACTION_KIND_TOGGLE_DIFFICULT,
                        ),
                    )
                    setOnClickFillInIntent(
                        R.id.widget_open_note_button,
                        collectionFillInIntent(
                            action = RandomQaAppWidgetReceiver.ACTION_OPEN_NOTE,
                            appWidgetId = appWidgetId,
                            actionKind = ACTION_KIND_OPEN_NOTE,
                        ),
                    )
                    setOnClickFillInIntent(
                        R.id.widget_open_chat_button,
                        collectionFillInIntent(
                            action = RandomQaAppWidgetReceiver.ACTION_OPEN_ROW_CHATGPT,
                            appWidgetId = appWidgetId,
                            rowIndex = position,
                            actionKind = ACTION_KIND_OPEN_ROW_CHAT,
                        ),
                    )
                }
            }
        }
    }

    override fun getLoadingView(): RemoteViews? = null

    override fun getViewTypeCount(): Int = 1

    override fun getItemId(position: Int): Long =
        state?.widgetQaItems?.getOrNull(position)?.questionId?.hashCode()?.toLong() ?: position.toLong()

    override fun hasStableIds(): Boolean = true
}

private class ReviewQuestionsWidgetRemoteViewsFactory(
    private val context: Context,
    private val appWidgetId: Int,
) : RemoteViewsService.RemoteViewsFactory {
    private var state: ReviewQuestionsWidgetState.Loaded? = null
    private var items: List<TroubleQuestionItem> = emptyList()

    override fun onCreate() = Unit

    override fun onDataSetChanged() {
        state = ReviewQuestionsWidgetPreferencesStore.loadWidgetState(context, appWidgetId)
            as? ReviewQuestionsWidgetState.Loaded
        items = when (val result = TroubleQuestionRepository(context).loadAll()) {
            is TroubleQuestionLoadResult.Success -> orderedReviewItems(result.items, state?.visibleIds.orEmpty())
            is TroubleQuestionLoadResult.Error -> emptyList()
        }
    }

    override fun onDestroy() = Unit

    override fun getCount(): Int = items.size

    override fun getViewAt(position: Int): RemoteViews? {
        val currentState = state ?: return null
        val item = items.getOrNull(position) ?: return null
        val isExpanded = currentState.expandedItemId == item.id

        return RemoteViews(context.packageName, R.layout.review_questions_widget_question_row).apply {
            setTextViewText(R.id.widget_checkbox, "✓")
            setInt(R.id.widget_checkbox, "setBackgroundResource", R.drawable.widget_checkbox_checked_bg)
            setTextViewText(R.id.widget_question_topic, item.topic.ifBlank { "Unknown topic" })
            setTextViewText(R.id.widget_question_text, formatWidgetMarkdown(item.question))
            setTextViewText(R.id.widget_chevron, if (isExpanded) "▾" else "▸")

            if (isExpanded) {
                setViewVisibility(R.id.widget_answer_container, View.VISIBLE)
                setTextViewText(
                    R.id.widget_answer_text,
                    formatWidgetMarkdown(item.answer.ifBlank { "No answer provided." }),
                )
            } else {
                setViewVisibility(R.id.widget_answer_container, View.GONE)
            }

            if (!currentState.isRefreshing) {
                setOnClickFillInIntent(
                    R.id.widget_review_question_row,
                    collectionFillInIntent(
                        action = ReviewQuestionsAppWidgetReceiver.ACTION_TOGGLE_REVIEW_ANSWER,
                        appWidgetId = appWidgetId,
                        rowIndex = position,
                        actionKind = ACTION_KIND_ROW_TOGGLE,
                    ),
                )
                if (isExpanded) {
                    setOnClickFillInIntent(
                        R.id.widget_remove_button,
                        collectionFillInIntent(
                            action = ReviewQuestionsAppWidgetReceiver.ACTION_REMOVE_REVIEW_QUESTION,
                            appWidgetId = appWidgetId,
                            rowIndex = position,
                            actionKind = ACTION_KIND_REMOVE_REVIEW,
                        ),
                    )
                }
            }
        }
    }

    override fun getLoadingView(): RemoteViews? = null

    override fun getViewTypeCount(): Int = 1

    override fun getItemId(position: Int): Long = items.getOrNull(position)?.id?.hashCode()?.toLong() ?: position.toLong()

    override fun hasStableIds(): Boolean = true
}

internal fun randomQaCollectionIntent(
    context: Context,
    appWidgetId: Int,
): Intent = Intent(context, RandomQaWidgetRemoteViewsService::class.java).apply {
    putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, appWidgetId)
    data = Uri.parse(toUri(Intent.URI_INTENT_SCHEME))
}

internal fun reviewQuestionsCollectionIntent(
    context: Context,
    appWidgetId: Int,
): Intent = Intent(context, ReviewQuestionsWidgetRemoteViewsService::class.java).apply {
    putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, appWidgetId)
    data = Uri.parse(toUri(Intent.URI_INTENT_SCHEME))
}

internal fun widgetCollectionPendingIntentTemplate(
    context: Context,
    receiverClass: Class<*>,
): PendingIntent = PendingIntent.getBroadcast(
    context,
    0,
    Intent(context, receiverClass),
    PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE,
)

private fun collectionFillInIntent(
    action: String,
    appWidgetId: Int,
    rowIndex: Int? = null,
    actionKind: String,
): Intent = Intent().apply {
    this.action = action
    putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, appWidgetId)
    putExtra(EXTRA_WIDGET_ACTION_KIND, actionKind)
    rowIndex?.let { putExtra(RandomQaAppWidgetReceiver.EXTRA_TAPPED_INDEX, it) }
}

internal fun isWidgetCollectionAction(actionKind: String?): Boolean =
    actionKind == ACTION_KIND_ROW_TOGGLE ||
        actionKind == ACTION_KIND_TOGGLE_DIFFICULT ||
        actionKind == ACTION_KIND_OPEN_NOTE ||
        actionKind == ACTION_KIND_OPEN_ROW_CHAT ||
        actionKind == ACTION_KIND_REMOVE_REVIEW

internal fun widgetListEmptyMessage(items: List<WidgetQaItem>, fallbackMessage: String?): String =
    fallbackMessage ?: if (items.isEmpty()) "No questions found in this note." else ""

internal fun reviewListEmptyMessage(allItems: List<TroubleQuestionItem>, visibleIds: List<String>): String =
    if (allItems.isEmpty()) "No review questions yet." else if (visibleIds.isEmpty()) {
        "No review questions in this set. Tap Refresh."
    } else {
        ""
    }
