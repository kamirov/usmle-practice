package com.kamirov.usmlepractice

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.widget.RemoteViews
import kotlin.random.Random

class RandomQaAppWidgetReceiver : AppWidgetProvider() {
    override fun onUpdate(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetIds: IntArray,
    ) {
        super.onUpdate(context, appWidgetManager, appWidgetIds)
        val repository = ObsidianVaultRepository(context)

        appWidgetIds.forEach { appWidgetId ->
            val state = repository.loadRandomWidgetStateSync()
            WidgetPreferencesStore.saveWidgetState(context, appWidgetId, state)
            RandomQaRemoteViewsRenderer.render(context, appWidgetManager, appWidgetId, state)
        }
    }

    override fun onDeleted(context: Context, appWidgetIds: IntArray) {
        super.onDeleted(context, appWidgetIds)
        appWidgetIds.forEach { WidgetPreferencesStore.clearWidgetState(context, it) }
    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)

        if (intent.action != ACTION_TOGGLE_QUESTION) {
            return
        }

        val appWidgetId = intent.getIntExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, AppWidgetManager.INVALID_APPWIDGET_ID)
        if (appWidgetId == AppWidgetManager.INVALID_APPWIDGET_ID) {
            return
        }

        val tappedIndex = intent.getIntExtra(EXTRA_TAPPED_INDEX, -1)
        if (tappedIndex < 0) {
            return
        }

        val currentState = WidgetPreferencesStore.loadWidgetState(context, appWidgetId) ?: return
        val nextState = when (currentState) {
            is WidgetNoteState.Note -> currentState.copy(
                expandedIndex = toggleExpandedIndex(currentState.expandedIndex, tappedIndex)
            )
            is WidgetNoteState.Message -> currentState
        }

        WidgetPreferencesStore.saveWidgetState(context, appWidgetId, nextState)
        val appWidgetManager = AppWidgetManager.getInstance(context)
        RandomQaRemoteViewsRenderer.render(context, appWidgetManager, appWidgetId, nextState)
    }

    companion object {
        const val ACTION_TOGGLE_QUESTION = "com.kamirov.usmlepractice.action.TOGGLE_QUESTION"
        const val EXTRA_TAPPED_INDEX = "extra_tapped_index"

        fun requestWidgetRefresh(context: Context) {
            val appWidgetManager = AppWidgetManager.getInstance(context)
            val componentName = ComponentName(context, RandomQaAppWidgetReceiver::class.java)
            val appWidgetIds = appWidgetManager.getAppWidgetIds(componentName)
            if (appWidgetIds.isNotEmpty()) {
                RandomQaAppWidgetReceiver().onUpdate(context, appWidgetManager, appWidgetIds)
            }
        }
    }
}

private object RandomQaRemoteViewsRenderer {
    fun render(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetId: Int,
        state: WidgetNoteState,
    ) {
        val views = when (state) {
            is WidgetNoteState.Message -> buildMessageViews(context, state)
            is WidgetNoteState.Note -> buildNoteViews(context, appWidgetId, state)
        }

        appWidgetManager.updateAppWidget(appWidgetId, views)
    }

    private fun buildMessageViews(
        context: Context,
        state: WidgetNoteState.Message,
    ): RemoteViews {
        val views = RemoteViews(context.packageName, R.layout.random_qa_widget_message)
        views.setTextViewText(R.id.widget_title, state.title)
        views.setTextViewText(R.id.widget_message, state.message)
        return views
    }

    private fun buildNoteViews(
        context: Context,
        appWidgetId: Int,
        state: WidgetNoteState.Note,
    ): RemoteViews {
        val views = RemoteViews(context.packageName, R.layout.random_qa_widget_note)
        views.setTextViewText(R.id.widget_note_title, state.note.noteName)
        views.removeAllViews(R.id.widget_question_container)

        state.note.accordionRows(state.expandedIndex).forEach { row ->
            val rowView = RemoteViews(context.packageName, R.layout.random_qa_widget_question_row)
            rowView.setTextViewText(
                R.id.widget_question_text,
                "${row.index + 1}. ${row.item.question}",
            )

            if (row.isExpanded) {
                rowView.setViewVisibility(R.id.widget_answer_text, android.view.View.VISIBLE)
                rowView.setTextViewText(
                    R.id.widget_answer_text,
                    row.item.answer.ifBlank { "No answer provided." },
                )
            } else {
                rowView.setViewVisibility(R.id.widget_answer_text, android.view.View.GONE)
            }

            rowView.setOnClickPendingIntent(
                R.id.widget_question_card,
                questionTogglePendingIntent(context, appWidgetId, row.index),
            )

            views.addView(R.id.widget_question_container, rowView)
        }

        return views
    }

