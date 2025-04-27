--------------------------------------------------------------------------------------------- 
⋙ ❍ Двоичный поиск:
---
6. ⌛ Задача: Поиск последнего вхождения элемента
Условие:
Найдите индекс последнего вхождения элемента в отсортированном массиве. Если элемент отсутствует, верните -1.
🎯 Решение:
```javascript
function binarySearchLastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      left = mid + 1;  // продолжаем искать в правой половине
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

let arr = [1, 3, 3, 5, 7, 9, 9];
console.log(binarySearchLastOccurrence(arr, 3));  // 2
console.log(binarySearchLastOccurrence(arr, 9));  // 6
```
Объяснение:
После нахождения целевого элемента, продолжаем искать в правой части массива, чтобы найти последнее вхождение элемента.
---------------------------------------------------------------------------------------------
