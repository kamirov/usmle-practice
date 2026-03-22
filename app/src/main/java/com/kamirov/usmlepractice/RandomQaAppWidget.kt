package com.kamirov.usmlepractice

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.ClipData
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.view.View
import android.widget.RemoteViews

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

        val appWidgetId = intent.getIntExtra(
            AppWidgetManager.EXTRA_APPWIDGET_ID,
            AppWidgetManager.INVALID_APPWIDGET_ID,
        )
        if (appWidgetId == AppWidgetManager.INVALID_APPWIDGET_ID) {
            return
        }

        when (intent.action) {
            ACTION_TOGGLE_QUESTION -> {
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

                rerenderWidget(context, appWidgetId, nextState)
            }

            ACTION_TOGGLE_DIFFICULT -> {
                val tappedIndex = intent.getIntExtra(EXTRA_TAPPED_INDEX, -1)
                if (tappedIndex < 0) {
                    return
                }

                val currentState = WidgetPreferencesStore.loadWidgetState(context, appWidgetId) as? WidgetNoteState.Note
                    ?: return
                val item = currentState.widgetQaItems.getOrNull(tappedIndex) ?: return

                WidgetDifficultQuestionsStore.toggleQuestion(
                    context = context,
                    noteTitle = currentState.note.noteName,
                    notePathKey = currentState.note.notePathKey,
                    item = item,
                )
                rerenderWidget(context, appWidgetId, currentState)
            }

            ACTION_OPEN_NOTE -> {
                val currentState = WidgetPreferencesStore.loadWidgetState(context, appWidgetId) as? WidgetNoteState.Note
                    ?: return
                launchIntent(
                    context = context,
                    intent = WidgetLaunchers.buildObsidianIntent(
                        context = context,
                        vaultName = currentState.note.vaultName,
                        notePathKey = currentState.note.notePathKey,
                        noteUriString = currentState.note.noteUriString,
                    ),
                )
            }

            ACTION_OPEN_TOPIC_CHATGPT -> {
                val currentState = WidgetPreferencesStore.loadWidgetState(context, appWidgetId) as? WidgetNoteState.Note
                    ?: return
                launchIntent(
                    context = context,
                    intent = WidgetLaunchers.buildChatGptIntent(
                        context = context,
                        prompt = "Tell me about ${currentState.note.displayTitle()}. I'm studying for USMLE Step 1, so keep things relevant.",
                    ),
                )
            }

            ACTION_OPEN_ROW_CHATGPT -> {
                val tappedIndex = intent.getIntExtra(EXTRA_TAPPED_INDEX, -1)
                if (tappedIndex < 0) {
                    return
                }

                val currentState = WidgetPreferencesStore.loadWidgetState(context, appWidgetId) as? WidgetNoteState.Note
                    ?: return
                val item = currentState.widgetQaItems.getOrNull(tappedIndex) ?: return

                launchIntent(
                    context = context,
                    intent = WidgetLaunchers.buildChatGptIntent(
                        context = context,
                        prompt = "(${currentState.note.displayTitle()}) ${item.question}. Please include detail appropriate for studying USMLE Step 1.",
                    ),
                )
            }
        }
    }

    companion object {
        const val ACTION_TOGGLE_QUESTION = "com.kamirov.usmlepractice.action.TOGGLE_QUESTION"
        const val ACTION_TOGGLE_DIFFICULT = "com.kamirov.usmlepractice.action.TOGGLE_DIFFICULT"
        const val ACTION_OPEN_NOTE = "com.kamirov.usmlepractice.action.OPEN_NOTE"
        const val ACTION_OPEN_TOPIC_CHATGPT = "com.kamirov.usmlepractice.action.OPEN_TOPIC_CHATGPT"
        const val ACTION_OPEN_ROW_CHATGPT = "com.kamirov.usmlepractice.action.OPEN_ROW_CHATGPT"
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

private fun rerenderWidget(
    context: Context,
    appWidgetId: Int,
    state: WidgetNoteState,
) {
    WidgetPreferencesStore.saveWidgetState(context, appWidgetId, state)
    val appWidgetManager = AppWidgetManager.getInstance(context)
    RandomQaRemoteViewsRenderer.render(context, appWidgetManager, appWidgetId, state)
}

private fun launchIntent(
    context: Context,
    intent: Intent?,
) {
    intent ?: return
    context.startActivity(intent)
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
        val difficultIds = WidgetDifficultQuestionsStore.loadQuestionIds(context)

        views.setTextViewText(R.id.widget_note_title, state.note.displayTitle())
        views.removeAllViews(R.id.widget_question_container)

        state.widgetQaItems.forEachIndexed { index, item ->
            val rowView = RemoteViews(context.packageName, R.layout.random_qa_widget_question_row)
            val isExpanded = state.expandedIndex == index
            val isDifficult = item.questionId in difficultIds

            rowView.setTextViewText(R.id.widget_question_index, "${index + 1}.")
            rowView.setTextViewText(R.id.widget_question_text, formatWidgetMarkdown(item.question))
            rowView.setTextViewText(R.id.widget_checkbox, if (isDifficult) "✓" else "")
            rowView.setInt(
                R.id.widget_checkbox,
                "setBackgroundResource",
                if (isDifficult) R.drawable.widget_checkbox_checked_bg else R.drawable.widget_checkbox_unchecked_bg,
            )
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

            rowView.setOnClickPendingIntent(
                R.id.widget_question_row,
                actionPendingIntent(
                    context = context,
                    appWidgetId = appWidgetId,
                    action = RandomQaAppWidgetReceiver.ACTION_TOGGLE_QUESTION,
                    rowIndex = index,
                    requestCodeOffset = REQUEST_TOGGLE_QUESTION,
                ),
            )
            rowView.setOnClickPendingIntent(
                R.id.widget_checkbox,
                actionPendingIntent(
                    context = context,
                    appWidgetId = appWidgetId,
                    action = RandomQaAppWidgetReceiver.ACTION_TOGGLE_DIFFICULT,
                    rowIndex = index,
                    requestCodeOffset = REQUEST_TOGGLE_DIFFICULT,
                ),
            )

            views.addView(R.id.widget_question_container, rowView)
        }

        return views
    }

    private fun actionPendingIntent(
        context: Context,
        appWidgetId: Int,
        action: String,
        rowIndex: Int?,
        requestCodeOffset: Int,
    ): PendingIntent {
        val intent = Intent(context, RandomQaAppWidgetReceiver::class.java).apply {
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

private object WidgetPreferencesStore {
    private const val PREFS_NAME = "random_qa_widget_prefs"
    private const val KEY_PREFIX_MODE = "mode_"
    private const val KEY_PREFIX_TITLE = "title_"
    private const val KEY_PREFIX_BODY = "body_"
    private const val KEY_PREFIX_EXPANDED_INDEX = "expanded_index_"
    private const val KEY_PREFIX_URI = "uri_"
    private const val KEY_PREFIX_PATH = "path_"
    private const val KEY_PREFIX_VAULT = "vault_"

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
                    remove(KEY_PREFIX_URI + appWidgetId)
                    remove(KEY_PREFIX_PATH + appWidgetId)
                    remove(KEY_PREFIX_VAULT + appWidgetId)
                }

                is WidgetNoteState.Note -> {
                    putString(KEY_PREFIX_MODE + appWidgetId, MODE_NOTE)
                    putString(KEY_PREFIX_TITLE + appWidgetId, state.note.noteName)
                    putString(KEY_PREFIX_BODY + appWidgetId, state.note.rawContent)
                    putString(KEY_PREFIX_URI + appWidgetId, state.note.noteUriString)
                    putString(KEY_PREFIX_PATH + appWidgetId, state.note.notePathKey)
                    putString(KEY_PREFIX_VAULT + appWidgetId, state.note.vaultName)
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
                    noteUriString = prefs.getString(KEY_PREFIX_URI + appWidgetId, null),
                    notePathKey = prefs.getString(KEY_PREFIX_PATH + appWidgetId, title) ?: title,
                    vaultName = prefs.getString(KEY_PREFIX_VAULT + appWidgetId, null),
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
            .remove(KEY_PREFIX_URI + appWidgetId)
            .remove(KEY_PREFIX_PATH + appWidgetId)
            .remove(KEY_PREFIX_VAULT + appWidgetId)
            .apply()
    }
}

private object WidgetDifficultQuestionsStore {
    private const val PREFS_NAME = "random_qa_widget_difficult"
    private const val KEY_IDS = "ids"
    private const val KEY_PREFIX_NOTE_TITLE = "note_title_"
    private const val KEY_PREFIX_NOTE_PATH = "note_path_"
    private const val KEY_PREFIX_QUESTION = "question_"
    private const val KEY_PREFIX_ANSWER = "answer_"

    fun loadQuestionIds(context: Context): Set<String> =
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .getStringSet(KEY_IDS, emptySet())
            ?.toSet()
            .orEmpty()

    fun toggleQuestion(
        context: Context,
        noteTitle: String,
        notePathKey: String,
        item: WidgetQaItem,
    ): Boolean {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val currentIds = prefs.getStringSet(KEY_IDS, emptySet())?.toMutableSet() ?: mutableSetOf()
        val nextIsDifficult = if (item.questionId in currentIds) {
            currentIds.remove(item.questionId)
            false
        } else {
            currentIds.add(item.questionId)
            true
        }

        prefs.edit().apply {
            putStringSet(KEY_IDS, currentIds)
            if (nextIsDifficult) {
                putString(KEY_PREFIX_NOTE_TITLE + item.questionId, noteTitle)
                putString(KEY_PREFIX_NOTE_PATH + item.questionId, notePathKey)
                putString(KEY_PREFIX_QUESTION + item.questionId, item.question)
                putString(KEY_PREFIX_ANSWER + item.questionId, item.answer)
            } else {
                remove(KEY_PREFIX_NOTE_TITLE + item.questionId)
                remove(KEY_PREFIX_NOTE_PATH + item.questionId)
                remove(KEY_PREFIX_QUESTION + item.questionId)
                remove(KEY_PREFIX_ANSWER + item.questionId)
            }
        }.apply()

        return nextIsDifficult
    }
}

private object WidgetLaunchers {
    private const val CHATGPT_PACKAGE = "com.openai.chatgpt"
    private const val OBSIDIAN_PACKAGE = "md.obsidian"

    fun buildChatGptIntent(
        context: Context,
        prompt: String,
    ): Intent? {
        val url = Uri.parse("https://chatgpt.com/?q=${Uri.encode(prompt)}")
        val appIntent = Intent(Intent.ACTION_VIEW, url).apply {
            setPackage(CHATGPT_PACKAGE)
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        }
        if (appIntent.resolveActivity(context.packageManager) != null) {
            return appIntent
        }

        val webIntent = Intent(Intent.ACTION_VIEW, url).apply {
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        }
        return webIntent.takeIf { it.resolveActivity(context.packageManager) != null }
    }

    fun buildObsidianIntent(
        context: Context,
        vaultName: String?,
        notePathKey: String,
        noteUriString: String?,
    ): Intent? {
        val obsidianDeepLink = buildObsidianOpenUri(
            vaultName = vaultName,
            notePathKey = notePathKey,
        )
        val obsidianIntent = obsidianDeepLink?.let { deepLink ->
            Intent(Intent.ACTION_VIEW, deepLink).apply {
                setPackage(OBSIDIAN_PACKAGE)
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            }
        }
        if (obsidianIntent != null && obsidianIntent.resolveActivity(context.packageManager) != null) {
            return obsidianIntent
        }

        val noteUri = noteUriString?.takeIf(String::isNotBlank)?.let(Uri::parse) ?: return null
        val fallbackIntent = buildViewIntent(noteUri).apply {
            setPackage(OBSIDIAN_PACKAGE)
        }
        if (fallbackIntent.resolveActivity(context.packageManager) != null) {
            return fallbackIntent
        }

        val genericIntent = buildViewIntent(noteUri)
        return genericIntent.takeIf { it.resolveActivity(context.packageManager) != null }
    }

    private fun buildViewIntent(uri: Uri): Intent =
        Intent(Intent.ACTION_VIEW).apply {
            setDataAndType(uri, "text/markdown")
            clipData = ClipData.newRawUri("obsidian-note", uri)
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        }
}

internal fun buildObsidianOpenUri(
    vaultName: String?,
    notePathKey: String?,
): Uri? {
    val safeVaultName = vaultName?.trim()?.takeIf(String::isNotEmpty) ?: return null
    val safeNotePathKey = notePathKey?.trim()?.takeIf(String::isNotEmpty) ?: return null
    return Uri.Builder()
        .scheme("obsidian")
        .authority("open")
        .appendQueryParameter("vault", safeVaultName)
        .appendQueryParameter("file", safeNotePathKey)
        .build()
}

private fun ParsedNoteViewData.displayTitle(): String =
    noteName.replace(Regex("\\.md$", RegexOption.IGNORE_CASE), "")

private const val MODE_MESSAGE = "message"
private const val MODE_NOTE = "note"
private const val REQUEST_TOGGLE_QUESTION = 10_000
private const val REQUEST_TOGGLE_DIFFICULT = 20_000
