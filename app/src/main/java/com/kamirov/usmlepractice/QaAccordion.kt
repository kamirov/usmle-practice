package com.kamirov.usmlepractice

internal data class AccordionQaRowViewData(
    val index: Int,
    val item: QaItem,
    val isExpanded: Boolean,
)

internal fun toggleExpandedIndex(
    currentExpandedIndex: Int?,
    tappedIndex: Int,
): Int? = if (currentExpandedIndex == tappedIndex) null else tappedIndex

internal fun ParsedNoteViewData.accordionRows(
    expandedIndex: Int?,
): List<AccordionQaRowViewData> = qaItems.mapIndexed { index, item ->
    AccordionQaRowViewData(
        index = index,
        item = item,
        isExpanded = expandedIndex == index,
    )
}
