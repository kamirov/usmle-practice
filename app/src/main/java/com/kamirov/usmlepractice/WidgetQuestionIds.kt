package com.kamirov.usmlepractice

import java.security.MessageDigest

internal fun buildWidgetQuestionId(
    notePathKey: String,
    question: String,
): String {
    val digest = MessageDigest.getInstance("SHA-1")
    val raw = "$notePathKey::$question".toByteArray(Charsets.UTF_8)
    val bytes = digest.digest(raw)
    return buildString(bytes.size * 2) {
        bytes.forEach { byte ->
            append("%02x".format(byte.toInt() and 0xff))
        }
    }
}
