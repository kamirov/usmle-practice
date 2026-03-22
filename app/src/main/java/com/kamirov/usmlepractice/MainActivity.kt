package com.kamirov.usmlepractice

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CircularProgressIndicator
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
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.kamirov.usmlepractice.ui.theme.USMLEPracticeTheme
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlin.random.Random

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            USMLEPracticeTheme {
                TroubleQuestionApp()
            }
        }
    }
}

@Composable
private fun TroubleQuestionApp() {
    val appContext = androidx.compose.ui.platform.LocalContext.current.applicationContext
    val repository = remember(appContext) { TroubleQuestionRepository(appContext) }
    val scope = rememberCoroutineScope()
    var screenState by remember { mutableStateOf<TroubleQuestionScreenState>(TroubleQuestionScreenState.Loading) }

    fun reload() {
        scope.launch {
            screenState = TroubleQuestionScreenState.Loading
            screenState = withContext(Dispatchers.IO) {
                repository.shuffledItems(Random.Default).toScreenState()
            }
        }
    }

    LaunchedEffect(Unit) {
        reload()
    }

    Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
        TroubleQuestionScreen(
            state = screenState,
            contentPadding = innerPadding,
            onRefresh = ::reload,
        )
    }
}

@Composable
private fun TroubleQuestionScreen(
    state: TroubleQuestionScreenState,
    contentPadding: PaddingValues,
    onRefresh: () -> Unit,
) {
    when (state) {
        TroubleQuestionScreenState.Loading -> LoadingState(contentPadding)
        is TroubleQuestionScreenState.Empty -> MessageState(
            title = state.title,
            message = state.message,
            contentPadding = contentPadding,
            primaryActionLabel = "Refresh",
            onPrimaryAction = onRefresh,
        )

        is TroubleQuestionScreenState.Error -> MessageState(
            title = "Could not load trouble questions",
            message = state.message,
            contentPadding = contentPadding,
            primaryActionLabel = "Refresh",
            onPrimaryAction = onRefresh,
        )

        is TroubleQuestionScreenState.Loaded -> LoadedState(
            items = state.items,
            contentPadding = contentPadding,
            onRefresh = onRefresh,
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
    }
}

@Composable
private fun LoadedState(
    items: List<TroubleQuestionItem>,
    contentPadding: PaddingValues,
    onRefresh: () -> Unit,
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(contentPadding)
            .padding(horizontal = 20.dp, vertical = 16.dp),
    ) {
        Text(
            text = "Trouble questions",
            style = MaterialTheme.typography.headlineSmall,
            fontWeight = FontWeight.SemiBold,
        )
        Text(
            text = "Questions you checked in the widget across your Obsidian notes.",
            style = MaterialTheme.typography.bodyMedium,
            modifier = Modifier.padding(top = 6.dp),
        )
        Button(
            onClick = onRefresh,
            modifier = Modifier.padding(top = 16.dp),
        ) {
            Text("Refresh")
        }

        LazyColumn(
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 20.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            items(items, key = { it.id }) { item ->
                Card(modifier = Modifier.fillMaxWidth()) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(16.dp),
                    ) {
                        if (item.topic.isNotBlank()) {
                            Text(
                                text = item.topic,
                                style = MaterialTheme.typography.labelLarge,
                                fontWeight = FontWeight.SemiBold,
                            )
                        }
                        Text(
                            text = item.question,
                            style = MaterialTheme.typography.bodyLarge,
                            fontWeight = FontWeight.SemiBold,
                            modifier = Modifier.padding(top = 8.dp),
                        )
                        Text(
                            text = item.answer.ifBlank { "No answer provided." },
                            style = MaterialTheme.typography.bodyLarge,
                            modifier = Modifier.padding(top = 10.dp),
                        )
                    }
                }
            }
        }
    }
}

internal sealed interface TroubleQuestionScreenState {
    data object Loading : TroubleQuestionScreenState
    data class Loaded(
        val items: List<TroubleQuestionItem>,
    ) : TroubleQuestionScreenState

    data class Empty(
        val title: String,
        val message: String,
    ) : TroubleQuestionScreenState

    data class Error(
        val message: String,
    ) : TroubleQuestionScreenState
}

internal fun TroubleQuestionLoadResult.toScreenState(): TroubleQuestionScreenState =
    when (this) {
        is TroubleQuestionLoadResult.Error -> TroubleQuestionScreenState.Error(message)
        is TroubleQuestionLoadResult.Success -> {
            if (items.isEmpty()) {
                TroubleQuestionScreenState.Empty(
                    title = "No trouble questions yet",
                    message = "Check a question in the widget and it will appear here.",
                )
            } else {
                TroubleQuestionScreenState.Loaded(items)
            }
        }
    }

@Preview(showBackground = true)
@Composable
private fun EmptyPreview() {
    USMLEPracticeTheme {
        TroubleQuestionScreen(
            state = TroubleQuestionScreenState.Empty(
                title = "No trouble questions yet",
                message = "Check a question in the widget and it will appear here.",
            ),
            contentPadding = PaddingValues(),
            onRefresh = {},
        )
    }
}

@Preview(showBackground = true)
@Composable
private fun LoadedPreview() {
    USMLEPracticeTheme {
        TroubleQuestionScreen(
            state = TroubleQuestionScreenState.Loaded(
                items = listOf(
                    TroubleQuestionItem(
                        id = "1",
                        topic = "Cardiology",
                        question = "Why does troponin stay elevated longer than CK-MB?",
                        answer = "Troponin remains elevated for days after myocardial injury.",
                        notePath = "Medicine/Cardiology.md",
                        noteFile = "Cardiology.md",
                        createdAt = "2026-03-21T10:00:00Z",
                        updatedAt = "2026-03-21T10:00:00Z",
                        timesMarked = 1,
                    )
                ),
            ),
            contentPadding = PaddingValues(),
            onRefresh = {},
        )
    }
}
