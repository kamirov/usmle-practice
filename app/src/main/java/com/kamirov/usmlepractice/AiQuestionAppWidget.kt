package com.kamirov.usmlepractice

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.BroadcastReceiver.PendingResult
import android.content.ActivityNotFoundException
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.util.Log
import android.view.View
import android.widget.RemoteViews

class AiQuestionAppWidgetReceiver : AppWidgetProvider() {
    override fun onUpdate(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetIds: IntArray,
    ) {
        super.onUpdate(context, appWidgetManager, appWidgetIds)
        appWidgetIds.forEach { appWidgetId ->
            enqueueAiQuestionRefresh(
                context = context,
                appWidgetId = appWidgetId,
                pendingResult = null,
            )
        }
    }

    override fun onDeleted(context: Context, appWidgetIds: IntArray) {
        super.onDeleted(context, appWidgetIds)
        appWidgetIds.forEach { AiQuestionWidgetPreferencesStore.clearWidgetState(context, it) }
    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)

        when (intent.action) {
            ACTION_REFRESH_AI_QUESTION -> {
                val appWidgetId = requireAiAppWidgetId(intent) ?: return
                enqueueAiQuestionRefresh(
                    context = context,
                    appWidgetId = appWidgetId,
                    pendingResult = goAsync(),
                )
            }

            ACTION_SELECT_AI_MODE -> {
                val appWidgetId = requireAiAppWidgetId(intent) ?: return
                val requestedMode = parseAiWidgetMode(intent.getStringExtra(EXTRA_AI_MODE)) ?: return
                val currentState = AiQuestionWidgetPreferencesStore.loadWidgetState(context, appWidgetId)
                    as? AiQuestionWidgetState.Loaded ?: return
                rerenderAiQuestionWidget(
                    context = context,
                    appWidgetId = appWidgetId,
                    state = currentState.copy(
                        activeMode = selectNextAiQuestionMode(currentState.activeMode, requestedMode),
                    ),
                )
            }

            ACTION_SELECT_AI_ANSWER -> {
                val appWidgetId = requireAiAppWidgetId(intent) ?: return
                val selectedKey = intent.getStringExtra(EXTRA_AI_SELECTED_KEY) ?: return
                val currentState = AiQuestionWidgetPreferencesStore.loadWidgetState(context, appWidgetId)
                    as? AiQuestionWidgetState.Loaded ?: return
                val nextState = answerAiQuestion(
                    state = currentState,
                    mode = currentState.activeMode,
                    selectedKey = selectedKey,
                    mistakeRepository = AiQuestionMistakeRepository(context),
                )
                rerenderAiQuestionWidget(
                    context = context,
                    appWidgetId = appWidgetId,
                    state = nextState,
                )
            }

            ACTION_OPEN_AI_TOPIC -> {
                val appWidgetId = requireAiAppWidgetId(intent) ?: return
                val currentState = AiQuestionWidgetPreferencesStore.loadWidgetState(context, appWidgetId)
                    as? AiQuestionWidgetState.Loaded ?: return
                val modeState = currentState.modeState(currentState.activeMode)
                if (!modeState.isRevealed) {
                    return
                }
                val questionContext = modeState.context ?: return
                launchAiIntent(
                    context = context,
                    intent = WidgetLaunchers.buildObsidianIntent(
                        context = context,
                        vaultName = questionContext.vaultName,
                        notePathKey = questionContext.notePathKey,
                        noteUriString = questionContext.noteUriString,
                    ),
                )
            }

            ACTION_OPEN_AI_CHATGPT -> {
                val appWidgetId = requireAiAppWidgetId(intent) ?: return
                val currentState = AiQuestionWidgetPreferencesStore.loadWidgetState(context, appWidgetId)
                    ?: return
                launchAiIntent(
                    context = context,
                    intent = WidgetLaunchers.buildChatGptIntent(
                        context = context,
                        prompt = buildAiQuestionChatGptPrompt(currentState),
                    ),
                )
            }
        }
    }

    companion object {
        const val ACTION_REFRESH_AI_QUESTION =
            "com.kamirov.usmlepractice.action.REFRESH_AI_QUESTION"
        const val ACTION_SELECT_AI_MODE =
            "com.kamirov.usmlepractice.action.SELECT_AI_MODE"
        const val ACTION_SELECT_AI_ANSWER =
            "com.kamirov.usmlepractice.action.SELECT_AI_ANSWER"
        const val ACTION_OPEN_AI_TOPIC =
            "com.kamirov.usmlepractice.action.OPEN_AI_TOPIC"
        const val ACTION_OPEN_AI_CHATGPT =
            "com.kamirov.usmlepractice.action.OPEN_AI_CHATGPT"

        const val EXTRA_AI_MODE = "extra_ai_mode"
        const val EXTRA_AI_SELECTED_KEY = "extra_ai_selected_key"

        fun requestWidgetRefresh(context: Context) {
            val appWidgetManager = AppWidgetManager.getInstance(context)
            val appWidgetIds = appWidgetManager.getAppWidgetIds(
                ComponentName(context, AiQuestionAppWidgetReceiver::class.java),
            )
            appWidgetIds.forEach { appWidgetId ->
                enqueueAiQuestionRefresh(
                    context = context,
                    appWidgetId = appWidgetId,
                    pendingResult = null,
                )
            }
        }
    }
}

