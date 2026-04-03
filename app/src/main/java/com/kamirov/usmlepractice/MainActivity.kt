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
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Tab
import androidx.compose.material3.TabRow
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
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlin.random.Random

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MaterialTheme {
                MainApp()
            }
        }
    }
}

private enum class AppTab(val title: String) {
    RANDOM("Random Q&A"),
    REVIEW("Review Questions"),
    AI("AI Question"),
    SETTINGS("Settings"),
}

internal data class OpenAiSettingsUiState(
    val draftKey: String = "",
    val hasSavedKey: Boolean = false,
    val statusMessage: String? = null,
    val isSaving: Boolean = false,
)

@Composable
private fun MainApp() {
    val appContext = LocalContext.current.applicationContext
    val vaultRepository = remember(appContext) { ObsidianVaultRepository(appContext) }
    val openAiKeyRepository = remember(appContext) { OpenAiKeyRepository(appContext) }
    val randomRepository = remember(appContext) { RandomQaSnapshotRepository(appContext) }
    val reviewRepository = remember(appContext) { ReviewQuestionsSnapshotRepository(appContext) }
    val aiRepository = remember(appContext) { AiQuestionSnapshotRepository(appContext) }
    val scope = rememberCoroutineScope()

    var selectedTab by remember { mutableStateOf(AppTab.RANDOM) }
    var vaultState by remember { mutableStateOf<VaultScreenState>(VaultScreenState.Loading) }
    var randomState by remember { mutableStateOf<WidgetNoteState?>(null) }
    var reviewState by remember { mutableStateOf<ReviewQuestionsWidgetState?>(null) }
    var aiState by remember { mutableStateOf<AiQuestionWidgetState?>(null) }
    var isLinkingVault by remember { mutableStateOf(false) }
    var openAiSettings by remember { mutableStateOf(loadOpenAiSettingsUiState(openAiKeyRepository)) }

    fun reloadVault() {
        scope.launch {
            vaultState = VaultScreenState.Loading
            vaultState = withContext(Dispatchers.IO) { vaultRepository.loadRootNotes() }
        }
    }

    fun loadRandomSnapshot(refresh: Boolean) {
        scope.launch {
            if (refresh) {
                val current = randomState
                randomState = when (current) {
                    is WidgetNoteState.Note -> current.copy(isRefreshing = true)
                    is WidgetNoteState.Message -> current.copy(isRefreshing = true)
                    null -> WidgetNoteState.Message(
                        title = RANDOM_QA_WIDGET_TITLE,
                        message = "Refreshing...",
                        isRefreshing = true,
                    )
                }
            }
            val next = withContext(Dispatchers.IO) {
                if (refresh) randomRepository.refresh() else randomRepository.loadOrRefresh()
            }
            randomState = next
            RandomQaAppWidgetReceiver.rerenderWidgets(appContext)
        }
    }

    fun loadReviewSnapshot(refresh: Boolean) {
        scope.launch {
            if (refresh) {
                val current = reviewState
                reviewState = when (current) {
                    is ReviewQuestionsWidgetState.Loaded -> current.copy(isRefreshing = true)
                    is ReviewQuestionsWidgetState.Message -> current.copy(isRefreshing = true)
                    null -> ReviewQuestionsWidgetState.Message(
                        title = REVIEW_QUESTIONS_TITLE,
                        message = "Refreshing...",
                        isRefreshing = true,
                    )
                }
            }
            val next = withContext(Dispatchers.IO) {
                if (refresh) reviewRepository.refresh(Random.Default) else reviewRepository.loadOrRefresh(Random.Default)
            }
            reviewState = next
            ReviewQuestionsAppWidgetReceiver.rerenderWidgets(appContext)
        }
    }

    fun loadAiSnapshot(refresh: Boolean) {
        scope.launch {
            if (refresh) {
                val current = aiState
                aiState = when (current) {
                    is AiQuestionWidgetState.Loaded -> current.copy(isRefreshing = true)
                    is AiQuestionWidgetState.Message -> current.copy(isRefreshing = true)
                    null -> AiQuestionWidgetState.Message(
                        title = AI_QUESTION_WIDGET_TITLE,
                        message = "Generating questions...",
                        isRefreshing = true,
                    )
                }
            }
            val next = withContext(Dispatchers.IO) {
                if (refresh) aiRepository.refresh(Random.Default) else aiRepository.loadOrRefresh(Random.Default)
            }
            aiState = next
            AiQuestionAppWidgetReceiver.rerenderWidgets(appContext)
        }
    }

    fun reloadOpenAiSettings(clearStatusMessage: Boolean) {
        openAiSettings = loadOpenAiSettingsUiState(openAiKeyRepository).let { base ->
            if (clearStatusMessage) base else base.copy(statusMessage = openAiSettings.statusMessage)
        }
    }

    val folderPicker = rememberLauncherForActivityResult(OpenDocumentTree()) { uri: Uri? ->
        if (uri == null) {
            isLinkingVault = false
            return@rememberLauncherForActivityResult
        }

        scope.launch {
            isLinkingVault = true
            vaultState = VaultScreenState.Loading
            vaultState = withContext(Dispatchers.IO) { vaultRepository.linkVault(uri) }
            isLinkingVault = false
            loadRandomSnapshot(refresh = true)
            loadReviewSnapshot(refresh = true)
            loadAiSnapshot(refresh = true)
        }
    }

    LaunchedEffect(Unit) {
        reloadVault()
        reloadOpenAiSettings(clearStatusMessage = true)
        loadRandomSnapshot(refresh = false)
        loadReviewSnapshot(refresh = false)
        loadAiSnapshot(refresh = false)
    }

    Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding),
        ) {
            TabRow(selectedTabIndex = selectedTab.ordinal) {
                AppTab.entries.forEach { tab ->
                    Tab(
                        selected = selectedTab == tab,
                        onClick = { selectedTab = tab },
                        text = { Text(tab.title) },
                    )
                }
            }

            when (selectedTab) {
                AppTab.RANDOM -> RandomQaTab(
                    state = randomState,
                    onRefresh = { loadRandomSnapshot(refresh = true) },
                    onToggleExpanded = { index ->
                        scope.launch {
                            randomState = withContext(Dispatchers.IO) {
                                randomRepository.toggleExpanded(index)
                            } ?: randomState
                            RandomQaAppWidgetReceiver.rerenderWidgets(appContext)
                        }
                    },
                    onToggleDifficult = { index ->
                        scope.launch {
                            randomState = withContext(Dispatchers.IO) {
                                randomRepository.toggleDifficult(index)
                            } ?: randomState
                            reviewState = withContext(Dispatchers.IO) {
                                reviewRepository.refresh(Random.Default)
                            }
                            RandomQaAppWidgetReceiver.rerenderWidgets(appContext)
                            ReviewQuestionsAppWidgetReceiver.rerenderWidgets(appContext)
                        }
                    },
                    onOpenNote = {
                        val note = (randomState as? WidgetNoteState.Note)?.note ?: return@RandomQaTab
                        launchIntent(
                            appContext,
                            WidgetLaunchers.buildObsidianIntent(
                                context = appContext,
                                vaultName = note.vaultName,
                                notePathKey = note.notePathKey,
                                noteUriString = note.noteUriString,
                            ),
                        )
                    },
                    onOpenTopicChatGpt = {
                        val note = (randomState as? WidgetNoteState.Note)?.note ?: return@RandomQaTab
                        launchIntent(
                            appContext,
                            WidgetLaunchers.buildChatGptIntent(
                                context = appContext,
                                prompt = "Tell me about ${note.noteName.displayTopicTitle()}. I'm studying for USMLE Step 1, so keep things relevant.",
                            ),
                        )
                    },
                    onOpenRowChatGpt = { index ->
                        val noteState = randomState as? WidgetNoteState.Note ?: return@RandomQaTab
                        val item = noteState.widgetQaItems.getOrNull(index) ?: return@RandomQaTab
                        launchIntent(
                            appContext,
                            WidgetLaunchers.buildChatGptIntent(
                                context = appContext,
                                prompt = "(${noteState.note.noteName.displayTopicTitle()}) ${item.question}. Please include detail appropriate for studying USMLE Step 1.",
                            ),
                        )
                    },
                    onOpenRowBrowser = { index ->
                        val noteState = randomState as? WidgetNoteState.Note ?: return@RandomQaTab
                        val item = noteState.widgetQaItems.getOrNull(index) ?: return@RandomQaTab
                        launchIntent(
                            appContext,
                            WidgetLaunchers.buildGoogleSearchIntent(
                                context = appContext,
                                query = item.question,
                            ),
                        )
                    },
                )

                AppTab.REVIEW -> ReviewQuestionsTab(
                    state = reviewState,
                    items = orderedReviewItemsForCurrentSnapshot(appContext, reviewState ?: ReviewQuestionsWidgetState.Message("", "")),
                    onRefresh = { loadReviewSnapshot(refresh = true) },
                    onToggleExpanded = { index ->
                        scope.launch {
                            reviewState = withContext(Dispatchers.IO) {
                                reviewRepository.toggleExpanded(index)
                            } ?: reviewState
                            ReviewQuestionsAppWidgetReceiver.rerenderWidgets(appContext)
                        }
                    },
                    onRemove = { index ->
                        scope.launch {
                            reviewState = withContext(Dispatchers.IO) {
                                reviewRepository.remove(index)
                            } ?: reviewState
                            ReviewQuestionsAppWidgetReceiver.rerenderWidgets(appContext)
                        }
                    },
                    onOpenBrowser = { index ->
                        val items = orderedReviewItemsForCurrentSnapshot(appContext, reviewState ?: return@ReviewQuestionsTab)
                        val item = items.getOrNull(index) ?: return@ReviewQuestionsTab
                        launchIntent(
                            appContext,
                            WidgetLaunchers.buildGoogleSearchIntent(
                                context = appContext,
                                query = item.question,
                            ),
                        )
                    },
                )

                AppTab.AI -> AiQuestionTab(
                    state = aiState,
                    onRefresh = { loadAiSnapshot(refresh = true) },
                    onSelectMode = { mode ->
                        scope.launch {
                            aiState = withContext(Dispatchers.IO) {
                                aiRepository.selectMode(mode)
                            } ?: aiState
                            AiQuestionAppWidgetReceiver.rerenderWidgets(appContext)
                        }
                    },
                    onSelectAnswer = { key ->
                        scope.launch {
                            aiState = withContext(Dispatchers.IO) {
                                aiRepository.answer(key)
                            } ?: aiState
                            AiQuestionAppWidgetReceiver.rerenderWidgets(appContext)
                        }
                    },
                    onOpenTopic = {
                        val loaded = aiState as? AiQuestionWidgetState.Loaded ?: return@AiQuestionTab
                        val modeState = loaded.modeState(loaded.activeMode)
                        val context = modeState.context ?: return@AiQuestionTab
                        if (!modeState.isRevealed) return@AiQuestionTab
                        launchIntent(
                            appContext,
                            WidgetLaunchers.buildObsidianIntent(
                                context = appContext,
                                vaultName = context.vaultName,
                                notePathKey = context.notePathKey,
                                noteUriString = context.noteUriString,
                            ),
                        )
                    },
                    onOpenChatGpt = {
                        launchIntent(
                            appContext,
                            WidgetLaunchers.buildChatGptIntent(
                                context = appContext,
                                prompt = buildAiQuestionAppChatGptPrompt(aiState),
                            ),
                        )
                    },
                )

                AppTab.SETTINGS -> SettingsTab(
                    vaultState = vaultState,
                    openAiSettings = openAiSettings,
                    isLinkingVault = isLinkingVault,
                    onPickVault = {
                        isLinkingVault = true
                        folderPicker.launch(null)
                    },
                    onReloadVault = ::reloadVault,
                    onOpenAiKeyChange = { value ->
                        openAiSettings = openAiSettings.copy(
                            draftKey = value,
                            statusMessage = null,
                        )
                    },
                    onSaveOpenAiKey = {
                        val keyToSave = openAiSettings.draftKey
                        scope.launch {
                            openAiSettings = openAiSettings.copy(isSaving = true, statusMessage = null)
                            withContext(Dispatchers.IO) {
                                openAiKeyRepository.saveKey(keyToSave)
                            }
                            openAiSettings = loadOpenAiSettingsUiState(openAiKeyRepository).copy(
                                statusMessage = "Key saved.",
                                isSaving = false,
                            )
                            loadAiSnapshot(refresh = true)
                        }
                    },
                    onClearOpenAiKey = {
                        scope.launch {
                            openAiSettings = openAiSettings.copy(isSaving = true, statusMessage = null)
                            withContext(Dispatchers.IO) {
                                openAiKeyRepository.clearKey()
                            }
                            openAiSettings = loadOpenAiSettingsUiState(openAiKeyRepository).copy(
                                statusMessage = "Key cleared.",
                                isSaving = false,
                            )
                            loadAiSnapshot(refresh = true)
                        }
                    },
                )
            }
        }
    }
}

