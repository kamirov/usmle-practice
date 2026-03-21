package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Test

class ParsedNoteViewDataTest {
    @Test
    fun buildParsedNoteViewData_keepsParsedQaItemsWhenSectionsExist() {
        val content = """
            ## Questions
            1. What is the diagnosis?
            2. What is the next step?

            ## Answers
            1. Acute pericarditis
            2. Start NSAIDs
        """.trimIndent()

        val viewData = buildParsedNoteViewData(
            noteName = "Cardiology.md",
            rawContent = content,
        )

        assertTrue(viewData.hasStructuredQa)
        assertNull(viewData.fallbackMessage)
        assertEquals(
            listOf(
                QaItem("What is the diagnosis?", "Acute pericarditis"),
                QaItem("What is the next step?", "Start NSAIDs"),
            ),
            viewData.qaItems,
        )
        assertEquals(null, viewData.vaultName)
    }

    @Test
    fun buildParsedNoteViewData_handlesMismatchedQuestionAndAnswerCounts() {
        val content = """
            ## Questions
            1. First question
            2. Second question

            ## Answers
            1. First answer
        """.trimIndent()

        val viewData = buildParsedNoteViewData(
            noteName = "Mismatch.md",
            rawContent = content,
        )

        assertEquals(
            listOf(
                QaItem("First question", "First answer"),
                QaItem("Second question", ""),
            ),
            viewData.qaItems,
        )
    }

    @Test
    fun buildParsedNoteViewData_setsFallbackWhenParsingFails() {
        val viewData = buildParsedNoteViewData(
            noteName = "Unstructured.md",
            rawContent = "This note does not contain the expected sections.",
        )

        assertFalse(viewData.hasStructuredQa)
        assertEquals(
            "Could not parse ## Questions and ## Answers into a Q/A view.",
            viewData.fallbackMessage,
        )
        assertTrue(viewData.qaItems.isEmpty())
    }

    @Test
    fun buildParsedNoteViewData_keepsVaultMetadata() {
        val viewData = buildParsedNoteViewData(
            noteName = "Cardiology.md",
            rawContent = """
                ## Questions
                1. Q

                ## Answers
                1. A
            """.trimIndent(),
            noteUriString = "content://test/cardiology",
            notePathKey = "Medicine/Cardiology.md",
            vaultName = "USMLE Vault",
        )

        assertEquals("content://test/cardiology", viewData.noteUriString)
        assertEquals("Medicine/Cardiology.md", viewData.notePathKey)
        assertEquals("USMLE Vault", viewData.vaultName)
    }
}
