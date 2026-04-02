package com.kamirov.usmlepractice

import java.net.InetAddress
import java.net.InetSocketAddress
import java.net.Socket
import java.net.URL
import javax.net.ssl.HttpsURLConnection
import javax.net.ssl.SSLSocket
import javax.net.ssl.SSLSocketFactory

internal enum class AiNetworkProbeStatus {
    PASS,
    FAIL,
}

internal enum class AiNetworkProbeClassification(
    val wireValue: String,
    val summary: String,
) {
    SYSTEM_DNS_FAILURE(
        wireValue = "system_dns_failure",
        summary = "System DNS failing for all hosts.",
    ),
    HOST_SPECIFIC_DNS_FAILURE(
        wireValue = "host_specific_dns_failure",
        summary = "DNS failing only for api.openai.com.",
    ),
    CONNECTIVITY_OR_FIREWALL_FAILURE(
        wireValue = "connectivity_or_firewall_failure",
        summary = "DNS passes, but TCP connect fails.",
    ),
    TLS_HANDSHAKE_FAILURE(
        wireValue = "tls_handshake_failure",
        summary = "TCP passes, but TLS handshake fails.",
    ),
    HTTP_STACK_SPECIFIC_FAILURE(
        wireValue = "http_stack_specific_failure",
        summary = "All manual probes pass, but widget requests still fail.",
    ),
    PROBE_SUCCESS(
        wireValue = "probe_success",
        summary = "Manual DNS, TCP, TLS, and HTTPS probes all passed.",
    ),
}

internal interface AiNetworkProbeResult {
    val status: AiNetworkProbeStatus
    val host: String
    val elapsedMs: Long
    val details: String
    val exceptionClass: String?
    val exceptionMessage: String?
}

internal data class AiDnsProbeResult(
    override val status: AiNetworkProbeStatus,
    override val host: String,
    override val elapsedMs: Long,
    val addresses: List<String> = emptyList(),
    override val details: String = "",
    override val exceptionClass: String? = null,
    override val exceptionMessage: String? = null,
) : AiNetworkProbeResult

internal data class AiTcpProbeResult(
    override val status: AiNetworkProbeStatus,
    override val host: String,
    val port: Int,
    override val elapsedMs: Long,
    override val details: String = "",
    override val exceptionClass: String? = null,
    override val exceptionMessage: String? = null,
) : AiNetworkProbeResult

internal data class AiTlsProbeResult(
    override val status: AiNetworkProbeStatus,
    override val host: String,
    val port: Int,
    override val elapsedMs: Long,
    val protocol: String? = null,
    val cipherSuite: String? = null,
    override val details: String = "",
    override val exceptionClass: String? = null,
    override val exceptionMessage: String? = null,
) : AiNetworkProbeResult

internal data class AiHttpsProbeResult(
    override val status: AiNetworkProbeStatus,
    override val host: String,
    val url: String,
    override val elapsedMs: Long,
    val responseCode: Int? = null,
    override val details: String = "",
    override val exceptionClass: String? = null,
    override val exceptionMessage: String? = null,
) : AiNetworkProbeResult

internal data class AiNetworkProbeSuite(
    val sessionId: String,
    val classification: AiNetworkProbeClassification,
    val recentWidgetFailureStatus: String? = null,
    val totalElapsedMs: Long,
    val dnsResults: List<AiDnsProbeResult>,
    val tcpResults: List<AiTcpProbeResult>,
    val tlsResults: List<AiTlsProbeResult>,
    val httpsResults: List<AiHttpsProbeResult>,
)

internal data class AiNetworkProbeSummary(
    val sessionId: String,
    val classification: String,
    val interpretation: String,
    val lines: List<String>,
    val recentWidgetFailureStatus: String? = null,
)

internal interface AiNetworkProber {
    fun runProbeSuite(
        debugLogger: AiDebugLogger,
        recentWidgetFailureStatus: String? = null,
    ): AiNetworkProbeSuite
}