@Composable
private fun RandomQaTab(
    state: WidgetNoteState?,
    onRefresh: () -> Unit,
    onToggleExpanded: (Int) -> Unit,
    onToggleDifficult: (Int) -> Unit,
    onOpenNote: () -> Unit,
    onOpenTopicChatGpt: () -> Unit,
    onOpenRowChatGpt: (Int) -> Unit,
    onOpenRowBrowser: (Int) -> Unit,
) {
    when (state) {
        null -> LoadingScreen()
        is WidgetNoteState.Message -> MessageScreen(
            title = state.title,
            message = state.message,
            isRefreshing = state.isRefreshing,
            onRefresh = onRefresh,
        )
        is WidgetNoteState.Note -> LazyColumn(
            modifier = Modifier.fillMaxSize().padding(horizontal = 20.dp, vertical = 16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            item {
                HeaderCard(
                    title = state.note.noteName.displayTopicTitle(),
                    subtitle = if (state.isRefreshing) "Refreshing..." else "Random Q&A snapshot",
                    onPrimary = onRefresh,
                    primaryLabel = "Refresh",
                    onSecondary = onOpenNote,
                    secondaryLabel = "Open note",
                    onTertiary = onOpenTopicChatGpt,
                    tertiaryLabel = "Ask GPT",
                )
            }
            itemsIndexed(state.note.accordionRows(state.expandedIndex)) { index, row ->
                AccordionRowCard(
                    index = index,
                    question = row.item.question,
                    answer = row.item.answer,
                    isExpanded = row.isExpanded,
                    onToggle = { onToggleExpanded(index) },
                    onMark = { onToggleDifficult(index) },
                    onAsk = { onOpenRowChatGpt(index) },
                    onSearch = { onOpenRowBrowser(index) },
                )
            }
        }
    }
}

@Composable
private fun ReviewQuestionsTab(
    state: ReviewQuestionsWidgetState?,
    items: List<TroubleQuestionItem>,
    onRefresh: () -> Unit,
    onToggleExpanded: (Int) -> Unit,
    onRemove: (Int) -> Unit,
    onOpenBrowser: (Int) -> Unit,
) {
    when (state) {
        null -> LoadingScreen()
        is ReviewQuestionsWidgetState.Message -> MessageScreen(
            title = state.title,
            message = state.message,
            isRefreshing = state.isRefreshing,
            onRefresh = onRefresh,
        )
        is ReviewQuestionsWidgetState.Loaded -> LazyColumn(
            modifier = Modifier.fillMaxSize().padding(horizontal = 20.dp, vertical = 16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            item {
                HeaderCard(
                    title = REVIEW_QUESTIONS_TITLE,
                    subtitle = if (state.isRefreshing) "Refreshing..." else "${items.size} item(s)",
                    onPrimary = onRefresh,
                    primaryLabel = "Refresh",
                )
            }
            itemsIndexed(items) { index, item ->
                ReviewQuestionCard(
                    item = item,
                    isExpanded = state.expandedItemId == item.id,
                    onToggle = { onToggleExpanded(index) },
                    onRemove = { onRemove(index) },
                    onSearch = { onOpenBrowser(index) },
                )
            }
        }
    }
}

@Composable
private fun AiQuestionTab(
    state: AiQuestionWidgetState?,
    onRefresh: () -> Unit,
    onSelectMode: (AiWidgetMode) -> Unit,
    onSelectAnswer: (String) -> Unit,
    onOpenTopic: () -> Unit,
    onOpenChatGpt: () -> Unit,
) {
    when (state) {
        null -> LoadingScreen()
        is AiQuestionWidgetState.Message -> MessageScreen(
            title = state.title,
            message = state.message,
            isRefreshing = state.isRefreshing,
            onRefresh = onRefresh,
        )
        is AiQuestionWidgetState.Loaded -> {
            val modeState = state.modeState(state.activeMode)
            LazyColumn(
                modifier = Modifier.fillMaxSize().padding(horizontal = 20.dp, vertical = 16.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp),
            ) {
                item {
                    HeaderCard(
                        title = AI_QUESTION_WIDGET_TITLE,
                        subtitle = modeState.context?.topic ?: state.activeMode.title,
                        onPrimary = onRefresh,
                        primaryLabel = "Refresh",
                        onSecondary = onOpenChatGpt,
                        secondaryLabel = "Ask GPT",
                        onTertiary = if (modeState.isRevealed && modeState.context != null) onOpenTopic else null,
                        tertiaryLabel = if (modeState.isRevealed && modeState.context != null) "Open topic" else null,
                    )
                }
                item {
                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        AiWidgetMode.refreshableModes.forEach { mode ->
                            OutlinedButton(onClick = { onSelectMode(mode) }) {
                                Text(if (state.activeMode == mode) "[${mode.title}]" else mode.title)
                            }
                        }
                    }
                }
                if (modeState.question == null) {
                    item {
                        Card(modifier = Modifier.fillMaxWidth()) {
                            Text(
                                text = modeState.message ?: "Question not generated yet.",
                                modifier = Modifier.padding(16.dp),
                            )
                        }
                    }
                } else {
                    item {
                        Card(modifier = Modifier.fillMaxWidth()) {
                            Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                                Text(modeState.question.stem)
                                modeState.question.choices.forEach { choice ->
                                    val choiceLabel = "${choice.key}. ${choice.text}"
                                    val suffix = if (modeState.isRevealed) "\n${choice.explanation}" else ""
                                    OutlinedButton(
                                        onClick = { onSelectAnswer(choice.key) },
                                        enabled = !modeState.isRevealed,
                                        modifier = Modifier.fillMaxWidth(),
                                    ) {
                                        Text(choiceLabel + suffix)
                                    }
                                }
                                if (modeState.isRevealed) {
                                    Text("Correct answer: ${modeState.question.correctKey}. ${modeState.question.correctExplanation}")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun SettingsTab(
    vaultState: VaultScreenState,
    openAiSettings: OpenAiSettingsUiState,
    isLinkingVault: Boolean,
    onPickVault: () -> Unit,
    onReloadVault: () -> Unit,
    onOpenAiKeyChange: (String) -> Unit,
    onSaveOpenAiKey: () -> Unit,
    onClearOpenAiKey: () -> Unit,
) {
    LazyColumn(
        modifier = Modifier.fillMaxSize().padding(horizontal = 20.dp, vertical = 16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        item {
            VaultCard(
                state = vaultState,
                isLinkingVault = isLinkingVault,
                onPickVault = onPickVault,
                onReloadVault = onReloadVault,
            )
        }
        item {
            OpenAiCard(
                state = openAiSettings,
                onKeyChange = onOpenAiKeyChange,
                onSave = onSaveOpenAiKey,
                onClear = onClearOpenAiKey,
            )
        }
    }
}

@Composable
private fun HeaderCard(
    title: String,
    subtitle: String? = null,
    onPrimary: (() -> Unit)? = null,
    primaryLabel: String? = null,
    onSecondary: (() -> Unit)? = null,
    secondaryLabel: String? = null,
    onTertiary: (() -> Unit)? = null,
    tertiaryLabel: String? = null,
) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(modifier = Modifier.fillMaxWidth().padding(16.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
            Text(title, style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.SemiBold)
            if (!subtitle.isNullOrBlank()) {
                Text(subtitle, style = MaterialTheme.typography.bodyMedium)
            }
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                if (onPrimary != null && !primaryLabel.isNullOrBlank()) {
                    Button(onClick = onPrimary) { Text(primaryLabel) }
                }
                if (onSecondary != null && !secondaryLabel.isNullOrBlank()) {
                    OutlinedButton(onClick = onSecondary) { Text(secondaryLabel) }
                }
                if (onTertiary != null && !tertiaryLabel.isNullOrBlank()) {
                    OutlinedButton(onClick = onTertiary) { Text(tertiaryLabel) }
                }
            }
        }
    }
}

@Composable
private fun AccordionRowCard(
    index: Int,
    question: String,
    answer: String,
    isExpanded: Boolean,
    onToggle: () -> Unit,
    onMark: () -> Unit,
    onAsk: () -> Unit,
    onSearch: () -> Unit,
) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Text("${index + 1}. $question")
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                Button(onClick = onToggle) { Text(if (isExpanded) "Hide answer" else "Show answer") }
                OutlinedButton(onClick = onMark) { Text("Toggle review") }
                OutlinedButton(onClick = onAsk) { Text("Ask GPT") }
                OutlinedButton(onClick = onSearch) { Text("Search") }
            }
            if (isExpanded) {
                Text(answer.ifBlank { "No answer provided." })
            }
        }
    }
}

@Composable
private fun ReviewQuestionCard(
    item: TroubleQuestionItem,
    isExpanded: Boolean,
    onToggle: () -> Unit,
    onRemove: () -> Unit,
    onSearch: () -> Unit,
) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Text(item.topic, fontWeight = FontWeight.SemiBold)
            Text(item.question)
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                Button(onClick = onToggle) { Text(if (isExpanded) "Hide answer" else "Show answer") }
                OutlinedButton(onClick = onRemove) { Text("Remove") }
                OutlinedButton(onClick = onSearch) { Text("Search") }
            }
            if (isExpanded) {
                Text(item.answer.ifBlank { "No answer provided." })
            }
        }
    }
}

