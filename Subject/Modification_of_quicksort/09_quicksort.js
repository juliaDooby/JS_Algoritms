--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
9. ⌛ Задача: Быстрая сортировка с поддержкой сортировки объектов по свойствам
Условие:
Напишите быструю сортировку, которая сортирует массив объектов по значению их свойств.
🎯 Решение:
```javascript
function quickSortObjects(arr, key) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1][key];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][key] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortObjects(left, key), arr[arr.length - 1], ...quickSortObjects(right, key)];
}

const arr = [
  { id: 1, name: 'Alice' },
  { id: 3, name: 'Charlie' },
  { id: 2, name: 'Bob' }
];

console.log(quickSortObjects(arr, 'id'));
// [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' } ]
```
Объяснение:
Алгоритм сортирует объекты массива по значению указанного свойства. Мы сравниваем объекты по значению их свойства и выполняем быструю сортировку.
--------------------------------------------------------------------------------------------- 
