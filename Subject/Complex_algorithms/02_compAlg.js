---------------------------------------------------------------------------------------------
📌 [Сложные алгоритмы]:
---------------------
⋙ ❍ Полный перебор и оптимизация перебора:
---
2. Задача: Сумма чисел, равная заданному числу
⌛ Задача: Найти все подмножества массива, сумма элементов которых равна заданному числу.
🎯 Решение с полным перебором:
```javascript
function findSubsets(arr, target) {
    const subsets = [];

    function helper(index, currentSubset, currentSum) {
        if (currentSum === target) {
            subsets.push([...currentSubset]);
            return;
        }

        for (let i = index; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            helper(i + 1, currentSubset, currentSum + arr[i]);
            currentSubset.pop();
        }
    }

    helper(0, [], 0);
    return subsets;
}

console.log(findSubsets([1, 2, 3, 4, 5], 5)); // Выводит [[2, 3], [5]]
```
Объяснение: Мы генерируем все возможные подмножества с помощью рекурсии и выбираем те, которые дают заданную сумму.
---------------------------------------------------------------------------------------------
