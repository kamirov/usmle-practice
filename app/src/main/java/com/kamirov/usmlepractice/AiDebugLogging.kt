package com.kamirov.usmlepractice

import android.content.Context
import android.util.Log
import java.io.PrintWriter
import java.io.StringWriter
import java.time.Instant
import kotlin.random.Random
import org.json.JSONArray
import org.json.JSONObject

internal data class AiDebugLogEntry(
    val timestamp: String,
    val stage: String,
    val message: String,
    val elapsedMs: Long,
    val fields: Map<String, String> = emptyMap(),
    val stackTrace: String? = null,
)

internal data class AiDebugSession(
    val sessionId: String,
    val widgetId: Int? = null,
    val startedAt: String,
    val endedAt: String? = null,
    val status: String = "running",
    val latestMode: String? = null,
    val latestTopic: String? = null,
    val entries: List<AiDebugLogEntry> = emptyList(),
)

internal data class AiDebugSnapshot(
    val sessions: List<AiDebugSession> = emptyList(),
)

internal interface AiDebugLogStorage {
    fun read(): String?

    fun write(value: String)

    fun clear()
}

internal class SharedPrefsAiDebugLogStorage(
    context: Context,
) : AiDebugLogStorage {
    private val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)

    override fun read(): String? = prefs.getString(KEY_SNAPSHOT, null)

    override fun write(value: String) {
        prefs.edit()
            .putString(KEY_SNAPSHOT, value)
            .apply()
    }

    override fun clear() {
        prefs.edit()
            .remove(KEY_SNAPSHOT)
            .apply()
    }

    private companion object {
        private const val PREFS_NAME = "ai_debug_logs"
        private const val KEY_SNAPSHOT = "snapshot_json"
    }
}

internal class AiDebugLogRepository(
    private val storage: AiDebugLogStorage,
) {
    constructor(context: Context) : this(
        storage = SharedPrefsAiDebugLogStorage(context),
    )

    fun loadSnapshot(): AiDebugSnapshot = storage.read()
        ?.let(::parseAiDebugSnapshot)
        ?: AiDebugSnapshot()

    fun clear() {
        storage.clear()
    }

    fun upsertSession(session: AiDebugSession) {
        val current = loadSnapshot()
        val merged = buildList {
            add(session)
            current.sessions
                .filterNot { it.sessionId == session.sessionId }
                .forEach { add(it) }
        }
        storage.write(serializeAiDebugSnapshot(trimAiDebugSnapshot(AiDebugSnapshot(merged))))
    }
}

internal interface AiDebugLogger {
    val sessionId: String

    fun logEvent(
        stage: String,
        message: String,
        mode: AiWidgetMode? = null,
        topic: String? = null,
        fields: Map<String, String> = emptyMap(),
    )

    fun logFailure(
        stage: String,
        throwable: Throwable,
        mode: AiWidgetMode? = null,
        topic: String? = null,
        fields: Map<String, String> = emptyMap(),
    )

    fun complete(
        status: String,
        mode: AiWidgetMode? = null,
        topic: String? = null,
        fields: Map<String, String> = emptyMap(),
    )
}

