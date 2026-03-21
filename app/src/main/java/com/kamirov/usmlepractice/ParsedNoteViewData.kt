package com.kamirov.usmlepractice

internal data class ParsedNoteViewData(
    val noteName: String,
    val qaItems: List<QaItem>,
    val fallbackMessage: String? = null,
    val rawContent: String,
) {
    val hasStructuredQa: Boolean
        get() = qaItems.isNotEmpty()

    fun previewItems(maxItems: Int): List<QaItem> = qaItems.take(maxItems)
}

internal fun buildParsedNoteViewData(
    noteName: String,
    rawContent: String,
): ParsedNoteViewData {
    val qaItems = parseQaItems(rawContent).orEmpty()

    return ParsedNoteViewData(
        noteName = noteName,
        qaItems = qaItems,
        fallbackMessage = if (qaItems.isEmpty()) {
            "Could not parse ## Questions and ## Answers into a Q/A view."
        } else {
            null
        },
        rawContent = rawContent,
    )
}
