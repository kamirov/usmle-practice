package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Test

class QaAccordionTest {
    @Test
    fun toggleExpandedIndex_expandsCollapsedRow() {
        assertEquals(2, toggleExpandedIndex(currentExpandedIndex = null, tappedIndex = 2))
    }

    @Test
    fun toggleExpandedIndex_collapsesExpandedRow() {
        assertEquals(null, toggleExpandedIndex(currentExpandedIndex = 1, tappedIndex = 1))
    }

    @Test
    fun toggleExpandedIndex_switchesExpandedRow() {
        assertEquals(3, toggleExpandedIndex(currentExpandedIndex = 1, tappedIndex = 3))
    }
}
