--------------------------------------------------------------------------------------------- 
⋙ ❍ Рандомизированные алгоритмы:
---
Эти алгоритмы используют случайность в процессе принятия решений для решения задачи.
0. Задача: Рандомизированная сортировка (Randomized Quick Sort)
⌛ Задача: Реализовать рандомизированный алгоритм быстрой сортировки.
🎯 Решение:
```javascript
function randomizedQuickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivotIndex = Math.floor(Math.random() * arr.length);  // Рандомный выбор опорного элемента
    let pivot = arr[pivotIndex];
    let left = [], right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== pivotIndex) {
            if (arr[i] < pivot) left.push(arr[i]);
            else right.push(arr[i]);
        }
    }

    return [...randomizedQuickSort(left), pivot, ...randomizedQuickSort(right)];
}

console.log(randomizedQuickSort([3, 6, 8, 10, 1, 2, 1]));  // Выводит отсортированный массив
```
Объяснение: Алгоритм использует случайный выбор опорного элемента, что помогает избежать худшего случая, когда все элементы массива уже отсортированы.
--------------------------------------------------------------------------------------------- 
