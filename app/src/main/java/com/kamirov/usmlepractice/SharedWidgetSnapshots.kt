package com.kamirov.usmlepractice

import android.content.Context
import org.json.JSONObject

internal class RandomQaSnapshotRepository(
    private val context: Context,
) {
    private val appContext = context.applicationContext
    private val vaultRepository = ObsidianVaultRepository(appContext)
    private val troubleRepository = TroubleQuestionRepository(appContext)

    fun load(): WidgetNoteState? = RandomQaSharedSnapshotStore.load(appContext)

    fun loadOrRefresh(): WidgetNoteState = load() ?: refresh()

    fun refresh(): WidgetNoteState {
        val state = vaultRepository.loadRandomWidgetStateSync()
        RandomQaSharedSnapshotStore.save(appContext, state)
        return state
    }

    fun toggleExpanded(index: Int): WidgetNoteState? {
        val current = load() as? WidgetNoteState.Note ?: return null
        val next = current.copy(expandedIndex = toggleExpandedIndex(current.expandedIndex, index))
        RandomQaSharedSnapshotStore.save(appContext, next)
        return next
    }

    fun toggleDifficult(index: Int): WidgetNoteState? {
        val current = load() as? WidgetNoteState.Note ?: return null
        val item = current.widgetQaItems.getOrNull(index) ?: return current
        when (
            troubleRepository.toggle(
                noteTitle = current.note.noteName,
                notePathKey = current.note.notePathKey,
                item = item,
            )
        ) {
            TroubleQuestionToggleResult.Added,
            TroubleQuestionToggleResult.Removed,
            TroubleQuestionToggleResult.RejectedAtCapacity -> Unit
        }
        RandomQaSharedSnapshotStore.save(appContext, current)
        return current
    }
}

internal class ReviewQuestionsSnapshotRepository(
    private val context: Context,
) {
    private val appContext = context.applicationContext
    private val troubleRepository = TroubleQuestionRepository(appContext)

    fun load(): ReviewQuestionsWidgetState? = ReviewQuestionsSharedSnapshotStore.load(appContext)

    fun loadOrRefresh(random: kotlin.random.Random = kotlin.random.Random.Default): ReviewQuestionsWidgetState = load() ?: refresh(random)

    fun refresh(random: kotlin.random.Random = kotlin.random.Random.Default): ReviewQuestionsWidgetState {
        val state = buildReviewWidgetState(appContext, random)
        ReviewQuestionsSharedSnapshotStore.save(appContext, state)
        return state
    }

    fun toggleExpanded(index: Int): ReviewQuestionsWidgetState? {
        val current = load() as? ReviewQuestionsWidgetState.Loaded ?: return null
        val visibleId = current.visibleIds.getOrNull(index) ?: return current
        val next = current.copy(
            expandedItemId = toggleExpandedReviewItemId(current.expandedItemId, visibleId),
        )
        ReviewQuestionsSharedSnapshotStore.save(appContext, next)
        return next
    }

    fun remove(index: Int): ReviewQuestionsWidgetState? {
        val current = load() as? ReviewQuestionsWidgetState.Loaded ?: return null
        val visibleId = current.visibleIds.getOrNull(index) ?: return current
        troubleRepository.remove(visibleId)

        val nextVisibleIds = current.visibleIds.filterNot { it == visibleId }
        val nextExpandedItemId = current.expandedItemId.takeUnless { it == visibleId }
        val nextState = current.copy(
            visibleIds = nextVisibleIds,
            expandedItemId = nextExpandedItemId,
        )
        ReviewQuestionsSharedSnapshotStore.save(appContext, nextState)
        return nextState
    }
}

internal class AiQuestionSnapshotRepository(
    private val context: Context,
    private val apiClient: AiQuestionApiClient = HttpAiQuestionApiClient(context),
) {
    private val appContext = context.applicationContext

    fun load(): AiQuestionWidgetState? = AiQuestionSharedSnapshotStore.load(appContext)

    fun loadOrRefresh(): AiQuestionWidgetState = load() ?: refresh()

    fun refresh(): AiQuestionWidgetState {
        val previousState = load()
        val state = buildAiQuestionWidgetState(
            context = appContext,
            previousState = previousState,
            apiClient = apiClient,
        )
        AiQuestionSharedSnapshotStore.save(appContext, state)
        return state
    }

    fun selectMode(mode: AiWidgetMode): AiQuestionWidgetState.Loaded? {
        val current = load() as? AiQuestionWidgetState.Loaded ?: return null
        val next = current.copy(
            activeMode = selectNextAiQuestionMode(current.activeMode, mode),
        )
        AiQuestionSharedSnapshotStore.save(appContext, next)
        return next
    }

    fun answer(selectedKey: String): AiQuestionWidgetState.Loaded? {
        val current = load() as? AiQuestionWidgetState.Loaded ?: return null
        val next = answerAiQuestion(
            state = current,
            mode = current.activeMode,
            selectedKey = selectedKey,
        )
        AiQuestionSharedSnapshotStore.save(appContext, next)
        return next
    }

    fun submitAnswer(questionId: String, selectedOptionIndex: Int): Result<Unit> =
        apiClient.postAnswer(questionId, selectedOptionIndex)
}

