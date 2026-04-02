package com.kamirov.usmlepractice

import android.net.Uri
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Test
import org.mockito.Mockito.mock

class AiQuestionEngineTest {
    private val uriCache = mutableMapOf<String, Uri>()

    @Test
    fun parseAiWidgetMode_returnsExpectedModes() {
        assertEquals(AiWidgetMode.TARGETED, parseAiWidgetMode("targeted"))
        assertEquals(AiWidgetMode.EASY, parseAiWidgetMode(" EASY "))
        assertEquals(AiWidgetMode.MEDIUM, parseAiWidgetMode("medium"))
        assertEquals(AiWidgetMode.HARD, parseAiWidgetMode("hard"))
        assertNull(parseAiWidgetMode("missing"))
    }

    @Test
    fun pickDistinctPracticeNotes_avoidsPreviousPathsAndDuplicatesWhenPossible() {
        val notes = listOf(
            VaultNote(name = "Alpha.md", uri = testUri("alpha"), notePathKey = "Deck/Alpha.md"),
            VaultNote(name = "Beta.md", uri = testUri("beta"), notePathKey = "Deck/Beta.md"),
            VaultNote(name = "Gamma.md", uri = testUri("gamma"), notePathKey = "Deck/Gamma.md"),
        )

        val selected = pickDistinctPracticeNotes(
            notes = notes,
            previousPaths = mapOf(
                AiWidgetMode.EASY to "Deck/Alpha.md",
                AiWidgetMode.MEDIUM to "Deck/Beta.md",
                AiWidgetMode.HARD to "Deck/Gamma.md",
            ),
            random = kotlin.random.Random(0),
        )

        assertEquals(3, selected.values.filterNotNull().map { it.notePathKey }.distinct().size)
        assertTrue(selected[AiWidgetMode.EASY]?.notePathKey != "Deck/Alpha.md")
        assertTrue(selected[AiWidgetMode.MEDIUM]?.notePathKey != "Deck/Beta.md")
        assertTrue(selected[AiWidgetMode.HARD]?.notePathKey != "Deck/Gamma.md")
    }

    @Test
    fun pickDistinctPracticeNotes_reusesSingleCandidateAcrossModes() {
        val note = VaultNote(name = "Only.md", uri = testUri("only"), notePathKey = "Deck/Only.md")

        val selected = pickDistinctPracticeNotes(
            notes = listOf(note),
            previousPaths = emptyMap(),
            random = kotlin.random.Random(0),
        )

        assertEquals("Deck/Only.md", selected[AiWidgetMode.EASY]?.notePathKey)
        assertEquals("Deck/Only.md", selected[AiWidgetMode.MEDIUM]?.notePathKey)
        assertEquals("Deck/Only.md", selected[AiWidgetMode.HARD]?.notePathKey)
    }

    @Test
    fun pickWeightedTargetedTopic_prefersAlternativeWhenPreviousCanBeAvoided() {
        val selected = pickWeightedTargetedTopic(
            stats = listOf(
                AiTargetedTopicStat("Cardiology", "Deck/Cardiology.md", "Cardiology.md", 5),
                AiTargetedTopicStat("Renal", "Deck/Renal.md", "Renal.md", 1),
            ),
            previousPathKey = "Deck/Cardiology.md",
            random = kotlin.random.Random(0),
        )

        assertEquals("Deck/Renal.md", selected?.notePathKey)
    }

    @Test
    fun parseAiGeneratedQuestion_returnsStructuredQuestionWhenValid() {
        val question = parseAiGeneratedQuestion(
            """
                {
                  "stem": "A 25-year-old man has chest pain. What is the mechanism?",
                  "choices": [
                    { "key": "A", "text": "Alpha", "explanation": "Wrong A" },
                    { "key": "B", "text": "Beta", "explanation": "Wrong B" },
                    { "key": "C", "text": "Gamma", "explanation": "Wrong C" },
                    { "key": "D", "text": "Delta", "explanation": "Wrong D" },
                    { "key": "E", "text": "Epsilon", "explanation": "Wrong E" }
                  ],
                  "correctKey": "B",
                  "correctExplanation": "Because beta."
                }
            """.trimIndent(),
        )

        assertNotNull(question)
        assertEquals("B", question?.correctKey)
        assertEquals(5, question?.choices?.size)
    }

    @Test
    fun parseAiGeneratedQuestion_rejectsInvalidChoiceSets() {
        assertNull(
            parseAiGeneratedQuestion(
                """
                    {
                      "stem": "Stem",
                      "choices": [
                        { "key": "A", "text": "Alpha", "explanation": "Wrong" },
                        { "key": "A", "text": "Beta", "explanation": "Wrong" }
                      ],
                      "correctKey": "A",
                      "correctExplanation": "Because."
                    }
                """.trimIndent(),
            ),
        )
    }

