package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class WidgetRefreshActionTest {
    @Test
    fun isPerWidgetAction_returnsTrueForRefreshAction() {
        assertTrue(isPerWidgetAction(RandomQaAppWidgetReceiver.ACTION_REFRESH_NOTE))
    }

    @Test
    fun isPerWidgetAction_returnsTrueForExistingWidgetInteractions() {
        assertTrue(isPerWidgetAction(RandomQaAppWidgetReceiver.ACTION_TOGGLE_QUESTION))
        assertTrue(isPerWidgetAction(RandomQaAppWidgetReceiver.ACTION_TOGGLE_DIFFICULT))
        assertTrue(isPerWidgetAction(RandomQaAppWidgetReceiver.ACTION_OPEN_NOTE))
        assertTrue(isPerWidgetAction(RandomQaAppWidgetReceiver.ACTION_OPEN_TOPIC_CHATGPT))
        assertTrue(isPerWidgetAction(RandomQaAppWidgetReceiver.ACTION_OPEN_ROW_CHATGPT))
        assertTrue(isPerWidgetAction(ReviewQuestionsAppWidgetReceiver.ACTION_REFRESH_REVIEW_QUESTIONS))
        assertTrue(isPerWidgetAction(ReviewQuestionsAppWidgetReceiver.ACTION_TOGGLE_REVIEW_ANSWER))
        assertTrue(isPerWidgetAction(ReviewQuestionsAppWidgetReceiver.ACTION_REMOVE_REVIEW_QUESTION))
    }

    @Test
    fun isPerWidgetAction_returnsFalseForUnrelatedActions() {
        assertFalse(isPerWidgetAction("android.intent.action.USER_PRESENT"))
        assertFalse(isPerWidgetAction("android.intent.action.MAIN"))
        assertFalse(isPerWidgetAction(null))
    }

    @Test
    fun shouldStartRefresh_returnsTrueForIdleNoteState() {
        assertTrue(shouldStartRefresh(testNoteState(isRefreshing = false)))
    }

    @Test
    fun shouldStartRefresh_returnsFalseWhenAlreadyRefreshing() {
        assertFalse(shouldStartRefresh(testNoteState(isRefreshing = true)))
    }

    @Test
    fun noteTitleForDisplay_returnsRefreshingTitleWhenRefreshing() {
        assertEquals(
            "Refreshing...",
            noteTitleForDisplay(testNoteState(isRefreshing = true)),
        )
    }

    @Test
    fun noteTitleForDisplay_returnsDisplayTitleWhenIdle() {
        assertEquals(
            "Cardiology",
            noteTitleForDisplay(testNoteState(isRefreshing = false)),
        )
    }

    private fun testNoteState(isRefreshing: Boolean): WidgetNoteState.Note =
        WidgetNoteState.Note(
            note = buildParsedNoteViewData(
                noteName = "Cardiology.md",
                rawContent = "## Questions\n- What?\n\n## Answers\n- Answer.",
            ),
            isRefreshing = isRefreshing,
        )
}
