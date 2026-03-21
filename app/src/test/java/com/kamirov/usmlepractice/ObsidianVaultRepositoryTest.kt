package com.kamirov.usmlepractice

import android.net.Uri
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotEquals
import org.junit.Test
import kotlin.random.Random

class ObsidianVaultRepositoryTest {
    @Test
    fun rootMarkdownNotes_includesOnlyNonEmptyRootMarkdownFiles() {
        val entries = listOf(
            VaultEntryMetadata(name = "Alpha.md", uri = testUri("alpha"), isFile = true, sizeInBytes = 12),
            VaultEntryMetadata(name = "Beta.MD", uri = testUri("beta"), isFile = true, sizeInBytes = 1),
            VaultEntryMetadata(name = "folder", uri = testUri("folder"), isFile = false),
            VaultEntryMetadata(name = "image.png", uri = testUri("image"), isFile = true, sizeInBytes = 120),
            VaultEntryMetadata(name = ".obsidian", uri = testUri("obsidian"), isFile = false),
            VaultEntryMetadata(name = "  ", uri = testUri("blank"), isFile = true, sizeInBytes = 10),
            VaultEntryMetadata(name = null, uri = testUri("null"), isFile = true, sizeInBytes = 10),
            VaultEntryMetadata(name = "Empty.md", uri = testUri("empty"), isFile = true, sizeInBytes = 0),
            VaultEntryMetadata(name = "UnknownSize.md", uri = testUri("unknown"), isFile = true, sizeInBytes = null),
        )

        assertEquals(
            listOf(
                VaultNote(name = "Alpha.md", uri = testUri("alpha")),
                VaultNote(name = "Beta.MD", uri = testUri("beta")),
            ),
            rootMarkdownNotes(entries),
        )
    }

    @Test
    fun rootMarkdownNotes_sortsCaseInsensitively() {
        val entries = listOf(
            VaultEntryMetadata(name = "zeta.md", uri = testUri("zeta"), isFile = true, sizeInBytes = 3),
            VaultEntryMetadata(name = "Alpha.md", uri = testUri("alpha"), isFile = true, sizeInBytes = 2),
            VaultEntryMetadata(name = "beta.md", uri = testUri("beta"), isFile = true, sizeInBytes = 1),
        )

        assertEquals(
            listOf(
                VaultNote(name = "Alpha.md", uri = testUri("alpha")),
                VaultNote(name = "beta.md", uri = testUri("beta")),
                VaultNote(name = "zeta.md", uri = testUri("zeta")),
            ),
            rootMarkdownNotes(entries),
        )
    }

    @Test
    fun isNonEmptyFile_requiresPositiveKnownSize() {
        assertEquals(true, isNonEmptyFile(1))
        assertEquals(false, isNonEmptyFile(0))
        assertEquals(false, isNonEmptyFile(null))
    }

    @Test
    fun selectNextWidgetNote_avoidsPreviousNoteWhenAnotherCandidateExists() {
        val notes = listOf(
            VaultNote(name = "Alpha.md", uri = testUri("alpha"), notePathKey = "Deck/Alpha.md"),
            VaultNote(name = "Beta.md", uri = testUri("beta"), notePathKey = "Deck/Beta.md"),
        )

        val selected = selectNextWidgetNote(
            notes = notes,
            previousNotePath = "Deck/Alpha.md",
            random = Random(1),
        )

        assertEquals(notes[1], selected)
    }

    @Test
    fun selectNextWidgetNote_canReusePreviousNoteWhenOnlyCandidateExists() {
        val note = VaultNote(name = "Alpha.md", uri = testUri("alpha"), notePathKey = "Deck/Alpha.md")

        val selected = selectNextWidgetNote(
            notes = listOf(note),
            previousNotePath = "Deck/Alpha.md",
            random = Random(1),
        )

        assertEquals(note, selected)
    }

    @Test
    fun buildWidgetQuestionId_isStableAndDependsOnPath() {
        val first = buildWidgetQuestionId(
            notePathKey = "Deck/Cardio.md",
            question = "What is the diagnosis?",
        )
        val second = buildWidgetQuestionId(
            notePathKey = "Deck/Cardio.md",
            question = "What is the diagnosis?",
        )
        val differentPath = buildWidgetQuestionId(
            notePathKey = "Deck/Neuro.md",
            question = "What is the diagnosis?",
        )

        assertEquals(first, second)
        assertNotEquals(first, differentPath)
    }

    private fun testUri(value: String): Uri = Uri.parse("content://test/$value")
}
