--------------------------------------------------------------------------------------------- 
⋙ ❍ Поиск доминирующего элемента:
---
2. ⌛ Задача: Поиск доминирующего элемента с использованием сортировки
Условие:
Используя сортировку массива, найдите доминирующий элемент, если таковой существует.
🎯 Решение:
```javascript
function findDominantElementWithSort(arr) {
  arr.sort();
  const n = arr.length;

  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
      if (count > n / 2) {
        return arr[i];
      }
    } else {
      count = 1;
    }
  }
  return -1;
}

console.log(findDominantElementWithSort([3, 3, 4, 2, 4, 4, 2, 4, 4]));  // 4
console.log(findDominantElementWithSort([1, 1, 1, 2, 2]));  // -1
```
Объяснение:
После сортировки массива доминирующий элемент (если он существует) будет располагаться в середине массива, и его частота будет больше половины размера массива.
--------------------------------------------------------------------------------------------- 
