---------------------------------------------------------------------------------------------   
⋙ ❍ Задача Разделяй и властвуй:
---
15. ⌛ Задача: Найти пару с заданной суммой
Условие:
Найдите пару чисел в массиве, сумма которых равна заданному числу.
🎯 Решение:
```javascript
function findPairWithSum(arr, sum) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === sum) {
      return [arr[left], arr[right]];
    } else if (currentSum < sum) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

let arr = [1, 4, 6, 8, 3];
let sum = 10;
console.log(findPairWithSum(arr, sum));  // [4, 6]
```
Объяснение:
Массив сортируется, затем используется два указателя, чтобы найти пару чисел, сумма которых равна заданному числу.
---------------------------------------------------------------------------------------------   
