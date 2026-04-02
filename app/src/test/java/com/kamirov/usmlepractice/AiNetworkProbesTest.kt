package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

class AiNetworkProbesTest {
    @Test
    fun classifyAiNetworkProbeSuite_detectsSystemDnsFailure() {
        val classification = classifyAiNetworkProbeSuite(
            dnsResults = listOf(
                dnsFail("api.openai.com"),
                dnsFail("openai.com"),
                dnsFail("google.com"),
            ),
            tcpResults = emptyList(),
            tlsResults = emptyList(),
            httpsResults = emptyList(),
        )

        assertEquals(AiNetworkProbeClassification.SYSTEM_DNS_FAILURE, classification)
    }

    @Test
    fun classifyAiNetworkProbeSuite_detectsHostSpecificDnsFailure() {
        val classification = classifyAiNetworkProbeSuite(
            dnsResults = listOf(
                dnsFail("api.openai.com"),
                dnsPass("openai.com"),
                dnsPass("google.com"),
            ),
            tcpResults = emptyList(),
            tlsResults = emptyList(),
            httpsResults = emptyList(),
        )

        assertEquals(AiNetworkProbeClassification.HOST_SPECIFIC_DNS_FAILURE, classification)
    }

    @Test
    fun classifyAiNetworkProbeSuite_detectsTcpFailureAfterDnsPass() {
        val classification = classifyAiNetworkProbeSuite(
            dnsResults = listOf(
                dnsPass("api.openai.com"),
                dnsPass("openai.com"),
                dnsPass("google.com"),
            ),
            tcpResults = listOf(
                tcpFail("api.openai.com"),
                tcpPass("openai.com"),
                tcpPass("google.com"),
            ),
            tlsResults = emptyList(),
            httpsResults = emptyList(),
        )

        assertEquals(AiNetworkProbeClassification.CONNECTIVITY_OR_FIREWALL_FAILURE, classification)
    }

    @Test
    fun classifyAiNetworkProbeSuite_detectsTlsFailureAfterTcpPass() {
        val classification = classifyAiNetworkProbeSuite(
            dnsResults = listOf(
                dnsPass("api.openai.com"),
                dnsPass("openai.com"),
                dnsPass("google.com"),
            ),
            tcpResults = listOf(
                tcpPass("api.openai.com"),
                tcpPass("openai.com"),
                tcpPass("google.com"),
            ),
            tlsResults = listOf(
                tlsFail("api.openai.com"),
                tlsPass("openai.com"),
                tlsPass("google.com"),
            ),
            httpsResults = emptyList(),
        )

        assertEquals(AiNetworkProbeClassification.TLS_HANDSHAKE_FAILURE, classification)
    }

    @Test
    fun classifyAiNetworkProbeSuite_detectsHttpStackSpecificFailure() {
        val classification = classifyAiNetworkProbeSuite(
            dnsResults = listOf(
                dnsPass("api.openai.com"),
                dnsPass("openai.com"),
                dnsPass("google.com"),
            ),
            tcpResults = listOf(
                tcpPass("api.openai.com"),
                tcpPass("openai.com"),
                tcpPass("google.com"),
            ),
            tlsResults = listOf(
                tlsPass("api.openai.com"),
                tlsPass("openai.com"),
                tlsPass("google.com"),
            ),
            httpsResults = listOf(
                httpsPass("openai.com", "https://openai.com"),
                httpsPass("www.google.com", "https://www.google.com/generate_204"),
            ),
            recentWidgetFailureStatus = "unknown_host",
        )

        assertEquals(AiNetworkProbeClassification.HTTP_STACK_SPECIFIC_FAILURE, classification)
    }

    @Test
    fun dnsProbeResult_toDebugFields_serializesSuccessAndFailureDetails() {
        val successFields = dnsPass("api.openai.com", addresses = listOf("1.1.1.1")).toDebugFields()
        val failureFields = dnsFail("api.openai.com").toDebugFields()

        assertEquals("PASS", successFields["status"])
        assertEquals("1.1.1.1", successFields["addresses"])
        assertEquals("FAIL", failureFields["status"])
        assertEquals("java.net.UnknownHostException", failureFields["exceptionClass"])
    }

