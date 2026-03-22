package com.kamirov.usmlepractice

import android.content.Context
import kotlin.random.Random

internal data class TroubleQuestionItem(
    val id: String,
    val topic: String,
    val question: String,
    val answer: String,
    val notePath: String,
    val noteFile: String,
    val createdAt: String,
    val updatedAt: String,
    val timesMarked: Int,
)

internal data class TroubleQuestionStore(
    val version: Int = CURRENT_TROUBLE_STORE_VERSION,
    val items: List<TroubleQuestionItem> = emptyList(),
)

internal sealed interface TroubleQuestionLoadResult {
    data class Success(
        val items: List<TroubleQuestionItem>,
    ) : TroubleQuestionLoadResult

    data class Error(
        val message: String,
    ) : TroubleQuestionLoadResult
}

internal class TroubleQuestionRepository internal constructor(
    private val storage: TroubleQuestionStorage,
    private val clock: () -> String = { java.time.Instant.now().toString() },
) {
    constructor(
        context: Context,
        clock: () -> String = { java.time.Instant.now().toString() },
    ) : this(
        storage = SharedPrefsTroubleQuestionStorage(context),
        clock = clock,
    )

    fun loadAll(): TroubleQuestionLoadResult {
        val raw = storage.read()
        if (raw.isNullOrBlank()) {
            return TroubleQuestionLoadResult.Success(emptyList())
        }

        return try {
            TroubleQuestionLoadResult.Success(parseTroubleQuestionStore(raw).items)
        } catch (_: IllegalArgumentException) {
            TroubleQuestionLoadResult.Error("Trouble-question storage is malformed.")
        }
    }

    fun loadIds(): Set<String> =
        when (val result = loadAll()) {
            is TroubleQuestionLoadResult.Success -> result.items.mapTo(linkedSetOf()) { it.id }
            is TroubleQuestionLoadResult.Error -> emptySet()
        }

    fun contains(id: String): Boolean = id in loadIds()

    fun toggle(
        noteTitle: String,
        notePathKey: String,
        item: WidgetQaItem,
    ): Boolean {
        val currentStore = loadStoreForMutation()
        val existing = currentStore.items.associateBy { it.id }.toMutableMap()
        val now = clock()
        val current = existing[item.questionId]

        if (current == null) {
            existing[item.questionId] = TroubleQuestionItem(
                id = item.questionId,
                topic = noteTitle.displayTopicTitle(),
                question = item.question,
                answer = item.answer,
                notePath = notePathKey,
                noteFile = noteTitle,
                createdAt = now,
                updatedAt = now,
                timesMarked = 1,
            )
            saveStore(TroubleQuestionStore(items = existing.values.toList()))
            return true
        }

        existing.remove(item.questionId)
        saveStore(TroubleQuestionStore(items = existing.values.toList()))
        return false
    }

    fun mark(
        noteTitle: String,
        notePathKey: String,
        item: WidgetQaItem,
    ) {
        val currentStore = loadStoreForMutation()
        val existing = currentStore.items.associateBy { it.id }.toMutableMap()
        val now = clock()
        val current = existing[item.questionId]

        existing[item.questionId] = if (current == null) {
            TroubleQuestionItem(
                id = item.questionId,
                topic = noteTitle.displayTopicTitle(),
                question = item.question,
                answer = item.answer,
                notePath = notePathKey,
                noteFile = noteTitle,
                createdAt = now,
                updatedAt = now,
                timesMarked = 1,
            )
        } else {
            current.copy(
                topic = noteTitle.displayTopicTitle(),
                question = item.question,
                answer = item.answer,
                notePath = notePathKey,
                noteFile = noteTitle,
                updatedAt = now,
                timesMarked = current.timesMarked + 1,
            )
        }

        saveStore(TroubleQuestionStore(items = existing.values.toList()))
    }

    fun shuffledItems(random: Random = Random.Default): TroubleQuestionLoadResult =
        when (val result = loadAll()) {
            is TroubleQuestionLoadResult.Success -> TroubleQuestionLoadResult.Success(
                shuffleTroubleQuestionItems(result.items, random)
            )

            is TroubleQuestionLoadResult.Error -> result
        }

    private fun loadStoreForMutation(): TroubleQuestionStore {
        val raw = storage.read()
        if (raw.isNullOrBlank()) {
            return TroubleQuestionStore()
        }

        return try {
            parseTroubleQuestionStore(raw)
        } catch (_: IllegalArgumentException) {
            TroubleQuestionStore()
        }
    }

    private fun saveStore(store: TroubleQuestionStore) {
        storage.write(serializeTroubleQuestionStore(store))
    }
}