internal fun orderedReviewItemsForCurrentSnapshot(
    context: Context,
    state: ReviewQuestionsWidgetState,
): List<TroubleQuestionItem> {
    if (state !is ReviewQuestionsWidgetState.Loaded) return emptyList()
    return when (val result = TroubleQuestionRepository(context).loadAll()) {
        is TroubleQuestionLoadResult.Success -> orderedReviewItems(result.items, state.visibleIds)
        is TroubleQuestionLoadResult.Error -> emptyList()
    }
}

internal object RandomQaSharedSnapshotStore {
    private const val PREFS_NAME = "random_qa_shared_snapshot"
    private const val KEY_MODE = "mode"
    private const val KEY_TITLE = "title"
    private const val KEY_BODY = "body"
    private const val KEY_EXPANDED_INDEX = "expanded_index"
    private const val KEY_URI = "uri"
    private const val KEY_PATH = "path"
    private const val KEY_VAULT = "vault"
    private const val KEY_REFRESHING = "refreshing"

    fun save(context: Context, state: WidgetNoteState) {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        prefs.edit().apply {
            when (state) {
                is WidgetNoteState.Message -> {
                    putString(KEY_MODE, RANDOM_MODE_MESSAGE)
                    putString(KEY_TITLE, state.title)
                    putString(KEY_BODY, state.message)
                    putBoolean(KEY_REFRESHING, state.isRefreshing)
                    remove(KEY_EXPANDED_INDEX)
                    remove(KEY_URI)
                    remove(KEY_PATH)
                    remove(KEY_VAULT)
                }

                is WidgetNoteState.Note -> {
                    putString(KEY_MODE, RANDOM_MODE_NOTE)
                    putString(KEY_TITLE, state.note.noteName)
                    putString(KEY_BODY, state.note.rawContent)
                    putString(KEY_URI, state.note.noteUriString)
                    putString(KEY_PATH, state.note.notePathKey)
                    putString(KEY_VAULT, state.note.vaultName)
                    putBoolean(KEY_REFRESHING, state.isRefreshing)
                    if (state.expandedIndex == null) remove(KEY_EXPANDED_INDEX) else putInt(KEY_EXPANDED_INDEX, state.expandedIndex)
                }
            }
        }.apply()
    }

    fun load(context: Context): WidgetNoteState? {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val mode = prefs.getString(KEY_MODE, null) ?: return null
        val title = prefs.getString(KEY_TITLE, null) ?: return null
        val body = prefs.getString(KEY_BODY, null) ?: return null
        val isRefreshing = prefs.getBoolean(KEY_REFRESHING, false)
        return if (mode == RANDOM_MODE_NOTE) {
            WidgetNoteState.Note(
                note = buildParsedNoteViewData(
                    noteName = title,
                    rawContent = body,
                    noteUriString = prefs.getString(KEY_URI, null),
                    notePathKey = prefs.getString(KEY_PATH, title) ?: title,
                    vaultName = prefs.getString(KEY_VAULT, null),
                ),
                expandedIndex = if (prefs.contains(KEY_EXPANDED_INDEX)) prefs.getInt(KEY_EXPANDED_INDEX, -1).takeIf { it >= 0 } else null,
                isRefreshing = isRefreshing,
            )
        } else {
            WidgetNoteState.Message(
                title = title,
                message = body,
                isRefreshing = isRefreshing,
            )
        }
    }
}

internal object ReviewQuestionsSharedSnapshotStore {
    private const val PREFS_NAME = "review_questions_shared_snapshot"
    private const val KEY_MODE = "mode"
    private const val KEY_VISIBLE_IDS = "visible_ids"
    private const val KEY_EXPANDED_ITEM_ID = "expanded_item_id"
    private const val KEY_TITLE = "title"
    private const val KEY_MESSAGE = "message"
    private const val KEY_REFRESHING = "refreshing"

