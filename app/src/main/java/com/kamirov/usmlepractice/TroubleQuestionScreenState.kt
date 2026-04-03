package com.kamirov.usmlepractice

internal sealed interface TroubleQuestionScreenState {
    data object Loading : TroubleQuestionScreenState

    data class Loaded(
        val items: List<TroubleQuestionItem>,
    ) : TroubleQuestionScreenState

    data class Empty(
        val title: String,
        val message: String,
    ) : TroubleQuestionScreenState

    data class Error(
        val message: String,
    ) : TroubleQuestionScreenState
}

internal fun TroubleQuestionLoadResult.toScreenState(): TroubleQuestionScreenState =
    when (this) {
        is TroubleQuestionLoadResult.Error -> TroubleQuestionScreenState.Error(message)
        is TroubleQuestionLoadResult.Success -> {
            if (items.isEmpty()) {
                TroubleQuestionScreenState.Empty(
                    title = "No trouble questions yet",
                    message = "Check a question in the widget and it will appear here.",
                )
            } else {
                TroubleQuestionScreenState.Loaded(items)
            }
        }
    }
