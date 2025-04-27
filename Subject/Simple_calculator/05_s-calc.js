---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Простой калькулятор»:
---
⌛ Задача 5: Калькулятор с несколькими операциями
Условие:
Напишите функцию, которая принимает три аргумента: два числа и операцию, и возвращает результат операции (сложение, вычитание, умножение или деление).
🎯 Решение:
```javascript
function calculator(a, b, operation) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) {
        return 'Error: Division by zero';
      }
      return a / b;
    default:
      return 'Invalid operation';
  }
}

console.log(calculator(5, 3, 'add'));       // 8
console.log(calculator(5, 3, 'subtract'));  // 2
console.log(calculator(5, 3, 'multiply'));  // 15
console.log(calculator(5, 0, 'divide'));    // 'Error: Division by zero'
```
Объяснение:
Мы используем `switch` для выбора операции на основе аргумента `operation`. Это позволяет легко расширить калькулятор, добавляя новые операции.
---------------------------------------------------------------------------------------------
