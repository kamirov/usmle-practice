package com.kamirov.usmlepractice

internal data class ParsedNoteViewData(
    val noteName: String,
    val qaItems: List<QaItem>,
    val fallbackMessage: String? = null,
    val rawContent: String,
    val noteUriString: String? = null,
    val notePathKey: String = noteName,
    val vaultName: String? = null,
) {
    val hasStructuredQa: Boolean
        get() = qaItems.isNotEmpty()

    fun previewItems(maxItems: Int): List<QaItem> = qaItems.take(maxItems)

    fun widgetQaItems(): List<WidgetQaItem> = qaItems.map { item ->
        WidgetQaItem(
            questionId = buildWidgetQuestionId(
                notePathKey = notePathKey,
                question = item.question,
            ),
            question = item.question,
            answer = item.answer,
        )
    }
}

internal data class WidgetQaItem(
    val questionId: String,
    val question: String,
    val answer: String,
)

internal fun buildParsedNoteViewData(
    noteName: String,
    rawContent: String,
    noteUriString: String? = null,
    notePathKey: String = noteName,
    vaultName: String? = null,
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
        noteUriString = noteUriString,
        notePathKey = notePathKey,
        vaultName = vaultName,
    )
}
