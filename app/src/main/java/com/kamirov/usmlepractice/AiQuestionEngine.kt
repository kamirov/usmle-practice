package com.kamirov.usmlepractice

import android.content.Context
import com.aallam.openai.api.chat.ChatCompletionRequest
import com.aallam.openai.api.chat.ChatMessage
import com.aallam.openai.api.chat.ChatResponseFormat
import com.aallam.openai.api.chat.JsonSchema
import com.aallam.openai.api.chat.systemMessage
import com.aallam.openai.api.chat.userMessage
import com.aallam.openai.api.http.Timeout
import com.aallam.openai.api.model.ModelId
import com.aallam.openai.client.OpenAI
import com.aallam.openai.client.OpenAIConfig
import io.ktor.client.engine.okhttp.OkHttp
import kotlin.math.max
import kotlin.random.Random
import kotlin.time.Duration.Companion.seconds
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonObject
import org.json.JSONArray
import org.json.JSONObject

internal enum class AiWidgetMode(
    val wireValue: String,
    val title: String,
    val buttonLabel: String,
    val promptDifficulty: String,
) {
    TARGETED(
        wireValue = "targeted",
        title = "Targeted",
        buttonLabel = "\uD83C\uDFAF",
        promptDifficulty = "medium",
    ),
    EASY(
        wireValue = "easy",
        title = "Easy",
        buttonLabel = "E",
        promptDifficulty = "easy",
    ),
    MEDIUM(
        wireValue = "medium",
        title = "Medium",
        buttonLabel = "M",
        promptDifficulty = "medium",
    ),
    HARD(
        wireValue = "hard",
        title = "Hard",
        buttonLabel = "H",
        promptDifficulty = "hard",
    ),
    ;

    companion object {
        val refreshableModes: List<AiWidgetMode> = listOf(TARGETED, EASY, MEDIUM, HARD)
        val practiceModes: List<AiWidgetMode> = listOf(EASY, MEDIUM, HARD)

        fun fromWireValue(raw: String?): AiWidgetMode? =
            entries.firstOrNull { it.wireValue == raw?.trim()?.lowercase() }
    }
}

internal data class AiGeneratedChoice(
    val key: String,
    val text: String,
    val explanation: String,
)

internal data class AiGeneratedQuestion(
    val stem: String,
    val choices: List<AiGeneratedChoice>,
    val correctKey: String,
    val correctExplanation: String,
)

internal data class AiQuestionContext(
    val topic: String,
    val notePathKey: String,
    val noteFile: String,
    val noteUriString: String? = null,
    val vaultName: String? = null,
)

internal data class AiQuestionGenerationContext(
    val context: AiQuestionContext,
    val samplePairs: List<QaItem>,
)

internal data class AiQuestionModeState(
    val context: AiQuestionContext? = null,
    val question: AiGeneratedQuestion? = null,
    val message: String? = null,
    val selectedKey: String? = null,
    val isRevealed: Boolean = false,
)

internal sealed interface AiQuestionWidgetState {
    val isRefreshing: Boolean

    data class Loaded(
        val activeMode: AiWidgetMode = AiWidgetMode.EASY,
        val modeStates: Map<AiWidgetMode, AiQuestionModeState> = emptyAiQuestionModeStates(),
        override val isRefreshing: Boolean = false,
    ) : AiQuestionWidgetState

    data class Message(
        val title: String,
        val message: String,
        override val isRefreshing: Boolean = false,
    ) : AiQuestionWidgetState
}

internal data class AiQuestionMistakeRecord(
    val topic: String,
    val notePathKey: String,
    val noteFile: String,
    val stem: String,
    val correctKey: String,
    val selectedKey: String,
    val difficulty: String,
    val createdAt: String,
)

internal data class AiTargetedTopicStat(
    val topic: String,
    val notePathKey: String,
    val noteFile: String,
    val count: Int,
)

internal data class AiQuestionMistakeStore(
    val version: Int = CURRENT_AI_MISTAKE_STORE_VERSION,
    val recentMistakes: List<AiQuestionMistakeRecord> = emptyList(),
    val topicStats: List<AiTargetedTopicStat> = emptyList(),
)

internal sealed interface AiQuestionGenerationResult {
    data class Success(
        val question: AiGeneratedQuestion,
    ) : AiQuestionGenerationResult

    data class Error(
        val message: String,
    ) : AiQuestionGenerationResult
}