    fun save(context: Context, state: ReviewQuestionsWidgetState) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit().apply {
            when (state) {
                is ReviewQuestionsWidgetState.Loaded -> {
                    putString(KEY_MODE, REVIEW_MODE_LOADED)
                    putString(KEY_VISIBLE_IDS, state.visibleIds.joinToString("\n"))
                    putString(KEY_EXPANDED_ITEM_ID, state.expandedItemId)
                    putBoolean(KEY_REFRESHING, state.isRefreshing)
                    remove(KEY_TITLE)
                    remove(KEY_MESSAGE)
                }

                is ReviewQuestionsWidgetState.Message -> {
                    putString(KEY_MODE, REVIEW_MODE_MESSAGE)
                    putString(KEY_TITLE, state.title)
                    putString(KEY_MESSAGE, state.message)
                    putBoolean(KEY_REFRESHING, state.isRefreshing)
                    remove(KEY_VISIBLE_IDS)
                    remove(KEY_EXPANDED_ITEM_ID)
                }
            }
        }.apply()
    }

    fun load(context: Context): ReviewQuestionsWidgetState? {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val mode = prefs.getString(KEY_MODE, null) ?: return null
        val isRefreshing = prefs.getBoolean(KEY_REFRESHING, false)
        return if (mode == REVIEW_MODE_LOADED) {
            ReviewQuestionsWidgetState.Loaded(
                visibleIds = prefs.getString(KEY_VISIBLE_IDS, "").orEmpty().split('\n').filter(String::isNotBlank),
                expandedItemId = prefs.getString(KEY_EXPANDED_ITEM_ID, null),
                isRefreshing = isRefreshing,
            )
        } else {
            ReviewQuestionsWidgetState.Message(
                title = prefs.getString(KEY_TITLE, REVIEW_QUESTIONS_TITLE) ?: REVIEW_QUESTIONS_TITLE,
                message = prefs.getString(KEY_MESSAGE, "") ?: "",
                isRefreshing = isRefreshing,
            )
        }
    }
}

internal object AiQuestionSharedSnapshotStore {
    private const val PREFS_NAME = "ai_question_shared_snapshot"
    private const val KEY_STATE = "state_json"

    fun save(context: Context, state: AiQuestionWidgetState) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .edit()
            .putString(KEY_STATE, serializeAiQuestionWidgetState(state))
            .apply()
    }

    fun load(context: Context): AiQuestionWidgetState? = context
        .getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        .getString(KEY_STATE, null)
        ?.let(::parseAiQuestionWidgetState)
}

internal fun serializeWidgetNoteState(state: WidgetNoteState): String = when (state) {
    is WidgetNoteState.Message -> JSONObject()
        .put("mode", RANDOM_MODE_MESSAGE)
        .put("title", state.title)
        .put("message", state.message)
        .put("isRefreshing", state.isRefreshing)
        .toString()

    is WidgetNoteState.Note -> JSONObject()
        .put("mode", RANDOM_MODE_NOTE)
        .put("isRefreshing", state.isRefreshing)
        .put("expandedIndex", state.expandedIndex)
        .put(
            "note",
            JSONObject()
                .put("noteName", state.note.noteName)
                .put("rawContent", state.note.rawContent)
                .put("noteUriString", state.note.noteUriString)
                .put("notePathKey", state.note.notePathKey)
                .put("vaultName", state.note.vaultName),
        )
        .toString()
}

internal fun parseWidgetNoteState(raw: String): WidgetNoteState? {
    val json = try {
        JSONObject(raw)
    } catch (_: Exception) {
        return null
    }
    return when (json.optString("mode")) {
        RANDOM_MODE_MESSAGE -> WidgetNoteState.Message(
            title = json.optString("title"),
            message = json.optString("message"),
            isRefreshing = json.optBoolean("isRefreshing", false),
        )

        RANDOM_MODE_NOTE -> {
            val note = json.optJSONObject("note") ?: return null
            WidgetNoteState.Note(
                note = buildParsedNoteViewData(
                    noteName = note.optString("noteName"),
                    rawContent = note.optString("rawContent"),
                    noteUriString = note.optString("noteUriString").takeIf { it.isNotBlank() },
                    notePathKey = note.optString("notePathKey").ifBlank { note.optString("noteName") },
                    vaultName = note.optString("vaultName").takeIf { it.isNotBlank() },
                ),
                expandedIndex = if (json.isNull("expandedIndex")) null else json.optInt("expandedIndex"),
                isRefreshing = json.optBoolean("isRefreshing", false),
            )
        }

        else -> null
    }
}

private const val RANDOM_MODE_MESSAGE = "message"
private const val RANDOM_MODE_NOTE = "note"
private const val REVIEW_MODE_LOADED = "loaded"
private const val REVIEW_MODE_MESSAGE = "message"
