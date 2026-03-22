package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

class TroubleQuestionScreenStateTest {
    @Test
    fun toScreenState_returnsEmptyStateWhenNoItemsExist() {
        val state = TroubleQuestionLoadResult.Success(emptyList()).toScreenState()

        assertEquals(
            TroubleQuestionScreenState.Empty(
                title = "No trouble questions yet",
                message = "Check a question in the widget and it will appear here.",
            ),
            state,
        )
    }

    @Test
    fun toScreenState_returnsLoadedStateWhenItemsExist() {
        val items = listOf(
            TroubleQuestionItem(
                id = "1",
                topic = "Cardiology",
                question = "Why does troponin stay elevated?",
                answer = "It persists for days.",
                notePath = "Medicine/Cardiology.md",
                noteFile = "Cardiology.md",
                createdAt = "2026-03-21T12:00:00Z",
                updatedAt = "2026-03-21T12:00:00Z",
                timesMarked = 1,
            )
        )

        val state = TroubleQuestionLoadResult.Success(items).toScreenState()

        assertEquals(TroubleQuestionScreenState.Loaded(items), state)
    }

    @Test
    fun toScreenState_returnsErrorStateWhenLoadFails() {
        val state = TroubleQuestionLoadResult.Error("Trouble-question storage is malformed.")
            .toScreenState()

        assertEquals(
            TroubleQuestionScreenState.Error("Trouble-question storage is malformed."),
            state,
        )
    }

    @Test
    fun displayTopicTitle_removesMarkdownSuffix() {
        assertEquals("Cardiology", "Cardiology.md".displayTopicTitle())
        assertEquals("Neuro", "Neuro.MD".displayTopicTitle())
        assertEquals("GI", "GI".displayTopicTitle())
    }

    @Test
    fun shuffledItems_preservesAllItems() {
        val items = listOf(
            TroubleQuestionItem("1", "T1", "Q1", "A1", "P1", "F1", "C1", "U1", 1),
            TroubleQuestionItem("2", "T2", "Q2", "A2", "P2", "F2", "C2", "U2", 1),
            TroubleQuestionItem("3", "T3", "Q3", "A3", "P3", "F3", "C3", "U3", 1),
        )

        val shuffled = shuffleTroubleQuestionItems(items, kotlin.random.Random(3))

        assertEquals(items.map { it.id }.sorted(), shuffled.map { it.id }.sorted())
        assertTrue(shuffled.isNotEmpty())
    }
}