internal fun emptyAiQuestionModeStates(): Map<AiWidgetMode, AiQuestionModeState> = linkedMapOf(
    AiWidgetMode.TARGETED to AiQuestionModeState(),
    AiWidgetMode.EASY to AiQuestionModeState(),
    AiWidgetMode.MEDIUM to AiQuestionModeState(),
    AiWidgetMode.HARD to AiQuestionModeState(),
)

internal fun parseAiWidgetMode(raw: String?): AiWidgetMode? = AiWidgetMode.fromWireValue(raw)

internal fun shouldStartAiQuestionRefresh(state: AiQuestionWidgetState?): Boolean =
    state?.isRefreshing != true

internal fun AiQuestionWidgetState.toRefreshingState(): AiQuestionWidgetState =
    when (this) {
        is AiQuestionWidgetState.Loaded -> copy(isRefreshing = true)
        is AiQuestionWidgetState.Message -> copy(isRefreshing = true)
    }

internal fun selectNextAiQuestionMode(
    currentMode: AiWidgetMode,
    requestedMode: AiWidgetMode,
): AiWidgetMode = requestedMode.takeIf { it in AiWidgetMode.refreshableModes } ?: currentMode

internal fun AiQuestionWidgetState.Loaded.modeState(mode: AiWidgetMode): AiQuestionModeState =
    modeStates[mode] ?: AiQuestionModeState()

internal fun buildAiQuestionWidgetState(
    context: Context,
    previousState: AiQuestionWidgetState?,
    appWidgetId: Int? = null,
    random: Random = Random.Default,
    now: () -> String = { java.time.Instant.now().toString() },
    clientFactory: (String) -> AiQuestionClient = { apiKey -> OpenAiAiQuestionClient(apiKey) },
    keyRepositoryFactory: (Context) -> OpenAiKeyAccess = { appContext -> OpenAiKeyRepository(appContext) },
): AiQuestionWidgetState {
    val apiKey = keyRepositoryFactory(context).loadKey().trim()
    if (apiKey.isBlank()) {
        return AiQuestionWidgetState.Message(
            title = AI_QUESTION_WIDGET_TITLE,
            message = "Missing OpenAI key. Open the app and save your key in the OpenAI card.",
        )
    }

    val repository = ObsidianVaultRepository(context)
    val notesState = repository.loadAiQuestionCandidateNotesSync()
    val notes = when (notesState) {
        VaultScreenState.Unlinked -> {
            return AiQuestionWidgetState.Message(
                title = "Vault not linked",
                message = "Open the app and link your Obsidian vault.",
            )
        }

        VaultScreenState.Loading -> {
            return AiQuestionWidgetState.Message(
                title = AI_QUESTION_WIDGET_TITLE,
                message = "Loading notes.",
            )
        }

        is VaultScreenState.Error -> {
            return AiQuestionWidgetState.Message(
                title = "Could not read vault",
                message = notesState.message,
            )
        }

        is VaultScreenState.Loaded -> notesState.notes
    }

    if (notes.isEmpty()) {
        return AiQuestionWidgetState.Message(
            title = "No notes",
            message = "No Markdown notes with balanced ## Questions and ## Answers were found.",
        )
    }

    val previousLoadedState = previousState as? AiQuestionWidgetState.Loaded
    val previousPaths = previousLoadedState?.modeStates
        ?.mapValues { (_, modeState) -> modeState.context?.notePathKey }
        .orEmpty()
    val notesByPath = notes.associateBy { it.notePathKey }
    val selectedPracticeNotes = pickDistinctPracticeNotes(
        notes = notes,
        previousPaths = previousPaths,
        random = random,
    )

    val mistakeRepository = AiQuestionMistakeRepository(context)
    val targetedStat = pickWeightedTargetedTopic(
        stats = mistakeRepository.loadTopicStats(),
        previousPathKey = previousPaths[AiWidgetMode.TARGETED],
        random = random,
    )

    val generationContexts = linkedMapOf<AiWidgetMode, AiQuestionGenerationContext?>()
    generationContexts[AiWidgetMode.TARGETED] = targetedStat
        ?.let { notesByPath[it.notePathKey] }
        ?.let { note -> repository.loadAiQuestionGenerationContextSync(note) }
    selectedPracticeNotes.forEach { (mode, note) ->
        generationContexts[mode] = note?.let { repository.loadAiQuestionGenerationContextSync(it) }
    }

    val client = clientFactory(apiKey)
    val modeStates = emptyAiQuestionModeStates().toMutableMap()
    for (mode in AiWidgetMode.refreshableModes) {
        val generationContext = generationContexts[mode]
        modeStates[mode] = when {
            mode == AiWidgetMode.TARGETED && targetedStat == null -> {
                AiQuestionModeState(message = "No targeted topics yet. Miss a question first.")
            }

            generationContext == null -> {
                AiQuestionModeState(message = "Could not load note context for ${mode.title.lowercase()} mode.")
            }

            else -> {
                when (
                    val result = client.generateQuestion(
                        mode = mode,
                        generationContext = generationContext,
                        random = random,
                    )
                ) {
                    is AiQuestionGenerationResult.Success -> AiQuestionModeState(
                        context = generationContext.context,
                        question = result.question,
                    )

                    is AiQuestionGenerationResult.Error -> AiQuestionModeState(
                        context = generationContext.context,
                        message = result.message,
                    )
                }
            }
        }
    }
    return AiQuestionWidgetState.Loaded(
        activeMode = AiWidgetMode.EASY,
        modeStates = modeStates,
        isRefreshing = false,
    )
}

