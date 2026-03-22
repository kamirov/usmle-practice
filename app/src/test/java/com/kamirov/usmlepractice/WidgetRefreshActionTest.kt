package com.kamirov.usmlepractice

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
    }

    @Test
    fun isPerWidgetAction_returnsFalseForUnrelatedActions() {
        assertFalse(isPerWidgetAction("android.intent.action.USER_PRESENT"))
        assertFalse(isPerWidgetAction("android.intent.action.MAIN"))
        assertFalse(isPerWidgetAction(null))
    }
}