private fun enqueueAiQuestionRefresh(
    context: Context,
    appWidgetId: Int,
    pendingResult: PendingResult?,
) {
    val requestId = generateAiDebugSessionId()
    val debugLogger = AiDebugSessionLogger(
        repository = AiDebugLogRepository(context),
        sessionId = requestId,
        widgetId = appWidgetId,
    )
    val previousState = AiQuestionWidgetPreferencesStore.loadWidgetState(context, appWidgetId)
    if (!shouldStartAiQuestionRefresh(previousState)) {
        debugLogger.logEvent(
            stage = "widget_refresh_skipped",
            message = "Skipping refresh because widget is already refreshing",
            fields = mapOf("widgetId" to appWidgetId.toString()),
        )
        debugLogger.complete(status = "skipped")
        pendingResult?.finish()
        return
    }

    val placeholderState = previousState?.toRefreshingState()
        ?: AiQuestionWidgetState.Message(
            title = AI_QUESTION_WIDGET_TITLE,
            message = "Generating questions...",
            isRefreshing = true,
        )
    rerenderAiQuestionWidget(
        context = context,
        appWidgetId = appWidgetId,
        state = placeholderState,
    )

    Thread {
        try {
            val nextState = buildAiQuestionWidgetState(
                context = context,
                previousState = previousState,
                appWidgetId = appWidgetId,
                requestId = requestId,
                debugLogger = debugLogger,
            )
            rerenderAiQuestionWidget(
                context = context,
                appWidgetId = appWidgetId,
                state = nextState,
            )
        } catch (t: Throwable) {
            debugLogger.logFailure(
                stage = "widget_refresh_uncaught",
                throwable = t,
                fields = mapOf("widgetId" to appWidgetId.toString()),
            )
            debugLogger.complete(status = "uncaught_exception")
            Log.e("AiQuestionWidget", "AI widget refresh failed for request=$requestId", t)
            rerenderAiQuestionWidget(
                context = context,
                appWidgetId = appWidgetId,
                state = AiQuestionWidgetState.Message(
                    title = AI_QUESTION_WIDGET_TITLE,
                    message = appendAiDiagnosticsHint(
                        summary = "AI widget refresh failed.",
                        requestId = requestId,
                    ),
                    isRefreshing = false,
                ),
            )
        } finally {
            pendingResult?.finish()
        }
    }.start()
}

private fun rerenderAiQuestionWidget(
    context: Context,
    appWidgetId: Int,
    state: AiQuestionWidgetState,
) {
    AiQuestionWidgetPreferencesStore.saveWidgetState(context, appWidgetId, state)
    AiQuestionRemoteViewsRenderer.render(
        context = context,
        appWidgetManager = AppWidgetManager.getInstance(context),
        appWidgetId = appWidgetId,
        state = state,
    )
}

private object AiQuestionRemoteViewsRenderer {
    fun render(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetId: Int,
        state: AiQuestionWidgetState,
    ) {
        val views = when (state) {
            is AiQuestionWidgetState.Message -> buildMessageViews(context, state)
            is AiQuestionWidgetState.Loaded -> buildLoadedViews(context, appWidgetId, state)
        }
        appWidgetManager.updateAppWidget(appWidgetId, views)
    }