internal fun answerAiQuestion(
    state: AiQuestionWidgetState.Loaded,
    mode: AiWidgetMode,
    selectedKey: String,
    mistakeRepository: AiQuestionMistakeMutationTarget,
    now: () -> String = { java.time.Instant.now().toString() },
): AiQuestionWidgetState.Loaded {
    val currentModeState = state.modeState(mode)
    val question = currentModeState.question ?: return state
    if (currentModeState.isRevealed) {
        return state
    }

    val normalizedKey = normalizeChoiceKey(selectedKey) ?: return state
    val nextModeStates = state.modeStates.toMutableMap()
    nextModeStates[mode] = currentModeState.copy(
        selectedKey = normalizedKey,
        isRevealed = true,
    )

    val context = currentModeState.context
    if (context != null) {
        if (normalizedKey == question.correctKey) {
            if (mode == AiWidgetMode.TARGETED) {
                mistakeRepository.decrementTopic(context.notePathKey)
            }
        } else {
            mistakeRepository.recordWrong(
                context = context,
                question = question,
                selectedKey = normalizedKey,
                difficulty = mode.promptDifficulty,
                createdAt = now(),
            )
        }
    }

    return state.copy(modeStates = nextModeStates)
}

internal fun pickDistinctPracticeNotes(
    notes: List<VaultNote>,
    previousPaths: Map<AiWidgetMode, String?>,
    random: Random,
): Map<AiWidgetMode, VaultNote?> {
    val picked = linkedMapOf<AiWidgetMode, VaultNote?>()
    val usedPaths = linkedSetOf<String>()

    for (mode in AiWidgetMode.practiceModes) {
        val distinctPool = notes.filterNot { it.notePathKey in usedPaths }
        val basePool = if (distinctPool.isNotEmpty()) distinctPool else notes
        val previousPath = previousPaths[mode]
        val filteredPool = previousPath
            ?.let { path -> basePool.filterNot { it.notePathKey == path } }
            ?.takeIf { it.isNotEmpty() }
            ?: basePool

        val selected = filteredPool.randomOrNull(random)
        picked[mode] = selected
        selected?.let { usedPaths += it.notePathKey }
    }

    return picked
}

internal fun pickWeightedTargetedTopic(
    stats: List<AiTargetedTopicStat>,
    previousPathKey: String?,
    random: Random,
): AiTargetedTopicStat? {
    val sanitizedStats = sanitizeTargetedTopicStats(stats)
    if (sanitizedStats.isEmpty()) {
        return null
    }

    val filtered = previousPathKey
        ?.takeIf(String::isNotBlank)
        ?.let { priorPath -> sanitizedStats.filterNot { it.notePathKey == priorPath } }
        ?.takeIf { it.isNotEmpty() }
        ?: sanitizedStats

    val totalWeight = filtered.sumOf { it.count }
    if (totalWeight <= 0) {
        return null
    }

    var roll = random.nextInt(totalWeight)
    for (stat in filtered) {
        roll -= stat.count
        if (roll < 0) {
            return stat
        }
    }

    return filtered.lastOrNull()
}

internal fun randomizeQuestionChoices(
    question: AiGeneratedQuestion,
    random: Random,
): AiGeneratedQuestion {
    val taggedChoices = question.choices.map { choice ->
        choice to (choice.key == question.correctKey)
    }.toMutableList()

    for (index in taggedChoices.lastIndex downTo 1) {
        val target = random.nextInt(index + 1)
        val current = taggedChoices[index]
        taggedChoices[index] = taggedChoices[target]
        taggedChoices[target] = current
    }

    val normalizedKeys = listOf("A", "B", "C", "D", "E")
    val randomizedChoices = mutableListOf<AiGeneratedChoice>()
    var randomizedCorrectKey = question.correctKey
    taggedChoices.forEachIndexed { index, (choice, isCorrect) ->
        val nextKey = normalizedKeys[index]
        randomizedChoices += choice.copy(key = nextKey)
        if (isCorrect) {
            randomizedCorrectKey = nextKey
        }
    }

    return question.copy(
        choices = randomizedChoices,
        correctKey = randomizedCorrectKey,
    )
}

