--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
3. ⌛ Задача: Быстрая сортировка для строк
Условие:
Напишите быструю сортировку для массива строк, сортируя их по алфавиту.
🎯 Решение:
```javascript
function quickSortStrings(arr) {
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

  return [...quickSortStrings(left), pivot, ...quickSortStrings(right)];
}

console.log(quickSortStrings(["banana", "apple", "cherry", "date", "elderberry"]));  // ['apple', 'banana', 'cherry', 'date', 'elderberry']
```
Объяснение:
Алгоритм сортировки строк аналогичен числовой быстрой сортировке. Мы сравниваем строки по алфавиту с помощью оператора `<`, который сравнивает строки лексикографически.
--------------------------------------------------------------------------------------------- 