    private fun buildMessageViews(
        context: Context,
        state: AiQuestionWidgetState.Message,
    ): RemoteViews {
        val views = RemoteViews(context.packageName, R.layout.random_qa_widget_message)
        views.setTextViewText(R.id.widget_title, state.title)
        views.setTextViewText(R.id.widget_message, state.message)
        return views
    }

    private fun buildLoadedViews(
        context: Context,
        appWidgetId: Int,
        state: AiQuestionWidgetState.Loaded,
    ): RemoteViews {
        val views = RemoteViews(context.packageName, R.layout.ai_question_widget_note)
        val activeMode = state.activeMode
        val activeModeState = state.modeState(activeMode)
        val activeQuestion = activeModeState.question
        val hasQuestion = activeQuestion != null
        val showModeMessage = !hasQuestion && !activeModeState.message.isNullOrBlank()
        val topicVisible = activeModeState.isRevealed && activeModeState.context != null
        val currentTopic = activeModeState.context?.topic.orEmpty()

        views.setTextViewText(R.id.widget_note_title, AI_QUESTION_WIDGET_TITLE)
        views.setViewVisibility(
            R.id.widget_loading_overlay,
            if (state.isRefreshing) View.VISIBLE else View.GONE,
        )

        bindActionButtons(
            views = views,
            context = context,
            appWidgetId = appWidgetId,
            state = state,
        )
        bindModeButtons(
            views = views,
            context = context,
            appWidgetId = appWidgetId,
            state = state,
        )

        views.setViewVisibility(
            R.id.widget_topic_button,
            if (topicVisible) View.VISIBLE else View.GONE,
        )
        views.setTextViewText(
            R.id.widget_topic_button,
            if (topicVisible) "[$currentTopic]" else "",
        )

        views.setViewVisibility(
            R.id.widget_mode_message,
            if (showModeMessage) View.VISIBLE else View.GONE,
        )
        views.setTextViewText(R.id.widget_mode_message, activeModeState.message.orEmpty())

        views.setViewVisibility(
            R.id.widget_question_container,
            if (hasQuestion) View.VISIBLE else View.GONE,
        )

        if (hasQuestion) {
            views.setTextViewText(R.id.widget_stem_text, activeQuestion.stem)
            bindChoiceViews(
                views = views,
                context = context,
                appWidgetId = appWidgetId,
                state = state,
                modeState = activeModeState,
                question = activeQuestion,
            )

            views.setViewVisibility(
                R.id.widget_correct_explanation,
                if (activeModeState.isRevealed) View.VISIBLE else View.GONE,
            )
            val correctExplain = "Correct answer: ${activeQuestion.correctKey}. ${activeQuestion.correctExplanation}"
            views.setTextViewText(R.id.widget_correct_explanation, correctExplain)
        } else {
            views.setTextViewText(R.id.widget_stem_text, "")
            views.setViewVisibility(R.id.widget_correct_explanation, View.GONE)
            CHOICE_VIEW_BINDINGS.forEach { binding ->
                views.setTextViewText(binding.buttonId, "")
                views.setTextViewText(binding.explanationId, "")
                views.setViewVisibility(binding.explanationId, View.GONE)
                views.setInt(binding.buttonId, "setBackgroundResource", R.drawable.widget_choice_button_bg)
            }
        }

        return views
    }