internal interface AiQuestionClient {
    fun generateQuestion(
        mode: AiWidgetMode,
        generationContext: AiQuestionGenerationContext,
        random: Random = Random.Default,
    ): AiQuestionGenerationResult
}

internal class OpenAiAiQuestionClient(
    private val apiKey: String,
    private val gateway: OpenAiSdkGateway = OpenAiKotlinSdkGateway(apiKey),
) : AiQuestionClient {
    override fun generateQuestion(
        mode: AiWidgetMode,
        generationContext: AiQuestionGenerationContext,
        random: Random,
    ): AiQuestionGenerationResult {
        return try {
            val messages = buildPromptMessages(mode, generationContext)
            val parsedQuestion = parseAiGeneratedQuestion(
                gateway.generateQuestionJson(
                    systemMessage = messages.first,
                    userMessage = messages.second,
                ),
            ) ?: return AiQuestionGenerationResult.Error("OpenAI returned an invalid question payload.")

            AiQuestionGenerationResult.Success(
                randomizeQuestionChoices(parsedQuestion, random),
            )
        } catch (e: Exception) {
            AiQuestionGenerationResult.Error(
                describeOpenAiRequestException(e),
            )
        }
    }
}

internal interface OpenAiSdkGateway {
    fun generateQuestionJson(
        systemMessage: String,
        userMessage: String,
    ): String
}

internal class OpenAiKotlinSdkGateway(
    apiKey: String,
) : OpenAiSdkGateway {
    private val client = OpenAI(
        config = OpenAIConfig(
            token = apiKey,
            engine = OkHttp.create(),
            timeout = Timeout(
                request = OPENAI_READ_TIMEOUT_SECONDS.seconds,
                connect = OPENAI_CONNECT_TIMEOUT_SECONDS.seconds,
                socket = OPENAI_READ_TIMEOUT_SECONDS.seconds,
            ),
        ),
    )

    override fun generateQuestionJson(
        systemMessage: String,
        userMessage: String,
    ): String = runBlocking {
        val completion = client.chatCompletion(
            request = ChatCompletionRequest(
                model = ModelId(OPENAI_MODEL),
                messages = listOf(
                    systemMessage { content = systemMessage },
                    userMessage { content = userMessage },
                ),
                responseFormat = ChatResponseFormat(
                    type = "json_schema",
                    jsonSchema = JsonSchema(
                        name = "step1_question",
                        schema = buildQuestionSchemaObject(),
                        strict = true,
                    ),
                ),
            ),
        )
        completion.choices.firstOrNull()?.message?.content?.trim()
            ?.takeIf { it.isNotEmpty() }
            ?: throw IllegalStateException("OpenAI returned an empty completion.")
    }
}

internal fun describeOpenAiRequestException(t: Throwable): String {
    val prefix = t.javaClass.simpleName.takeIf { it.isNotBlank() } ?: "Exception"
    val message = t.message?.trim().takeIf { !it.isNullOrEmpty() } ?: "Unexpected error."
    return "OpenAI request error: $prefix: $message"
}

private fun buildQuestionSchemaJson(): JSONObject = JSONObject()
    .put("type", "object")
    .put("additionalProperties", false)
    .put(
        "properties",
        JSONObject()
            .put("stem", JSONObject().put("type", "string"))
            .put(
                "choices",
                JSONObject()
                    .put("type", "array")
                    .put("minItems", 5)
                    .put("maxItems", 5)
                    .put(
                        "items",
                        JSONObject()
                            .put("type", "object")
                            .put("additionalProperties", false)
                            .put(
                                "properties",
                                JSONObject()
                                    .put("key", JSONObject().put("type", "string").put("enum", JSONArray(listOf("A", "B", "C", "D", "E"))))
                                    .put("text", JSONObject().put("type", "string"))
                                    .put("explanation", JSONObject().put("type", "string")),
                            )
                            .put("required", JSONArray(listOf("key", "text", "explanation"))),
                    ),
            )
            .put("correctKey", JSONObject().put("type", "string").put("enum", JSONArray(listOf("A", "B", "C", "D", "E"))))
            .put("correctExplanation", JSONObject().put("type", "string")),
    )
    .put("required", JSONArray(listOf("stem", "choices", "correctKey", "correctExplanation")))

