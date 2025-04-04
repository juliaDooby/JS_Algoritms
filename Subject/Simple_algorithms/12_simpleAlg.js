---------------------------------------------------------------------------------------------
📌 [Простые алгоритмы]:
---------------------
⋙ ❍ Поиск подстроки в строке:
---
12. Алгоритм двух указателей (Brute Force)
⌛ Задача: Найти индекс первого вхождения `needle` в `haystack` без использования встроенных функций.
🎯 Решение:
```javascript
function bruteForceSearch(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === m) return i;
    }

    return -1;
}

console.log(bruteForceSearch("hello world", "world")); // 6
console.log(bruteForceSearch("hello world", "abc"));   // -1
```
Объяснение:
1. Проходим по `haystack` от `i = 0` до `i = N - M`.
2. Для каждого `i` проверяем, совпадает ли `needle` с `haystack[i ... i+M]`.
3. Если нашли совпадение, возвращаем `i`.
4. Работает за O(N * M) в худшем случае.
---------------------------------------------------------------------------------------------
