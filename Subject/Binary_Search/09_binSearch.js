--------------------------------------------------------------------------------------------- 
⋙ ❍ Двоичный поиск:
---
9. ⌛ Задача: Найти элемент, который не повторяется
Условие:
В массиве, где все элементы встречаются дважды, найдите элемент, который встречается один раз. Массив отсортирован.
🎯 Решение:
```javascript
function findSingleElement(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid % 2 === 0) {
      if (arr[mid] === arr[mid + 1]) {
        left = mid + 2;  // ищем в правой половине
      } else {
        right = mid;  // ищем в левой половине
      }
    } else {
      if (arr[mid] === arr[mid - 1]) {
        left = mid + 1;  // ищем в правой половине
      } else {
        right = mid - 1;  // ищем в левой половине
      }
    }
  }
  return arr[left];
}

let arr = [1, 1, 3, 3, 5, 5, 7];
console.log(findSingleElement(arr));  // 7
```
Объяснение:
Используется двоичный поиск, но с дополнительной проверкой четности индекса. Если индексы элементов совпадают, продолжаем поиск в правой части, иначе — в левой.
--------------------------------------------------------------------------------------------- 