internal class AiDebugSessionLogger(
    private val repository: AiDebugLogRepository,
    override val sessionId: String,
    private val widgetId: Int?,
    private val nowMs: () -> Long = { System.currentTimeMillis() },
    private val nowIso: () -> String = { Instant.now().toString() },
) : AiDebugLogger {
    private val startedAtMs = nowMs()
    private var session = AiDebugSession(
        sessionId = sessionId,
        widgetId = widgetId,
        startedAt = nowIso(),
        status = "running",
    )

    init {
        persist()
    }

    @Synchronized
    override fun logEvent(
        stage: String,
        message: String,
        mode: AiWidgetMode?,
        topic: String?,
        fields: Map<String, String>,
    ) {
        val elapsedMs = nowMs() - startedAtMs
        val entry = AiDebugLogEntry(
            timestamp = nowIso(),
            stage = stage,
            message = message,
            elapsedMs = elapsedMs,
            fields = redactDebugFields(fields),
        )
        session = session.copy(
            latestMode = mode?.wireValue ?: session.latestMode,
            latestTopic = topic ?: session.latestTopic,
            entries = (session.entries + entry).takeLast(MAX_ENTRIES_PER_SESSION),
        )
        logcat("D", entry, mode, throwable = null)
        persist()
    }

    @Synchronized
    override fun logFailure(
        stage: String,
        throwable: Throwable,
        mode: AiWidgetMode?,
        topic: String?,
        fields: Map<String, String>,
    ) {
        val elapsedMs = nowMs() - startedAtMs
        val entry = AiDebugLogEntry(
            timestamp = nowIso(),
            stage = stage,
            message = throwable.message ?: throwable.javaClass.simpleName,
            elapsedMs = elapsedMs,
            fields = redactDebugFields(fields + mapOf("exceptionClass" to throwable.javaClass.name)),
            stackTrace = throwable.stackTraceString(),
        )
        session = session.copy(
            status = classifyAiDebugFailure(throwable),
            latestMode = mode?.wireValue ?: session.latestMode,
            latestTopic = topic ?: session.latestTopic,
            entries = (session.entries + entry).takeLast(MAX_ENTRIES_PER_SESSION),
        )
        logcat("E", entry, mode, throwable)
        persist()
    }

    @Synchronized
    override fun complete(
        status: String,
        mode: AiWidgetMode?,
        topic: String?,
        fields: Map<String, String>,
    ) {
        logEvent(
            stage = "session_complete",
            message = "AI widget session complete",
            mode = mode,
            topic = topic,
            fields = fields + mapOf("finalStatus" to status),
        )
        session = session.copy(
            status = status,
            endedAt = nowIso(),
            latestMode = mode?.wireValue ?: session.latestMode,
            latestTopic = topic ?: session.latestTopic,
        )
        persist()
    }

    @Synchronized
    private fun persist() {
        repository.upsertSession(session)
    }

    private fun logcat(
        priority: String,
        entry: AiDebugLogEntry,
        mode: AiWidgetMode?,
        throwable: Throwable?,
    ) {
        if (!BuildConfig.DEBUG) {
            return
        }

        val line = buildString {
            append("ts=").append(entry.timestamp)
            append(" request=").append(sessionId)
            append(" widget=").append(widgetId ?: "none")
            append(" stage=").append(entry.stage)
            append(" mode=").append(mode?.wireValue ?: session.latestMode ?: "none")
            append(" elapsedMs=").append(entry.elapsedMs)
            append(" message=").append(entry.message)
            if (entry.fields.isNotEmpty()) {
                append(" fields=").append(entry.fields.entries.joinToString(",") { (key, value) -> "$key=$value" })
            }
        }

        try {
            when (priority) {
                "E" -> Log.e(LOG_TAG, line, throwable)
                else -> Log.d(LOG_TAG, line)
            }
        } catch (_: RuntimeException) {
            return
        }
    }
}

internal fun generateAiDebugSessionId(random: Random = Random.Default): String =
    "ai-${System.currentTimeMillis()}-${random.nextInt(1000, 9999)}"

internal fun generateAiProbeSessionId(random: Random = Random.Default): String =
    "probe-${System.currentTimeMillis()}-${random.nextInt(1000, 9999)}"

internal fun appendAiDiagnosticsHint(
    summary: String,
    requestId: String,
): String = "$summary Request $requestId. Open the app for AI diagnostics."

internal fun redactDebugFields(
    fields: Map<String, String>,
): Map<String, String> = fields.mapValues { (key, value) ->
    redactDebugValue(key, value)
}

internal fun redactDebugValue(
    key: String,
    value: String,
): String {
    val normalizedKey = key.lowercase()
    return when {
        normalizedKey.contains("authorization") -> "Bearer <redacted>"
        normalizedKey.contains("apikey") || normalizedKey.contains("api_key") -> "<redacted>"
        value.contains("Bearer ", ignoreCase = true) -> "Bearer <redacted>"
        value.contains("sk-", ignoreCase = true) -> "<redacted>"
        else -> value
    }
}

internal fun serializeAiDebugSnapshot(snapshot: AiDebugSnapshot): String = JSONObject()
    .put(
        "sessions",
        JSONArray().apply {
            snapshot.sessions.forEach { session ->
                put(
                    JSONObject()
                        .put("sessionId", session.sessionId)
                        .put("widgetId", session.widgetId)
                        .put("startedAt", session.startedAt)
                        .put("endedAt", session.endedAt)
                        .put("status", session.status)
                        .put("latestMode", session.latestMode)
                        .put("latestTopic", session.latestTopic)
                        .put(
                            "entries",
                            JSONArray().apply {
                                session.entries.forEach { entry ->
                                    put(
                                        JSONObject()
                                            .put("timestamp", entry.timestamp)
                                            .put("stage", entry.stage)
                                            .put("message", entry.message)
                                            .put("elapsedMs", entry.elapsedMs)
                                            .put("stackTrace", entry.stackTrace)
                                            .put(
                                                "fields",
                                                JSONObject().apply {
                                                    entry.fields.forEach { (key, value) ->
                                                        put(key, value)
                                                    }
                                                },
                                            ),
                                    )
                                }
                            },
                        ),
                )
            }
        },
    )
    .toString()

