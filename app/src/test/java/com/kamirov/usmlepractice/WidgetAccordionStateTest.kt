package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Test

class WidgetAccordionStateTest {
    @Test
    fun widgetToggle_expandsCollapsedRow() {
        assertEquals(1, toggleExpandedIndex(currentExpandedIndex = null, tappedIndex = 1))
    }

    @Test
    fun widgetToggle_collapsesExpandedRow() {
        assertEquals(null, toggleExpandedIndex(currentExpandedIndex = 2, tappedIndex = 2))
    }

    @Test
    fun widgetToggle_switchesExpandedRow() {
        assertEquals(4, toggleExpandedIndex(currentExpandedIndex = 0, tappedIndex = 4))
    }
}
