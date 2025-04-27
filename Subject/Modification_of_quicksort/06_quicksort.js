--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
6. ⌛ Задача: Быстрая сортировка с подсчетом частоты элементов
Условие:
Напишите быструю сортировку, которая находит частоту каждого элемента в массиве после сортировки.
🎯 Решение:
```javascript
function quickSortWithFrequency(arr) {
  const frequency = {};

  function helper(arr) {
    if (arr.length <= 1) return arr;

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

    return [...helper(left), pivot, ...helper(right)];
  }

  const sortedArr = helper(arr);

  sortedArr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  return frequency;
}

console.log(quickSortWithFrequency([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
// { '1': 2, '2': 1, '3': 2, '4': 1, '5': 3, '6': 1, '9': 1 }
```
Объяснение:
Сортируем массив, а затем подсчитываем, сколько раз каждый элемент встречается в отсортированном массиве.
--------------------------------------------------------------------------------------------- 
