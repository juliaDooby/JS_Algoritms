--------------------------------------------------------------------------------------------- 
⋙ ❍ Двоичный поиск:
---
8. ⌛ Задача: Проверка, существует ли элемент в массиве
Условие:
Проверьте, существует ли элемент в отсортированном массиве с помощью двоичного поиска.
🎯 Решение:
```javascript
function elementExists(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

let arr = [1, 3, 5, 7, 9];
console.log(elementExists(arr, 5));  // true
console.log(elementExists(arr, 6));  // false
```
Объяснение:
Простой двоичный поиск, который возвращает `true`, если элемент найден, и `false` в противном случае.
--------------------------------------------------------------------------------------------- 
