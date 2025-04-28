--------------------------------------------------------------------------------------------- 
⋙ ❍ Подсчёт инверсий:
---
1. ⌛ Задача: Подсчёт инверсий с использованием сортировки слиянием
Условие:
Реализуйте подсчёт инверсий с использованием модификации сортировки слиянием. Это решение работает быстрее, чем прямой подсчёт с вложенными циклами.
🎯 Решение:
```javascript
function mergeCount(arr, tempArr, left, right) {
  if (left === right) return 0;
  const mid = Math.floor((left + right) / 2);
  let invCount = mergeCount(arr, tempArr, left, mid);
  invCount += mergeCount(arr, tempArr, mid + 1, right);
  invCount += merge(arr, tempArr, left, mid, right);
  return invCount;
}

function merge(arr, tempArr, left, mid, right) {
  let i = left; // Starting index for left subarray
  let j = mid + 1; // Starting index for right subarray
  let k = left; // Starting index to be sorted
  let invCount = 0;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      tempArr[k++] = arr[i++];
    } else {
      tempArr[k++] = arr[j++];
      invCount += (mid - i + 1); // All remaining elements in left subarray are greater
    }
  }

  while (i <= mid) {
    tempArr[k++] = arr[i++];
  }
  while (j <= right) {
    tempArr[k++] = arr[j++];
  }

  for (let i = left; i <= right; i++) {
    arr[i] = tempArr[i];
  }

  return invCount;
}

function countInversions(arr) {
  let tempArr = new Array(arr.length);
  return mergeCount(arr, tempArr, 0, arr.length - 1);
}

console.log(countInversions([1, 3, 2, 3, 1]));  // 4
```
Объяснение:
Этот алгоритм использует модификацию сортировки слиянием. При слиянии двух подмассивов мы считаем, сколько элементов из правой части массива меньше элементов из левой, что даёт количество инверсий.
--------------------------------------------------------------------------------------------- 
