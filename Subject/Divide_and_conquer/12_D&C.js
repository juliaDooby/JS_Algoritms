---------------------------------------------------------------------------------------------   
⋙ ❍ Задача Разделяй и властвуй:
---
12. ⌛ Задача: Сортировка строк по длине
Условие:
Отсортируйте массив строк по их длине.
🎯 Решение:
```javascript
function sortByLength(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = sortByLength(arr.slice(0, mid));
  const right = sortByLength(arr.slice(mid));

  return mergeStrings(left, right);
}

function mergeStrings(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].length < right[j].length) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i), right.slice(j));
}

let arr = ["apple", "banana", "kiwi", "orange"];
console.log(sortByLength(arr));  // [ 'kiwi', 'apple', 'orange', 'banana' ]
```
Объяснение:
Массив строк разделяется и сортируется по длине с использованием слияния строк, где строки с меньшей длиной идут первыми.
---------------------------------------------------------------------------------------------   
