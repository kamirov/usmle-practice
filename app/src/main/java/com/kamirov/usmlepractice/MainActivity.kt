package com.kamirov.usmlepractice

import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts.OpenDocumentTree
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.kamirov.usmlepractice.ui.theme.USMLEPracticeTheme
import kotlinx.coroutines.launch
import kotlin.random.Random

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            USMLEPracticeTheme {
                ObsidianVaultApp()
            }
        }
    }
}

@Composable
private fun ObsidianVaultApp() {
    val appContext = LocalContext.current.applicationContext
    val repository = remember(appContext) { ObsidianVaultRepository(context = appContext) }
    var screenState by remember { mutableStateOf<VaultScreenState>(VaultScreenState.Loading) }
    var selectedNote by remember { mutableStateOf<ParsedNoteViewData?>(null) }
    val scope = rememberCoroutineScope()

    fun reloadNotes() {
        scope.launch {
            screenState = VaultScreenState.Loading
            selectedNote = null
            screenState = repository.loadRootNotes()
        }
    }

    val treePicker = rememberLauncherForActivityResult(OpenDocumentTree()) { uri: Uri? ->
        if (uri == null) {
            if (!repository.hasLinkedVault()) {
                screenState = VaultScreenState.Unlinked
            }
            return@rememberLauncherForActivityResult
        }

        scope.launch {
            screenState = VaultScreenState.Loading
            selectedNote = null
            screenState = repository.linkVault(uri)
        }
    }

    LaunchedEffect(Unit) {
        screenState = repository.loadRootNotes()
    }

    Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
        VaultScreen(
            state = screenState,
            selectedNote = selectedNote,
            contentPadding = innerPadding,
            onLinkVault = { treePicker.launch(null) },
            onChangeVault = {
                selectedNote = null
                treePicker.launch(null)
            },
            onRetry = ::reloadNotes,
            onPickRandomNote = { notes ->
                if (notes.isNotEmpty()) {
                    scope.launch {
                        when (val result = repository.loadParsedNoteViewData(notes.random(Random.Default))) {
                            is ParsedNoteLoadResult.Success -> {
                                selectedNote = result.note
                            }

                            is ParsedNoteLoadResult.Error -> {
                                selectedNote = ParsedNoteViewData(
                                    noteName = "Could not open note",
                                    qaItems = emptyList(),
                                    fallbackMessage = result.message,
                                    rawContent = result.message,
                                )
                            }
                        }
                    }
                }
            },
            onShowList = { selectedNote = null },
        )
    }
}

@Composable
private fun VaultScreen(
    state: VaultScreenState,
    selectedNote: ParsedNoteViewData?,
    contentPadding: PaddingValues,
    onLinkVault: () -> Unit,
    onChangeVault: () -> Unit,
    onRetry: () -> Unit,
    onPickRandomNote: (List<VaultNote>) -> Unit,
    onShowList: () -> Unit,
) {
    when (state) {
        VaultScreenState.Loading -> LoadingState(contentPadding)
        VaultScreenState.Unlinked -> MessageState(
            title = "Link your Obsidian vault",
            message = "Pick the same vault folder Obsidian uses on this Android device. The app can pick a random non-empty root-level Markdown note and show its contents.",
            contentPadding = contentPadding,
            primaryActionLabel = "Link Obsidian vault",
            onPrimaryAction = onLinkVault,
        )

        is VaultScreenState.Error -> MessageState(
            title = "Could not read vault",
            message = state.message,
            contentPadding = contentPadding,
            primaryActionLabel = if (state.hasLinkedVault) "Retry" else "Link Obsidian vault",
            onPrimaryAction = if (state.hasLinkedVault) onRetry else onLinkVault,
            secondaryActionLabel = if (state.hasLinkedVault) "Change vault" else null,
            onSecondaryAction = if (state.hasLinkedVault) onChangeVault else null,
        )

        is VaultScreenState.Loaded -> LoadedState(
            notes = state.notes,
            selectedNote = selectedNote,
            emptyMessage = state.emptyMessage,
            contentPadding = contentPadding,
            onChangeVault = onChangeVault,
            onRefresh = onRetry,
            onPickRandomNote = onPickRandomNote,
            onShowList = onShowList,
        )
    }
}

@Composable
private fun LoadingState(contentPadding: PaddingValues) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .padding(contentPadding),
        contentAlignment = Alignment.Center,
    ) {
        CircularProgressIndicator()
    }
}

@Composable
private fun MessageState(
    title: String,
    message: String,
    contentPadding: PaddingValues,
    primaryActionLabel: String,
    onPrimaryAction: () -> Unit,
    secondaryActionLabel: String? = null,
    onSecondaryAction: (() -> Unit)? = null,
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(contentPadding)
            .padding(24.dp),
        verticalArrangement = Arrangement.Center,
    ) {
        Text(
            text = title,
            style = MaterialTheme.typography.headlineSmall,
            fontWeight = FontWeight.SemiBold,
        )
        Text(
            text = message,
            style = MaterialTheme.typography.bodyLarge,
            modifier = Modifier.padding(top = 12.dp),
        )
        Button(
            onClick = onPrimaryAction,
            modifier = Modifier.padding(top = 24.dp),
        ) {
            Text(primaryActionLabel)
        }
        if (secondaryActionLabel != null && onSecondaryAction != null) {
            Button(
                onClick = onSecondaryAction,
                modifier = Modifier.padding(top = 12.dp),
            ) {
                Text(secondaryActionLabel)
            }
        }
    }
}