@Composable
private fun MessageScreen(
    title: String,
    message: String,
    isRefreshing: Boolean,
    onRefresh: () -> Unit,
) {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Card(modifier = Modifier.padding(20.dp)) {
            Column(
                modifier = Modifier.padding(20.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
            ) {
                Text(title, style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.SemiBold)
                Text(message)
                if (isRefreshing) {
                    CircularProgressIndicator()
                } else {
                    Button(onClick = onRefresh) { Text("Refresh") }
                }
            }
        }
    }
}

@Composable
private fun LoadingScreen() {
    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        CircularProgressIndicator()
    }
}

@Composable
private fun VaultCard(
    state: VaultScreenState,
    isLinkingVault: Boolean,
    onPickVault: () -> Unit,
    onReloadVault: () -> Unit,
) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
        ) {
            Text(
                text = "Obsidian vault",
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.SemiBold,
            )
            Text(
                text = vaultSummaryText(state),
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(top = 8.dp),
            )

            Row(
                modifier = Modifier.padding(top = 16.dp),
                horizontalArrangement = Arrangement.spacedBy(10.dp),
            ) {
                Button(
                    onClick = onPickVault,
                    enabled = !isLinkingVault,
                ) {
                    Text(if (state is VaultScreenState.Unlinked) "Choose folder" else "Relink folder")
                }

                OutlinedButton(
                    onClick = onReloadVault,
                    enabled = !isLinkingVault && state !is VaultScreenState.Unlinked,
                ) {
                    Text("Refresh")
                }
            }

            if (isLinkingVault || state is VaultScreenState.Loading) {
                Row(
                    modifier = Modifier.padding(top = 16.dp),
                    horizontalArrangement = Arrangement.spacedBy(10.dp),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    CircularProgressIndicator()
                    Text("Checking vault access…")
                }
            }

            when (state) {
                VaultScreenState.Loading,
                VaultScreenState.Unlinked -> Unit

                is VaultScreenState.Error -> {
                    Text(
                        text = state.message,
                        modifier = Modifier.padding(top = 16.dp),
                        color = MaterialTheme.colorScheme.error,
                    )
                }

                is VaultScreenState.Loaded -> {
                    if (state.notes.isNotEmpty()) {
                        Text(
                            text = "Root notes preview",
                            modifier = Modifier.padding(top = 18.dp),
                            fontWeight = FontWeight.SemiBold,
                        )
                        state.notes.take(8).forEach { note ->
                            Text(
                                text = "\u2022 ${note.name}",
                                modifier = Modifier.padding(top = 6.dp),
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun OpenAiCard(
    state: OpenAiSettingsUiState,
    onKeyChange: (String) -> Unit,
    onSave: () -> Unit,
    onClear: () -> Unit,
) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
        ) {
            Text(
                text = "OpenAI",
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.SemiBold,
            )
            Text(
                text = if (state.hasSavedKey) "Saved locally on this device." else "Not set.",
                modifier = Modifier.padding(top = 8.dp),
            )
            Text(
                text = "This key is used by the AI widget and the in-app AI question tab.",
                modifier = Modifier.padding(top = 6.dp),
                style = MaterialTheme.typography.bodyMedium,
            )

            OutlinedTextField(
                value = state.draftKey,
                onValueChange = onKeyChange,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 16.dp),
                label = { Text("API key") },
                singleLine = true,
                visualTransformation = PasswordVisualTransformation(),
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
            )

            Row(
                modifier = Modifier.padding(top = 16.dp),
                horizontalArrangement = Arrangement.spacedBy(10.dp),
            ) {
                Button(
                    onClick = onSave,
                    enabled = !state.isSaving && state.draftKey.isNotBlank(),
                ) {
                    Text("Save")
                }
                OutlinedButton(
                    onClick = onClear,
                    enabled = !state.isSaving && state.hasSavedKey,
                ) {
                    Text("Clear")
                }
            }

            if (state.isSaving) {
                CircularProgressIndicator(modifier = Modifier.padding(top = 16.dp))
            }

            state.statusMessage?.let { status ->
                Text(
                    text = status,
                    modifier = Modifier.padding(top = 16.dp),
                    color = MaterialTheme.colorScheme.primary,
                )
            }
        }
    }
}

private fun loadOpenAiSettingsUiState(
    repository: OpenAiKeyAccess,
): OpenAiSettingsUiState = OpenAiSettingsUiState(
    hasSavedKey = repository.hasKey(),
)

private fun vaultSummaryText(state: VaultScreenState): String =
    when (state) {
        VaultScreenState.Loading -> "Loading vault status."
        VaultScreenState.Unlinked -> "No Obsidian vault linked yet."
        is VaultScreenState.Error -> state.message
        is VaultScreenState.Loaded -> state.emptyMessage ?: "Vault linked and ready."
    }

private fun buildAiQuestionAppChatGptPrompt(
    state: AiQuestionWidgetState?,
): String = when (state) {
    null -> "Tell me about USMLE Step 1 high-yield topics from first principles."
    is AiQuestionWidgetState.Message -> state.message
    is AiQuestionWidgetState.Loaded -> {
        val modeState = state.modeState(state.activeMode)
        val topic = modeState.context?.topic ?: "USMLE Step 1 topic"
        val question = modeState.question
        if (question == null) {
            "Tell me about $topic. Assume I know nothing and explain it at a USMLE Step 1 level."
        } else {
            buildString {
                append("Topic: ").append(topic).append("\n\n")
                append("Question: ").append(question.stem).append("\n\n")
                question.choices.forEach { choice ->
                    append(choice.key).append(". ").append(choice.text).append('\n')
                }
                append("\nCorrect answer: ").append(question.correctKey).append('\n')
                append("Official explanation: ").append(question.correctExplanation).append("\n\n")
                append("Request: Explain this from first principles, define the key terms, explain why the right answer is correct, and why the wrong answers are tempting but wrong.")
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
private fun MainScreenPreview() {
    MaterialTheme {
        SettingsTab(
            vaultState = VaultScreenState.Loaded(
                notes = listOf(
                    VaultNote(name = "Cardiology.md", uri = Uri.EMPTY),
                    VaultNote(name = "Renal.md", uri = Uri.EMPTY),
                ),
            ),
            openAiSettings = OpenAiSettingsUiState(hasSavedKey = true),
            isLinkingVault = false,
            onPickVault = {},
            onReloadVault = {},
            onOpenAiKeyChange = {},
            onSaveOpenAiKey = {},
            onClearOpenAiKey = {},
        )
    }
}
