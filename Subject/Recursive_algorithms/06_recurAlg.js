--------------------------------------------------------------------------------------------- 
📌 [Рекурсивные алгоритмы]:
---
6. Задача: Печать всех перестановок строки
⌛ Задача: Найти все возможные перестановки строки.
🎯 Решение:
```javascript
function getPermutations(str) {
    if (str.length === 0) return [''];
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remainingChars = str.slice(0, i) + str.slice(i + 1);
        let remainingPerms = getPermutations(remainingChars);
        for (let perm of remainingPerms) {
            result.push(char + perm);
        }
    }
    return result;
}

console.log(getPermutations("abc")); // Выводит ["abc", "acb", "bac", "bca", "cab", "cba"]
```
Объяснение: Рекурсивно перебираем каждый символ строки, генерируя все перестановки для оставшейся части строки.
--------------------------------------------------------------------------------------------- 
