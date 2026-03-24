package com.kamirov.usmlepractice
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class WidgetLaunchersTest {
    @Test
    fun buildObsidianOpenUrl_buildsDeepLinkWithVaultAndFile() {
        val url = buildObsidianOpenUrl(
            vaultName = "USMLE Vault",
            notePathKey = "Medicine/Cardiology.md",
        )

        assertEquals(
            "obsidian://open?vault=USMLE%20Vault&file=Medicine%2FCardiology.md",
            url,
        )
    }

    @Test
    fun buildObsidianOpenUrl_preservesNestedPathsAndSpecialCharacters() {
        val url = buildObsidianOpenUrl(
            vaultName = "Step 1 & Beyond",
            notePathKey = "Renal/Acid Base + Electrolytes.md",
        )

        assertEquals(
            "obsidian://open?vault=Step%201%20%26%20Beyond&file=Renal%2FAcid%20Base%20%2B%20Electrolytes.md",
            url,
        )
    }

    @Test
    fun buildObsidianOpenUrl_returnsNullWhenInputsAreBlank() {
        assertNull(buildObsidianOpenUrl(vaultName = "", notePathKey = "Path.md"))
        assertNull(buildObsidianOpenUrl(vaultName = "Vault", notePathKey = " "))
    }

    @Test
    fun buildGoogleSearchUrl_encodesQuestionText() {
        val url = buildGoogleSearchUrl("What is the mechanism of aspirin?")

        assertEquals(
            "https://www.google.com/search?q=What%20is%20the%20mechanism%20of%20aspirin%3F",
            url,
        )
    }

    @Test
    fun buildGoogleSearchUrl_returnsNullWhenQueryIsBlank() {
        assertNull(buildGoogleSearchUrl(" \n "))
    }
}
