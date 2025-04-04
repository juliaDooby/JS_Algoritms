---------------------------------------------------------------------------------------------
📌 [Простые алгоритмы]:
---------------------
⋙ ❍ Поиск подстроки в строке:
---
18. Метод `split()` + проверка наличия
⌛ Задача: Проверить, содержится ли подстрока `needle` в `haystack`, используя `split()`.
🎯 Решение:
```javascript
function containsUsingSplit(haystack, needle) {
    return haystack.split(needle).length > 1;
}

console.log(containsUsingSplit("hello world", "world")); // true
console.log(containsUsingSplit("hello world", "abc"));   // false
```
Объяснение:
- `split(needle)` разрежет `haystack` по `needle`.
- Если `needle` найден, длина массива будет > 1.
- Это не самый эффективный способ, но интересный вариант.
---------------------------------------------------------------------------------------------
