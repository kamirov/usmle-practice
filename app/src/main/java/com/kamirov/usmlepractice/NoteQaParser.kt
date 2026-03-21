package com.kamirov.usmlepractice

internal data class QaItem(
    val question: String,
    val answer: String,
)

internal fun parseQaItems(content: String): List<QaItem>? {
    val lines = content.lines()
    val questions = parseNumberedSection(
        lines = lines,
        heading = "## Questions",
    )
    val answers = parseNumberedSection(
        lines = lines,
        heading = "## Answers",
    )

    if (questions.isNullOrEmpty() || answers.isNullOrEmpty()) {
        return null
    }

    return questions.mapIndexed { index, question ->
        QaItem(
            question = question,
            answer = answers.getOrElse(index) { "" },
        )
    }
}

private fun parseNumberedSection(
    lines: List<String>,
    heading: String,
): List<String>? {
    val headingIndex = lines.indexOfFirst { it.trim() == heading }
    if (headingIndex == -1) {
        return null
    }

    val sectionLines = buildList {
        for (index in headingIndex + 1 until lines.size) {
            val line = lines[index]
            if (line.trim().startsWith("## ")) {
                break
            }
            add(line)
        }
    }

    return parseNumberedItems(sectionLines)
}

private fun parseNumberedItems(lines: List<String>): List<String> {
    val itemPattern = Regex("""^\s*\d+[.)]\s+(.*\S.*)$""")
    val items = mutableListOf<String>()
    var currentItem: StringBuilder? = null

    for (line in lines) {
        val trimmed = line.trim()
        val match = itemPattern.matchEntire(line)

        if (match != null) {
            currentItem?.toString()?.trim()?.takeIf(String::isNotEmpty)?.let(items::add)
            currentItem = StringBuilder(match.groupValues[1].trim())
            continue
        }

        if (trimmed.isEmpty() || currentItem == null) {
            continue
        }

        currentItem.append('\n').append(trimmed)
    }

    currentItem?.toString()?.trim()?.takeIf(String::isNotEmpty)?.let(items::add)
    return items
}
