---------------------------------------------------------------------------------------------
📌 [Сложные алгоритмы]:
---------------------
⋙ ❍ Полный перебор и оптимизация перебора:
---
3. Задача: Сумма элементов массива
⌛ Задача: Найти все пары элементов в массиве, сумма которых равна заданному числу.
🎯 Решение с полным перебором:
```javascript
function findPairs(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

console.log(findPairs([1, 2, 3, 4, 5], 5)); // Выводит [[1, 4], [2, 3]]
```
Объяснение: Мы перебираем все возможные пары элементов и проверяем, их сумму.
Оптимизация:
Используем хеш-таблицу для ускорения поиска:
```javascript
function findPairsOptimized(arr, target) {
    let seen = new Set();
    let pairs = [];

    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }

    return pairs;
}

console.log(findPairsOptimized([1, 2, 3, 4, 5], 5)); // Выводит [[1, 4], [2, 3]]
```
---------------------------------------------------------------------------------------------
