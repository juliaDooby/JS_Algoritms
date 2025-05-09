--------------------------------------------------------------------------------------------- 
⋙ ❍ Двоичный поиск:
---
13. ⌛ Задача: Найти позицию, где элемент больше или равен числу
Условие:
Найдите индекс первого элемента в отсортированном массиве, который больше или равен заданному числу.
🎯 Решение:
```javascript
function findGreaterOrEqual(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      right = mid;  // продолжаем искать слева
    } else {
      left = mid + 1;
    }
  }
  return left;
}

let arr = [1, 2, 8, 10, 10, 12];
console.log(findGreaterOrEqual(arr, 5));  // 2
console.log(findGreaterOrEqual(arr, 10)); // 3
```
Объяснение:
Этот алгоритм находит индекс первого элемента, который больше или равен целевому числу.
--------------------------------------------------------------------------------------------- 
