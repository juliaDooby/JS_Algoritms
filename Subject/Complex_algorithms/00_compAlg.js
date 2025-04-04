---------------------------------------------------------------------------------------------
📌 [Сложные алгоритмы]:
---------------------
⋙ ❍ Полный перебор и оптимизация перебора:
---
0. Задача: Нахождение максимальной суммы подмассива
⌛ Задача: Найти подмассив с максимальной суммой в массиве чисел.
🎯 Решение с полным перебором:
```javascript
function maxSubarraySum(arr) {
    let maxSum = -Infinity; // Начальная максимальная сумма

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let currentSum = 0;
            for (let k = i; k <= j; k++) {
                currentSum += arr[k];
            }
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(arr)); // Выводит 6 (подмассив [4, -1, 2, 1])
```
Объяснение: Здесь мы проходим через все возможные подмассивы с помощью трех вложенных циклов и считаем их суммы.
Оптимизация:
Используем алгоритм Кадана для поиска максимальной суммы подмассива за O(n):
```javascript
function maxSubarraySumOptimized(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSubarraySumOptimized(arr)); // Выводит 6
```
---------------------------------------------------------------------------------------------