internal fun shuffleTroubleQuestionItems(
    items: List<TroubleQuestionItem>,
    random: Random,
): List<TroubleQuestionItem> {
    val copy = items.toMutableList()
    for (index in copy.lastIndex downTo 1) {
        val target = random.nextInt(index + 1)
        val currentItem = copy[index]
        copy[index] = copy[target]
        copy[target] = currentItem
    }
    return copy
}

internal interface TroubleQuestionStorage {
    fun read(): String?
    fun write(value: String)
}

private class SharedPrefsTroubleQuestionStorage(
    context: Context,
) : TroubleQuestionStorage {
    private val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)

    override fun read(): String? = prefs.getString(KEY_STORE_JSON, null)

    override fun write(value: String) {
        prefs.edit().putString(KEY_STORE_JSON, value).apply()
    }

    private companion object {
        private const val PREFS_NAME = "trouble_question_store"
        private const val KEY_STORE_JSON = "store_json"
    }
}

internal fun parseTroubleQuestionStore(raw: String): TroubleQuestionStore {
    val version = parseTopLevelJsonFields(raw)["version"]?.toIntOrNull() ?: return TroubleQuestionStore()
    if (version != CURRENT_TROUBLE_STORE_VERSION) {
        return TroubleQuestionStore()
    }

    val itemsArray = extractArrayValue(raw, "items") ?: return TroubleQuestionStore()
    val items = linkedMapOf<String, TroubleQuestionItem>()

    for (item in splitTopLevelJsonObjects(itemsArray)) {
        val parsed = item.toTroubleQuestionItemOrNull() ?: continue
        items[parsed.id] = parsed
    }

    return TroubleQuestionStore(
        version = CURRENT_TROUBLE_STORE_VERSION,
        items = items.values.toList(),
    )
}

internal fun serializeTroubleQuestionStore(store: TroubleQuestionStore): String {
    val serializedItems = store.items.joinToString(
        separator = ",",
        prefix = "[",
        postfix = "]",
    ) { item ->
        buildString {
            append('{')
            append("\"id\":\"").append(item.id.escapeJson()).append("\",")
            append("\"topic\":\"").append(item.topic.escapeJson()).append("\",")
            append("\"question\":\"").append(item.question.escapeJson()).append("\",")
            append("\"answer\":\"").append(item.answer.escapeJson()).append("\",")
            append("\"notePath\":\"").append(item.notePath.escapeJson()).append("\",")
            append("\"noteFile\":\"").append(item.noteFile.escapeJson()).append("\",")
            append("\"createdAt\":\"").append(item.createdAt.escapeJson()).append("\",")
            append("\"updatedAt\":\"").append(item.updatedAt.escapeJson()).append("\",")
            append("\"timesMarked\":").append(item.timesMarked)
            append('}')
        }
    }

    return buildString {
        append('{')
        append("\"version\":").append(CURRENT_TROUBLE_STORE_VERSION).append(',')
        append("\"items\":").append(serializedItems)
        append('}')
    }
}

private fun String.toTroubleQuestionItemOrNull(): TroubleQuestionItem? {
    val fields = parseTopLevelJsonFields(this)
    val id = fields["id"]?.takeIf(String::isNotBlank) ?: return null
    return TroubleQuestionItem(
        id = id,
        topic = fields["topic"].orEmpty(),
        question = fields["question"].orEmpty(),
        answer = fields["answer"].orEmpty(),
        notePath = fields["notePath"].orEmpty(),
        noteFile = fields["noteFile"].orEmpty(),
        createdAt = fields["createdAt"].orEmpty(),
        updatedAt = fields["updatedAt"].orEmpty(),
        timesMarked = fields["timesMarked"]?.toIntOrNull()?.takeIf { it > 0 } ?: 1,
    )
}

private fun parseTopLevelJsonFields(raw: String): Map<String, String> {
    val trimmed = raw.trim()
    if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) {
        throw IllegalArgumentException("Expected JSON object.")
    }

    val fields = linkedMapOf<String, String>()
    var index = 1
    while (index < trimmed.length - 1) {
        index = skipWhitespaceAndCommas(trimmed, index)
        if (index >= trimmed.length - 1) {
            break
        }

        val keyResult = readJsonString(trimmed, index)
        val key = keyResult.value
        index = skipWhitespace(trimmed, keyResult.nextIndex)
        if (trimmed.getOrNull(index) != ':') {
            throw IllegalArgumentException("Expected ':' after key.")
        }

        index = skipWhitespace(trimmed, index + 1)
        val valueResult = readJsonValue(trimmed, index)
        fields[key] = valueResult.value
        index = valueResult.nextIndex
    }

    return fields
}

