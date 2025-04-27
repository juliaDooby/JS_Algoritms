--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
2. ⌛ Задача: Быстрая сортировка с оптимизацией для маленьких массивов
Условие:
Для маленьких массивов (например, длиной меньше 10 элементов) используйте сортировку вставками вместо быстрой сортировки.
🎯 Решение:
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function quickSortOptimized(arr) {
  if (arr.length <= 1) return arr;
  if (arr.length <= 10) return insertionSort(arr);

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortOptimized(left), pivot, ...quickSortOptimized(right)];
}

console.log(quickSortOptimized([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));  // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Объяснение:
Если массив мал, мы используем сортировку вставками, которая будет работать быстрее, чем быстрая сортировка для небольших массивов из-за меньших накладных расходов на рекурсию.
--------------------------------------------------------------------------------------------- 