internal class DefaultAiNetworkProber(
    private val connectTimeoutMs: Int = 10_000,
    private val readTimeoutMs: Int = 10_000,
    private val socketFactory: SSLSocketFactory = SSLSocketFactory.getDefault() as SSLSocketFactory,
) : AiNetworkProber {
    override fun runProbeSuite(
        debugLogger: AiDebugLogger,
        recentWidgetFailureStatus: String?,
    ): AiNetworkProbeSuite {
        val startedAtNanos = System.nanoTime()
        debugLogger.logEvent(
            stage = "probe_suite_start",
            message = "Starting manual DNS/TCP/TLS probe suite",
            fields = mapOf(
                "hosts" to PROBE_HOSTS.joinToString(","),
                "httpsUrls" to PROBE_HTTPS_URLS.joinToString(","),
                "recentWidgetFailureStatus" to (recentWidgetFailureStatus ?: "none"),
            ),
        )

        val dnsResults = PROBE_HOSTS.map { host -> probeDns(host, debugLogger) }
        val tcpResults = PROBE_HOSTS.map { host -> probeTcp(host, OPENAI_HTTPS_PORT, debugLogger) }
        val tlsResults = PROBE_HOSTS.map { host -> probeTls(host, OPENAI_HTTPS_PORT, debugLogger) }
        val httpsResults = PROBE_HTTPS_URLS.map { url -> probeHttpsHead(url, debugLogger) }
        val totalElapsedMs = elapsedMs(startedAtNanos)
        val classification = classifyAiNetworkProbeSuite(
            dnsResults = dnsResults,
            tcpResults = tcpResults,
            tlsResults = tlsResults,
            httpsResults = httpsResults,
            recentWidgetFailureStatus = recentWidgetFailureStatus,
        )

        debugLogger.logEvent(
            stage = "probe_suite_complete",
            message = "Completed manual probe suite",
            fields = mapOf(
                "classification" to classification.wireValue,
                "interpretation" to classification.summary,
                "recentWidgetFailureStatus" to (recentWidgetFailureStatus ?: "none"),
                "totalElapsedMs" to totalElapsedMs.toString(),
            ),
        )
        debugLogger.complete(
            status = classification.wireValue,
            fields = mapOf(
                "classification" to classification.wireValue,
                "interpretation" to classification.summary,
                "recentWidgetFailureStatus" to (recentWidgetFailureStatus ?: "none"),
                "totalElapsedMs" to totalElapsedMs.toString(),
            ),
        )

        return AiNetworkProbeSuite(
            sessionId = debugLogger.sessionId,
            classification = classification,
            recentWidgetFailureStatus = recentWidgetFailureStatus,
            totalElapsedMs = totalElapsedMs,
            dnsResults = dnsResults,
            tcpResults = tcpResults,
            tlsResults = tlsResults,
            httpsResults = httpsResults,
        )
    }

    private fun probeDns(
        host: String,
        debugLogger: AiDebugLogger,
    ): AiDnsProbeResult {
        val startedAtNanos = System.nanoTime()
        debugLogger.logEvent(
            stage = "probe_dns_start",
            message = "Starting DNS resolution probe",
            fields = mapOf("host" to host),
        )
        return try {
            val addresses = InetAddress.getAllByName(host).mapNotNull { address ->
                address.hostAddress?.takeIf { it.isNotBlank() }
            }
            AiDnsProbeResult(
                status = AiNetworkProbeStatus.PASS,
                host = host,
                elapsedMs = elapsedMs(startedAtNanos),
                addresses = addresses,
                details = if (addresses.isEmpty()) "Resolved without explicit IP addresses." else addresses.joinToString(", "),
            ).also { result ->
                debugLogger.logEvent(
                    stage = "probe_dns_result",
                    message = "DNS probe completed",
                    fields = result.toDebugFields(),
                )
            }
        } catch (t: Throwable) {
            debugLogger.logFailure(
                stage = "probe_dns_exception",
                throwable = t,
                fields = mapOf("host" to host),
            )
            AiDnsProbeResult(
                status = AiNetworkProbeStatus.FAIL,
                host = host,
                elapsedMs = elapsedMs(startedAtNanos),
                details = t.message ?: "DNS resolution failed.",
                exceptionClass = t.javaClass.name,
                exceptionMessage = t.message,
            ).also { result ->
                debugLogger.logEvent(
                    stage = "probe_dns_result",
                    message = "DNS probe completed",
                    fields = result.toDebugFields(),
                )
            }
        }
    }

    private fun probeTcp(
        host: String,
        port: Int,
        debugLogger: AiDebugLogger,
    ): AiTcpProbeResult {
        val startedAtNanos = System.nanoTime()
        debugLogger.logEvent(
            stage = "probe_tcp_start",
            message = "Starting raw TCP connect probe",
            fields = mapOf(
                "host" to host,
                "port" to port.toString(),
            ),
        )
        return try {
            Socket().use { socket ->
                socket.connect(InetSocketAddress(host, port), connectTimeoutMs)
            }
            AiTcpProbeResult(
                status = AiNetworkProbeStatus.PASS,
                host = host,
                port = port,
                elapsedMs = elapsedMs(startedAtNanos),
                details = "TCP connect succeeded.",
            ).also { result ->
                debugLogger.logEvent(
                    stage = "probe_tcp_result",
                    message = "TCP probe completed",
                    fields = result.toDebugFields(),
                )
            }
        } catch (t: Throwable) {
            debugLogger.logFailure(
                stage = "probe_tcp_exception",
                throwable = t,
                fields = mapOf(
                    "host" to host,
                    "port" to port.toString(),
                ),
            )
            AiTcpProbeResult(
                status = AiNetworkProbeStatus.FAIL,
                host = host,
                port = port,
                elapsedMs = elapsedMs(startedAtNanos),
                details = t.message ?: "TCP connect failed.",
                exceptionClass = t.javaClass.name,
                exceptionMessage = t.message,
            ).also { result ->
                debugLogger.logEvent(
                    stage = "probe_tcp_result",
                    message = "TCP probe completed",
                    fields = result.toDebugFields(),
                )
            }
        }
    }

    private fun probeTls(
        host: String,
        port: Int,
        debugLogger: AiDebugLogger,
    ): AiTlsProbeResult {
        val startedAtNanos = System.nanoTime()
        debugLogger.logEvent(
            stage = "probe_tls_start",
            message = "Starting TLS handshake probe",
            fields = mapOf(
                "host" to host,
                "port" to port.toString(),
            ),
        )
        return try {
            (socketFactory.createSocket() as SSLSocket).use { socket ->
                socket.soTimeout = readTimeoutMs
                socket.connect(InetSocketAddress(host, port), connectTimeoutMs)
                socket.startHandshake()
                val session = socket.session
                AiTlsProbeResult(
                    status = AiNetworkProbeStatus.PASS,
                    host = host,
                    port = port,
                    elapsedMs = elapsedMs(startedAtNanos),
                    protocol = session?.protocol,
                    cipherSuite = session?.cipherSuite,
                    details = "TLS handshake succeeded.",
                )
            }.also { result ->
                debugLogger.logEvent(
                    stage = "probe_tls_result",
                    message = "TLS probe completed",
                    fields = result.toDebugFields(),
                )
            }
        } catch (t: Throwable) {
            debugLogger.logFailure(
                stage = "probe_tls_exception",
                throwable = t,
                fields = mapOf(
                    "host" to host,
                    "port" to port.toString(),
                ),
            )
            AiTlsProbeResult(
                status = AiNetworkProbeStatus.FAIL,
                host = host,
                port = port,
                elapsedMs = elapsedMs(startedAtNanos),
                details = t.message ?: "TLS handshake failed.",
                exceptionClass = t.javaClass.name,
                exceptionMessage = t.message,
            ).also { result ->
                debugLogger.logEvent(
                    stage = "probe_tls_result",
                    message = "TLS probe completed",
                    fields = result.toDebugFields(),
                )
            }
        }
    }

    private fun probeHttpsHead(
        url: String,
        debugLogger: AiDebugLogger,
    ): AiHttpsProbeResult {
        val startedAtNanos = System.nanoTime()
        debugLogger.logEvent(
            stage = "probe_https_start",
            message = "Starting HTTPS HEAD probe",
            fields = mapOf("url" to url),
        )
        val host = URL(url).host
        val connection = (URL(url).openConnection() as HttpsURLConnection).apply {
            requestMethod = "HEAD"
            connectTimeout = connectTimeoutMs
            readTimeout = readTimeoutMs
            instanceFollowRedirects = true
            useCaches = false
        }
        return try {
            val responseCode = connection.responseCode
            AiHttpsProbeResult(
                status = AiNetworkProbeStatus.PASS,
                host = host,
                url = url,
                elapsedMs = elapsedMs(startedAtNanos),
                responseCode = responseCode,
                details = "HTTPS HEAD completed.",
            ).also { result ->
                debugLogger.logEvent(
                    stage = "probe_https_result",
                    message = "HTTPS probe completed",
                    fields = result.toDebugFields(),
                )
            }
        } catch (t: Throwable) {
            debugLogger.logFailure(
                stage = "probe_https_exception",
                throwable = t,
                fields = mapOf("url" to url),
            )
            AiHttpsProbeResult(
                status = AiNetworkProbeStatus.FAIL,
                host = host,
                url = url,
                elapsedMs = elapsedMs(startedAtNanos),
                details = t.message ?: "HTTPS HEAD failed.",
                exceptionClass = t.javaClass.name,
                exceptionMessage = t.message,
            ).also { result ->
                debugLogger.logEvent(
                    stage = "probe_https_result",
                    message = "HTTPS probe completed",
                    fields = result.toDebugFields(),
                )
            }
        } finally {
            connection.disconnect()
        }
    }
}

