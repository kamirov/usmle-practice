package com.kamirov.usmlepractice

import android.net.Uri
import org.junit.Assert.assertEquals
import org.junit.Test

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

    private fun testUri(value: String): Uri = Uri.parse("content://test/$value")
}
