---------------------------------------------------------------------------------------------
📌 [Простые алгоритмы]:
---------------------
⋙ ❍ Поиск подстроки в строке:
---
14. Алгоритм Рабина-Карпа (поиск с хешированием)
⌛ Задача: Использовать хеш-функцию для быстрого сравнения подстрок.
🎯 Решение:
```javascript
function rabinKarp(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
    if (m > n) return -1;

    let base = 26;
    let mod = 1e9 + 7;

    function hash(s) {
        let h = 0;
        for (let char of s) {
            h = (h * base + char.charCodeAt(0)) % mod;
        }
        return h;
    }

    let needleHash = hash(needle);
    let hayHash = hash(haystack.substring(0, m));

    if (needleHash === hayHash && haystack.substring(0, m) === needle) return 0;

    let power = 1;
    for (let i = 0; i < m - 1; i++) {
        power = (power * base) % mod;
    }

    for (let i = 1; i <= n - m; i++) {
        hayHash = (hayHash - haystack.charCodeAt(i - 1) * power % mod + mod) % mod;
        hayHash = (hayHash * base + haystack.charCodeAt(i + m - 1)) % mod;

        if (hayHash === needleHash && haystack.substring(i, i + m) === needle) {
            return i;
        }
    }

    return -1;
}

console.log(rabinKarp("hello world", "world")); // 6
console.log(rabinKarp("hello world", "abc"));   // -1
```
Объяснение:
1. Вычисляем хеш `needle`.
2. Вычисляем хеш первой подстроки `haystack`.
3. Используем rolling hash: вычисляем новые хеши за O(1), удаляя старый символ и добавляя новый.
4. Сравниваем хеши, а затем проверяем строки на совпадение.
5. Работает в среднем за O(N + M), но в худшем случае O(N * M) при коллизиях.
---
Вывод:
- `indexOf` / `includes` — простейшие и быстрые для маленьких строк.
- `Brute Force` — простой алгоритм, но медленный.
- `KMP` — улучшает поиск с помощью LPS-массива, O(N + M).
- `Rabin-Karp` — полезен для поиска нескольких подстрок, особенно в больших текстах.
---------------------------------------------------------------------------------------------