    private fun bindActionButtons(
        views: RemoteViews,
        context: Context,
        appWidgetId: Int,
        state: AiQuestionWidgetState.Loaded,
    ) {
        views.setInt(
            R.id.widget_refresh_button,
            "setBackgroundResource",
            R.drawable.widget_action_button_bg,
        )
        views.setInt(
            R.id.widget_chatgpt_button,
            "setBackgroundResource",
            R.drawable.widget_action_button_bg,
        )
        views.setInt(
            R.id.widget_topic_button,
            "setBackgroundResource",
            R.drawable.widget_action_button_bg,
        )

        if (!state.isRefreshing) {
            views.setOnClickPendingIntent(
                R.id.widget_refresh_button,
                aiQuestionActionPendingIntent(
                    context = context,
                    appWidgetId = appWidgetId,
                    action = AiQuestionAppWidgetReceiver.ACTION_REFRESH_AI_QUESTION,
                    requestCode = REQUEST_REFRESH_AI_QUESTION,
                ),
            )
            views.setOnClickPendingIntent(
                R.id.widget_chatgpt_button,
                aiQuestionActionPendingIntent(
                    context = context,
                    appWidgetId = appWidgetId,
                    action = AiQuestionAppWidgetReceiver.ACTION_OPEN_AI_CHATGPT,
                    requestCode = REQUEST_OPEN_AI_CHATGPT,
                ),
            )
            views.setOnClickPendingIntent(
                R.id.widget_topic_button,
                aiQuestionActionPendingIntent(
                    context = context,
                    appWidgetId = appWidgetId,
                    action = AiQuestionAppWidgetReceiver.ACTION_OPEN_AI_TOPIC,
                    requestCode = REQUEST_OPEN_AI_TOPIC,
                ),
            )
        }
    }

    private fun bindModeButtons(
        views: RemoteViews,
        context: Context,
        appWidgetId: Int,
        state: AiQuestionWidgetState.Loaded,
    ) {
        MODE_BUTTON_BINDINGS.forEach { (mode, viewId) ->
            views.setTextViewText(viewId, mode.buttonLabel)
            views.setInt(
                viewId,
                "setBackgroundResource",
                if (state.activeMode == mode) R.drawable.widget_action_button_active_bg
                else R.drawable.widget_action_button_bg,
            )
            if (!state.isRefreshing) {
                views.setOnClickPendingIntent(
                    viewId,
                    aiQuestionActionPendingIntent(
                        context = context,
                        appWidgetId = appWidgetId,
                        action = AiQuestionAppWidgetReceiver.ACTION_SELECT_AI_MODE,
                        requestCode = REQUEST_SELECT_AI_MODE + mode.ordinal,
                        extraMode = mode,
                    ),
                )
            }
        }
    }

    private fun bindChoiceViews(
        views: RemoteViews,
        context: Context,
        appWidgetId: Int,
        state: AiQuestionWidgetState.Loaded,
        modeState: AiQuestionModeState,
        question: AiGeneratedQuestion,
    ) {
        CHOICE_VIEW_BINDINGS.forEach { binding ->
            val choice = question.choices.firstOrNull { it.key == binding.key }
            if (choice == null) {
                views.setTextViewText(binding.buttonId, "")
                views.setTextViewText(binding.explanationId, "")
                views.setViewVisibility(binding.explanationId, View.GONE)
                views.setInt(binding.buttonId, "setBackgroundResource", R.drawable.widget_choice_button_bg)
                return@forEach
            }

            views.setTextViewText(binding.buttonId, "${choice.key}. ${choice.text}")
            views.setTextViewText(binding.explanationId, choice.explanation)
            views.setViewVisibility(
                binding.explanationId,
                if (modeState.isRevealed) View.VISIBLE else View.GONE,
            )
            views.setInt(
                binding.buttonId,
                "setBackgroundResource",
                choiceBackgroundRes(
                    modeState = modeState,
                    choice = choice,
                    question = question,
                ),
            )

            if (!state.isRefreshing && !modeState.isRevealed) {
                views.setOnClickPendingIntent(
                    binding.buttonId,
                    aiQuestionActionPendingIntent(
                        context = context,
                        appWidgetId = appWidgetId,
                        action = AiQuestionAppWidgetReceiver.ACTION_SELECT_AI_ANSWER,
                        requestCode = REQUEST_SELECT_AI_ANSWER + binding.buttonId,
                        extraSelectedKey = choice.key,
                    ),
                )
            }
        }
    }
}

private fun choiceBackgroundRes(
    modeState: AiQuestionModeState,
    choice: AiGeneratedChoice,
    question: AiGeneratedQuestion,
): Int {
    if (!modeState.isRevealed) {
        return if (modeState.selectedKey == choice.key) {
            R.drawable.widget_choice_button_selected_bg
        } else {
            R.drawable.widget_choice_button_bg
        }
    }

    return when {
        choice.key == question.correctKey -> R.drawable.widget_choice_button_correct_bg
        choice.key == modeState.selectedKey -> R.drawable.widget_choice_button_wrong_bg
        else -> R.drawable.widget_choice_button_bg
    }
}

