---------------------------------------------------------------------------------------------
📌 [Сложные алгоритмы]:
---------------------
⋙ ❍ Полный перебор и оптимизация перебора:
---
6. Задача: Сумма чисел в сочетаниях
⌛ Задача: Найти все сочетания чисел из массива, сумма которых равна заданному числу.
🎯 Решение с полным перебором:
```javascript
function combinationSum(arr, target) {
    const result = [];

    function findCombination(start, currentSum, currentCombo) {
        if (currentSum === target) {
            result.push([...currentCombo]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            if (currentSum + arr[i] > target) continue;
            currentCombo.push(arr[i]);
            findCombination(i, currentSum + arr[i], currentCombo);
            currentCombo.pop();
        }
    }

    findCombination(0, 0, []);
    return result;
}

console.log(combinationSum([2, 3, 6, 7], 7)); // Выводит [[7], [2, 2, 3]]
```
Объяснение: Это решение генерирует все возможные сочетания чисел и фильтрует те, сумма которых равна целевому числу.
---------------------------------------------------------------------------------------------