internal fun classifyAiNetworkProbeSuite(
    dnsResults: List<AiDnsProbeResult>,
    tcpResults: List<AiTcpProbeResult>,
    tlsResults: List<AiTlsProbeResult>,
    httpsResults: List<AiHttpsProbeResult>,
    recentWidgetFailureStatus: String? = null,
): AiNetworkProbeClassification {
    val apiDns = dnsResults.firstOrNull { it.host == API_OPENAI_HOST }
    val controlDns = dnsResults.filter { it.host != API_OPENAI_HOST }
    val allDnsFailed = dnsResults.isNotEmpty() && dnsResults.all { it.status == AiNetworkProbeStatus.FAIL }
    val apiDnsFailed = apiDns?.status == AiNetworkProbeStatus.FAIL
    val controlsDnsPassed = controlDns.isNotEmpty() && controlDns.all { it.status == AiNetworkProbeStatus.PASS }
    val apiTcp = tcpResults.firstOrNull { it.host == API_OPENAI_HOST }
    val apiTls = tlsResults.firstOrNull { it.host == API_OPENAI_HOST }
    val allHttpsPassed = httpsResults.isNotEmpty() && httpsResults.all { it.status == AiNetworkProbeStatus.PASS }
    val hasRecentWidgetFailure = recentWidgetFailureStatus
        ?.let { status -> status.isNotBlank() && status != "success" && status != "message_only" }
        ?: false

    return when {
        allDnsFailed -> AiNetworkProbeClassification.SYSTEM_DNS_FAILURE
        apiDnsFailed && controlsDnsPassed -> AiNetworkProbeClassification.HOST_SPECIFIC_DNS_FAILURE
        apiDns?.status == AiNetworkProbeStatus.PASS && apiTcp?.status == AiNetworkProbeStatus.FAIL -> {
            AiNetworkProbeClassification.CONNECTIVITY_OR_FIREWALL_FAILURE
        }

        apiTcp?.status == AiNetworkProbeStatus.PASS && apiTls?.status == AiNetworkProbeStatus.FAIL -> {
            AiNetworkProbeClassification.TLS_HANDSHAKE_FAILURE
        }

        apiDns?.status == AiNetworkProbeStatus.PASS &&
            apiTcp?.status == AiNetworkProbeStatus.PASS &&
            apiTls?.status == AiNetworkProbeStatus.PASS &&
            allHttpsPassed &&
            hasRecentWidgetFailure -> {
            AiNetworkProbeClassification.HTTP_STACK_SPECIFIC_FAILURE
        }

        else -> AiNetworkProbeClassification.PROBE_SUCCESS
    }
}

