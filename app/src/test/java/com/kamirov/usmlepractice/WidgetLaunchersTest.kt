package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class WidgetLaunchersTest {
    @Test
    fun buildObsidianOpenUri_buildsDeepLinkWithVaultAndFile() {
        val uri = buildObsidianOpenUri(
            vaultName = "USMLE Vault",
            notePathKey = "Medicine/Cardiology.md",
        )

        assertEquals(
            "obsidian://open?vault=USMLE%20Vault&file=Medicine%2FCardiology.md",
            uri.toString(),
        )
    }

    @Test
    fun buildObsidianOpenUri_preservesNestedPathsAndSpecialCharacters() {
        val uri = buildObsidianOpenUri(
            vaultName = "Step 1 & Beyond",
            notePathKey = "Renal/Acid Base + Electrolytes.md",
        )

        assertEquals(
            "obsidian://open?vault=Step%201%20%26%20Beyond&file=Renal%2FAcid%20Base%20%2B%20Electrolytes.md",
            uri.toString(),
        )
    }

    @Test
    fun buildObsidianOpenUri_returnsNullWhenInputsAreBlank() {
        assertNull(buildObsidianOpenUri(vaultName = "", notePathKey = "Path.md"))
        assertNull(buildObsidianOpenUri(vaultName = "Vault", notePathKey = " "))
    }
}
