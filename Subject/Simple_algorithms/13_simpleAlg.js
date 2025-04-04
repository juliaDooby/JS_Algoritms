---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
13. Алгоритм Кнута-Морриса-Пратта (KMP)
⌛ Задача: Улучшить поиск, используя предварительную обработку подстроки `needle` для быстрого пропуска несовпадений.
🎯 Решение:
```javascript
function kmpSearch(haystack, needle) {
    if (needle.length === 0) return 0;

    let lps = computeLPS(needle);
    let i = 0, j = 0;

    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            if (j === needle.length) return i - j;
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1;
}

function computeLPS(pattern) {
    let lps = Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

console.log(kmpSearch("hello world", "world")); // 6
console.log(kmpSearch("hello world", "abc"));   // -1
```
Объяснение:
1. Предварительно строим LPS-массив (`computeLPS`), который помогает пропускать уже проверенные символы.
2. Двигаем два указателя (`i` по `haystack`, `j` по `needle`).
3. Если символы совпали, двигаем оба указателя вперед.
4. Если несовпадение, используем `lps` для быстрого сдвига `j`.
5. Работает за O(N + M).
---------------------------------------------------------------------------------------------
