package com.kamirov.usmlepractice

import android.content.Context

internal class PracticeServerSecretRepository(
    context: Context,
) {
    private val appContext = context.applicationContext
    private val prefs = appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)

    fun loadSecret(): String = prefs.getString(KEY_SECRET, null).orEmpty()

    fun saveSecret(value: String) {
        val normalized = value.trim()
        if (normalized.isEmpty()) {
            clearSecret()
            return
        }
        prefs.edit().putString(KEY_SECRET, normalized).apply()
    }

    fun clearSecret() {
        prefs.edit().remove(KEY_SECRET).apply()
    }

    fun hasSecret(): Boolean = loadSecret().isNotBlank()

    companion object {
        private const val PREFS_NAME = "practice_server_secret"
        private const val KEY_SECRET = "x_api_secret"
    }
}
