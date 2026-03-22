package com.kamirov.usmlepractice

import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.view.View
import android.widget.RemoteViews

internal const val EXTRA_WIDGET_ACTION_KIND = "extra_widget_action_kind"

private const val ACTION_KIND_ROW_TOGGLE = "row_toggle"
private const val ACTION_KIND_TOGGLE_DIFFICULT = "toggle_difficult"
private const val ACTION_KIND_OPEN_NOTE = "open_note"
private const val ACTION_KIND_OPEN_ROW_CHAT = "open_row_chat"
private const val ACTION_KIND_REMOVE_REVIEW = "remove_review"

internal fun buildRandomQaCollectionItems(
    context: Context,
    appWidgetId: Int,
    state: WidgetNoteState.Note,
): RemoteViews.RemoteCollectionItems {
    val difficultIds = TroubleQuestionRepository(context).loadIds()
    val builder = RemoteViews.RemoteCollectionItems.Builder()
        .setHasStableIds(true)
        .setViewTypeCount(1)

    state.widgetQaItems.forEachIndexed { index, item ->
        val isExpanded = state.expandedIndex == index
        val isDifficult = item.questionId in difficultIds
        val rowToggleIntent = collectionFillInIntent(
            action = RandomQaAppWidgetReceiver.ACTION_TOGGLE_QUESTION,
            appWidgetId = appWidgetId,
            rowIndex = index,
            actionKind = ACTION_KIND_ROW_TOGGLE,
        )
        val rowView = RemoteViews(context.packageName, R.layout.random_qa_widget_question_row).apply {
            setTextViewText(R.id.widget_question_index, "${index + 1}.")
            setTextViewText(R.id.widget_question_text, formatWidgetMarkdown(item.question))
            setTextViewText(R.id.widget_checkbox, if (isDifficult) "✓" else "")
            setInt(
                R.id.widget_checkbox,
                "setBackgroundResource",
                if (isDifficult) R.drawable.widget_checkbox_checked_bg else R.drawable.widget_checkbox_unchecked_bg,
            )
            setTextViewText(R.id.widget_chevron, if (isExpanded) "▾" else "▸")

            if (isExpanded) {
                setViewVisibility(R.id.widget_answer_container, View.VISIBLE)
                setTextViewText(
                    R.id.widget_answer_text,
                    formatWidgetMarkdown(item.answer.ifBlank { "No answer provided." }),
                )
                setTextViewText(
                    R.id.widget_difficult_button,
                    context.getString(
                        if (isDifficult) R.string.widget_unmark_difficult else R.string.widget_mark_difficult
                    ),
                )
            } else {
                setViewVisibility(R.id.widget_answer_container, View.GONE)
            }

            if (!state.isRefreshing) {
                setOnClickFillInIntent(R.id.widget_question_root, rowToggleIntent)
                setOnClickFillInIntent(R.id.widget_question_row, rowToggleIntent)
                if (isExpanded) {
                    setOnClickFillInIntent(
                        R.id.widget_difficult_button,
                        collectionFillInIntent(
                            action = RandomQaAppWidgetReceiver.ACTION_TOGGLE_DIFFICULT,
                            appWidgetId = appWidgetId,
                            rowIndex = index,
                            actionKind = ACTION_KIND_TOGGLE_DIFFICULT,
                        ),
                    )
                    setOnClickFillInIntent(
                        R.id.widget_open_note_button,
                        collectionFillInIntent(
                            action = RandomQaAppWidgetReceiver.ACTION_OPEN_NOTE,
                            appWidgetId = appWidgetId,
                            actionKind = ACTION_KIND_OPEN_NOTE,
                        ),
                    )
                    setOnClickFillInIntent(
                        R.id.widget_open_chat_button,
                        collectionFillInIntent(
                            action = RandomQaAppWidgetReceiver.ACTION_OPEN_ROW_CHATGPT,
                            appWidgetId = appWidgetId,
                            rowIndex = index,
                            actionKind = ACTION_KIND_OPEN_ROW_CHAT,
                        ),
                    )
                }
            }
        }

        builder.addItem(randomQaItemId(item), rowView)
    }

    return builder.build()
}

