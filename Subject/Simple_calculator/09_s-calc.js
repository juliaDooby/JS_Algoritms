---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Простой калькулятор»:
---
⌛ Задача 9: Ввод данных и выполнение операции через prompt
Условие:
Напишите калькулятор, который принимает два числа и операцию через `prompt` и выводит результат.
🎯 Решение:
```javascript
function simpleCalculator() {
  const a = parseFloat(prompt('Enter the first number:'));
  const b = parseFloat(prompt('Enter the second number:'));
  const operation = prompt('Enter the operation (add, subtract, multiply, divide):');

  switch (operation) {
    case 'add':
      alert(a + b);
      break;
    case 'subtract':
      alert(a - b);
      break;
    case 'multiply':
      alert(a * b);
      break;
    case 'divide':
      if (b === 0) {
        alert('Error: Division by zero');
      } else {
        alert(a / b);
      }
      break;
    default:
      alert('Invalid operation');
  }
}

simpleCalculator();
```
Объяснение:
В этой задаче мы используем `prompt` для ввода данных и `alert` для вывода результата. Код взаимодействует с пользователем через диалоговые окна.
Эти задачи покрывают основные операции калькулятора, такие как сложение, вычитание, умножение, деление и несколько более сложных задач, таких как факториал, проверка на простоту и квадратный корень.
---------------------------------------------------------------------------------------------
