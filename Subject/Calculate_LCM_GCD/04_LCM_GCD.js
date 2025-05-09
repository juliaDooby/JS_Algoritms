--------------------------------------------------------------------------------------------- 
⋙ ❍ Вычисление НОК и НОД:
---
4️⃣ Вычисление НОД с использованием рекурсии
⌛ Задача: Напишите рекурсивную функцию для вычисления НОД двух чисел.
🎯 Решение:
```js
function gcdRecursive(a, b) {
  if (b === 0) return a;
  return gcdRecursive(b, a % b);
}

console.log(gcdRecursive(56, 98)); // 14
```
Объяснение: Рекурсивная версия алгоритма Евклида. Базовый случай — когда одно из чисел становится равным нулю.
--------------------------------------------------------------------------------------------- 
