package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class TroubleQuestionStoreTest {
    @Test
    fun loadAll_returnsEmptyWhenStoreIsMissing() {
        val repository = TroubleQuestionRepository(
            storage = FakeTroubleQuestionStorage(),
            clock = { "2026-03-21T12:00:00Z" },
        )

        val result = repository.loadAll()

        assertEquals(
            TroubleQuestionLoadResult.Success(emptyList()),
            result,
        )
    }

    @Test
    fun loadAll_returnsErrorWhenStoredJsonIsMalformed() {
        val repository = TroubleQuestionRepository(
            storage = FakeTroubleQuestionStorage("{not-json"),
        )

        val result = repository.loadAll()

        assertEquals(
            TroubleQuestionLoadResult.Error("Trouble-question storage is malformed."),
            result,
        )
    }

    @Test
    fun parseStore_sanitizesDuplicatesAndInvalidRows() {
        val store = parseTroubleQuestionStore(
            """
                {
                  "version": 1,
                  "items": [
                    { "id": "", "question": "Skip me" },
                    { "id": "q1", "topic": "Cardiology", "question": "Q1", "answer": "A1", "notePath": "Deck/Cardiology.md", "noteFile": "Cardiology.md", "createdAt": "c1", "updatedAt": "u1", "timesMarked": 0 },
                    { "id": "q1", "topic": "Duplicate", "question": "Q2", "answer": "A2", "notePath": "Deck/Other.md", "noteFile": "Other.md", "createdAt": "c2", "updatedAt": "u2", "timesMarked": 3 }
                  ]
                }
            """.trimIndent()
        )

        assertEquals(
            listOf(
                TroubleQuestionItem(
                    id = "q1",
                    topic = "Duplicate",
                    question = "Q2",
                    answer = "A2",
                    notePath = "Deck/Other.md",
                    noteFile = "Other.md",
                    createdAt = "c2",
                    updatedAt = "u2",
                    timesMarked = 3,
                )
            ),
            store.items,
        )
    }

    @Test
    fun toggle_createsFullRecordOnFirstMark() {
        val repository = TroubleQuestionRepository(
            storage = FakeTroubleQuestionStorage(),
            clock = { "2026-03-21T12:00:00Z" },
        )

        val isMarked = repository.toggle(
            noteTitle = "Cardiology.md",
            notePathKey = "Medicine/Cardiology.md",
            item = testWidgetQaItem(),
        )

        assertTrue(isMarked)
        assertEquals(
            TroubleQuestionLoadResult.Success(
                listOf(
                    TroubleQuestionItem(
                        id = "question-1",
                        topic = "Cardiology",
                        question = "What is the diagnosis?",
                        answer = "Acute pericarditis",
                        notePath = "Medicine/Cardiology.md",
                        noteFile = "Cardiology.md",
                        createdAt = "2026-03-21T12:00:00Z",
                        updatedAt = "2026-03-21T12:00:00Z",
                        timesMarked = 1,
                    )
                )
            ),
            repository.loadAll(),
        )
        assertTrue(repository.contains("question-1"))
    }

    @Test
    fun toggle_removesRecordWhenUnmarked() {
        val repository = TroubleQuestionRepository(
            storage = FakeTroubleQuestionStorage(),
            clock = { "2026-03-21T12:00:00Z" },
        )

        repository.toggle(
            noteTitle = "Cardiology.md",
            notePathKey = "Medicine/Cardiology.md",
            item = testWidgetQaItem(),
        )
        val isMarked = repository.toggle(
            noteTitle = "Cardiology.md",
            notePathKey = "Medicine/Cardiology.md",
            item = testWidgetQaItem(),
        )

        assertFalse(isMarked)
        assertEquals(
            TroubleQuestionLoadResult.Success(emptyList()),
            repository.loadAll(),
        )
    }

    @Test
    fun remove_deletesItemById() {
        val repository = TroubleQuestionRepository(
            storage = FakeTroubleQuestionStorage(),
            clock = { "2026-03-21T12:00:00Z" },
        )

        repository.mark(
            noteTitle = "Cardiology.md",
            notePathKey = "Medicine/Cardiology.md",
            item = testWidgetQaItem(),
        )

        assertTrue(repository.remove("question-1"))
        assertEquals(
            TroubleQuestionLoadResult.Success(emptyList()),
            repository.loadAll(),
        )
    }

    @Test
    fun remove_returnsFalseWhenIdDoesNotExist() {
        val repository = TroubleQuestionRepository(
            storage = FakeTroubleQuestionStorage(),
            clock = { "2026-03-21T12:00:00Z" },
        )

        assertFalse(repository.remove("missing"))
    }

    @Test
    fun mark_updatesTimestampAndIncrementsTimesMarkedForExistingItem() {
        val clockValues = ArrayDeque(
            listOf(
                "2026-03-21T12:00:00Z",
                "2026-03-21T13:00:00Z",
            )
        )
        val repository = TroubleQuestionRepository(
            storage = FakeTroubleQuestionStorage(),
            clock = { clockValues.removeFirst() },
        )

        repository.mark(
            noteTitle = "Cardiology.md",
            notePathKey = "Medicine/Cardiology.md",
            item = testWidgetQaItem(),
        )
        repository.mark(
            noteTitle = "Cardiology.md",
            notePathKey = "Medicine/Cardiology.md",
            item = testWidgetQaItem(),
        )

        val result = repository.loadAll() as TroubleQuestionLoadResult.Success
        assertEquals(1, result.items.size)
        assertEquals(2, result.items.single().timesMarked)
        assertEquals("2026-03-21T12:00:00Z", result.items.single().createdAt)
        assertEquals("2026-03-21T13:00:00Z", result.items.single().updatedAt)
    }

    @Test
    fun shuffledItems_usesProvidedRandom() {
        val items = listOf(
            troubleItem(id = "1"),
            troubleItem(id = "2"),
            troubleItem(id = "3"),
        )

        val shuffled = shuffleTroubleQuestionItems(items, kotlin.random.Random(0))

        assertEquals(listOf("2", "3", "1"), shuffled.map { it.id })
    }

    @Test
    fun selectReviewQuestionIds_returnsAllVisibleItems() {
        val selectedIds = selectReviewQuestionIds(
            items = listOf(
                troubleItem(id = "1"),
                troubleItem(id = "2"),
                troubleItem(id = "3"),
                troubleItem(id = "4"),
                troubleItem(id = "5"),
            ),
            random = kotlin.random.Random(1),
        )

        assertEquals(5, selectedIds.size)
    }

    private fun testWidgetQaItem(): WidgetQaItem = WidgetQaItem(
        questionId = "question-1",
        question = "What is the diagnosis?",
        answer = "Acute pericarditis",
    )

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

private class FakeTroubleQuestionStorage(
    private var raw: String? = null,
) : TroubleQuestionStorage {
    override fun read(): String? = raw

    override fun write(value: String) {
        raw = value
    }
}
