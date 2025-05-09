--------------------------------------------------------------------------------------------- 
⋙ ❍ Двоичный поиск:
---
12. ⌛ Задача: Квадратный корень числа
Условие:
Найдите квадратный корень числа, используя двоичный поиск.
🎯 Решение:
```javascript
function sqrt(x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const squared = mid * mid;
    if (squared === x) {
      return mid;
    } else if (squared < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

 }
  return right;  // возвращаем наибольший целый корень
}

console.log(sqrt(16));  // 4
console.log(sqrt(8));   // 2
```
Объяснение:
Для нахождения квадратного корня числа, мы применяем двоичный поиск на интервале от 0 до самого числа. Алгоритм сокращает диапазон, основываясь на сравнении квадрата среднего элемента с искомым числом.
--------------------------------------------------------------------------------------------- 
