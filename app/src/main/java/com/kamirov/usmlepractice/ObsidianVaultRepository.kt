package com.kamirov.usmlepractice

import android.content.ContentResolver
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.util.Log
import androidx.documentfile.provider.DocumentFile
import java.io.IOException
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlin.random.Random

internal class ObsidianVaultRepository(
    private val context: Context,
) {
    private val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    private val contentResolver: ContentResolver = context.contentResolver

    fun hasLinkedVault(): Boolean = prefs.contains(KEY_TREE_URI)

    suspend fun loadRootNotes(): VaultScreenState = withContext(Dispatchers.IO) {
        val uri = getSavedTreeUri()
            ?: return@withContext VaultScreenState.Unlinked

        readRootNotes(uri)
    }

    suspend fun linkVault(uri: Uri): VaultScreenState = withContext(Dispatchers.IO) {
        Log.d(TAG, "Linking Obsidian vault tree uri: $uri")

        try {
            contentResolver.takePersistableUriPermission(
                uri,
                Intent.FLAG_GRANT_READ_URI_PERMISSION,
            )
            Log.d(TAG, "Persistable read permission granted for vault tree uri")
        } catch (e: SecurityException) {
            Log.w(TAG, "Persistable read permission denied for vault tree uri", e)
            return@withContext VaultScreenState.Error(
                message = "Android did not grant persistent read access to that folder. Try selecting the Obsidian vault again.",
                hasLinkedVault = hasLinkedVault(),
            )
        } catch (e: IllegalArgumentException) {
            Log.w(TAG, "Invalid tree uri returned by picker", e)
            return@withContext VaultScreenState.Error(
                message = "That folder could not be linked for persistent read access. Try selecting the Obsidian vault again.",
                hasLinkedVault = hasLinkedVault(),
            )
        } catch (e: RuntimeException) {
            Log.e(TAG, "Unexpected error while linking vault tree uri", e)
            return@withContext VaultScreenState.Error(
                message = "Unexpected error while linking the selected folder. Try selecting the Obsidian vault again.",
                hasLinkedVault = hasLinkedVault(),
            )
        }

        prefs.edit()
            .putString(KEY_TREE_URI, uri.toString())
            .apply()

        readRootNotes(uri)
    }

    suspend fun loadParsedNoteViewData(note: VaultNote): ParsedNoteLoadResult = withContext(Dispatchers.IO) {
        when (val result = readNoteContent(note)) {
            is NoteContentResult.Success -> ParsedNoteLoadResult.Success(
                buildParsedNoteViewData(
                    noteName = result.noteName,
                    rawContent = result.content,
                )
            )

            is NoteContentResult.Error -> ParsedNoteLoadResult.Error(result.message)
        }
    }

    suspend fun loadRandomWidgetState(): WidgetNoteState = withContext(Dispatchers.IO) {
        when (val rootState = loadRootNotes()) {
            VaultScreenState.Unlinked -> WidgetNoteState.Message(
                title = "Vault not linked",
                message = "Open the app and link your Obsidian vault.",
            )

            VaultScreenState.Loading -> WidgetNoteState.Message(
                title = "Loading",
                message = "Loading notes.",
            )

            is VaultScreenState.Error -> WidgetNoteState.Message(
                title = "Could not read vault",
                message = rootState.message,
            )

            is VaultScreenState.Loaded -> {
                if (rootState.notes.isEmpty()) {
                    WidgetNoteState.Message(
                        title = "No notes",
                        message = rootState.emptyMessage ?: "No non-empty root-level Markdown notes were found.",
                    )
                } else {
                    when (val noteResult = loadParsedNoteViewData(rootState.notes.random(Random.Default))) {
                        is ParsedNoteLoadResult.Success -> WidgetNoteState.Note(noteResult.note)
                        is ParsedNoteLoadResult.Error -> WidgetNoteState.Message(
                            title = "Could not open note",
                            message = noteResult.message,
                        )
                    }
                }
            }
        }
    }

    private suspend fun readNoteContent(note: VaultNote): NoteContentResult = withContext(Dispatchers.IO) {
        Log.d(TAG, "Reading note content for ${note.name}")

        try {
            val content = contentResolver.openInputStream(note.uri)?.bufferedReader().use { reader ->
                reader?.readText()
            }

            if (content.isNullOrEmpty()) {
                NoteContentResult.Error("The selected note is empty.")
            } else {
                NoteContentResult.Success(
                    noteName = note.name,
                    content = content,
                )
            }
        } catch (e: SecurityException) {
            Log.w(TAG, "Read access revoked while opening note ${note.name}", e)
            clearInvalidVault("Read access to the saved vault was revoked. Link the Obsidian vault again.")
            NoteContentResult.Error("Read access to the selected note was revoked. Link the Obsidian vault again.")
        } catch (e: IOException) {
            Log.w(TAG, "Unable to read note ${note.name}", e)
            NoteContentResult.Error("Could not read the selected note.")
        } catch (e: RuntimeException) {
            Log.e(TAG, "Unexpected error while reading note ${note.name}", e)
            NoteContentResult.Error("Unexpected error while reading the selected note.")
        }
    }

    private fun getSavedTreeUri(): Uri? =
        prefs.getString(KEY_TREE_URI, null)?.let(Uri::parse)

    private fun readRootNotes(uri: Uri): VaultScreenState {
        Log.d(TAG, "Reading root notes from vault tree uri: $uri")

        try {
            val vaultRoot = DocumentFile.fromTreeUri(context, uri)
                ?: return clearInvalidVault(
                    "The saved vault folder is no longer available. Link the Obsidian vault again."
                )

            val children = try {
                vaultRoot.listFiles().toList()
            } catch (_: SecurityException) {
                return clearInvalidVault(
                    "Read access to the saved vault was revoked. Link the Obsidian vault again."
                )
            }

            if (children.isEmpty()) {
                Log.d(TAG, "Vault root is empty")
                return VaultScreenState.Loaded(
                    notes = emptyList(),
                    emptyMessage = "The selected vault folder is empty.",
                )
            }

            val notes = rootMarkdownNotes(
                children.map { document ->
                    VaultEntryMetadata(
                        name = document.name,
                        uri = document.uri,
                        isFile = document.isFile,
                        sizeInBytes = if (document.isFile) document.length() else null,
                    )
                }
            )

            Log.d(TAG, "Vault root listing completed with ${notes.size} matching Markdown note(s)")

            return if (notes.isEmpty()) {
                VaultScreenState.Loaded(
                    notes = emptyList(),
                    emptyMessage = "No non-empty root-level Markdown notes were found in this vault.",
                )
            } else {
                VaultScreenState.Loaded(notes = notes)
            }
        } catch (e: RuntimeException) {
            Log.e(TAG, "Unexpected error while reading vault tree uri", e)
            return VaultScreenState.Error(
                message = "Unexpected error while reading the selected folder. Try linking the Obsidian vault again.",
                hasLinkedVault = hasLinkedVault(),
            )
        }
    }

    private fun clearInvalidVault(message: String): VaultScreenState {
        prefs.edit().remove(KEY_TREE_URI).apply()
        return VaultScreenState.Error(
            message = message,
            hasLinkedVault = false,
        )
    }

    companion object {
        private const val PREFS_NAME = "obsidian_vault_prefs"
        private const val KEY_TREE_URI = "tree_uri"
        private const val TAG = "ObsidianVaultRepo"
    }
}

