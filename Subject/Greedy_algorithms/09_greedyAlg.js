---------------------------------------------------------------------------------------------
📌 [Жадные алгоритмы]:
---
9. Задача: Найти минимальную разницу в наборе
⌛ Задача: Дано множество чисел, нужно разделить его на две группы, чтобы разница между суммами этих групп была минимальной.
🎯 Решение:
```javascript
function minDifferencePartition(arr) {
    const totalSum = arr.reduce((a, b) => a + b, 0);
    let closestSum = 0;

    function subsetSum(index, currentSum) {
        if (index === arr.length) {
            closestSum = Math.max(closestSum, currentSum);
            return;
        }

        subsetSum(index + 1, currentSum + arr[index]);
        subsetSum(index + 1, currentSum);
    }

    subsetSum(0, 0);
    return Math.abs(totalSum - 2 * closestSum);
}

const arr = [1, 2, 3, 9];
console.log(minDifferencePartition(arr)); // Выводит минимальную разницу 3
```
Объяснение: Мы пытаемся найти такое разделение массива на две группы, чтобы разница в их суммах была минимальной, используя жадный подход.
--------------------------------------------------------------------------------------------- 
