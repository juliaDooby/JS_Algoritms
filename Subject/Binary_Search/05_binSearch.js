--------------------------------------------------------------------------------------------- 
⋙ ❍ Двоичный поиск:
---
5. ⌛ Задача: Поиск первого вхождения элемента
Условие:
Найдите индекс первого вхождения элемента в отсортированном массиве. Если элемент отсутствует, верните -1.
🎯 Решение:
```javascript
function binarySearchFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      right = mid - 1;  // продолжим искать в левой половине
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

let arr = [1, 3, 3, 5, 7, 9, 9];
console.log(binarySearchFirstOccurrence(arr, 3));  // 1
console.log(binarySearchFirstOccurrence(arr, 9));  // 5
```
Объяснение:
После нахождения целевого элемента, мы продолжаем искать в левой части массива, чтобы найти первое вхождение элемента.
--------------------------------------------------------------------------------------------- 
