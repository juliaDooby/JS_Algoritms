--------------------------------------------------------------------------------------------- 
⋙ ❍ Рандомизированные алгоритмы:
---
16. Задача: Рандомизированный выбор максимальной суммы подмассива
⌛ Задача: Найти подмассив с максимальной суммой, используя случайный выбор.
🎯 Решение:
```javascript
function randomMaxSubArray(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let randomStart = Math.floor(Math.random() * arr.length);
        let randomEnd = Math.floor(Math.random() * (arr.length - randomStart)) + randomStart;

        for (let j = randomStart; j <= randomEnd; j++) {
            currentSum += arr[j];
        }

        maxSum = Math.max(maxSum, currentSum);
        currentSum = 0;
    }

    return maxSum;
}

console.log(randomMaxSubArray([1, -2, 3, 4, -1, 2, 1, -5, 4]));  // Выводит максимальную сумму
```
Объяснение: В этом алгоритме случайным образом выбираются подмассивы, и вычисляется максимальная сумма для каждого из них.
--------------------------------------------------------------------------------------------- 
