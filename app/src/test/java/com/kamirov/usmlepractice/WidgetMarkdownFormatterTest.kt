package com.kamirov.usmlepractice

import org.junit.Assert.assertEquals
import org.junit.Test

class WidgetMarkdownFormatterTest {
    @Test
    fun parseWidgetMarkdown_keepsPlainTextUnchanged() {
        assertEquals(
            ParsedWidgetMarkdown(
                text = "Question text",
                spans = emptyList(),
            ),
            parseWidgetMarkdown("Question text"),
        )
    }

    @Test
    fun parseWidgetMarkdown_formatsSingleBoldSegment() {
        assertEquals(
            ParsedWidgetMarkdown(
                text = "Explain glycolysis",
                spans = listOf(
                    WidgetMarkdownSpan(
                        start = 8,
                        end = 18,
                        style = WidgetMarkdownStyle.BOLD,
                    ),
                ),
            ),
            parseWidgetMarkdown("Explain **glycolysis**"),
        )
    }

    @Test
    fun parseWidgetMarkdown_formatsSingleItalicSegment() {
        assertEquals(
            ParsedWidgetMarkdown(
                text = "Most likely renal cause",
                spans = listOf(
                    WidgetMarkdownSpan(
                        start = 12,
                        end = 17,
                        style = WidgetMarkdownStyle.ITALIC,
                    ),
                ),
            ),
            parseWidgetMarkdown("Most likely _renal_ cause"),
        )
    }

    @Test
    fun parseWidgetMarkdown_formatsMultipleSegments() {
        assertEquals(
            ParsedWidgetMarkdown(
                text = "bold then italics and more bold",
                spans = listOf(
                    WidgetMarkdownSpan(
                        start = 0,
                        end = 4,
                        style = WidgetMarkdownStyle.BOLD,
                    ),
                    WidgetMarkdownSpan(
                        start = 10,
                        end = 17,
                        style = WidgetMarkdownStyle.ITALIC,
                    ),
                    WidgetMarkdownSpan(
                        start = 27,
                        end = 31,
                        style = WidgetMarkdownStyle.BOLD,
                    ),
                ),
            ),
            parseWidgetMarkdown("**bold** then _italics_ and more **bold**"),
        )
    }

    @Test
    fun parseWidgetMarkdown_formatsMixedBoldAndItalicSegments() {
        assertEquals(
            ParsedWidgetMarkdown(
                text = "Use bold and italic markers",
                spans = listOf(
                    WidgetMarkdownSpan(
                        start = 4,
                        end = 8,
                        style = WidgetMarkdownStyle.BOLD,
                    ),
                    WidgetMarkdownSpan(
                        start = 13,
                        end = 19,
                        style = WidgetMarkdownStyle.ITALIC,
                    ),
                ),
            ),
            parseWidgetMarkdown("Use **bold** and _italic_ markers"),
        )
    }

    @Test
    fun parseWidgetMarkdown_leavesUnmatchedMarkersVisible() {
        assertEquals(
            ParsedWidgetMarkdown(
                text = "Keep **open and _dangling markers",
                spans = emptyList(),
            ),
            parseWidgetMarkdown("Keep **open and _dangling markers"),
        )
    }

    @Test
    fun parseWidgetMarkdown_leavesEmptyMarkersVisible() {
        assertEquals(
            ParsedWidgetMarkdown(
                text = "Ignore **** and __ markers",
                spans = emptyList(),
            ),
            parseWidgetMarkdown("Ignore **** and __ markers"),
        )
    }
}