private fun extractArrayValue(raw: String, key: String): String? =
    parseTopLevelJsonFields(raw)[key]

private fun splitTopLevelJsonObjects(arrayRaw: String): List<String> {
    val trimmed = arrayRaw.trim()
    if (!trimmed.startsWith("[") || !trimmed.endsWith("]")) {
        throw IllegalArgumentException("Expected JSON array.")
    }

    val objects = mutableListOf<String>()
    var index = 1
    while (index < trimmed.length - 1) {
        index = skipWhitespaceAndCommas(trimmed, index)
        if (index >= trimmed.length - 1) {
            break
        }

        if (trimmed[index] != '{') {
            throw IllegalArgumentException("Expected JSON object in array.")
        }

        val end = findClosingIndex(trimmed, index, '{', '}')
        objects += trimmed.substring(index, end + 1)
        index = end + 1
    }

    return objects
}

private data class JsonToken(
    val value: String,
    val nextIndex: Int,
)

private fun readJsonValue(raw: String, startIndex: Int): JsonToken =
    when (raw.getOrNull(startIndex)) {
        '"' -> readJsonString(raw, startIndex)
        '{' -> {
            val end = findClosingIndex(raw, startIndex, '{', '}')
            JsonToken(raw.substring(startIndex, end + 1), end + 1)
        }

        '[' -> {
            val end = findClosingIndex(raw, startIndex, '[', ']')
            JsonToken(raw.substring(startIndex, end + 1), end + 1)
        }

        else -> {
            var index = startIndex
            while (index < raw.length && raw[index] !in charArrayOf(',', '}', ']')) {
                index += 1
            }
            JsonToken(raw.substring(startIndex, index).trim(), index)
        }
    }

private fun readJsonString(raw: String, startIndex: Int): JsonToken {
    if (raw.getOrNull(startIndex) != '"') {
        throw IllegalArgumentException("Expected string.")
    }

    val out = StringBuilder()
    var index = startIndex + 1
    while (index < raw.length) {
        val current = raw[index]
        if (current == '\\') {
            val escaped = raw.getOrNull(index + 1) ?: throw IllegalArgumentException("Invalid escape.")
            out.append(
                when (escaped) {
                    '\\' -> '\\'
                    '"' -> '"'
                    'n' -> '\n'
                    'r' -> '\r'
                    't' -> '\t'
                    else -> escaped
                }
            )
            index += 2
            continue
        }

        if (current == '"') {
            return JsonToken(out.toString(), index + 1)
        }

        out.append(current)
        index += 1
    }

    throw IllegalArgumentException("Unterminated string.")
}

private fun findClosingIndex(
    raw: String,
    startIndex: Int,
    openChar: Char,
    closeChar: Char,
): Int {
    var depth = 0
    var inString = false
    var escaped = false

    for (index in startIndex until raw.length) {
        val current = raw[index]

        if (escaped) {
            escaped = false
            continue
        }

        if (current == '\\') {
            escaped = true
            continue
        }

        if (current == '"') {
            inString = !inString
            continue
        }

        if (inString) {
            continue
        }

        if (current == openChar) {
            depth += 1
        } else if (current == closeChar) {
            depth -= 1
            if (depth == 0) {
                return index
            }
        }
    }

    throw IllegalArgumentException("Unterminated JSON structure.")
}

private fun skipWhitespace(raw: String, index: Int): Int {
    var current = index
    while (current < raw.length && raw[current].isWhitespace()) {
        current += 1
    }
    return current
}

private fun skipWhitespaceAndCommas(raw: String, index: Int): Int {
    var current = index
    while (current < raw.length && (raw[current].isWhitespace() || raw[current] == ',')) {
        current += 1
    }
    return current
}

private fun String.escapeJson(): String = buildString(length) {
    for (char in this@escapeJson) {
        when (char) {
            '\\' -> append("\\\\")
            '"' -> append("\\\"")
            '\n' -> append("\\n")
            '\r' -> append("\\r")
            '\t' -> append("\\t")
            else -> append(char)
        }
    }
}

internal fun String.displayTopicTitle(): String =
    replace(Regex("\\.md$", RegexOption.IGNORE_CASE), "")

private const val CURRENT_TROUBLE_STORE_VERSION = 1
