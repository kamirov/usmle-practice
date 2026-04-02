package com.kamirov.usmlepractice

import android.content.Context
import android.content.Context.CONNECTIVITY_SERVICE
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
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
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
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
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.foundation.text.KeyboardOptions
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

internal data class OpenAiSettingsUiState(
    val draftKey: String = "",
    val hasSavedKey: Boolean = false,
    val statusMessage: String? = null,
    val isSaving: Boolean = false,
)

internal data class AiDiagnosticsUiState(
    val sessions: List<AiDebugSession> = emptyList(),
)

internal data class NetworkDiagnosticSnapshot(
    val hasActiveNetwork: Boolean,
    val hasInternetCapability: Boolean,
    val isValidated: Boolean,
    val transports: List<String>,
) {
    val wouldAttemptRequests: Boolean
        get() = hasActiveNetwork
}

@Composable
private fun MainApp() {
    val appContext = LocalContext.current.applicationContext
    val vaultRepository = remember(appContext) { ObsidianVaultRepository(appContext) }
    val troubleRepository = remember(appContext) { TroubleQuestionRepository(appContext) }
    val openAiKeyRepository = remember(appContext) { OpenAiKeyRepository(appContext) }
    val aiDebugLogRepository = remember(appContext) { AiDebugLogRepository(appContext) }
    val scope = rememberCoroutineScope()

    var vaultState by remember { mutableStateOf<VaultScreenState>(VaultScreenState.Loading) }
    var troubleState by remember { mutableStateOf<TroubleQuestionScreenState>(TroubleQuestionScreenState.Loading) }
    var networkSnapshot: NetworkDiagnosticSnapshot by remember {
        mutableStateOf(readNetworkDiagnosticSnapshot(appContext))
    }
    var isLinkingVault by remember { mutableStateOf(false) }
    var openAiSettings by remember { mutableStateOf(loadOpenAiSettingsUiState(openAiKeyRepository)) }
    var aiDiagnostics by remember { mutableStateOf(loadAiDiagnosticsUiState(aiDebugLogRepository)) }
    var isRunningAiProbes by remember { mutableStateOf(false) }

    fun reloadVault() {
        scope.launch {
            vaultState = VaultScreenState.Loading
            vaultState = withContext(Dispatchers.IO) {
                vaultRepository.loadRootNotes()
            }
        }
    }

    fun reloadTroubleQuestions() {
        scope.launch {
            troubleState = TroubleQuestionScreenState.Loading
            troubleState = withContext(Dispatchers.IO) {
                troubleRepository.shuffledItems(Random.Default).toScreenState()
            }
        }
    }

    fun reloadOpenAiSettings(clearStatusMessage: Boolean) {
        openAiSettings = loadOpenAiSettingsUiState(openAiKeyRepository).let { base ->
            if (clearStatusMessage) base else base.copy(statusMessage = openAiSettings.statusMessage)
        }
    }

    fun reloadAiDiagnostics() {
        aiDiagnostics = loadAiDiagnosticsUiState(aiDebugLogRepository)
    }

    fun refreshEverything() {
        networkSnapshot = readNetworkDiagnosticSnapshot(appContext)
        reloadVault()
        reloadTroubleQuestions()
        reloadOpenAiSettings(clearStatusMessage = true)
        reloadAiDiagnostics()
    }

    val folderPicker = rememberLauncherForActivityResult(OpenDocumentTree()) { uri: Uri? ->
        if (uri == null) {
            isLinkingVault = false
            return@rememberLauncherForActivityResult
        }

        scope.launch {
            isLinkingVault = true
            vaultState = VaultScreenState.Loading
            vaultState = withContext(Dispatchers.IO) {
                vaultRepository.linkVault(uri)
            }
            isLinkingVault = false
            RandomQaAppWidgetReceiver.requestWidgetRefresh(appContext)
            ReviewQuestionsAppWidgetReceiver.requestWidgetRefresh(appContext)
            AiQuestionAppWidgetReceiver.requestWidgetRefresh(appContext)
        }
    }

    LaunchedEffect(Unit) {
        refreshEverything()
    }

    Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
        MainScreen(
            vaultState = vaultState,
            troubleState = troubleState,
            networkSnapshot = networkSnapshot,
            openAiSettings = openAiSettings,
            aiDiagnostics = aiDiagnostics,
            contentPadding = innerPadding,
            isLinkingVault = isLinkingVault,
            isRunningAiProbes = isRunningAiProbes,
            onPickVault = {
                isLinkingVault = true
                folderPicker.launch(null)
            },
            onReloadVault = ::reloadVault,
            onReloadTroubleQuestions = ::reloadTroubleQuestions,
            onRefreshNetworkDiagnostics = { networkSnapshot = readNetworkDiagnosticSnapshot(appContext) },
            onRefreshAiDiagnostics = ::reloadAiDiagnostics,
            onRunAiNetworkProbes = {
                scope.launch {
                    isRunningAiProbes = true
                    withContext(Dispatchers.IO) {
                        val latestWidgetFailureStatus = aiDebugLogRepository.loadSnapshot().sessions
                            .firstOrNull { session ->
                                !session.sessionId.startsWith("probe-") &&
                                    session.status != "success" &&
                                    session.status != "message_only"
                            }
                            ?.status
                        val logger = AiDebugSessionLogger(
                            repository = aiDebugLogRepository,
                            sessionId = generateAiProbeSessionId(),
                            widgetId = null,
                        )
                        DefaultAiNetworkProber().runProbeSuite(
                            debugLogger = logger,
                            recentWidgetFailureStatus = latestWidgetFailureStatus,
                        )
                    }
                    reloadAiDiagnostics()
                    isRunningAiProbes = false
                }
            },
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
                    AiQuestionAppWidgetReceiver.requestWidgetRefresh(appContext)
                    reloadAiDiagnostics()
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
                    AiQuestionAppWidgetReceiver.requestWidgetRefresh(appContext)
                    reloadAiDiagnostics()
                }
            },
            onRefreshAiWidget = {
                AiQuestionAppWidgetReceiver.requestWidgetRefresh(appContext)
            },
            onClearAiDiagnostics = {
                scope.launch {
                    withContext(Dispatchers.IO) {
                        aiDebugLogRepository.clear()
                    }
                    reloadAiDiagnostics()
                }
            },
        )
    }
}