private fun aiQuestionActionPendingIntent(
    context: Context,
    appWidgetId: Int,
    action: String,
    requestCode: Int,
    extraMode: AiWidgetMode? = null,
    extraSelectedKey: String? = null,
): PendingIntent {
    val intent = Intent(context, AiQuestionAppWidgetReceiver::class.java).apply {
        this.action = action
        putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, appWidgetId)
        extraMode?.let { putExtra(AiQuestionAppWidgetReceiver.EXTRA_AI_MODE, it.wireValue) }
        extraSelectedKey?.let { putExtra(AiQuestionAppWidgetReceiver.EXTRA_AI_SELECTED_KEY, it) }
    }

    return PendingIntent.getBroadcast(
        context,
        requestCode + (appWidgetId * 1000),
        intent,
        PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE,
    )
}

private fun buildAiQuestionChatGptPrompt(
    state: AiQuestionWidgetState,
): String =
    when (state) {
        is AiQuestionWidgetState.Message -> state.message
        is AiQuestionWidgetState.Loaded -> {
            val modeState = state.modeState(state.activeMode)
            val topic = modeState.context?.topic ?: "USMLE Step 1 topic"
            val question = modeState.question
            if (question == null) {
                "Tell me about $topic. Assume I know nothing and explain it at a USMLE Step 1 level."
            } else {
                buildString {
                    append("Topic: ").append(topic).append("\n\n")
                    append("Question: ").append(question.stem).append("\n\n")
                    question.choices.forEach { choice ->
                        append(choice.key).append(". ").append(choice.text).append('\n')
                    }
                    append("\nCorrect answer: ").append(question.correctKey).append('\n')
                    append("Official explanation: ").append(question.correctExplanation).append("\n\n")
                    append("Request: Explain this from first principles, define the key terms, explain why the right answer is correct, and why the wrong answers are tempting but wrong.")
                }
            }
        }
    }

private data class ChoiceViewBinding(
    val key: String,
    val buttonId: Int,
    val explanationId: Int,
)

private val CHOICE_VIEW_BINDINGS = listOf(
    ChoiceViewBinding("A", R.id.widget_choice_a_button, R.id.widget_choice_a_explanation),
    ChoiceViewBinding("B", R.id.widget_choice_b_button, R.id.widget_choice_b_explanation),
    ChoiceViewBinding("C", R.id.widget_choice_c_button, R.id.widget_choice_c_explanation),
    ChoiceViewBinding("D", R.id.widget_choice_d_button, R.id.widget_choice_d_explanation),
    ChoiceViewBinding("E", R.id.widget_choice_e_button, R.id.widget_choice_e_explanation),
)

private val MODE_BUTTON_BINDINGS = linkedMapOf(
    AiWidgetMode.TARGETED to R.id.widget_mode_targeted,
    AiWidgetMode.EASY to R.id.widget_mode_easy,
    AiWidgetMode.MEDIUM to R.id.widget_mode_medium,
    AiWidgetMode.HARD to R.id.widget_mode_hard,
)

private fun requireAiAppWidgetId(intent: Intent): Int? =
    intent.getIntExtra(
        AppWidgetManager.EXTRA_APPWIDGET_ID,
        AppWidgetManager.INVALID_APPWIDGET_ID,
    ).takeIf { it != AppWidgetManager.INVALID_APPWIDGET_ID }

private fun launchAiIntent(
    context: Context,
    intent: Intent?,
) {
    intent ?: return
    try {
        context.startActivity(intent)
    } catch (_: ActivityNotFoundException) {
        return
    }
}

private const val REQUEST_REFRESH_AI_QUESTION = 40_000
private const val REQUEST_SELECT_AI_MODE = 41_000
private const val REQUEST_SELECT_AI_ANSWER = 42_000
private const val REQUEST_OPEN_AI_TOPIC = 43_000
private const val REQUEST_OPEN_AI_CHATGPT = 44_000
