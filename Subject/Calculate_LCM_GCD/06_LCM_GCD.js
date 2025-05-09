--------------------------------------------------------------------------------------------- 
⋙ ❍ Вычисление НОК и НОД:
---
6️⃣ Нахождение НОД и НОК для нескольких чисел (с использованием цикла)
⌛ Задача: Напишите функцию, которая находит НОД и НОК для нескольких чисел, переданных в массив.
🎯 Решение:
```js
function findGCDAndLCM(arr) {
  let gcdResult = arr[0];
  let lcmResult = arr[0];

  for (let i = 1; i < arr.length; i++) {
    gcdResult = gcd(gcdResult, arr[i]);
    lcmResult = lcm(lcmResult, arr[i]);
  }

  return { gcd: gcdResult, lcm: lcmResult };
}

console.log(findGCDAndLCM([56, 98, 42])); // { gcd: 14, lcm: 392 }
```
Объяснение: Мы последовательно находим НОД и НОК для всех чисел в массиве с помощью цикла.
--------------------------------------------------------------------------------------------- 