internal fun parseAiDebugSnapshot(raw: String): AiDebugSnapshot {
    if (raw.isBlank()) {
        return AiDebugSnapshot()
    }

    return try {
        val root = JSONObject(raw)
        val sessions = root.optJSONArray("sessions")
            ?.let { sessionsJson ->
                buildList {
                    for (index in 0 until sessionsJson.length()) {
                        val sessionJson = sessionsJson.optJSONObject(index) ?: continue
                        val sessionId = sessionJson.optString("sessionId").takeIf { it.isNotBlank() } ?: continue
                        val startedAt = sessionJson.optString("startedAt").takeIf { it.isNotBlank() } ?: continue
                        add(
                            AiDebugSession(
                                sessionId = sessionId,
                                widgetId = sessionJson.optInt("widgetId").takeIf { it != 0 || sessionJson.has("widgetId") },
                                startedAt = startedAt,
                                endedAt = sessionJson.optString("endedAt").takeIf { it.isNotBlank() },
                                status = sessionJson.optString("status").ifBlank { "running" },
                                latestMode = sessionJson.optString("latestMode").takeIf { it.isNotBlank() },
                                latestTopic = sessionJson.optString("latestTopic").takeIf { it.isNotBlank() },
                                entries = parseAiDebugEntries(sessionJson.optJSONArray("entries")),
                            ),
                        )
                    }
                }
            }
            ?: emptyList()
        trimAiDebugSnapshot(AiDebugSnapshot(sessions))
    } catch (_: Exception) {
        AiDebugSnapshot()
    }
}

private fun parseAiDebugEntries(raw: JSONArray?): List<AiDebugLogEntry> {
    if (raw == null) {
        return emptyList()
    }

    return buildList {
        for (index in 0 until raw.length()) {
            val entryJson = raw.optJSONObject(index) ?: continue
            val timestamp = entryJson.optString("timestamp").takeIf { it.isNotBlank() } ?: continue
            val stage = entryJson.optString("stage").takeIf { it.isNotBlank() } ?: continue
            val message = entryJson.optString("message").ifBlank { stage }
            val fieldsJson = entryJson.optJSONObject("fields")
            val fields = buildMap {
                fieldsJson?.keys()?.forEach { key ->
                    put(key, fieldsJson.optString(key))
                }
            }
            add(
                AiDebugLogEntry(
                    timestamp = timestamp,
                    stage = stage,
                    message = message,
                    elapsedMs = entryJson.optLong("elapsedMs", 0L),
                    fields = fields,
                    stackTrace = entryJson.optString("stackTrace").takeIf { it.isNotBlank() },
                ),
            )
        }
    }
}

internal fun trimAiDebugSnapshot(
    snapshot: AiDebugSnapshot,
): AiDebugSnapshot {
    val trimmedSessions = snapshot.sessions
        .take(MAX_SESSIONS)
        .map { session -> session.copy(entries = session.entries.takeLast(MAX_ENTRIES_PER_SESSION)) }
        .toMutableList()

    while (trimmedSessions.isNotEmpty() && serializeAiDebugSnapshot(AiDebugSnapshot(trimmedSessions)).length > MAX_SNAPSHOT_CHARS) {
        val lastIndex = trimmedSessions.lastIndex
        val last = trimmedSessions[lastIndex]
        if (last.entries.isNotEmpty()) {
            trimmedSessions[lastIndex] = last.copy(entries = last.entries.drop(1))
        } else {
            trimmedSessions.removeAt(lastIndex)
        }
    }

    return AiDebugSnapshot(trimmedSessions)
}

private fun classifyAiDebugFailure(throwable: Throwable): String =
    when (throwable) {
        is java.net.SocketException -> "socket_exception"
        is java.net.SocketTimeoutException -> "socket_timeout"
        is java.net.UnknownHostException -> "unknown_host"
        is javax.net.ssl.SSLException -> "ssl_exception"
        is IllegalStateException -> "http_error"
        else -> "exception"
    }

private fun Throwable.stackTraceString(): String {
    val writer = StringWriter()
    printStackTrace(PrintWriter(writer))
    return writer.toString()
}

private const val LOG_TAG = "AiQuestionDebug"
private const val MAX_SESSIONS = 12
private const val MAX_ENTRIES_PER_SESSION = 120
private const val MAX_SNAPSHOT_CHARS = 120_000
