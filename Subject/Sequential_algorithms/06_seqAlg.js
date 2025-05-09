--------------------------------------------------------------------------------------------- 
⋙ ❍ Разминка. Последовательные алгоритмы:
---
6️⃣ Проверка простоты числа
⌛ Задача: Напишите функцию, которая проверяет, является ли число простым.
🎯 Решение:
```js
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
```
Объяснение: Для проверки простоты числа мы проверяем, делится ли оно на числа от 2 до его квадратного корня.
--------------------------------------------------------------------------------------------- 