    private fun questionTogglePendingIntent(
        context: Context,
        appWidgetId: Int,
        rowIndex: Int,
    ): PendingIntent {
        val intent = Intent(context, RandomQaAppWidgetReceiver::class.java).apply {
            action = RandomQaAppWidgetReceiver.ACTION_TOGGLE_QUESTION
            putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, appWidgetId)
            putExtra(RandomQaAppWidgetReceiver.EXTRA_TAPPED_INDEX, rowIndex)
        }

        return PendingIntent.getBroadcast(
            context,
            appWidgetId * 100 + rowIndex,
            intent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE,
        )
    }
}

private object WidgetPreferencesStore {
    private const val PREFS_NAME = "random_qa_widget_prefs"
    private const val KEY_PREFIX_MODE = "mode_"
    private const val KEY_PREFIX_TITLE = "title_"
    private const val KEY_PREFIX_BODY = "body_"
    private const val KEY_PREFIX_EXPANDED_INDEX = "expanded_index_"

    fun saveWidgetState(
        context: Context,
        appWidgetId: Int,
        state: WidgetNoteState,
    ) {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        prefs.edit().apply {
            when (state) {
                is WidgetNoteState.Message -> {
                    putString(KEY_PREFIX_MODE + appWidgetId, MODE_MESSAGE)
                    putString(KEY_PREFIX_TITLE + appWidgetId, state.title)
                    putString(KEY_PREFIX_BODY + appWidgetId, state.message)
                    remove(KEY_PREFIX_EXPANDED_INDEX + appWidgetId)
                }

                is WidgetNoteState.Note -> {
                    putString(KEY_PREFIX_MODE + appWidgetId, MODE_NOTE)
                    putString(KEY_PREFIX_TITLE + appWidgetId, state.note.noteName)
                    putString(KEY_PREFIX_BODY + appWidgetId, state.note.rawContent)
                    if (state.expandedIndex == null) {
                        remove(KEY_PREFIX_EXPANDED_INDEX + appWidgetId)
                    } else {
                        putInt(KEY_PREFIX_EXPANDED_INDEX + appWidgetId, state.expandedIndex)
                    }
                }
            }
        }.apply()
    }

    fun loadWidgetState(
        context: Context,
        appWidgetId: Int,
    ): WidgetNoteState? {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val mode = prefs.getString(KEY_PREFIX_MODE + appWidgetId, null) ?: return null
        val title = prefs.getString(KEY_PREFIX_TITLE + appWidgetId, null) ?: return null
        val body = prefs.getString(KEY_PREFIX_BODY + appWidgetId, null) ?: return null

        return if (mode == MODE_NOTE) {
            WidgetNoteState.Note(
                note = buildParsedNoteViewData(
                    noteName = title,
                    rawContent = body,
                ),
                expandedIndex = if (prefs.contains(KEY_PREFIX_EXPANDED_INDEX + appWidgetId)) {
                    prefs.getInt(KEY_PREFIX_EXPANDED_INDEX + appWidgetId, -1).takeIf { it >= 0 }
                } else {
                    null
                },
            )
        } else {
            WidgetNoteState.Message(
                title = title,
                message = body,
            )
        }
    }

    fun clearWidgetState(
        context: Context,
        appWidgetId: Int,
    ) {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        prefs.edit()
            .remove(KEY_PREFIX_MODE + appWidgetId)
            .remove(KEY_PREFIX_TITLE + appWidgetId)
            .remove(KEY_PREFIX_BODY + appWidgetId)
            .remove(KEY_PREFIX_EXPANDED_INDEX + appWidgetId)
            .apply()
    }
}

private fun ObsidianVaultRepository.loadRandomWidgetStateSync(): WidgetNoteState =
    when (val rootState = loadRootNotesSync()) {
        VaultScreenState.Unlinked -> WidgetNoteState.Message(
            title = "Vault not linked",
            message = "Open the app and link your Obsidian vault.",
        )

        VaultScreenState.Loading -> WidgetNoteState.Message(
            title = "Loading",
            message = "Loading notes.",
        )

        is VaultScreenState.Error -> WidgetNoteState.Message(
            title = "Could not read vault",
            message = rootState.message,
        )

        is VaultScreenState.Loaded -> {
            if (rootState.notes.isEmpty()) {
                WidgetNoteState.Message(
                    title = "No notes",
                    message = rootState.emptyMessage ?: "No non-empty root-level Markdown notes were found.",
                )
            } else {
                when (val noteResult = loadParsedNoteViewDataSync(rootState.notes.random(Random.Default))) {
                    is ParsedNoteLoadResult.Success -> WidgetNoteState.Note(noteResult.note)
                    is ParsedNoteLoadResult.Error -> WidgetNoteState.Message(
                        title = "Could not open note",
                        message = noteResult.message,
                    )
                }
            }
        }
    }

private const val MODE_MESSAGE = "message"
private const val MODE_NOTE = "note"
