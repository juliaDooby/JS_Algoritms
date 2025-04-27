--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
1. ⌛ Задача: Быстрая сортировка с выбором случайного опорного элемента
Условие:
Модифицируйте быструю сортировку, чтобы она использовала случайный элемент как опорный.
🎯 Решение:
```javascript
function quickSortRandomPivot(arr) {
  if (arr.length <= 1) return arr;

  const randomIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[randomIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== randomIndex) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return [...quickSortRandomPivot(left), pivot, ...quickSortRandomPivot(right)];
}

console.log(quickSortRandomPivot([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));  // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Объяснение:
Здесь мы выбираем случайный индекс как опорный элемент. Это помогает избежать худшего случая для уже отсортированных или почти отсортированных массивов.
--------------------------------------------------------------------------------------------- 
