--------------------------------------------------------------------------------------------- 
⋙ ❍ Рандомизированные алгоритмы:
---
11. Задача: Рандомизированный поиск медианы
⌛ Задача: Найти медиану массива с помощью рандомизированного алгоритма.
🎯 Решение:
```javascript
function randomizedSelect(arr, k) {
    if (arr.length === 1) return arr[0];

    let pivotIndex = Math.floor(Math.random() * arr.length);
    let pivot = arr[pivotIndex];
    let left = [], right = [], pivotCount = 0;

    for (let num of arr) {
        if (num < pivot) left.push(num);
        else if (num > pivot) right.push(num);
        else pivotCount++;
    }

    if (k < left.length) return randomizedSelect(left, k);
    else if (k < left.length + pivotCount) return pivot;
    else return randomizedSelect(right, k - left.length - pivotCount);
}

console.log(randomizedSelect([3, 2, 1, 5, 4, 6], 3));  // Выводит медиану
```
Объяснение: Алгоритм случайным образом выбирает опорный элемент и делит массив на две части, затем рекурсивно выбирает нужный элемент. Если количество элементов меньше, чем медиана, он продолжает поиск в правой части массива.
--------------------------------------------------------------------------------------------- 
