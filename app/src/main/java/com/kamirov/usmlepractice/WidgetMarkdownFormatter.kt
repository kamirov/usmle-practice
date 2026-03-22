package com.kamirov.usmlepractice

import android.graphics.Typeface
import android.text.SpannableStringBuilder
import android.text.Spanned
import android.text.style.StyleSpan

internal fun formatWidgetMarkdown(text: String): CharSequence {
    val parsed = parseWidgetMarkdown(text)
    if (parsed.spans.isEmpty()) {
        return parsed.text
    }

    return SpannableStringBuilder(parsed.text).apply {
        parsed.spans.forEach { span ->
            setSpan(
                StyleSpan(
                    when (span.style) {
                        WidgetMarkdownStyle.BOLD -> Typeface.BOLD
                        WidgetMarkdownStyle.ITALIC -> Typeface.ITALIC
                    }
                ),
                span.start,
                span.end,
                Spanned.SPAN_EXCLUSIVE_EXCLUSIVE,
            )
        }
    }
}

internal fun parseWidgetMarkdown(text: String): ParsedWidgetMarkdown {
    val output = StringBuilder(text.length)
    val spans = mutableListOf<WidgetMarkdownSpan>()
    var index = 0

    while (index < text.length) {
        if (text.startsWith("**", index)) {
            val closingIndex = text.indexOf("**", startIndex = index + 2)
            if (closingIndex > index + 2) {
                val start = output.length
                output.append(text, index + 2, closingIndex)
                spans += WidgetMarkdownSpan(
                    start = start,
                    end = output.length,
                    style = WidgetMarkdownStyle.BOLD,
                )
                index = closingIndex + 2
                continue
            }
        }

        if (text[index] == '_') {
            val closingIndex = text.indexOf('_', startIndex = index + 1)
            if (closingIndex > index + 1) {
                val start = output.length
                output.append(text, index + 1, closingIndex)
                spans += WidgetMarkdownSpan(
                    start = start,
                    end = output.length,
                    style = WidgetMarkdownStyle.ITALIC,
                )
                index = closingIndex + 1
                continue
            }
        }

        output.append(text[index])
        index += 1
    }

    return ParsedWidgetMarkdown(
        text = output.toString(),
        spans = spans,
    )
}

internal data class ParsedWidgetMarkdown(
    val text: String,
    val spans: List<WidgetMarkdownSpan>,
)

internal data class WidgetMarkdownSpan(
    val start: Int,
    val end: Int,
    val style: WidgetMarkdownStyle,
)

internal enum class WidgetMarkdownStyle {
    BOLD,
    ITALIC,
}