    @Test
    fun summarizeAiNetworkProbeSession_formatsProbeLinesInOrder() {
        val summary = summarizeAiNetworkProbeSession(
            AiDebugSession(
                sessionId = "probe-1234",
                startedAt = "2026-04-02T12:00:00Z",
                status = "host_specific_dns_failure",
                entries = listOf(
                    AiDebugLogEntry(
                        timestamp = "2026-04-02T12:00:01Z",
                        stage = "probe_dns_result",
                        message = "DNS probe completed",
                        elapsedMs = 20L,
                        fields = mapOf("host" to "api.openai.com", "status" to "FAIL"),
                    ),
                    AiDebugLogEntry(
                        timestamp = "2026-04-02T12:00:02Z",
                        stage = "probe_tcp_result",
                        message = "TCP probe completed",
                        elapsedMs = 30L,
                        fields = mapOf("host" to "api.openai.com", "status" to "FAIL"),
                    ),
                    AiDebugLogEntry(
                        timestamp = "2026-04-02T12:00:03Z",
                        stage = "probe_suite_complete",
                        message = "Completed manual probe suite",
                        elapsedMs = 40L,
                        fields = mapOf(
                            "classification" to "host_specific_dns_failure",
                            "interpretation" to "DNS failing only for api.openai.com.",
                            "recentWidgetFailureStatus" to "unknown_host",
                        ),
                    ),
                ),
            ),
        )

        requireNotNull(summary)
        assertEquals("host_specific_dns_failure", summary.classification)
        assertEquals("DNS failing only for api.openai.com.", summary.interpretation)
        assertEquals(listOf("api.openai.com DNS: FAIL", "api.openai.com TCP: FAIL"), summary.lines)
        assertEquals("unknown_host", summary.recentWidgetFailureStatus)
    }

    @Test
    fun summarizeAiNetworkProbeSession_returnsNullWhenSessionIsNotProbeRelated() {
        val summary = summarizeAiNetworkProbeSession(
            AiDebugSession(
                sessionId = "ai-1234",
                startedAt = "2026-04-02T12:00:00Z",
                status = "success",
                entries = listOf(
                    AiDebugLogEntry(
                        timestamp = "2026-04-02T12:00:01Z",
                        stage = "request_body_built",
                        message = "Built request body",
                        elapsedMs = 10L,
                    ),
                ),
            ),
        )

        assertTrue(summary == null)
    }

    private fun dnsPass(host: String, addresses: List<String> = listOf("1.1.1.1")) = AiDnsProbeResult(
        status = AiNetworkProbeStatus.PASS,
        host = host,
        elapsedMs = 10L,
        addresses = addresses,
        details = addresses.joinToString(","),
    )

    private fun dnsFail(host: String) = AiDnsProbeResult(
        status = AiNetworkProbeStatus.FAIL,
        host = host,
        elapsedMs = 10L,
        details = "Unable to resolve host",
        exceptionClass = "java.net.UnknownHostException",
        exceptionMessage = "Unable to resolve host",
    )

    private fun tcpPass(host: String) = AiTcpProbeResult(
        status = AiNetworkProbeStatus.PASS,
        host = host,
        port = 443,
        elapsedMs = 10L,
        details = "TCP connect succeeded.",
    )

    private fun tcpFail(host: String) = AiTcpProbeResult(
        status = AiNetworkProbeStatus.FAIL,
        host = host,
        port = 443,
        elapsedMs = 10L,
        details = "Connect refused",
        exceptionClass = "java.net.SocketTimeoutException",
        exceptionMessage = "timeout",
    )

    private fun tlsPass(host: String) = AiTlsProbeResult(
        status = AiNetworkProbeStatus.PASS,
        host = host,
        port = 443,
        elapsedMs = 10L,
        protocol = "TLSv1.3",
        cipherSuite = "TLS_AES_128_GCM_SHA256",
        details = "TLS handshake succeeded.",
    )

    private fun tlsFail(host: String) = AiTlsProbeResult(
        status = AiNetworkProbeStatus.FAIL,
        host = host,
        port = 443,
        elapsedMs = 10L,
        details = "Handshake failed",
        exceptionClass = "javax.net.ssl.SSLException",
        exceptionMessage = "Handshake failed",
    )

    private fun httpsPass(host: String, url: String) = AiHttpsProbeResult(
        status = AiNetworkProbeStatus.PASS,
        host = host,
        url = url,
        elapsedMs = 10L,
        responseCode = 200,
        details = "HTTPS HEAD completed.",
    )
}