@Composable
private fun MainScreen(
    vaultState: VaultScreenState,
    troubleState: TroubleQuestionScreenState,
    networkSnapshot: NetworkDiagnosticSnapshot,
    openAiSettings: OpenAiSettingsUiState,
    aiDiagnostics: AiDiagnosticsUiState,
    contentPadding: PaddingValues,
    isLinkingVault: Boolean,
    isRunningAiProbes: Boolean,
    onPickVault: () -> Unit,
    onReloadVault: () -> Unit,
    onReloadTroubleQuestions: () -> Unit,
    onRefreshNetworkDiagnostics: () -> Unit,
    onRefreshAiDiagnostics: () -> Unit,
    onRunAiNetworkProbes: () -> Unit,
    onOpenAiKeyChange: (String) -> Unit,
    onSaveOpenAiKey: () -> Unit,
    onClearOpenAiKey: () -> Unit,
    onRefreshAiWidget: () -> Unit,
    onClearAiDiagnostics: () -> Unit,
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(contentPadding)
            .padding(horizontal = 20.dp, vertical = 16.dp),
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

        item {
            AiDiagnosticsCard(
                state = aiDiagnostics,
                isRunningProbes = isRunningAiProbes,
                onRefresh = onRefreshAiDiagnostics,
                onRunNetworkProbes = onRunAiNetworkProbes,
                onRefreshWidget = onRefreshAiWidget,
                onClearLogs = onClearAiDiagnostics,
            )
        }

        item {
            TroubleQuestionsCard(
                state = troubleState,
                onRefresh = onReloadTroubleQuestions,
            )
        }

        item {
            NetworkDiagnosticsCard(
                snapshot = networkSnapshot,
                onRefresh = onRefreshNetworkDiagnostics,
            )
        }
    }
}

