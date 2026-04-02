package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class OpenAiKeyRepositoryTest {
    @Test
    fun saveLoadAndClear_roundTripsTrimmedKey() {
        val storage = FakeOpenAiKeyStorage()
        val repository = OpenAiKeyRepository(storage)

        repository.saveKey("  sk-test-123  ")

        assertTrue(repository.hasKey())
        assertEquals("sk-test-123", repository.loadKey())

        repository.clearKey()

        assertFalse(repository.hasKey())
        assertEquals("", repository.loadKey())
    }

    @Test
    fun saveKey_clearsStorageWhenBlank() {
        val storage = FakeOpenAiKeyStorage(initialValue = "sk-old")
        val repository = OpenAiKeyRepository(storage)

        repository.saveKey("   ")

        assertFalse(repository.hasKey())
        assertEquals("", repository.loadKey())
    }
}

private class FakeOpenAiKeyStorage(
    initialValue: String? = null,
) : OpenAiKeyStorage {
    private var value: String? = initialValue

    override fun read(): String? = value

    override fun write(value: String) {
        this.value = value
    }

    override fun clear() {
        value = null
    }
}
