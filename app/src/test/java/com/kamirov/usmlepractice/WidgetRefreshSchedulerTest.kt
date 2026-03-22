package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class WidgetRefreshSchedulerTest {
    @Test
    fun nextRefreshElapsedRealtime_addsOneMinuteByDefault() {
        assertEquals(70_000L, nextRefreshElapsedRealtime(nowElapsedRealtime = 10_000L))
    }

    @Test
    fun nextRefreshElapsedRealtime_usesProvidedInterval() {
        assertEquals(
            15_000L,
            nextRefreshElapsedRealtime(
                nowElapsedRealtime = 10_000L,
                refreshIntervalMillis = 5_000L,
            ),
        )
    }

    @Test
    fun hasAnyWidgets_returnsTrueWhenIdsExist() {
        assertTrue(hasAnyWidgets(intArrayOf(3)))
    }

    @Test
    fun hasAnyWidgets_returnsFalseWhenIdsAreEmpty() {
        assertFalse(hasAnyWidgets(intArrayOf()))
    }
}
