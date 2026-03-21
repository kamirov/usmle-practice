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

    fun loadRootNotesSync(): VaultScreenState {
        val uri = getSavedTreeUri() ?: return VaultScreenState.Unlinked
        return readRootNotes(uri)
    }

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

    fun loadParsedNoteViewDataSync(
        note: VaultNote,
        vaultName: String? = null,
    ): ParsedNoteLoadResult =
        when (val result = readNoteContentSync(note)) {
            is NoteContentResult.Success -> ParsedNoteLoadResult.Success(
                buildParsedNoteViewData(
                    noteName = result.noteName,
                    rawContent = result.content,
                    noteUriString = note.uri.toString(),
                    notePathKey = note.notePathKey,
                    vaultName = vaultName,
                )
            )

            is NoteContentResult.Error -> ParsedNoteLoadResult.Error(result.message)
        }

    suspend fun loadParsedNoteViewData(note: VaultNote): ParsedNoteLoadResult = withContext(Dispatchers.IO) {
        loadParsedNoteViewDataSync(note)
    }

    suspend fun loadRandomWidgetState(): WidgetNoteState = withContext(Dispatchers.IO) {
        loadRandomWidgetStateSync()
    }

    fun loadRandomWidgetStateSync(): WidgetNoteState =
        when (val widgetNotesState = loadWidgetNotesSync()) {
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
                message = widgetNotesState.message,
            )

            is VaultScreenState.Loaded -> {
                if (widgetNotesState.notes.isEmpty()) {
                    WidgetNoteState.Message(
                        title = "No notes",
                        message = widgetNotesState.emptyMessage
                            ?: "No parseable Markdown Q/A notes were found in this vault.",
                    )
                } else {
                    val selectedNote = selectNextWidgetNote(
                        notes = widgetNotesState.notes,
                        previousNotePath = WidgetSelectionStore.loadLastNotePath(context),
                        random = Random.Default,
                    )

                    if (selectedNote == null) {
                        WidgetNoteState.Message(
                            title = "No notes",
                            message = "No parseable Markdown Q/A notes were found in this vault.",
                        )
                    } else {
                        when (
                            val noteResult = loadParsedNoteViewDataSync(
                                note = selectedNote,
                                vaultName = loadSavedVaultName(),
                            )
                        ) {
                            is ParsedNoteLoadResult.Success -> {
                                WidgetSelectionStore.saveLastNotePath(context, selectedNote.notePathKey)
                                WidgetNoteState.Note(noteResult.note)
                            }

                            is ParsedNoteLoadResult.Error -> WidgetNoteState.Message(
                                title = "Could not open note",
                                message = noteResult.message,
                            )
                        }
                    }
                }
            }
        }

    fun loadWidgetNotesSync(): VaultScreenState {
        val uri = getSavedTreeUri() ?: return VaultScreenState.Unlinked
        return readWidgetNotes(uri)
    }

    private fun readNoteContentSync(note: VaultNote): NoteContentResult {
        Log.d(TAG, "Reading note content for ${note.name}")

        return try {
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

    private suspend fun readNoteContent(note: VaultNote): NoteContentResult = withContext(Dispatchers.IO) {
        readNoteContentSync(note)
    }

    private fun getSavedTreeUri(): Uri? =
        prefs.getString(KEY_TREE_URI, null)?.let(Uri::parse)

    private fun loadSavedVaultName(): String? =
        getSavedTreeUri()
            ?.let { treeUri -> DocumentFile.fromTreeUri(context, treeUri)?.name }
            ?.trim()
            ?.takeIf(String::isNotEmpty)

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

    private fun readWidgetNotes(uri: Uri): VaultScreenState {
        Log.d(TAG, "Reading recursive widget notes from vault tree uri: $uri")

        try {
            val vaultRoot = DocumentFile.fromTreeUri(context, uri)
                ?: return clearInvalidVault(
                    "The saved vault folder is no longer available. Link the Obsidian vault again."
                )

            val notes = collectWidgetVaultNotes(
                directory = vaultRoot,
                pathSegments = emptyList(),
            )

            return if (notes.isEmpty()) {
                VaultScreenState.Loaded(
                    notes = emptyList(),
                    emptyMessage = "No Markdown notes with balanced ## Questions and ## Answers were found.",
                )
            } else {
                VaultScreenState.Loaded(notes = notes.sortedWith(compareBy(String.CASE_INSENSITIVE_ORDER) { it.name }))
            }
        } catch (e: SecurityException) {
            Log.w(TAG, "Read access revoked while scanning recursive widget notes", e)
            return clearInvalidVault(
                "Read access to the saved vault was revoked. Link the Obsidian vault again."
            )
        } catch (e: RuntimeException) {
            Log.e(TAG, "Unexpected error while scanning recursive widget notes", e)
            return VaultScreenState.Error(
                message = "Unexpected error while reading the selected folder. Try linking the Obsidian vault again.",
                hasLinkedVault = hasLinkedVault(),
            )
        }
    }

    private fun collectWidgetVaultNotes(
        directory: DocumentFile,
        pathSegments: List<String>,
    ): List<VaultNote> {
        val children = directory.listFiles().toList()
        if (children.isEmpty()) {
            return emptyList()
        }

        val notes = mutableListOf<VaultNote>()
        children.forEach { child ->
            val childName = child.name?.trim().orEmpty()
            if (childName.isEmpty()) {
                return@forEach
            }

            if (child.isDirectory) {
                notes += collectWidgetVaultNotes(
                    directory = child,
                    pathSegments = pathSegments + childName,
                )
                return@forEach
            }

            if (!child.isFile || !isMarkdownFileName(childName) || !isNonEmptyFile(child.length())) {
                return@forEach
            }

            val note = VaultNote(
                name = childName,
                uri = child.uri,
                notePathKey = (pathSegments + childName).joinToString("/"),
            )

            when (val result = readNoteContentSync(note)) {
                is NoteContentResult.Success -> {
                    if (parseBalancedQaItems(result.content).isNullOrEmpty()) {
                        return@forEach
                    }

                    notes += note
                }

                is NoteContentResult.Error -> Unit
            }
        }

        return notes
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
    val notePathKey: String = name,
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

internal fun selectNextWidgetNote(
    notes: List<VaultNote>,
    previousNotePath: String?,
    random: Random,
): VaultNote? {
    if (notes.isEmpty()) {
        return null
    }

    val filteredNotes = previousNotePath
        ?.takeIf(String::isNotBlank)
        ?.let { lastPath -> notes.filterNot { it.notePathKey == lastPath } }
        .orEmpty()

    val pool = if (filteredNotes.isNotEmpty()) filteredNotes else notes
    return pool.random(random)
}

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
        val widgetQaItems: List<WidgetQaItem> = note.widgetQaItems(),
        val expandedIndex: Int? = null,
    ) : WidgetNoteState

    data class Message(
        val title: String,
        val message: String,
    ) : WidgetNoteState
}

private object WidgetSelectionStore {
    private const val PREFS_NAME = "random_qa_widget_selection"
    private const val KEY_LAST_NOTE_PATH = "last_note_path"

    fun loadLastNotePath(context: Context): String? =
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .getString(KEY_LAST_NOTE_PATH, null)

    fun saveLastNotePath(context: Context, notePath: String) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .edit()
            .putString(KEY_LAST_NOTE_PATH, notePath)
            .apply()
    }
}
