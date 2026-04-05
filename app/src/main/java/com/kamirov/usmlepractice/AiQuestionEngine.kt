package com.kamirov.usmlepractice

import android.content.Context
import java.io.BufferedReader
import java.io.OutputStreamWriter
import java.net.HttpURLConnection
import java.net.URL
import org.json.JSONArray
import org.json.JSONObject

internal enum class AiWidgetMode(
    val wireValue: String,
    val title: String,
    val buttonLabel: String,
    val serverDifficulty: String? = null,
) {
    TARGETED(
        wireValue = "targeted",
        title = "Targeted",
        buttonLabel = "\uD83C\uDFAF",
        serverDifficulty = null,
    ),
    EASY(
        wireValue = "easy",
        title = "Easy",
        buttonLabel = "E",
        serverDifficulty = "easy",
    ),
    MEDIUM(
        wireValue = "medium",
        title = "Medium",
        buttonLabel = "M",
        serverDifficulty = "medium",
    ),
    HARD(
        wireValue = "hard",
        title = "Hard",
        buttonLabel = "H",
        serverDifficulty = "hard",
    ),
    ;

    companion object {
        val refreshableModes: List<AiWidgetMode> = listOf(TARGETED, EASY, MEDIUM, HARD)
        val serverBackedModes: List<AiWidgetMode> = listOf(EASY, MEDIUM, HARD)

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
    val id: String,
    val topic: String,
    val difficulty: String,
    val stem: String,
    val choices: List<AiGeneratedChoice>,
    val correctKey: String,
    val correctExplanation: String,
    val answerStatus: String? = null,
)

internal data class AiQuestionModeState(
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

internal interface AiQuestionApiClient {
    fun getLatestQuestion(difficulty: String): Result<AiGeneratedQuestion>
    fun postAnswer(questionId: String, selectedOptionIndex: Int): Result<Unit>
}

internal class HttpAiQuestionApiClient(
    context: Context,
    private val secretRepository: PracticeServerSecretRepository = PracticeServerSecretRepository(context),
) : AiQuestionApiClient {
    override fun getLatestQuestion(difficulty: String): Result<AiGeneratedQuestion> = runCatching {
        val secret = requireSecret()
        val encodedDifficulty = difficulty.trim().lowercase()
        val connection = (URL("$AI_QUESTION_SERVER_BASE_URL/api/questions/latest?difficulty=$encodedDifficulty").openConnection() as HttpURLConnection).apply {
            requestMethod = "GET"
            connectTimeout = AI_HTTP_CONNECT_TIMEOUT_MS
            readTimeout = AI_HTTP_READ_TIMEOUT_MS
            setRequestProperty("Accept", "application/json")
            setRequestProperty("x-api-secret", secret)
        }

        try {
            val responseCode = connection.responseCode
            val body = connection.responseBodyText()
            if (responseCode !in 200..299) {
                throw IllegalStateException("HTTP $responseCode: ${body.take(AI_HTTP_ERROR_BODY_LIMIT)}")
            }
            parseLatestAiQuestionResponse(body)
                ?: throw IllegalStateException("Server returned malformed question data.")
        } finally {
            connection.disconnect()
        }
    }

    override fun postAnswer(questionId: String, selectedOptionIndex: Int): Result<Unit> = runCatching {
        val secret = requireSecret()
        val connection = (URL("$AI_QUESTION_SERVER_BASE_URL/api/questions/$questionId/answer").openConnection() as HttpURLConnection).apply {
            requestMethod = "POST"
            connectTimeout = AI_HTTP_CONNECT_TIMEOUT_MS
            readTimeout = AI_HTTP_READ_TIMEOUT_MS
            doOutput = true
            setRequestProperty("Accept", "application/json")
            setRequestProperty("Content-Type", "application/json; charset=utf-8")
            setRequestProperty("x-api-secret", secret)
        }

        try {
            OutputStreamWriter(connection.outputStream, Charsets.UTF_8).use { writer ->
                writer.write(JSONObject().put("selectedOptionIndex", selectedOptionIndex).toString())
            }
            val responseCode = connection.responseCode
            if (responseCode !in 200..299) {
                val body = connection.responseBodyText()
                throw IllegalStateException("HTTP $responseCode: ${body.take(AI_HTTP_ERROR_BODY_LIMIT)}")
            }
        } finally {
            connection.disconnect()
        }
    }

    private fun requireSecret(): String =
        secretRepository.loadSecret().takeIf { it.isNotBlank() }
            ?: throw IllegalStateException(MISSING_SERVER_SECRET_MESSAGE)
}

internal fun buildAiQuestionWidgetState(
    context: Context,
    previousState: AiQuestionWidgetState?,
    apiClient: AiQuestionApiClient = HttpAiQuestionApiClient(context),
): AiQuestionWidgetState {
    val previousLoadedState = previousState as? AiQuestionWidgetState.Loaded
    val activeMode = previousLoadedState?.activeMode ?: AiWidgetMode.EASY
    val modeStates = emptyAiQuestionModeStates().toMutableMap()

    modeStates[AiWidgetMode.TARGETED] = AiQuestionModeState(
        message = TARGETED_MODE_PLACEHOLDER_MESSAGE,
    )

    AiWidgetMode.serverBackedModes.forEach { mode ->
        val difficulty = mode.serverDifficulty ?: return@forEach
        modeStates[mode] = apiClient.getLatestQuestion(difficulty)
            .fold(
                onSuccess = { question ->
                    AiQuestionModeState(
                        question = question,
                        message = null,
                    )
                },
                onFailure = {
                    AiQuestionModeState(
                        message = "Could not load ${mode.title.lowercase()} question.",
                    )
                },
            )
    }

    return AiQuestionWidgetState.Loaded(
        activeMode = activeMode,
        modeStates = modeStates,
        isRefreshing = false,
    )
}

internal fun answerAiQuestion(
    state: AiQuestionWidgetState.Loaded,
    mode: AiWidgetMode,
    selectedKey: String,
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
        message = null,
    )
    return state.copy(modeStates = nextModeStates)
}

internal fun withAiModeMessage(
    state: AiQuestionWidgetState.Loaded,
    mode: AiWidgetMode,
    message: String?,
): AiQuestionWidgetState.Loaded {
    val nextModeStates = state.modeStates.toMutableMap()
    val current = state.modeState(mode)
    nextModeStates[mode] = current.copy(message = message)
    return state.copy(modeStates = nextModeStates)
}

internal fun parseLatestAiQuestionResponse(raw: String): AiGeneratedQuestion? {
    val root = try {
        JSONObject(raw)
    } catch (_: Exception) {
        return null
    }
    val data = root.optJSONObject("data") ?: return null
    val id = data.optString("id").trim().takeIf(String::isNotEmpty) ?: return null
    val topic = data.optString("topic").trim().takeIf(String::isNotEmpty) ?: return null
    val difficulty = data.optString("difficulty").trim().takeIf(String::isNotEmpty) ?: return null
    val stem = data.optString("content").trim().takeIf(String::isNotEmpty) ?: return null
    val correctOptionIndex = data.optInt("correctOptionIndex", -1).takeIf { it in 1..4 } ?: return null

    val choiceKeys = listOf("A", "B", "C", "D")
    val choices = buildList {
        for (index in 1..4) {
            val option = data.optJSONObject("option$index") ?: return null
            val content = option.optString("content").trim().takeIf(String::isNotEmpty) ?: return null
            val explanation = option.optString("explanation").trim().takeIf(String::isNotEmpty) ?: return null
            add(
                AiGeneratedChoice(
                    key = choiceKeys[index - 1],
                    text = content,
                    explanation = explanation,
                ),
            )
        }
    }
    val correctChoice = choices.getOrNull(correctOptionIndex - 1) ?: return null

    return AiGeneratedQuestion(
        id = id,
        topic = topic,
        difficulty = difficulty,
        stem = stem,
        choices = choices,
        correctKey = correctChoice.key,
        correctExplanation = correctChoice.explanation,
        answerStatus = data.optString("answerStatus").trim().takeIf(String::isNotEmpty),
    )
}

internal fun normalizeChoiceKey(raw: String?): String? =
    raw?.trim()?.uppercase()?.takeIf { it in setOf("A", "B", "C", "D") }

internal fun selectedOptionIndexForKey(raw: String?): Int? =
    when (normalizeChoiceKey(raw)) {
        "A" -> 1
        "B" -> 2
        "C" -> 3
        "D" -> 4
        else -> null
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
    state.question?.let { question ->
        put(
            "question",
            JSONObject()
                .put("id", question.id)
                .put("topic", question.topic)
                .put("difficulty", question.difficulty)
                .put("stem", question.stem)
                .put("correctKey", question.correctKey)
                .put("correctExplanation", question.correctExplanation)
                .put("answerStatus", question.answerStatus)
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

    val question = raw.optJSONObject("question")?.let { questionJson ->
        parseAiGeneratedQuestion(questionJson.toString())
    }

    return AiQuestionModeState(
        question = question,
        message = raw.optString("message").takeIf { it.isNotBlank() },
        selectedKey = normalizeChoiceKey(raw.optString("selectedKey")),
        isRevealed = raw.optBoolean("isRevealed", false),
    )
}

internal fun parseAiGeneratedQuestion(raw: String): AiGeneratedQuestion? {
    val json = try {
        JSONObject(raw.trim())
    } catch (_: Exception) {
        return null
    }

    val id = json.optString("id").trim().takeIf(String::isNotEmpty) ?: return null
    val topic = json.optString("topic").trim().takeIf(String::isNotEmpty) ?: return null
    val difficulty = json.optString("difficulty").trim().takeIf(String::isNotEmpty) ?: return null
    val stem = json.optString("stem").trim().takeIf(String::isNotEmpty) ?: return null
    val correctKey = normalizeChoiceKey(json.optString("correctKey")) ?: return null
    val correctExplanation = json.optString("correctExplanation").trim().takeIf(String::isNotEmpty) ?: return null
    val choicesJson = json.optJSONArray("choices") ?: return null
    if (choicesJson.length() != 4) {
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

    if (seenKeys != linkedSetOf("A", "B", "C", "D")) {
        return null
    }

    return AiGeneratedQuestion(
        id = id,
        topic = topic,
        difficulty = difficulty,
        stem = stem,
        choices = choices.sortedBy { it.key },
        correctKey = correctKey,
        correctExplanation = correctExplanation,
        answerStatus = json.optString("answerStatus").trim().takeIf(String::isNotEmpty),
    )
}

private fun HttpURLConnection.responseBodyText(): String {
    val stream = if (responseCode in 200..299) inputStream else errorStream
    if (stream == null) return ""
    return stream.bufferedReader().use(BufferedReader::readText)
}

private const val AI_QUESTION_SERVER_BASE_URL = "https://usmle-practice-server-alpha.vercel.app"
private const val AI_HTTP_CONNECT_TIMEOUT_MS = 30_000
private const val AI_HTTP_READ_TIMEOUT_MS = 60_000
private const val AI_HTTP_ERROR_BODY_LIMIT = 240
private const val TARGETED_MODE_PLACEHOLDER_MESSAGE = "Targeted mode is not available yet."
internal const val AI_QUESTION_SUBMIT_FAILURE_MESSAGE = "Answer sync failed."
internal const val AI_QUESTION_WIDGET_TITLE = "AI USMLE Question"
internal const val MISSING_SERVER_SECRET_MESSAGE = "Missing practice server secret. Open the app and save it in Settings."