internal fun buildReviewQuestionsCollectionItems(
    context: Context,
    appWidgetId: Int,
    state: ReviewQuestionsWidgetState.Loaded,
    items: List<TroubleQuestionItem>,
): RemoteViews.RemoteCollectionItems {
    val builder = RemoteViews.RemoteCollectionItems.Builder()
        .setHasStableIds(true)
        .setViewTypeCount(1)

    items.forEachIndexed { index, item ->
        val isExpanded = state.expandedItemId == item.id
        val rowToggleIntent = collectionFillInIntent(
            action = ReviewQuestionsAppWidgetReceiver.ACTION_TOGGLE_REVIEW_ANSWER,
            appWidgetId = appWidgetId,
            rowIndex = index,
            actionKind = ACTION_KIND_ROW_TOGGLE,
        )
        val rowView = RemoteViews(context.packageName, R.layout.review_questions_widget_question_row).apply {
            setTextViewText(R.id.widget_checkbox, "✓")
            setInt(R.id.widget_checkbox, "setBackgroundResource", R.drawable.widget_checkbox_checked_bg)
            setTextViewText(R.id.widget_question_topic, item.topic.ifBlank { "Unknown topic" })
            setTextViewText(R.id.widget_question_text, formatWidgetMarkdown(item.question))
            setTextViewText(R.id.widget_chevron, if (isExpanded) "▾" else "▸")

            if (isExpanded) {
                setViewVisibility(R.id.widget_answer_container, View.VISIBLE)
                setTextViewText(
                    R.id.widget_answer_text,
                    formatWidgetMarkdown(item.answer.ifBlank { "No answer provided." }),
                )
            } else {
                setViewVisibility(R.id.widget_answer_container, View.GONE)
            }

            if (!state.isRefreshing) {
                setOnClickFillInIntent(R.id.widget_review_question_root, rowToggleIntent)
                setOnClickFillInIntent(R.id.widget_review_question_row, rowToggleIntent)
                if (isExpanded) {
                    setOnClickFillInIntent(
                        R.id.widget_remove_button,
                        collectionFillInIntent(
                            action = ReviewQuestionsAppWidgetReceiver.ACTION_REMOVE_REVIEW_QUESTION,
                            appWidgetId = appWidgetId,
                            rowIndex = index,
                            actionKind = ACTION_KIND_REMOVE_REVIEW,
                        ),
                    )
                }
            }
        }

        builder.addItem(reviewQuestionItemId(item), rowView)
    }

    return builder.build()
}

internal fun widgetCollectionPendingIntentTemplate(
    context: Context,
    receiverClass: Class<*>,
): PendingIntent = PendingIntent.getBroadcast(
    context,
    0,
    Intent(context, receiverClass),
    PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_MUTABLE,
)

internal fun collectionFillInIntent(
    action: String,
    appWidgetId: Int,
    rowIndex: Int? = null,
    actionKind: String,
): Intent = Intent().apply {
    this.action = action
    putExtra(android.appwidget.AppWidgetManager.EXTRA_APPWIDGET_ID, appWidgetId)
    putExtra(EXTRA_WIDGET_ACTION_KIND, actionKind)
    rowIndex?.let { putExtra(RandomQaAppWidgetReceiver.EXTRA_TAPPED_INDEX, it) }
}

internal fun randomQaItemId(item: WidgetQaItem): Long = item.questionId.hashCode().toLong()

internal fun reviewQuestionItemId(item: TroubleQuestionItem): Long = item.id.hashCode().toLong()

internal fun isWidgetCollectionAction(actionKind: String?): Boolean =
    actionKind == ACTION_KIND_ROW_TOGGLE ||
        actionKind == ACTION_KIND_TOGGLE_DIFFICULT ||
        actionKind == ACTION_KIND_OPEN_NOTE ||
        actionKind == ACTION_KIND_OPEN_ROW_CHAT ||
        actionKind == ACTION_KIND_REMOVE_REVIEW

internal fun widgetListEmptyMessage(items: List<WidgetQaItem>, fallbackMessage: String?): String =
    fallbackMessage ?: if (items.isEmpty()) "No questions found in this note." else ""

internal fun reviewListEmptyMessage(allItems: List<TroubleQuestionItem>, visibleIds: List<String>): String =
    if (allItems.isEmpty()) "No review questions yet." else if (visibleIds.isEmpty()) {
        "No review questions in this set. Tap Refresh."
    } else {
        ""
    }
