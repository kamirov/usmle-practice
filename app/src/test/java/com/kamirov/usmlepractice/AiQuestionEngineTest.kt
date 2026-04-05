package com.kamirov.usmlepractice

import android.content.Context
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Test
import org.mockito.Mockito.mock

class AiQuestionEngineTest {
    @Test
    fun parseAiWidgetMode_returnsExpectedModes() {
        assertEquals(AiWidgetMode.TARGETED, parseAiWidgetMode("targeted"))
        assertEquals(AiWidgetMode.EASY, parseAiWidgetMode(" EASY "))
        assertEquals(AiWidgetMode.MEDIUM, parseAiWidgetMode("medium"))
        assertEquals(AiWidgetMode.HARD, parseAiWidgetMode("hard"))
        assertNull(parseAiWidgetMode("missing"))
    }

    @Test
    fun parseLatestAiQuestionResponse_returnsStructuredQuestionWhenValid() {
        val parsed = parseLatestAiQuestionResponse(
            """
                {
                  "data": {
                    "id": "question-1",
                    "topic": "Cardiology",
                    "difficulty": "medium",
                    "content": "A patient presents with chest pain.",
                    "option1": { "content": "Choice 1", "explanation": "Expl 1" },
                    "option2": { "content": "Choice 2", "explanation": "Expl 2" },
                    "option3": { "content": "Choice 3", "explanation": "Expl 3" },
                    "option4": { "content": "Choice 4", "explanation": "Expl 4" },
                    "correctOptionIndex": 2,
                    "answerStatus": "correct"
                  }
                }
            """.trimIndent(),
        )

        assertNotNull(parsed)
        assertEquals("question-1", parsed?.id)
        assertEquals("Cardiology", parsed?.topic)
        assertEquals("medium", parsed?.difficulty)
        assertEquals("B", parsed?.correctKey)
        assertEquals("Expl 2", parsed?.correctExplanation)
        assertEquals(4, parsed?.choices?.size)
    }

    @Test
    fun parseLatestAiQuestionResponse_rejectsMissingOptionPayload() {
        assertNull(
            parseLatestAiQuestionResponse(
                """
                    {
                      "data": {
                        "id": "question-1",
                        "topic": "Cardiology",
                        "difficulty": "medium",
                        "content": "Stem",
                        "option1": { "content": "Choice 1", "explanation": "Expl 1" },
                        "option2": { "content": "Choice 2", "explanation": "Expl 2" },
                        "option3": { "content": "Choice 3", "explanation": "Expl 3" },
                        "correctOptionIndex": 2
                      }
                    }
                """.trimIndent(),
            ),
        )
    }

    @Test
    fun parseLatestAiQuestionResponse_rejectsInvalidCorrectOptionIndex() {
        assertNull(
            parseLatestAiQuestionResponse(
                """
                    {
                      "data": {
                        "id": "question-1",
                        "topic": "Cardiology",
                        "difficulty": "medium",
                        "content": "Stem",
                        "option1": { "content": "Choice 1", "explanation": "Expl 1" },
                        "option2": { "content": "Choice 2", "explanation": "Expl 2" },
                        "option3": { "content": "Choice 3", "explanation": "Expl 3" },
                        "option4": { "content": "Choice 4", "explanation": "Expl 4" },
                        "correctOptionIndex": 5
                      }
                    }
                """.trimIndent(),
            ),
        )
    }

    @Test
    fun buildAiQuestionWidgetState_fetchesOnlyServerBackedModes() {
        val client = FakeAiQuestionApiClient(
            responses = mapOf(
                "easy" to Result.success(testQuestion(id = "easy-question", difficulty = "easy")),
                "medium" to Result.success(testQuestion(id = "medium-question", difficulty = "medium")),
                "hard" to Result.success(testQuestion(id = "hard-question", difficulty = "hard")),
            ),
        )

        val state = buildAiQuestionWidgetState(
            context = mock(Context::class.java),
            previousState = null,
            apiClient = client,
        ) as AiQuestionWidgetState.Loaded

        assertEquals(listOf("easy", "medium", "hard"), client.requestedDifficulties)
        assertEquals(TARGETED_MODE_PLACEHOLDER_MESSAGE_FOR_TEST, state.modeState(AiWidgetMode.TARGETED).message)
        assertEquals("easy-question", state.modeState(AiWidgetMode.EASY).question?.id)
        assertEquals("medium-question", state.modeState(AiWidgetMode.MEDIUM).question?.id)
        assertEquals("hard-question", state.modeState(AiWidgetMode.HARD).question?.id)
    }

    @Test
    fun buildAiQuestionWidgetState_keepsRequestedActiveModeFromPreviousState() {
        val previousState = AiQuestionWidgetState.Loaded(activeMode = AiWidgetMode.HARD)
        val client = FakeAiQuestionApiClient(
            responses = mapOf(
                "easy" to Result.success(testQuestion(id = "easy-question", difficulty = "easy")),
                "medium" to Result.success(testQuestion(id = "medium-question", difficulty = "medium")),
                "hard" to Result.success(testQuestion(id = "hard-question", difficulty = "hard")),
            ),
        )

        val state = buildAiQuestionWidgetState(
            context = mock(Context::class.java),
            previousState = previousState,
            apiClient = client,
        ) as AiQuestionWidgetState.Loaded

        assertEquals(AiWidgetMode.HARD, state.activeMode)
    }