@Composable
private fun AiDiagnosticsCard(
    state: AiDiagnosticsUiState,
    isRunningProbes: Boolean,
    onRefresh: () -> Unit,
    onRunNetworkProbes: () -> Unit,
    onRefreshWidget: () -> Unit,
    onClearLogs: () -> Unit,
) {
    val latestProbeSummary = state.sessions.firstNotNullOfOrNull(::summarizeAiNetworkProbeSession)

    Card(modifier = Modifier.fillMaxWidth()) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
        ) {
            Text(
                text = "AI diagnostics",
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.SemiBold,
            )
            Text(
                text = "Redacted request traces for the AI widget. Match widget failures using the request id shown in the widget message.",
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(top = 8.dp),
            )
            Row(
                modifier = Modifier.padding(top = 16.dp),
                horizontalArrangement = Arrangement.spacedBy(10.dp),
            ) {
                OutlinedButton(onClick = onRefresh) {
                    Text("Refresh logs")
                }
                OutlinedButton(
                    onClick = onRunNetworkProbes,
                    enabled = !isRunningProbes,
                ) {
                    Text(if (isRunningProbes) "Running probes..." else "Run network probes")
                }
                OutlinedButton(onClick = onRefreshWidget) {
                    Text("Refresh widget")
                }
                OutlinedButton(
                    onClick = onClearLogs,
                    enabled = state.sessions.isNotEmpty(),
                ) {
                    Text("Clear logs")
                }
            }

            latestProbeSummary?.let { summary ->
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(top = 16.dp),
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(14.dp),
                    ) {
                        Text(
                            text = "Latest probe suite ${summary.sessionId}",
                            style = MaterialTheme.typography.labelLarge,
                            fontWeight = FontWeight.SemiBold,
                        )
                        Text(
                            text = "Classification: ${summary.classification}",
                            style = MaterialTheme.typography.bodyMedium,
                            modifier = Modifier.padding(top = 6.dp),
                        )
                        Text(
                            text = summary.interpretation,
                            style = MaterialTheme.typography.bodyMedium,
                            modifier = Modifier.padding(top = 6.dp),
                        )
                        summary.recentWidgetFailureStatus?.let { status ->
                            Text(
                                text = "Latest widget failure status when probes ran: $status",
                                style = MaterialTheme.typography.bodyMedium,
                                modifier = Modifier.padding(top = 6.dp),
                            )
                        }
                        summary.lines.forEach { line ->
                            Text(
                                text = line,
                                style = MaterialTheme.typography.bodySmall,
                                modifier = Modifier.padding(top = 8.dp),
                            )
                        }
                    }
                }
            }

            if (state.sessions.isEmpty()) {
                Text(
                    text = "No AI widget request logs yet.",
                    style = MaterialTheme.typography.bodyMedium,
                    modifier = Modifier.padding(top = 16.dp),
                )
            } else {
                state.sessions.take(3).forEach { session ->
                    Card(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(top = 14.dp),
                    ) {
                        Column(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(14.dp),
                        ) {
                            Text(
                                text = "Request ${session.sessionId}",
                                style = MaterialTheme.typography.labelLarge,
                                fontWeight = FontWeight.SemiBold,
                            )
                            Text(
                                text = "Status: ${session.status}",
                                style = MaterialTheme.typography.bodyMedium,
                                modifier = Modifier.padding(top = 6.dp),
                            )
                            Text(
                                text = "Widget: ${session.widgetId ?: "none"}  Mode: ${session.latestMode ?: "none"}  Topic: ${session.latestTopic ?: "none"}",
                                style = MaterialTheme.typography.bodyMedium,
                                modifier = Modifier.padding(top = 4.dp),
                            )
                            Text(
                                text = "Started: ${session.startedAt}",
                                style = MaterialTheme.typography.bodyMedium,
                                modifier = Modifier.padding(top = 4.dp),
                            )
                            session.endedAt?.let { endedAt ->
                                Text(
                                    text = "Ended: $endedAt",
                                    style = MaterialTheme.typography.bodyMedium,
                                    modifier = Modifier.padding(top = 2.dp),
                                )
                            }
                            session.entries.takeLast(20).forEach { entry ->
                                Text(
                                    text = buildString {
                                        append("[${entry.elapsedMs}ms] ")
                                        append(entry.stage)
                                        append(" - ")
                                        append(entry.message)
                                        if (entry.fields.isNotEmpty()) {
                                            append(" {")
                                            append(entry.fields.entries.joinToString(", ") { (key, value) -> "$key=$value" })
                                            append("}")
                                        }
                                    },
                                    style = MaterialTheme.typography.bodySmall,
                                    modifier = Modifier.padding(top = 8.dp),
                                )
                                entry.stackTrace?.let { stack ->
                                    Text(
                                        text = stack,
                                        style = MaterialTheme.typography.bodySmall,
                                        modifier = Modifier.padding(top = 4.dp),
                                    )
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
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(top = 18.dp),
                    contentAlignment = Alignment.CenterStart,
                ) {
                    CircularProgressIndicator()
                }
            }

            when (state) {
                VaultScreenState.Loading,
                VaultScreenState.Unlinked -> Unit

                is VaultScreenState.Error -> {
                    Text(
                        text = state.message,
                        style = MaterialTheme.typography.bodyMedium,
                        modifier = Modifier.padding(top = 16.dp),
                    )
                }

                is VaultScreenState.Loaded -> {
                    Text(
                        text = "Root-level markdown notes: ${state.notes.size}",
                        style = MaterialTheme.typography.labelLarge,
                        fontWeight = FontWeight.SemiBold,
                        modifier = Modifier.padding(top = 18.dp),
                    )
                    if (state.notes.isEmpty()) {
                        Text(
                            text = state.emptyMessage ?: "No root-level markdown notes found.",
                            style = MaterialTheme.typography.bodyMedium,
                            modifier = Modifier.padding(top = 8.dp),
                        )
                    } else {
                        state.notes.take(8).forEach { note ->
                            Text(
                                text = "\u2022 ${note.name}",
                                style = MaterialTheme.typography.bodyMedium,
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
                text = "Key status: ${if (state.hasSavedKey) "Saved" else "Not set"}",
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(top = 8.dp),
            )
            Text(
                text = "The key is stored locally on this device and used by the AI USMLE widget.",
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(top = 6.dp),
            )
            OutlinedTextField(
                value = state.draftKey,
                onValueChange = onKeyChange,
                label = { Text("API key") },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 16.dp),
                singleLine = true,
                visualTransformation = PasswordVisualTransformation(),
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
                enabled = !state.isSaving,
            )
            Row(
                modifier = Modifier.padding(top = 16.dp),
                horizontalArrangement = Arrangement.spacedBy(10.dp),
            ) {
                Button(
                    onClick = onSave,
                    enabled = !state.isSaving && state.draftKey.trim().isNotEmpty(),
                ) {
                    Text(if (state.isSaving) "Saving..." else "Save")
                }
                OutlinedButton(
                    onClick = onClear,
                    enabled = !state.isSaving && state.hasSavedKey,
                ) {
                    Text("Clear")
                }
            }

            state.statusMessage?.let { message ->
                Text(
                    text = message,
                    style = MaterialTheme.typography.bodyMedium,
                    modifier = Modifier.padding(top = 12.dp),
                )
            }
        }
    }
}

@Composable
private fun TroubleQuestionsCard(
    state: TroubleQuestionScreenState,
    onRefresh: () -> Unit,
) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
        ) {
            Text(
                text = "Trouble questions",
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.SemiBold,
            )
            Text(
                text = "Questions you checked in the widget across your Obsidian notes.",
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(top = 8.dp),
            )
            OutlinedButton(
                onClick = onRefresh,
                modifier = Modifier.padding(top = 16.dp),
            ) {
                Text("Refresh")
            }

            when (state) {
                TroubleQuestionScreenState.Loading -> {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(top = 18.dp),
                        contentAlignment = Alignment.CenterStart,
                    ) {
                        CircularProgressIndicator()
                    }
                }

                is TroubleQuestionScreenState.Empty -> {
                    Text(
                        text = state.message,
                        style = MaterialTheme.typography.bodyMedium,
                        modifier = Modifier.padding(top = 16.dp),
                    )
                }

                is TroubleQuestionScreenState.Error -> {
                    Text(
                        text = state.message,
                        style = MaterialTheme.typography.bodyMedium,
                        modifier = Modifier.padding(top = 16.dp),
                    )
                }

                is TroubleQuestionScreenState.Loaded -> {
                    if (state.items.isEmpty()) {
                        Text(
                            text = "No trouble questions yet.",
                            style = MaterialTheme.typography.bodyMedium,
                            modifier = Modifier.padding(top = 16.dp),
                        )
                    } else {
                        state.items.forEach { item ->
                            Card(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .padding(top = 12.dp),
                            ) {
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
        }
    }
}

@Composable
private fun NetworkDiagnosticsCard(
    snapshot: NetworkDiagnosticSnapshot,
    onRefresh: () -> Unit,
) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
        ) {
            Text(
                text = "Network diagnostics",
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.SemiBold,
            )
            Text(
                text = "This is informational only. The AI widget still attempts requests when an active network is present.",
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(top = 8.dp),
            )
            Text(
                text = formatNetworkDiagnosticSummary(snapshot),
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(top = 12.dp),
            )
            Text(
                text = describeNetworkGuidance(snapshot),
                style = MaterialTheme.typography.bodyMedium,
                modifier = Modifier.padding(top = 12.dp),
            )
            OutlinedButton(
                onClick = onRefresh,
                modifier = Modifier.padding(top = 16.dp),
            ) {
                Text("Refresh")
            }
        }
    }
}

private fun loadOpenAiSettingsUiState(repository: OpenAiKeyAccess): OpenAiSettingsUiState =
    OpenAiSettingsUiState(
        draftKey = "",
        hasSavedKey = repository.hasKey(),
        statusMessage = null,
        isSaving = false,
    )

private fun loadAiDiagnosticsUiState(repository: AiDebugLogRepository): AiDiagnosticsUiState =
    AiDiagnosticsUiState(
        sessions = repository.loadSnapshot().sessions,
    )

private fun readNetworkDiagnosticSnapshot(context: Context): NetworkDiagnosticSnapshot {
    val connectivityManager = context.getSystemService(CONNECTIVITY_SERVICE) as? ConnectivityManager
        ?: return NetworkDiagnosticSnapshot(
            hasActiveNetwork = false,
            hasInternetCapability = false,
            isValidated = false,
            transports = emptyList(),
        )
    val activeNetwork = connectivityManager.activeNetwork
        ?: return NetworkDiagnosticSnapshot(
            hasActiveNetwork = false,
            hasInternetCapability = false,
            isValidated = false,
            transports = emptyList(),
        )
    val capabilities = connectivityManager.getNetworkCapabilities(activeNetwork)
        ?: return NetworkDiagnosticSnapshot(
            hasActiveNetwork = true,
            hasInternetCapability = false,
            isValidated = false,
            transports = emptyList(),
        )

    val transports = buildList {
        if (capabilities.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)) add("WIFI")
        if (capabilities.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR)) add("CELLULAR")
        if (capabilities.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET)) add("ETHERNET")
        if (capabilities.hasTransport(NetworkCapabilities.TRANSPORT_VPN)) add("VPN")
        if (capabilities.hasTransport(NetworkCapabilities.TRANSPORT_BLUETOOTH)) add("BLUETOOTH")
        if (isEmpty()) add("OTHER")
    }

    return NetworkDiagnosticSnapshot(
        hasActiveNetwork = true,
        hasInternetCapability = capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET),
        isValidated = capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED),
        transports = transports,
    )
}

