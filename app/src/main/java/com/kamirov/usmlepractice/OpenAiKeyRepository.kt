package com.kamirov.usmlepractice

import android.content.Context
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.MasterKeys

internal interface OpenAiKeyAccess {
    fun loadKey(): String

    fun saveKey(value: String)

    fun clearKey()

    fun hasKey(): Boolean
}

internal interface OpenAiKeyStorage {
    fun read(): String?

    fun write(value: String)

    fun clear()
}

internal class OpenAiKeyRepository(
    private val storage: OpenAiKeyStorage,
) : OpenAiKeyAccess {
    constructor(context: Context) : this(
        storage = EncryptedSharedPrefsOpenAiKeyStorage(context),
    )

    override fun loadKey(): String = storage.read().orEmpty().trim()

    override fun saveKey(value: String) {
        val trimmed = value.trim()
        if (trimmed.isEmpty()) {
            storage.clear()
            return
        }

        storage.write(trimmed)
    }

    override fun clearKey() {
        storage.clear()
    }

    override fun hasKey(): Boolean = loadKey().isNotEmpty()
}

internal class EncryptedSharedPrefsOpenAiKeyStorage(
    context: Context,
) : OpenAiKeyStorage {
    private val sharedPreferences by lazy {
        val masterKeyAlias = MasterKeys.getOrCreate(MasterKeys.AES256_GCM_SPEC)

        EncryptedSharedPreferences.create(
            PREFS_NAME,
            masterKeyAlias,
            context,
            EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
            EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM,
        )
    }

    override fun read(): String? = sharedPreferences.getString(KEY_OPENAI_API_KEY, null)

    override fun write(value: String) {
        sharedPreferences.edit()
            .putString(KEY_OPENAI_API_KEY, value)
            .apply()
    }

    override fun clear() {
        sharedPreferences.edit()
            .remove(KEY_OPENAI_API_KEY)
            .apply()
    }

    private companion object {
        private const val PREFS_NAME = "openai_key_prefs"
        private const val KEY_OPENAI_API_KEY = "openai_api_key"
    }
}