private fun buildQuestionSchemaObject() = Json.parseToJsonElement(buildQuestionSchemaJson().toString()).jsonObject

internal fun parseAiGeneratedQuestion(raw: String): AiGeneratedQuestion? {
    val json = try {
        JSONObject(raw.trim())
    } catch (_: Exception) {
        return null
    }

    val stem = json.optString("stem").trim().takeIf(String::isNotEmpty) ?: return null
    val correctKey = normalizeChoiceKey(json.optString("correctKey")) ?: return null
    val correctExplanation = json.optString("correctExplanation").trim().takeIf(String::isNotEmpty) ?: return null
    val choicesJson = json.optJSONArray("choices") ?: return null
    if (choicesJson.length() != 5) {
        return null
    }

    val choices = mutableListOf<AiGeneratedChoice>()
    val seenKeys = linkedSetOf<String>()
    for (index in 0 until choicesJson.length()) {
        val choiceJson = choicesJson.optJSONObject(index) ?: return null
        val key = normalizeChoiceKey(choiceJson.optString("key")) ?: return null
        val text = choiceJson.optString("text").trim().takeIf(String::isNotEmpty) ?: return null
        val explanation = choiceJson.optString("explanation").trim().takeIf(String::isNotEmpty) ?: return null
        if (!seenKeys.add(key)) {
            return null
        }
        choices += AiGeneratedChoice(
            key = key,
            text = text,
            explanation = explanation,
        )
    }

    if (seenKeys != linkedSetOf("A", "B", "C", "D", "E")) {
        return null
    }

    return AiGeneratedQuestion(
        stem = stem,
        choices = choices.sortedBy { it.key },
        correctKey = correctKey,
        correctExplanation = correctExplanation,
    )
}

internal fun normalizeChoiceKey(raw: String?): String? =
    raw?.trim()?.uppercase()?.takeIf { it in setOf("A", "B", "C", "D", "E") }

private fun buildPromptMessages(
    mode: AiWidgetMode,
    generationContext: AiQuestionGenerationContext,
): Pair<String, String> {
    val topic = generationContext.context.topic
    val samplePairs = generationContext.samplePairs.take(3)
    val examplesText = if (samplePairs.isEmpty()) {
        "No sample note Q/A pairs available."
    } else {
        samplePairs.mapIndexed { index, pair ->
            "${index + 1}. Q: ${pair.question}\n   A: ${pair.answer}"
        }.joinToString("\n")
    }

    val system = "You create rigorous USMLE Step 1 single-best-answer questions and must return only valid JSON."
    val user = """
        Widget mode: ${mode.title}
        Question difficulty: ${mode.promptDifficulty.uppercase()}
        Topic: $topic

        Generate one fresh USMLE Step 1-style multiple-choice question tightly focused on the topic above.

        Return JSON with this exact shape:
        {
          "stem": "string",
          "choices": [
            { "key": "A", "text": "string", "explanation": "string" },
            { "key": "B", "text": "string", "explanation": "string" },
            { "key": "C", "text": "string", "explanation": "string" },
            { "key": "D", "text": "string", "explanation": "string" },
            { "key": "E", "text": "string", "explanation": "string" }
          ],
          "correctKey": "A|B|C|D|E",
          "correctExplanation": "string"
        }

        Rules:
        - Exactly five choices A-E.
        - Exactly one correct answer.
        - Output valid JSON only.
        - No markdown fences.
        - Keep explanations concise and mechanistic.

        Topic grounding:
        - Stay tightly focused on the topic above.
        - Use these note examples for inspiration without copying them:
        $examplesText

        Difficulty guidance:
        - Easy: classic presentation, one-step reasoning, obvious discriminating clue.
        - Medium: two-step reasoning, plausible distractors, moderate integration.
        - Hard: dense vignette, multi-step reasoning, near-neighbor distractors.
        - Targeted mode should behave like medium difficulty.

        Stem requirements:
        - Prefer a clinical vignette when it helps.
        - Test mechanism, pathophysiology, pharmacology, microbiology, immunology, genetics, biochemistry, physiology, or pathology.
        - Avoid trivia and avoid negative phrasing.
        - Make only one answer unambiguously correct.

        Choice requirements:
        - Choices should be in the same conceptual category when possible.
        - Distractors should be plausible and close to the correct answer.
        - Every wrong choice explanation should say why it is wrong in this specific vignette.
    """.trimIndent()
    return system to user
}

