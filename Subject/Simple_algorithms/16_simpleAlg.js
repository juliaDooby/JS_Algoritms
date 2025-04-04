---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
16. Метод `match()` с регулярным выражением
⌛ Задача: Найти все вхождения подстроки `needle` в строке `haystack`.
🎯 Решение:
```javascript
function findAllOccurrences(haystack, needle) {
    let matches = haystack.match(new RegExp(needle, "g"));
    return matches ? matches.length : 0;
}

console.log(findAllOccurrences("banana", "an")); // 2
console.log(findAllOccurrences("hello world", "abc")); // 0
```
Объяснение:
- `match()` с флагом `"g"` находит все вхождения.
- Возвращает массив совпадений или `null`, если совпадений нет.
- Удобно для подсчета количества вхождений.
---------------------------------------------------------------------------------------------