@Composable
private fun LoadedState(
    notes: List<VaultNote>,
    selectedNote: ParsedNoteViewData?,
    emptyMessage: String?,
    contentPadding: PaddingValues,
    onChangeVault: () -> Unit,
    onRefresh: () -> Unit,
    onPickRandomNote: (List<VaultNote>) -> Unit,
    onShowList: () -> Unit,
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(contentPadding)
            .padding(horizontal = 20.dp, vertical = 16.dp),
    ) {
        Text(
            text = "Obsidian root notes",
            style = MaterialTheme.typography.headlineSmall,
            fontWeight = FontWeight.SemiBold,
        )
        Text(
            text = selectedNote?.noteName ?: "Pick a random non-empty Markdown note from the vault root.",
            style = MaterialTheme.typography.bodyMedium,
            modifier = Modifier.padding(top = 6.dp),
        )
        Column(
            modifier = Modifier.padding(top = 16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Button(
                onClick = { onPickRandomNote(notes) },
                enabled = notes.isNotEmpty(),
            ) {
                Text("Pick random note")
            }
            Button(onClick = onRefresh) {
                Text("Refresh")
            }
            if (selectedNote != null) {
                Button(onClick = onShowList) {
                    Text("Show note list")
                }
            }
            Button(onClick = onChangeVault) {
                Text("Change vault")
            }
        }

        if (emptyMessage != null) {
            Text(
                text = emptyMessage,
                style = MaterialTheme.typography.bodyLarge,
                modifier = Modifier.padding(top = 24.dp),
            )
        } else if (selectedNote != null) {
            SelectedNoteView(
                selectedNote = selectedNote,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 20.dp),
            )
        } else {
            LazyColumn(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 20.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp),
            ) {
                items(notes, key = { it.uri.toString() }) { note ->
                    Column {
                        Text(
                            text = note.name,
                            style = MaterialTheme.typography.bodyLarge,
                        )
                        HorizontalDivider(modifier = Modifier.padding(top = 8.dp))
                    }
                }
            }
        }
    }
}

@Composable
private fun SelectedNoteView(
    selectedNote: ParsedNoteViewData,
    modifier: Modifier = Modifier,
) {
    if (!selectedNote.hasStructuredQa) {
        Column(modifier = modifier) {
            Text(
                text = selectedNote.fallbackMessage ?: "Could not parse ## Questions and ## Answers into a Q/A view.",
                style = MaterialTheme.typography.bodyMedium,
            )
            Text(
                text = selectedNote.rawContent,
                style = MaterialTheme.typography.bodyLarge,
                modifier = Modifier.padding(top = 12.dp),
            )
        }
        return
    }

    LazyColumn(
        modifier = modifier,
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        itemsIndexed(
            items = selectedNote.qaItems,
            key = { index, item -> "${index}-${item.question}" },
        ) { index, item ->
            Column {
                Text(
                    text = "Question ${index + 1}",
                    style = MaterialTheme.typography.labelLarge,
                    fontWeight = FontWeight.SemiBold,
                )
                Text(
                    text = item.question,
                    style = MaterialTheme.typography.bodyLarge,
                    modifier = Modifier.padding(top = 4.dp),
                )
                Text(
                    text = "Answer",
                    style = MaterialTheme.typography.labelLarge,
                    fontWeight = FontWeight.SemiBold,
                    modifier = Modifier.padding(top = 10.dp),
                )
                Text(
                    text = item.answer.ifBlank { "No answer provided." },
                    style = MaterialTheme.typography.bodyLarge,
                    modifier = Modifier.padding(top = 4.dp),
                )
                HorizontalDivider(modifier = Modifier.padding(top = 16.dp))
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
private fun UnlinkedPreview() {
    USMLEPracticeTheme {
        VaultScreen(
            state = VaultScreenState.Unlinked,
            selectedNote = null,
            contentPadding = PaddingValues(),
            onLinkVault = {},
            onChangeVault = {},
            onRetry = {},
            onPickRandomNote = {},
            onShowList = {},
        )
    }
}

@Preview(showBackground = true)
@Composable
private fun LoadedPreview() {
    USMLEPracticeTheme {
        VaultScreen(
            state = VaultScreenState.Loaded(
                notes = listOf(
                    VaultNote("Cardiology.md", Uri.parse("content://preview/cardiology")),
                    VaultNote("Derm Review.md", Uri.parse("content://preview/derm")),
                    VaultNote("Neuro.md", Uri.parse("content://preview/neuro")),
                ),
            ),
            selectedNote = null,
            contentPadding = PaddingValues(),
            onLinkVault = {},
            onChangeVault = {},
            onRetry = {},
            onPickRandomNote = {},
            onShowList = {},
        )
    }
}
