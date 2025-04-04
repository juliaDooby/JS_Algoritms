--------------------------------------------------------------------------------------------- 
⋙ ❍ Алгоритмы «Разделяй и властвуй»:
---
1. Задача: Сортировка слиянием (Merge Sort)
⌛ Задача: Отсортировать массив с использованием алгоритма сортировки слиянием.
🎯 Решение:
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i), right.slice(j));
}

console.log(mergeSort([3, 6, 8, 10, 1, 2, 1])); // Выводит [1, 1, 2, 3, 6, 8, 10]
```
Объяснение: Алгоритм разделяет массив на две половины, сортирует их рекурсивно, а затем сливает отсортированные массивы в один отсортированный массив.
--------------------------------------------------------------------------------------------- 