    @Test
    fun serializeAndParseAiQuestionMistakeStore_roundTripsAndSanitizes() {
        val serialized = serializeAiQuestionMistakeStore(
            AiQuestionMistakeStore(
                recentMistakes = listOf(
                    AiQuestionMistakeRecord(
                        topic = "Cardiology",
                        notePathKey = "Deck/Cardiology.md",
                        noteFile = "Cardiology.md",
                        stem = "Stem",
                        correctKey = "A",
                        selectedKey = "B",
                        difficulty = "medium",
                        createdAt = "2026-04-01T00:00:00Z",
                    ),
                ),
                topicStats = listOf(
                    AiTargetedTopicStat("Cardiology", "Deck/Cardiology.md", "Cardiology.md", 2),
                    AiTargetedTopicStat("Cardiology", "Deck/Cardiology.md", "Cardiology.md", 1),
                ),
            ),
        )

        val parsed = parseAiQuestionMistakeStore(serialized)

        assertEquals(1, parsed.recentMistakes.size)
        assertEquals(1, parsed.topicStats.size)
        assertEquals(3, parsed.topicStats.single().count)
    }

    @Test
    fun serializeAndParseAiQuestionWidgetState_roundTripsLoadedState() {
        val state = AiQuestionWidgetState.Loaded(
            activeMode = AiWidgetMode.MEDIUM,
            modeStates = emptyAiQuestionModeStates().toMutableMap().apply {
                this[AiWidgetMode.MEDIUM] = AiQuestionModeState(
                    context = AiQuestionContext(
                        topic = "Cardiology",
                        notePathKey = "Deck/Cardiology.md",
                        noteFile = "Cardiology.md",
                        noteUriString = "content://cardiology",
                        vaultName = "Vault",
                    ),
                    question = testQuestion(),
                    message = null,
                    selectedKey = "A",
                    isRevealed = true,
                )
            },
            isRefreshing = false,
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

    @Test
    fun answerAiQuestion_recordsWrongAnswer() {
        val target = FakeAiQuestionMistakeMutationTarget()
        val state = AiQuestionWidgetState.Loaded(
            activeMode = AiWidgetMode.EASY,
            modeStates = emptyAiQuestionModeStates().toMutableMap().apply {
                this[AiWidgetMode.EASY] = AiQuestionModeState(
                    context = AiQuestionContext(
                        topic = "Cardiology",
                        notePathKey = "Deck/Cardiology.md",
                        noteFile = "Cardiology.md",
                    ),
                    question = testQuestion(),
                )
            },
        )

        val next = answerAiQuestion(
            state = state,
            mode = AiWidgetMode.EASY,
            selectedKey = "B",
            mistakeRepository = target,
            now = { "2026-04-01T00:00:00Z" },
        )

        assertTrue(next.modeState(AiWidgetMode.EASY).isRevealed)
        assertEquals("B", next.modeState(AiWidgetMode.EASY).selectedKey)
        assertEquals(1, target.recordedWrong.size)
        assertTrue(target.decrementedTopics.isEmpty())
    }

    @Test
    fun answerAiQuestion_decrementsTargetedTopicOnCorrectAnswer() {
        val target = FakeAiQuestionMistakeMutationTarget()
        val state = AiQuestionWidgetState.Loaded(
            activeMode = AiWidgetMode.TARGETED,
            modeStates = emptyAiQuestionModeStates().toMutableMap().apply {
                this[AiWidgetMode.TARGETED] = AiQuestionModeState(
                    context = AiQuestionContext(
                        topic = "Cardiology",
                        notePathKey = "Deck/Cardiology.md",
                        noteFile = "Cardiology.md",
                    ),
                    question = testQuestion(),
                )
            },
        )

        answerAiQuestion(
            state = state,
            mode = AiWidgetMode.TARGETED,
            selectedKey = "A",
            mistakeRepository = target,
            now = { "2026-04-01T00:00:00Z" },
        )

        assertEquals(listOf("Deck/Cardiology.md"), target.decrementedTopics)
        assertTrue(target.recordedWrong.isEmpty())
    }

    private fun testQuestion(): AiGeneratedQuestion = AiGeneratedQuestion(
        stem = "A patient has chest pain. Which mediator is most likely involved?",
        choices = listOf(
            AiGeneratedChoice("A", "Mediator A", "Correct."),
            AiGeneratedChoice("B", "Mediator B", "Wrong B."),
            AiGeneratedChoice("C", "Mediator C", "Wrong C."),
            AiGeneratedChoice("D", "Mediator D", "Wrong D."),
            AiGeneratedChoice("E", "Mediator E", "Wrong E."),
        ),
        correctKey = "A",
        correctExplanation = "Mediator A best matches the vignette.",
    )

    private fun testUri(value: String): Uri = uriCache.getOrPut(value) { mock(Uri::class.java) }
}

private class FakeAiQuestionMistakeMutationTarget : AiQuestionMistakeMutationTarget {
    val recordedWrong = mutableListOf<String>()
    val decrementedTopics = mutableListOf<String>()

    override fun recordWrong(
        context: AiQuestionContext,
        question: AiGeneratedQuestion,
        selectedKey: String,
        difficulty: String,
        createdAt: String,
    ) {
        recordedWrong += "${context.notePathKey}:$selectedKey:$difficulty:$createdAt:${question.correctKey}"
    }

    override fun decrementTopic(notePathKey: String) {
        decrementedTopics += notePathKey
    }
}
