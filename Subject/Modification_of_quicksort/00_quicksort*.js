--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
1. ⌛ Задача: Классическая быстрая сортировка
Условие:
Напишите функцию быстрой сортировки, которая сортирует массив чисел.
🎯 Решение:
```javascript
function quickSort(arr) {
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

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));  // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Объяснение:
Алгоритм сортирует массив, выбирая опорный элемент (в данном случае последний) и разделяя массив на два подмассива — элементы, меньше опорного, и элементы, большие или равные опорному. Рекурсивно сортируем эти подмассивы.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
2. ⌛ Задача: Быстрая сортировка с выбором случайного опорного элемента
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
--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
3. ⌛ Задача: Быстрая сортировка с оптимизацией для маленьких массивов
Условие:
Для маленьких массивов (например, длиной меньше 10 элементов) используйте сортировку вставками вместо быстрой сортировки.
🎯 Решение:
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function quickSortOptimized(arr) {
  if (arr.length <= 1) return arr;
  if (arr.length <= 10) return insertionSort(arr);

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

  return [...quickSortOptimized(left), pivot, ...quickSortOptimized(right)];
}

console.log(quickSortOptimized([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));  // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Объяснение:
Если массив мал, мы используем сортировку вставками, которая будет работать быстрее, чем быстрая сортировка для небольших массивов из-за меньших накладных расходов на рекурсию.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
4. ⌛ Задача: Быстрая сортировка для строк
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
--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
5. ⌛ Задача: Быстрая сортировка для массивов с отрицательными числами
Условие:
Напишите быструю сортировку для массива с отрицательными числами.
🎯 Решение:
```javascript
function quickSortWithNegative(arr) {
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

  return [...quickSortWithNegative(left), pivot, ...quickSortWithNegative(right)];
}

console.log(quickSortWithNegative([3, -1, 4, -2, 5, -9, 2]));  // [-9, -2, -1, 2, 3, 4, 5]
```
Объяснение:
Этот алгоритм работает так же, как и для обычных чисел. Отрицательные числа обрабатываются точно так же, как и положительные, так как они корректно сравниваются в JavaScript.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
6. ⌛ Задача: Быстрая сортировка с подсчетом количества операций
Условие:
Измените быструю сортировку так, чтобы она возвращала количество операций (сравнений и перестановок), которые она выполняет.
🎯 Решение:
```javascript
function quickSortWithCount(arr) {
  let count = 0;

  function helper(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      count++;
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...helper(left), pivot, ...helper(right)];
  }

  helper(arr);
  return count;
}

console.log(quickSortWithCount([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));  // 33
```
Объяснение:
Мы используем рекурсивную вспомогательную функцию, которая сортирует массив и одновременно подсчитывает количество сравнений.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
7. ⌛ Задача: Быстрая сортировка с подсчетом частоты элементов
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
--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
8. ⌛ Задача: Быстрая сортировка с ограничением по времени
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
--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
9. ⌛ Задача: Быстрая сортировка с улучшенной разбиением
Условие:
Используйте улучшенное разбиение с тремя частями, которое разделяет элементы на три категории: меньше, равные и больше опорного элемента.
🎯 Решение:
```javascript
function quickSortThreeWay(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  let left = [];
  let equal = [];
  let right = [];

  for (let num of arr) {
    if (num < pivot) {
      left.push(num);
    } else if (num > pivot) {
      right.push(num);
    } else {
      equal.push(num);
    }
  }

  return [...quickSortThreeWay(left), ...equal, ...quickSortThreeWay(right)];
}

console.log(quickSortThreeWay([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
// [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
```
Объяснение:
Здесь мы разделяем массив на три части: элементы, меньшие, равные и большие опорному элементу. Это помогает эффективно работать с дубликатами в массиве.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Модификация быстрой сортировки:
---
10. ⌛ Задача: Быстрая сортировка с поддержкой сортировки объектов по свойствам
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