internal interface AiQuestionMistakeMutationTarget {
    fun recordWrong(
        context: AiQuestionContext,
        question: AiGeneratedQuestion,
        selectedKey: String,
        difficulty: String,
        createdAt: String,
    )

    fun decrementTopic(notePathKey: String)
}

internal class AiQuestionMistakeRepository(
    private val storage: AiQuestionMistakeStorage,
) : AiQuestionMistakeMutationTarget {
    constructor(context: Context) : this(
        storage = SharedPrefsAiQuestionMistakeStorage(context),
    )

    fun loadStore(): AiQuestionMistakeStore {
        val raw = storage.read().orEmpty()
        return parseAiQuestionMistakeStore(raw)
    }

    fun loadTopicStats(): List<AiTargetedTopicStat> = loadStore().topicStats

    override fun recordWrong(
        context: AiQuestionContext,
        question: AiGeneratedQuestion,
        selectedKey: String,
        difficulty: String,
        createdAt: String,
    ) {
        val current = loadStore()
        val nextStats = current.topicStats.associateBy { it.notePathKey }.toMutableMap()
        val currentStat = nextStats[context.notePathKey]
        nextStats[context.notePathKey] = AiTargetedTopicStat(
            topic = context.topic,
            notePathKey = context.notePathKey,
            noteFile = context.noteFile,
            count = max(1, (currentStat?.count ?: 0) + 1),
        )

        val nextMistakes = buildList {
            add(
                AiQuestionMistakeRecord(
                    topic = context.topic,
                    notePathKey = context.notePathKey,
                    noteFile = context.noteFile,
                    stem = question.stem,
                    correctKey = question.correctKey,
                    selectedKey = selectedKey,
                    difficulty = difficulty,
                    createdAt = createdAt,
                ),
            )
            addAll(current.recentMistakes)
        }

        storage.write(
            serializeAiQuestionMistakeStore(
                AiQuestionMistakeStore(
                    recentMistakes = nextMistakes,
                    topicStats = nextStats.values.sortedBy { it.topic.lowercase() },
                ),
            ),
        )
    }

    override fun decrementTopic(notePathKey: String) {
        val current = loadStore()
        val nextStats = current.topicStats.mapNotNull { stat ->
            if (stat.notePathKey != notePathKey) {
                stat
            } else {
                stat.copy(count = stat.count - 1).takeIf { it.count > 0 }
            }
        }
        storage.write(
            serializeAiQuestionMistakeStore(
                current.copy(topicStats = nextStats),
            ),
        )
    }
}

internal interface AiQuestionMistakeStorage {
    fun read(): String?
    fun write(value: String)
}

private class SharedPrefsAiQuestionMistakeStorage(
    context: Context,
) : AiQuestionMistakeStorage {
    private val prefs = context.getSharedPreferences(AI_MISTAKE_PREFS_NAME, Context.MODE_PRIVATE)

    override fun read(): String? = prefs.getString(AI_MISTAKE_PREFS_KEY, null)

    override fun write(value: String) {
        prefs.edit().putString(AI_MISTAKE_PREFS_KEY, value).apply()
    }
}

