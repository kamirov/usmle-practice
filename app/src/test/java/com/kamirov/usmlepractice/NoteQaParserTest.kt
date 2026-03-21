package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class NoteQaParserTest {
    @Test
    fun parseQaItems_pairsQuestionsAndAnswersByIndex() {
        val content = """
            # Title

            ## Questions
            1. What is the diagnosis?
            2. What is the next best step?

            ## Answers
            1. Acute pericarditis
            2. Start NSAIDs
        """.trimIndent()

        assertEquals(
            listOf(
                QaItem(
                    question = "What is the diagnosis?",
                    answer = "Acute pericarditis",
                ),
                QaItem(
                    question = "What is the next best step?",
                    answer = "Start NSAIDs",
                ),
            ),
            parseQaItems(content),
        )
    }

    @Test
    fun parseQaItems_keepsMultilineItems() {
        val content = """
            ## Questions
            1. First line of question
               second line of question

            ## Answers
            1. First line of answer
               second line of answer
        """.trimIndent()

        assertEquals(
            listOf(
                QaItem(
                    question = "First line of question\nsecond line of question",
                    answer = "First line of answer\nsecond line of answer",
                ),
            ),
            parseQaItems(content),
        )
    }

    @Test
    fun parseQaItems_returnsNullWhenRequiredSectionsAreMissing() {
        val content = """
            ## Questions
            1. Only questions here
        """.trimIndent()

        assertNull(parseQaItems(content))
    }
}