internal fun summarizeAiNetworkProbeSession(session: AiDebugSession): AiNetworkProbeSummary? {
    val resultEntries = session.entries.filter { entry ->
        entry.stage in setOf(
            "probe_dns_result",
            "probe_tcp_result",
            "probe_tls_result",
            "probe_https_result",
            "probe_suite_complete",
        )
    }
    if (resultEntries.isEmpty()) {
        return null
    }

    val completion = resultEntries.lastOrNull { it.stage == "probe_suite_complete" }
    val classification = completion?.fields?.get("classification") ?: session.status
    val interpretation = completion?.fields?.get("interpretation") ?: session.status
    val lines = resultEntries
        .filterNot { it.stage == "probe_suite_complete" }
        .mapNotNull(::formatAiNetworkProbeEntry)

    return AiNetworkProbeSummary(
        sessionId = session.sessionId,
        classification = classification,
        interpretation = interpretation,
        lines = lines,
        recentWidgetFailureStatus = completion?.fields?.get("recentWidgetFailureStatus")
            ?.takeIf { it != "none" },
    )
}

internal fun AiNetworkProbeResult.toDebugFields(): Map<String, String> = buildMap {
    put("host", host)
    put("status", status.name)
    put("elapsedMs", elapsedMs.toString())
    put("details", details)
    exceptionClass?.let { put("exceptionClass", it) }
    exceptionMessage?.let { put("exceptionMessage", it) }
    when (this@toDebugFields) {
        is AiDnsProbeResult -> {
            put("addresses", addresses.joinToString(","))
        }

        is AiTcpProbeResult -> {
            put("port", port.toString())
        }

        is AiTlsProbeResult -> {
            put("port", port.toString())
            protocol?.let { put("protocol", it) }
            cipherSuite?.let { put("cipherSuite", it) }
        }

        is AiHttpsProbeResult -> {
            put("url", url)
            responseCode?.let { put("responseCode", it.toString()) }
        }
    }
}

