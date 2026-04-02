package com.kamirov.usmlepractice

import java.net.SocketException
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

class AiDebugLoggingTest {
    @Test
    fun redactDebugValue_redactsAuthorizationAndApiKeys() {
        assertEquals("Bearer <redacted>", redactDebugValue("Authorization", "Bearer sk-test"))
        assertEquals("<redacted>", redactDebugValue("apiKey", "sk-test-123"))
        assertEquals("plain", redactDebugValue("mode", "plain"))
    }

    @Test
    fun trimAiDebugSnapshot_limitsSessionCountAndEntries() {
        val snapshot = AiDebugSnapshot(
            sessions = (1..20).map { index ->
                AiDebugSession(
                    sessionId = "req-$index",
                    startedAt = "2026-04-02T12:00:00Z",
                    entries = (1..150).map { entryIndex ->
                        AiDebugLogEntry(
                            timestamp = "2026-04-02T12:00:00Z",
                            stage = "stage-$entryIndex",
                            message = "message-$entryIndex",
                            elapsedMs = entryIndex.toLong(),
                        )
                    },
                )
            },
        )

        val trimmed = trimAiDebugSnapshot(snapshot)

        assertTrue(trimmed.sessions.size <= 12)
        assertTrue(trimmed.sessions.all { it.entries.size <= 120 })
    }

    @Test
    fun repository_upsertSession_keepsNewestFirstAndTrims() {
        val storage = FakeAiDebugLogStorage()
        val repository = AiDebugLogRepository(storage)

        repeat(15) { index ->
            repository.upsertSession(
                AiDebugSession(
                    sessionId = "req-$index",
                    startedAt = "2026-04-02T12:00:00Z",
                    status = "success",
                ),
            )
        }

        val snapshot = repository.loadSnapshot()
        assertEquals("req-14", snapshot.sessions.first().sessionId)
        assertEquals(12, snapshot.sessions.size)
    }

    @Test
    fun sessionLogger_persistsFailureWithStackTrace() {
        val storage = FakeAiDebugLogStorage()
        val repository = AiDebugLogRepository(storage)
        val logger = AiDebugSessionLogger(
            repository = repository,
            sessionId = "req-failure",
            widgetId = 7,
            nowMs = { 1_000L },
            nowIso = { "2026-04-02T12:00:00Z" },
        )

        logger.logEvent(
            stage = "request_body_built",
            message = "Built body",
            fields = mapOf("Authorization" to "Bearer sk-secret"),
        )
        logger.logFailure(
            stage = "request_exception",
            throwable = SocketException("Software caused connection abort"),
        )
        logger.complete(status = "socket_exception")

        val session = repository.loadSnapshot().sessions.first()
        assertEquals("req-failure", session.sessionId)
        assertEquals("socket_exception", session.status)
        assertTrue(session.entries.any { it.stage == "request_exception" && !it.stackTrace.isNullOrBlank() })
        assertTrue(session.entries.firstOrNull { it.stage == "request_body_built" }?.fields?.values?.contains("Bearer <redacted>") == true)
    }
}

private class FakeAiDebugLogStorage : AiDebugLogStorage {
    private var value: String? = null

    override fun read(): String? = value

    override fun write(value: String) {
        this.value = value
    }

    override fun clear() {
        value = null
    }
}
