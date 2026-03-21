package com.kamirov.usmlepractice

import android.content.Context
import androidx.compose.runtime.Composable
import androidx.glance.GlanceModifier
import androidx.glance.appwidget.GlanceAppWidget
import androidx.glance.appwidget.GlanceAppWidgetReceiver
import androidx.glance.appwidget.SizeMode
import androidx.glance.appwidget.appWidgetBackground
import androidx.glance.appwidget.provideContent
import androidx.glance.layout.Column
import androidx.glance.layout.Spacer
import androidx.glance.layout.fillMaxSize
import androidx.glance.layout.height
import androidx.glance.layout.padding
import androidx.glance.text.FontWeight
import androidx.glance.text.Text
import androidx.glance.text.TextStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class RandomQaAppWidgetReceiver : GlanceAppWidgetReceiver() {
    override val glanceAppWidget: GlanceAppWidget = RandomQaAppWidget()
}

class RandomQaAppWidget : GlanceAppWidget() {
    override val sizeMode: SizeMode = SizeMode.Exact

    override suspend fun provideGlance(context: Context, id: androidx.glance.GlanceId) {
        val repository = ObsidianVaultRepository(context)
        val state = repository.loadRandomWidgetState()

        provideContent {
            RandomQaWidgetContent(state)
        }
    }
}

@Composable
private fun RandomQaWidgetContent(state: WidgetNoteState) {
    Column(
        modifier = GlanceModifier
            .fillMaxSize()
            .appWidgetBackground()
            .padding(16.dp),
    ) {
        when (state) {
            is WidgetNoteState.Message -> WidgetMessageContent(state)
            is WidgetNoteState.Note -> WidgetNoteContent(state.note)
        }
    }
}

@Composable
private fun WidgetMessageContent(state: WidgetNoteState.Message) {
    Text(
        text = state.title,
        style = TextStyle(
            fontWeight = FontWeight.Bold,
            fontSize = 18.sp,
        ),
    )
    Spacer(modifier = GlanceModifier.height(8.dp))
    Text(
        text = state.message,
        style = TextStyle(
            fontSize = 14.sp,
        ),
    )
}

@Composable
private fun WidgetNoteContent(note: ParsedNoteViewData) {
    Text(
        text = note.noteName,
        style = TextStyle(
            fontWeight = FontWeight.Bold,
            fontSize = 16.sp,
        ),
    )
    Spacer(modifier = GlanceModifier.height(10.dp))

    if (!note.hasStructuredQa) {
        Text(
            text = note.fallbackMessage ?: "Could not parse this note into Q/A.",
            style = TextStyle(
                fontSize = 14.sp,
            ),
        )
        return
    }

    for ((index, item) in note.previewItems(MAX_PREVIEW_ITEMS).withIndex()) {
        Text(
            text = "Question ${index + 1}",
            style = TextStyle(
                fontWeight = FontWeight.Medium,
                fontSize = 12.sp,
            ),
        )
        Text(
            text = item.question,
            style = TextStyle(
                fontSize = 14.sp,
            ),
        )
        Spacer(modifier = GlanceModifier.height(4.dp))
        Text(
            text = "Answer",
            style = TextStyle(
                fontWeight = FontWeight.Medium,
                fontSize = 12.sp,
            ),
        )
        Text(
            text = item.answer.ifBlank { "No answer provided." },
            style = TextStyle(
                fontSize = 14.sp,
            ),
        )

        if (index < note.previewItems(MAX_PREVIEW_ITEMS).lastIndex) {
            Spacer(modifier = GlanceModifier.height(12.dp))
        }
    }
}

private const val MAX_PREVIEW_ITEMS = 2