internal fun parseAiQuestionMistakeStore(raw: String): AiQuestionMistakeStore {
    if (raw.isBlank()) {
        return AiQuestionMistakeStore()
    }

    return try {
        val root = JSONObject(raw)
        if (root.optInt("version") != CURRENT_AI_MISTAKE_STORE_VERSION) {
            return AiQuestionMistakeStore()
        }

        val mistakes = mutableListOf<AiQuestionMistakeRecord>()
        val mistakesJson = root.optJSONArray("recentMistakes") ?: JSONArray()
        for (index in 0 until mistakesJson.length()) {
            val item = mistakesJson.optJSONObject(index) ?: continue
            val topic = item.optString("topic").trim().takeIf(String::isNotEmpty) ?: continue
            val notePathKey = item.optString("notePathKey").trim().takeIf(String::isNotEmpty) ?: continue
            val noteFile = item.optString("noteFile").trim().takeIf(String::isNotEmpty) ?: continue
            val stem = item.optString("stem").trim().takeIf(String::isNotEmpty) ?: continue
            val correctKey = normalizeChoiceKey(item.optString("correctKey")) ?: continue
            val selectedKey = normalizeChoiceKey(item.optString("selectedKey")) ?: continue
            val difficulty = item.optString("difficulty").trim().takeIf(String::isNotEmpty) ?: continue
            val createdAt = item.optString("createdAt").trim().takeIf(String::isNotEmpty) ?: continue
            mistakes += AiQuestionMistakeRecord(
                topic = topic,
                notePathKey = notePathKey,
                noteFile = noteFile,
                stem = stem,
                correctKey = correctKey,
                selectedKey = selectedKey,
                difficulty = difficulty,
                createdAt = createdAt,
            )
        }

        val statsJson = root.optJSONArray("topicStats") ?: JSONArray()
        val stats = mutableListOf<AiTargetedTopicStat>()
        for (index in 0 until statsJson.length()) {
            val item = statsJson.optJSONObject(index) ?: continue
            val topic = item.optString("topic").trim().takeIf(String::isNotEmpty) ?: continue
            val notePathKey = item.optString("notePathKey").trim().takeIf(String::isNotEmpty) ?: continue
            val noteFile = item.optString("noteFile").trim().takeIf(String::isNotEmpty) ?: continue
            val count = item.optInt("count", 0)
            if (count <= 0) {
                continue
            }
            stats += AiTargetedTopicStat(
                topic = topic,
                notePathKey = notePathKey,
                noteFile = noteFile,
                count = count,
            )
        }

        AiQuestionMistakeStore(
            recentMistakes = mistakes,
            topicStats = sanitizeTargetedTopicStats(stats),
        )
    } catch (_: Exception) {
        AiQuestionMistakeStore()
    }
}

internal fun serializeAiQuestionMistakeStore(store: AiQuestionMistakeStore): String {
    val root = JSONObject()
    root.put("version", CURRENT_AI_MISTAKE_STORE_VERSION)
    root.put(
        "recentMistakes",
        JSONArray().apply {
            store.recentMistakes.forEach { mistake ->
                put(
                    JSONObject()
                        .put("topic", mistake.topic)
                        .put("notePathKey", mistake.notePathKey)
                        .put("noteFile", mistake.noteFile)
                        .put("stem", mistake.stem)
                        .put("correctKey", mistake.correctKey)
                        .put("selectedKey", mistake.selectedKey)
                        .put("difficulty", mistake.difficulty)
                        .put("createdAt", mistake.createdAt),
                )
            }
        },
    )
    root.put(
        "topicStats",
        JSONArray().apply {
            sanitizeTargetedTopicStats(store.topicStats).forEach { stat ->
                put(
                    JSONObject()
                        .put("topic", stat.topic)
                        .put("notePathKey", stat.notePathKey)
                        .put("noteFile", stat.noteFile)
                        .put("count", stat.count),
                )
            }
        },
    )
    return root.toString()
}

internal fun sanitizeTargetedTopicStats(
    stats: List<AiTargetedTopicStat>,
): List<AiTargetedTopicStat> = stats
    .asSequence()
    .filter { it.topic.isNotBlank() && it.notePathKey.isNotBlank() && it.noteFile.isNotBlank() && it.count > 0 }
    .groupBy { it.notePathKey }
    .mapNotNull { (_, grouped) ->
        grouped.lastOrNull()?.let { last ->
            last.copy(count = grouped.sumOf { it.count })
        }
    }
    .sortedBy { it.topic.lowercase() }
    .toList()

internal object AiQuestionWidgetPreferencesStore {
    private const val PREFS_NAME = "ai_question_widget_prefs"
    private const val KEY_PREFIX_STATE = "state_"

    fun saveWidgetState(
        context: Context,
        appWidgetId: Int,
        state: AiQuestionWidgetState,
    ) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .edit()
            .putString(KEY_PREFIX_STATE + appWidgetId, serializeAiQuestionWidgetState(state))
            .apply()
    }

    fun loadWidgetState(
        context: Context,
        appWidgetId: Int,
    ): AiQuestionWidgetState? = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        .getString(KEY_PREFIX_STATE + appWidgetId, null)
        ?.let(::parseAiQuestionWidgetState)

    fun clearWidgetState(
        context: Context,
        appWidgetId: Int,
    ) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .edit()
            .remove(KEY_PREFIX_STATE + appWidgetId)
            .apply()
    }
}

internal fun serializeAiQuestionWidgetState(state: AiQuestionWidgetState): String {
    val root = JSONObject()
    when (state) {
        is AiQuestionWidgetState.Message -> {
            root.put("type", "message")
            root.put("title", state.title)
            root.put("message", state.message)
            root.put("isRefreshing", state.isRefreshing)
        }

        is AiQuestionWidgetState.Loaded -> {
            root.put("type", "loaded")
            root.put("activeMode", state.activeMode.wireValue)
            root.put("isRefreshing", state.isRefreshing)
            root.put(
                "modeStates",
                JSONObject().apply {
                    AiWidgetMode.refreshableModes.forEach { mode ->
                        put(mode.wireValue, serializeAiQuestionModeState(state.modeState(mode)))
                    }
                },
            )
        }
    }
    return root.toString()
}

