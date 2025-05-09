---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Последовательность Фибоначчи:
---
4. Генерация последовательности с использованием `while`
Если нужно сгенерировать последовательность до определённого значения, а не индекса \( n \), используем цикл `while`.
🎯 Решение:
Код:
```javascript
function generateFibonacciUntil(maxValue) {
  const sequence = [0, 1];
  let nextValue = 0;

  while ((nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2]) <= maxValue) {
    sequence.push(nextValue);
  }

  return sequence;
}

console.log(generateFibonacciUntil(50)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```
Объяснение:
- Мы продолжаем вычислять числа Фибоначчи до тех пор, пока следующее число не превысит `maxValue`.
Резюме:
| Метод                          | Сложность | Особенности                                                   |
|--------------------------------|-----------|---------------------------------------------------------------|
| Итерация                   | O(n)  | Эффективный метод, занимает мало памяти.                     |
| Рекурсия                   | O(2^n)| Медленный метод, неэффективен для больших значений \( n \).   |
| Рекурсия с мемоизацией     | O(n)  | Ускоренная версия рекурсии, сохраняет вычисленные значения.   |
| Формула Бине               | O(1)  | Быстрый способ для вычисления отдельного числа Фибоначчи.     |
| Генерация до предела       | O(n)  | Позволяет сгенерировать последовательность до заданного значения. |
Для большинства задач рекомендуется использовать итеративный метод или рекурсию с мемоизацией, так как они наиболее эффективны.
---------------
Пример с комментариями
function fibonacci(n) {
  if (n <= 1) return n;  // Базовые случаи: F(0) = 0, F(1) = 1
  return fibonacci(n - 1) + fibonacci(n - 2); // Рекурсивный вызов для F(n-1) и F(n-2)
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
Для вычисления чисел Фибоначчи с использованием рекурсии в JavaScript, нам нужно создать функцию, которая будет вызывать сама себя для вычисления предыдущих значений последовательности, пока не дойдёт до базовых случаев (0 и 1).
🎯 Решение с рекурсией
Функция для вычисления чисел Фибоначчи будет рекурсивно вызывать себя для \( F(n-1) \) и \( F(n-2) \), пока не достигнет базовых значений:
\[
F(0) = 0
\]
\[
F(1) = 1
\]
🎯 Решение:
```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
```
Объяснение:
1. Базовые случаи:
   - Если \( n \) равно 0 или 1, функция сразу возвращает \( n \), так как эти значения являются начальными числами последовательности Фибоначчи.
2. Рекурсивный случай:
   - Для \( n > 1 \) функция возвращает сумму двух предыдущих чисел, вызывая саму себя для \( n - 1 \) и \( n - 2 \).

   Например, для \( n = 5 \):
   \[
   F(5) = F(4) + F(3) = (F(3) + F(2)) + (F(2) + F(1))
   \]
   Этот процесс продолжается до достижения базовых значений.
Проблемы с рекурсией:
- Медленная производительность: Рекурсивный метод может быть неэффективным для больших значений \( n \), так как многократно вычисляются одни и те же подзадачи. Например, для \( F(5) \), функция будет дважды вычислять \( F(3) \) и \( F(2) \), что приводит к экспоненциальному времени выполнения — O(2^n).
- Решение проблемы (мемоизация): Для оптимизации рекурсивного подхода можно использовать технику мемоизации, которая будет хранить результаты уже вычисленных значений.
Оптимизация с использованием мемоизации:
Мемоизация позволяет нам запоминать результаты вычислений, чтобы не повторять одни и те же вычисления.
```javascript
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;

  // Проверяем, есть ли уже результат в мемоизации
  if (memo[n]) return memo[n];

  // Сохраняем результат в мемоизации и возвращаем
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
```
Объяснение оптимизации:
- Мы добавляем объект `memo`, который будет хранить уже вычисленные значения для каждого \( n \).
- При каждом рекурсивном вызове мы проверяем, есть ли уже результат для текущего значения \( n \). Если есть, мы сразу возвращаем его, чтобы не пересчитывать.
- Мемоизация снижает время выполнения до O(n), так как каждое значение вычисляется только один раз.
Резюме:
1. Рекурсивный способ решения задачи даёт понятный и элегантный способ вычисления чисел Фибоначчи, но для больших значений \( n \) может быть неэффективен из-за экспоненциальной сложности O(2^n).
2. Мемоизация позволяет значительно улучшить производительность, снижая время выполнения до O(n).
Рекурсия является хорошим способом понять саму структуру задачи, но для реальных приложений и больших чисел лучше использовать более эффективные методы (например, итеративные решения или методы с мемоизацией).
---------------------------------------------------------------------------------------------  
