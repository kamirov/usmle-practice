package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Test
import kotlin.random.Random

class ReviewQuestionsWidgetTest {
    @Test
    fun toggleExpandedReviewItemId_expandsCollapsedItem() {
        assertEquals("q1", toggleExpandedReviewItemId(currentExpandedItemId = null, tappedItemId = "q1"))
    }

    @Test
    fun toggleExpandedReviewItemId_collapsesExpandedItem() {
        assertNull(toggleExpandedReviewItemId(currentExpandedItemId = "q1", tappedItemId = "q1"))
    }

    @Test
    fun toggleExpandedReviewItemId_switchesExpandedItem() {
        assertEquals("q2", toggleExpandedReviewItemId(currentExpandedItemId = "q1", tappedItemId = "q2"))
    }

    @Test
    fun shouldStartReviewRefresh_returnsTrueWhenIdle() {
        assertTrue(
            shouldStartReviewRefresh(
                ReviewQuestionsWidgetState.Loaded(
                    visibleIds = listOf("q1"),
                    isRefreshing = false,
                )
            )
        )
    }

    @Test
    fun shouldStartReviewRefresh_returnsFalseWhenRefreshing() {
        assertFalse(
            shouldStartReviewRefresh(
                ReviewQuestionsWidgetState.Loaded(
                    visibleIds = listOf("q1"),
                    isRefreshing = true,
                )
            )
        )
    }

    @Test
    fun toRefreshingState_marksLoadedStateRefreshing() {
        val state = ReviewQuestionsWidgetState.Loaded(visibleIds = listOf("q1")).toRefreshingState()

        assertEquals(
            ReviewQuestionsWidgetState.Loaded(
                visibleIds = listOf("q1"),
                expandedItemId = null,
                isRefreshing = true,
            ),
            state,
        )
    }

    @Test
    fun orderedReviewItems_preservesVisibleIdOrderAndSkipsMissingItems() {
        val ordered = orderedReviewItems(
            items = listOf(
                troubleItem(id = "q1"),
                troubleItem(id = "q2"),
                troubleItem(id = "q3"),
            ),
            visibleIds = listOf("q3", "missing", "q1"),
        )

        assertEquals(listOf("q3", "q1"), ordered.map { it.id })
    }

    @Test
    fun reviewQuestionItemId_isStableForSameItem() {
        val item = troubleItem(id = "q1")

        assertEquals(reviewQuestionItemId(item), reviewQuestionItemId(item.copy()))
    }

    @Test
    fun selectReviewQuestionIds_returnsAllItemsWithoutCap() {
        val ids = selectReviewQuestionIds(
            items = listOf(
                troubleItem(id = "q1"),
                troubleItem(id = "q2"),
                troubleItem(id = "q3"),
                troubleItem(id = "q4"),
                troubleItem(id = "q5"),
            ),
            random = Random(0),
        )

        assertEquals(5, ids.size)
        assertTrue(ids.containsAll(listOf("q1", "q2", "q3", "q4", "q5")))
    }

    private fun troubleItem(id: String): TroubleQuestionItem = TroubleQuestionItem(
        id = id,
        topic = "Topic $id",
        question = "Question $id",
        answer = "Answer $id",
        notePath = "Deck/$id.md",
        noteFile = "$id.md",
        createdAt = "created-$id",
        updatedAt = "updated-$id",
        timesMarked = 1,
    )
}