internal fun parseAiQuestionWidgetState(raw: String): AiQuestionWidgetState? {
    if (raw.isBlank()) {
        return null
    }

    return try {
        val root = JSONObject(raw)
        when (root.optString("type")) {
            "message" -> {
                val title = root.optString("title").takeIf { it.isNotBlank() } ?: return null
                val message = root.optString("message").takeIf { it.isNotBlank() } ?: return null
                AiQuestionWidgetState.Message(
                    title = title,
                    message = message,
                    isRefreshing = root.optBoolean("isRefreshing", false),
                )
            }

            "loaded" -> {
                val activeMode = parseAiWidgetMode(root.optString("activeMode")) ?: AiWidgetMode.EASY
                val modeStatesJson = root.optJSONObject("modeStates") ?: JSONObject()
                val modeStates = emptyAiQuestionModeStates().toMutableMap()
                AiWidgetMode.refreshableModes.forEach { mode ->
                    modeStates[mode] = parseAiQuestionModeState(modeStatesJson.optJSONObject(mode.wireValue))
                }
                AiQuestionWidgetState.Loaded(
                    activeMode = activeMode,
                    modeStates = modeStates,
                    isRefreshing = root.optBoolean("isRefreshing", false),
                )
            }

            else -> null
        }
    } catch (_: Exception) {
        null
    }
}

private fun serializeAiQuestionModeState(state: AiQuestionModeState): JSONObject = JSONObject().apply {
    put("isRevealed", state.isRevealed)
    state.message?.let { put("message", it) }
    state.selectedKey?.let { put("selectedKey", it) }
    state.context?.let { context ->
        put("context", JSONObject().apply {
            put("topic", context.topic)
            put("notePathKey", context.notePathKey)
            put("noteFile", context.noteFile)
            context.noteUriString?.let { put("noteUriString", it) }
            context.vaultName?.let { put("vaultName", it) }
        })
    }
    state.question?.let { question ->
        put(
            "question",
            JSONObject()
                .put("stem", question.stem)
                .put("correctKey", question.correctKey)
                .put("correctExplanation", question.correctExplanation)
                .put(
                    "choices",
                    JSONArray().apply {
                        question.choices.forEach { choice ->
                            put(
                                JSONObject()
                                    .put("key", choice.key)
                                    .put("text", choice.text)
                                    .put("explanation", choice.explanation),
                            )
                        }
                    },
                ),
        )
    }
}

private fun parseAiQuestionModeState(raw: JSONObject?): AiQuestionModeState {
    if (raw == null) {
        return AiQuestionModeState()
    }

    val context = raw.optJSONObject("context")?.let { json ->
        val topic = json.optString("topic").trim().takeIf(String::isNotEmpty) ?: return@let null
        val notePathKey = json.optString("notePathKey").trim().takeIf(String::isNotEmpty) ?: return@let null
        val noteFile = json.optString("noteFile").trim().takeIf(String::isNotEmpty) ?: return@let null
        AiQuestionContext(
            topic = topic,
            notePathKey = notePathKey,
            noteFile = noteFile,
            noteUriString = json.optString("noteUriString").takeIf { it.isNotBlank() },
            vaultName = json.optString("vaultName").takeIf { it.isNotBlank() },
        )
    }

    val question = raw.optJSONObject("question")?.let { questionJson ->
        parseAiGeneratedQuestion(questionJson.toString())
    }

    return AiQuestionModeState(
        context = context,
        question = question,
        message = raw.optString("message").takeIf { it.isNotBlank() },
        selectedKey = normalizeChoiceKey(raw.optString("selectedKey")),
        isRevealed = raw.optBoolean("isRevealed", false),
    )
}

private const val OPENAI_MODEL = "gpt-5-mini"
private const val OPENAI_CONNECT_TIMEOUT_SECONDS = 30
private const val OPENAI_READ_TIMEOUT_SECONDS = 60
private const val CURRENT_AI_MISTAKE_STORE_VERSION = 1
private const val AI_MISTAKE_PREFS_NAME = "ai_question_mistake_store"
private const val AI_MISTAKE_PREFS_KEY = "store_json"
internal const val AI_QUESTION_WIDGET_TITLE = "AI USMLE Question"