    @Test
    fun answerAiQuestion_revealsImmediatelyFromFetchedPayload() {
        val state = AiQuestionWidgetState.Loaded(
            activeMode = AiWidgetMode.MEDIUM,
            modeStates = emptyAiQuestionModeStates().toMutableMap().apply {
                this[AiWidgetMode.MEDIUM] = AiQuestionModeState(question = testQuestion())
            },
        )

        val next = answerAiQuestion(
            state = state,
            mode = AiWidgetMode.MEDIUM,
            selectedKey = "b",
        )

        assertTrue(next.modeState(AiWidgetMode.MEDIUM).isRevealed)
        assertEquals("B", next.modeState(AiWidgetMode.MEDIUM).selectedKey)
        assertEquals(testQuestion(), next.modeState(AiWidgetMode.MEDIUM).question)
    }

    @Test
    fun answerAiQuestion_doesNothingWhenModeHasNoQuestion() {
        val state = AiQuestionWidgetState.Loaded(activeMode = AiWidgetMode.TARGETED)

        val next = answerAiQuestion(
            state = state,
            mode = AiWidgetMode.TARGETED,
            selectedKey = "A",
        )

        assertEquals(state, next)
    }

    @Test
    fun withAiModeMessage_setsMessageWithoutClearingRevealedQuestion() {
        val revealed = AiQuestionWidgetState.Loaded(
            activeMode = AiWidgetMode.EASY,
            modeStates = emptyAiQuestionModeStates().toMutableMap().apply {
                this[AiWidgetMode.EASY] = AiQuestionModeState(
                    question = testQuestion(),
                    selectedKey = "A",
                    isRevealed = true,
                )
            },
        )

        val next = withAiModeMessage(
            state = revealed,
            mode = AiWidgetMode.EASY,
            message = AI_QUESTION_SUBMIT_FAILURE_MESSAGE,
        )

        assertTrue(next.modeState(AiWidgetMode.EASY).isRevealed)
        assertEquals("A", next.modeState(AiWidgetMode.EASY).selectedKey)
        assertEquals(AI_QUESTION_SUBMIT_FAILURE_MESSAGE, next.modeState(AiWidgetMode.EASY).message)
    }

    @Test
    fun selectedOptionIndexForKey_returnsServerIndices() {
        assertEquals(1, selectedOptionIndexForKey("a"))
        assertEquals(2, selectedOptionIndexForKey("B"))
        assertEquals(3, selectedOptionIndexForKey(" c "))
        assertEquals(4, selectedOptionIndexForKey("D"))
        assertNull(selectedOptionIndexForKey("E"))
    }

    @Test
    fun serializeAndParseAiQuestionWidgetState_roundTripsLoadedState() {
        val state = AiQuestionWidgetState.Loaded(
            activeMode = AiWidgetMode.MEDIUM,
            modeStates = emptyAiQuestionModeStates().toMutableMap().apply {
                this[AiWidgetMode.MEDIUM] = AiQuestionModeState(
                    question = testQuestion(),
                    message = "Answer sync failed.",
                    selectedKey = "A",
                    isRevealed = true,
                )
            },
        )

        val parsed = parseAiQuestionWidgetState(serializeAiQuestionWidgetState(state))

        assertEquals(state, parsed)
    }

    @Test
    fun shouldStartAiQuestionRefresh_returnsFalseWhenRefreshing() {
        assertFalse(
            shouldStartAiQuestionRefresh(
                AiQuestionWidgetState.Message(
                    title = "Title",
                    message = "Message",
                    isRefreshing = true,
                ),
            ),
        )
    }

    @Test
    fun shouldStartAiQuestionRefresh_returnsTrueWhenIdle() {
        assertTrue(
            shouldStartAiQuestionRefresh(
                AiQuestionWidgetState.Message(
                    title = "Title",
                    message = "Message",
                    isRefreshing = false,
                ),
            ),
        )
    }

    private fun testQuestion(
        id: String = "question-1",
        difficulty: String = "medium",
    ): AiGeneratedQuestion = AiGeneratedQuestion(
        id = id,
        topic = "Cardiology",
        difficulty = difficulty,
        stem = "A patient has chest pain. What is the best next step?",
        choices = listOf(
            AiGeneratedChoice("A", "Choice A", "Expl A"),
            AiGeneratedChoice("B", "Choice B", "Expl B"),
            AiGeneratedChoice("C", "Choice C", "Expl C"),
            AiGeneratedChoice("D", "Choice D", "Expl D"),
        ),
        correctKey = "A",
        correctExplanation = "Expl A",
        answerStatus = "correct",
    )
}

private class FakeAiQuestionApiClient(
    private val responses: Map<String, Result<AiGeneratedQuestion>>,
) : AiQuestionApiClient {
    val requestedDifficulties = mutableListOf<String>()
    val submittedAnswers = mutableListOf<Pair<String, Int>>()

    override fun getLatestQuestion(difficulty: String): Result<AiGeneratedQuestion> {
        requestedDifficulties += difficulty
        return responses[difficulty] ?: Result.failure(IllegalStateException("missing difficulty"))
    }

    override fun postAnswer(questionId: String, selectedOptionIndex: Int): Result<Unit> {
        submittedAnswers += questionId to selectedOptionIndex
        return Result.success(Unit)
    }
}

private const val TARGETED_MODE_PLACEHOLDER_MESSAGE_FOR_TEST = "Targeted mode is not available yet."