private fun formatAiNetworkProbeEntry(entry: AiDebugLogEntry): String? {
    val status = entry.fields["status"] ?: return null
    return when (entry.stage) {
        "probe_dns_result" -> {
            val host = entry.fields["host"] ?: return null
            val addresses = entry.fields["addresses"].orEmpty()
            "$host DNS: $status${if (addresses.isNotBlank()) " ($addresses)" else ""}"
        }

        "probe_tcp_result" -> {
            val host = entry.fields["host"] ?: return null
            "$host TCP: $status"
        }

        "probe_tls_result" -> {
            val host = entry.fields["host"] ?: return null
            val protocol = entry.fields["protocol"].orEmpty()
            "$host TLS: $status${if (protocol.isNotBlank()) " ($protocol)" else ""}"
        }

        "probe_https_result" -> {
            val url = entry.fields["url"] ?: return null
            val responseCode = entry.fields["responseCode"].orEmpty()
            "$url HTTPS: $status${if (responseCode.isNotBlank()) " (HTTP $responseCode)" else ""}"
        }

        else -> null
    }
}

private fun elapsedMs(startedAtNanos: Long): Long = (System.nanoTime() - startedAtNanos) / 1_000_000L

private const val API_OPENAI_HOST = "api.openai.com"
private const val OPENAI_HTTPS_PORT = 443
private val PROBE_HOSTS = listOf(API_OPENAI_HOST, "openai.com", "google.com")
private val PROBE_HTTPS_URLS = listOf("https://openai.com", "https://www.google.com/generate_204")
