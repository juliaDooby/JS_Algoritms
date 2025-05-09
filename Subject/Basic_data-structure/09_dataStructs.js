---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
9. Алгоритм сортировки слиянием
⌛ Задача: Напишите функцию для сортировки массива с использованием алгоритма сортировки слиянием.
🎯 Решение:
```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([10, 2, 3, 4, 1])); // [1, 2, 3, 4, 10]
```
Объяснение:
- Алгоритм сортировки слиянием делит массив на более мелкие части, сортирует их рекурсивно и затем сливает отсортированные части в один отсортированный массив.
---------------------------------------------------------------------------------------------