internal data class VaultEntryMetadata(
    val name: String?,
    val uri: Uri,
    val isFile: Boolean,
    val sizeInBytes: Long? = null,
)

internal data class VaultNote(
    val name: String,
    val uri: Uri,
)

internal fun rootMarkdownNotes(entries: List<VaultEntryMetadata>): List<VaultNote> =
    entries
        .asSequence()
        .filter { it.isFile }
        .filter { isMarkdownFileName(it.name) }
        .filter { isNonEmptyFile(it.sizeInBytes) }
        .mapNotNull { entry ->
            entry.name?.trim()?.takeIf(String::isNotEmpty)?.let { name ->
                VaultNote(name = name, uri = entry.uri)
            }
        }
        .sortedWith(compareBy(String.CASE_INSENSITIVE_ORDER) { it.name })
        .toList()

internal fun isMarkdownFileName(name: String?): Boolean =
    name?.trim()?.endsWith(".md", ignoreCase = true) == true

internal fun isNonEmptyFile(sizeInBytes: Long?): Boolean =
    sizeInBytes != null && sizeInBytes > 0L

internal sealed interface VaultScreenState {
    data object Loading : VaultScreenState
    data object Unlinked : VaultScreenState
    data class Loaded(
        val notes: List<VaultNote>,
        val emptyMessage: String? = null,
    ) : VaultScreenState

    data class Error(
        val message: String,
        val hasLinkedVault: Boolean,
    ) : VaultScreenState
}

internal sealed interface NoteContentResult {
    data class Success(
        val noteName: String,
        val content: String,
    ) : NoteContentResult

    data class Error(
        val message: String,
    ) : NoteContentResult
}

internal sealed interface ParsedNoteLoadResult {
    data class Success(
        val note: ParsedNoteViewData,
    ) : ParsedNoteLoadResult

    data class Error(
        val message: String,
    ) : ParsedNoteLoadResult
}

internal sealed interface WidgetNoteState {
    data class Note(
        val note: ParsedNoteViewData,
    ) : WidgetNoteState

    data class Message(
        val title: String,
        val message: String,
    ) : WidgetNoteState
}
