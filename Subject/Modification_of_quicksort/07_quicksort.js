--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
7. ⌛ Задача: Быстрая сортировка с ограничением по времени
Условие:
Измените быструю сортировку, чтобы она завершалась, если время работы превышает заданный лимит.
🎯 Решение:
```javascript
function quickSortWithTimeLimit(arr, timeLimit) {
  const startTime = Date.now();

  function helper(arr) {
    if (Date.now() - startTime > timeLimit) {
      console.log("Time limit exceeded");
      return arr;
    }

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

  return helper(arr);
}

console.log(quickSortWithTimeLimit([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 100));  // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Объяснение:
Реализуем ограничение по времени, используя функцию `Date.now()` для отслеживания времени работы. Если время превышает лимит, алгоритм завершает работу.
--------------------------------------------------------------------------------------------- 
