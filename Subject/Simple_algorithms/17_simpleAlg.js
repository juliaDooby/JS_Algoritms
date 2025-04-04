---------------------------------------------------------------------------------------------
📌 [Простые алгоритмы]:
---------------------
⋙ ❍ Поиск подстроки в строке:
---
17. Метод `slice()` + сравнение
⌛ Задача: Найти индекс первого вхождения `needle` в `haystack`, используя `slice()`.
🎯 Решение:
```javascript
function sliceSearch(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        if (haystack.slice(i, i + m) === needle) {
            return i;
        }
    }

    return -1;
}

console.log(sliceSearch("hello world", "world")); // 6
console.log(sliceSearch("hello world", "abc"));   // -1
```
Объяснение:
- Вместо посимвольного сравнения используем `slice(i, i + m)`.
- Работает за O(N * M) в худшем случае.
---------------------------------------------------------------------------------------------