private fun formatNetworkDiagnosticSummary(snapshot: NetworkDiagnosticSnapshot): String = buildString {
    append("Active network: ").append(if (snapshot.hasActiveNetwork) "yes" else "no")
    append("\nTransports: ").append(snapshot.transports.ifEmpty { listOf("none") }.joinToString(", "))
    append("\nInternet capability: ").append(if (snapshot.hasInternetCapability) "yes" else "no")
    append("\nValidated: ").append(if (snapshot.isValidated) "yes" else "no")
    append("\nAI widget would attempt request: ").append(if (snapshot.wouldAttemptRequests) "yes" else "no")
}

private fun describeNetworkGuidance(snapshot: NetworkDiagnosticSnapshot): String =
    when {
        !snapshot.hasActiveNetwork -> "No active network detected."
        snapshot.hasActiveNetwork && !snapshot.hasInternetCapability -> {
            "Active network present, but Android does not report internet capability."
        }

        snapshot.hasActiveNetwork && snapshot.hasInternetCapability && !snapshot.isValidated -> {
            "Android marks this network as unvalidated, but the AI widget still attempts requests."
        }

        else -> "Android reports an active, internet-capable, validated network."
    }

private fun vaultSummaryText(state: VaultScreenState): String =
    when (state) {
        VaultScreenState.Loading -> "Loading vault status."
        VaultScreenState.Unlinked -> "No Obsidian vault linked yet."
        is VaultScreenState.Error -> state.message
        is VaultScreenState.Loaded -> state.emptyMessage
            ?: "Vault linked and ready."
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
private fun MainScreenPreview() {
    MaterialTheme {
        MainScreen(
            vaultState = VaultScreenState.Loaded(
                notes = listOf(
                    VaultNote(name = "Cardiology.md", uri = Uri.EMPTY),
                    VaultNote(name = "Renal.md", uri = Uri.EMPTY),
                ),
            ),
            troubleState = TroubleQuestionScreenState.Loaded(
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
                    ),
                ),
            ),
            networkSnapshot = NetworkDiagnosticSnapshot(
                hasActiveNetwork = true,
                hasInternetCapability = true,
                isValidated = true,
                transports = listOf("WIFI"),
            ),
            openAiSettings = OpenAiSettingsUiState(hasSavedKey = true),
            aiDiagnostics = AiDiagnosticsUiState(
                sessions = listOf(
                    AiDebugSession(
                        sessionId = "probe-1234",
                        startedAt = "2026-04-02T12:01:00Z",
                        endedAt = "2026-04-02T12:01:03Z",
                        status = "host_specific_dns_failure",
                        entries = listOf(
                            AiDebugLogEntry(
                                timestamp = "2026-04-02T12:01:01Z",
                                stage = "probe_dns_result",
                                message = "DNS probe completed",
                                elapsedMs = 30L,
                                fields = mapOf(
                                    "host" to "api.openai.com",
                                    "status" to "FAIL",
                                    "details" to "Unable to resolve host",
                                ),
                            ),
                            AiDebugLogEntry(
                                timestamp = "2026-04-02T12:01:02Z",
                                stage = "probe_dns_result",
                                message = "DNS probe completed",
                                elapsedMs = 45L,
                                fields = mapOf(
                                    "host" to "openai.com",
                                    "status" to "PASS",
                                    "addresses" to "104.18.33.45",
                                ),
                            ),
                            AiDebugLogEntry(
                                timestamp = "2026-04-02T12:01:03Z",
                                stage = "probe_suite_complete",
                                message = "Completed manual probe suite",
                                elapsedMs = 3000L,
                                fields = mapOf(
                                    "classification" to "host_specific_dns_failure",
                                    "interpretation" to "DNS failing only for api.openai.com.",
                                    "recentWidgetFailureStatus" to "unknown_host",
                                ),
                            ),
                        ),
                    ),
                    AiDebugSession(
                        sessionId = "ai-1234",
                        widgetId = 42,
                        startedAt = "2026-04-02T12:00:00Z",
                        endedAt = "2026-04-02T12:00:02Z",
                        status = "socket_exception",
                        latestMode = "easy",
                        latestTopic = "Cardiology",
                        entries = listOf(
                            AiDebugLogEntry(
                                timestamp = "2026-04-02T12:00:00Z",
                                stage = "connection_open_start",
                                message = "Opening HttpURLConnection",
                                elapsedMs = 15L,
                                fields = mapOf("host" to "api.openai.com"),
                            ),
                        ),
                    ),
                ),
            ),
            contentPadding = PaddingValues(),
            isLinkingVault = false,
            isRunningAiProbes = false,
            onPickVault = {},
            onReloadVault = {},
            onReloadTroubleQuestions = {},
            onRefreshNetworkDiagnostics = {},
            onRefreshAiDiagnostics = {},
            onRunAiNetworkProbes = {},
            onOpenAiKeyChange = {},
            onSaveOpenAiKey = {},
            onClearOpenAiKey = {},
            onRefreshAiWidget = {},
            onClearAiDiagnostics = {},
        )
    }
}
