---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
Задача «Сувениры» обычно связана с оптимизацией выбора элементов из множества, таких как выбор сувениров на основе их стоимости, веса, значимости или других критериев. В данном случае задачи будут включать выбор сувениров, комбинирование, сортировку и вычисления, связанные с максимизацией или минимизацией значений.
1️⃣ Нахождение самого дорогого сувенира
⌛ Задача: У нас есть список сувениров, каждый с определенной ценой. Напишите функцию, которая находит самый дорогой сувенир.
🎯 Решение:
```js
function findMostExpensive(souvenirs) {
  return souvenirs.reduce((max, current) => current.price > max.price ? current : max, souvenirs[0]);
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(findMostExpensive(souvenirs)); // { name: 'Фигурка', price: 50 }
```
Объяснение:
- Используем метод `reduce` для нахождения самого дорогого сувенира. Сравниваем цену текущего сувенира с максимальной ценой, сохраняя тот, у которого цена больше.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
2️⃣ Подсчет общего стоимости всех сувениров
⌛ Задача: Напишите функцию, которая считает общую стоимость всех сувениров в списке.
🎯 Решение:
```js
function totalCost(souvenirs) {
  return souvenirs.reduce((total, current) => total + current.price, 0);
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(totalCost(souvenirs)); // 105
```
Объяснение:
- Используем `reduce`, чтобы просуммировать цены всех сувениров, начиная с начальной суммы `0`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
3️⃣ Найти сувениры, стоимость которых превышает заданную сумму
⌛ Задача: Напишите функцию, которая находит все сувениры, стоимость которых больше заданного значения.
🎯 Решение:
```js
function findExpensiveSouvenirs(souvenirs, priceLimit) {
  return souvenirs.filter(souvenir => souvenir.price > priceLimit);
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(findExpensiveSouvenirs(souvenirs, 25));
// [{ name: 'Фигурка', price: 50 }, { name: 'Маска', price: 30 }]
```
Объяснение:
- Используем `filter`, чтобы отфильтровать сувениры, чья цена больше заданного лимита `priceLimit`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
4️⃣ Сортировка сувениров по цене
⌛ Задача: Напишите функцию, которая сортирует сувениры по цене в порядке убывания.
🎯 Решение:
```js
function sortSouvenirsByPrice(souvenirs) {
  return souvenirs.sort((a, b) => b.price - a.price);
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(sortSouvenirsByPrice(souvenirs));
// [{ name: 'Фигурка', price: 50 }, { name: 'Маска', price: 30 }, { name: 'Тарелка', price: 20 }, { name: 'Магнит', price: 5 }]
```
Объяснение:
- Используем метод `sort` для сортировки массива сувениров. Сортируем по цене, где `b.price - a.price` означает сортировку по убыванию.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
5️⃣ Выбор сувениров по заданному бюджету
⌛ Задача: Напишите функцию, которая выбирает сувениры, сумма стоимости которых не превышает заданного бюджета.
🎯 Решение:
```js
function selectSouvenirsByBudget(souvenirs, budget) {
  let selected = [];
  let total = 0;

  for (let souvenir of souvenirs) {
    if (total + souvenir.price <= budget) {
      selected.push(souvenir);
      total += souvenir.price;
    }
  }

  return selected;
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(selectSouvenirsByBudget(souvenirs, 55));
// [{ name: 'Тарелка', price: 20 }, { name: 'Магнит', price: 5 }]
```
Объяснение:
- Перебираем сувениры и добавляем их в список выбранных, если сумма их цен не превышает бюджет.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
6️⃣ Комбинирование сувениров с максимальной общей стоимостью
⌛ Задача: Напишите функцию, которая выбирает сувениры таким образом, чтобы их общая стоимость была максимальной, но не превышала заданного бюджета.
🎯 Решение:
```js
function getMaxValueCombination(souvenirs, budget) {
  let bestCombination = [];
  let maxValue = 0;

  for (let i = 0; i < (1 << souvenirs.length); i++) {
    let combination = [];
    let total = 0;

    for (let j = 0; j < souvenirs.length; j++) {
      if (i & (1 << j)) {
        combination.push(souvenirs[j]);
        total += souvenirs[j].price;
      }
    }

    if (total <= budget && total > maxValue) {
      maxValue = total;
      bestCombination = combination;
    }
  }

  return bestCombination;
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(getMaxValueCombination(souvenirs, 55));
// [{ name: 'Тарелка', price: 20 }, { name: 'Магнит', price: 5 }]
```
Объяснение:
- Используем битовую маску для генерации всех возможных комбинаций сувениров и выбираем ту, чья общая стоимость не превышает бюджет и максимальна.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
7️⃣ Расставить сувениры по популярности
⌛ Задача: Напишите функцию, которая сортирует сувениры по популярности (по количеству продаж). Данные о продажах представлены в виде массива объектов.
🎯 Решение:
```js
function sortSouvenirsByPopularity(souvenirs) {
  return souvenirs.sort((a, b) => b.sales - a.sales);
}

const souvenirs = [
  { name: "Тарелка", price: 20, sales: 150 },
  { name: "Магнит", price: 5, sales: 300 },
  { name: "Фигурка", price: 50, sales: 100 },
  { name: "Маска", price: 30, sales: 200 }
];

console.log(sortSouvenirsByPopularity(souvenirs));
// [{ name: 'Магнит', price: 5, sales: 300 }, { name: 'Маска', price: 30, sales: 200 }, { name: 'Тарелка', price: 20, sales: 150 }, { name: 'Фигурка', price: 50, sales: 100 }]
```
Объяснение:
- Мы сортируем массив сувениров по количеству продаж, от самого популярного к наименее популярному.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
8️⃣ Применение скидки на сувениры
⌛ Задача: Напишите функцию, которая применяет скидку к цене всех сувениров из списка, если цена превышает определенную сумму.
🎯 Решение:
```js
function applyDiscount(souvenirs, discountThreshold, discountPercentage) {
  return souvenirs.map(souvenir => {
    if (souvenir.price > discountThreshold) {
      souvenir.price *= (1 - discountPercentage / 100);
    }
    return souvenir;
  });
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(applyDiscount(souvenirs, 20, 10));
// Применит скидку 10% к "Фигурка" и "Маска"
```
Объяснение:
- Мы проходим по массиву сувениров и применяем скидку к тем, цена которых превышает порог `discountThreshold`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
9️⃣ Составление набора сувениров с минимальной стоимостью
⌛ Задача: Напишите функцию, которая находит набор сувениров с минимальной стоимостью, но при этом каждый набор должен содержать хотя бы один сувенир.
🎯 Решение:
```js
function findCheapestSet(souvenirs) {
  return souvenirs.reduce((minSet, current) => {
    const newSet = [...minSet, current];
    const total = newSet.reduce((sum, item) => sum + item.price, 0);
    if (!minSet.length || total < minSet.reduce((sum, item) => sum + item.price, 0)) {
      return newSet;
    }
    return minSet;
  }, []);
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(findCheapestSet(souvenirs));
// [{ name: 'Магнит', price: 5 }]
```
Объяснение:
- Мы перебираем все возможные наборы сувениров и выбираем тот, который имеет минимальную стоимость.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
🔟 Нахождение сувениров по ключевым словам
⌛ Задача: Напишите функцию, которая находит все сувениры, названия которых содержат заданные ключевые слова.
🎯 Решение:
```js
function findSouvenirsByKeyword(souvenirs, keyword) {
  return souvenirs.filter(souvenir => souvenir.name.toLowerCase().includes(keyword.toLowerCase()));
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(findSouvenirsByKeyword(souvenirs, "мас"));
// [{ name: 'Маска', price: 30 }]
```
Объяснение:
- Мы фильтруем сувениры по ключевому слову, используя метод `includes`, чтобы найти те, чьи названия содержат это слово.
Эти задачи помогут вам познакомиться с основными операциями над массивами объектов в JavaScript и практиковать работу с фильтрацией, сортировкой, выбором и комбинацией данных.
---------------------------------------------------------------------------------------------
***
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Расставить скобки»:
---
⌛ Задача «Расставить скобки» включает в себя различные виды задач, где нужно расставить скобки для правильной работы математических выражений или для решения других логических проблем. В этом разделе представлены задачи, в которых требуется правильно расставить скобки с использованием языка JavaScript.
1️⃣ Проверка правильности скобок в строке
⌛ Задача: Напишите функцию, которая проверяет, правильно ли расставлены скобки в строке. Скобки могут быть разного типа: круглые `()`, квадратные `[]`, фигурные `{}`.
🎯 Решение:
```js
function checkBrackets(str) {
  const stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };

  for (let char of str) {
    if (pairs[char]) {
      stack.push(char); // открывающая скобка
    } else if (Object.values(pairs).includes(char)) {
      if (pairs[stack.pop()] !== char) {
        return false; // несоответствие
      }
    }
  }

  return stack.length === 0; // если стек пуст, скобки расставлены правильно
}

console.log(checkBrackets("([{}])")); // true
console.log(checkBrackets("([)]")); // false
```
Объяснение:
- Используем стек для хранения открывающих скобок. Когда встречаем закрывающую скобку, проверяем, совпадает ли она с последней открывающей скобкой из стека. Если всё совпадает, продолжаем, иначе возвращаем `false`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Расставить скобки»:
---
2️⃣ Генерация всех вариантов скобок для выражений
⌛ Задача: Напишите функцию, которая генерирует все возможные правильные скобочные выражения для заданного числа пар скобок.
🎯 Решение:
```js
function generateParentheses(n) {
  const result = [];

  function generate(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) generate(current + '(', open + 1, close);
    if (close < open) generate(current + ')', open, close + 1);
  }

  generate('', 0, 0);
  return result;
}

console.log(generateParentheses(3)); // ['((()))', '(()())', '(())()', '()(())', '()()()']
```
Объяснение:
- Используем рекурсию для генерации строк с открывающими и закрывающими скобками. Условие `open < n` ограничивает количество открывающих скобок, а `close < open` гарантирует правильный порядок скобок.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Расставить скобки»:
---
3️⃣ Расставить скобки в выражении для корректной работы
⌛ Задача: Напишите функцию, которая принимает строку с арифметическим выражением без скобок и расставляет скобки, чтобы правильно вычислить результат. Предположим, что выражение состоит только из цифр и операторов `+`, `-`, `*`, `/`.
🎯 Решение:
```js
function addParentheses(expression) {
  return `(${expression})`;
}

console.log(addParentheses("3+2*2")); // (3+2*2)
console.log(addParentheses("3*2+1")); // (3*2+1)
```
Объяснение:
- Простое добавление скобок вокруг выражения, чтобы изменить приоритет операций. Это решение для упрощённого примера, но для сложных выражений нужно учитывать порядок операций и расставлять скобки в соответствии с ним.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Расставить скобки»:
---
4️⃣ Минимизация расставленных скобок в выражении
⌛ Задача: Напишите функцию, которая принимает строку с математическим выражением и минимизирует количество скобок, оставив только те, которые необходимы для корректного выполнения.
🎯 Решение:
```js
function minimizeParentheses(expression) {
  let result = expression.replace(/\(([^\(\)]+)\)/g, '$1');
  return result;
}

console.log(minimizeParentheses("(3+2)*2")); // 3+2*2
console.log(minimizeParentheses("((3+2)*2)")); // 3+2*2
```
Объяснение:
- Используем регулярные выражения для удаления лишних скобок, которые не влияют на порядок вычислений. Оставляем только те скобки, которые необходимы для корректного вычисления.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Расставить скобки»:
---
5️⃣ Проверка, является ли строка сбалансированной
⌛ Задача: Напишите функцию, которая проверяет, является ли строка сбалансированной, то есть все ли открывающие скобки имеют соответствующие закрывающие.
🎯 Решение:
```js
function isBalanced(str) {
  const stack = [];
  for (let char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (last === '(' && char !== ')' || last === '{' && char !== '}' || last === '[' && char !== ']') {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("({[()]})")); // true
console.log(isBalanced("({[)}]")); // false
```
Объяснение:
- Для проверки сбалансированности скобок используем стек. При встрече открывающей скобки добавляем её в стек, а при встрече закрывающей проверяем, соответствует ли она последней открывающей скобке.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Расставить скобки»:
---
6️⃣ Перестановка скобок в выражении
⌛ Задача: Напишите функцию, которая меняет местами все пары скобок в выражении. Например, из `"(a+b)"` сделать `"[a+b]"`.
🎯 Решение:
```js
function swapBrackets(str) {
  return str.replace(/[\(\)]/g, (match) => match === '(' ? '[' : ']');
}

console.log(swapBrackets("(a+b)")); // [a+b]
console.log(swapBrackets("((a+b))")); // [[a+b]]
```
Объяснение:
- Используем регулярные выражения для поиска всех открывающих и закрывающих скобок и заменяем их на другие типы скобок.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Расставить скобки»:
---
7️⃣ Оценка выражений с использованием скобок
⌛ Задача: Напишите функцию, которая оценивает математическое выражение с учётом приоритетов операций и правильно расставленными скобками.
🎯 Решение:
```js
function evaluateExpression(expr) {
  return new Function('return ' + expr)();
}

console.log(evaluateExpression("(3 + 2) * 2")); // 10
console.log(evaluateExpression("3 + (2 * 2)")); // 7
```
Объяснение:
- Для вычисления выражения с использованием скобок и операцией мы используем `Function` для создания функции, которая возвращает результат вычисления. Это позволяет динамически оценивать строки с математическими операциями.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Расставить скобки»:
---
8️⃣ Правильное размещение скобок в сложном выражении
⌛ Задача: Напишите функцию, которая расставляет скобки в сложном выражении с несколькими операциями. Пример: в выражении "3 + 4 * 2" нужно правильно расставить скобки, чтобы соблюсти приоритет операций.
🎯 Решение:
```js
function addCorrectParentheses(expression) {
  return expression.replace(/(\d+)\s*\*\s*(\d+)/, '($1*$2)');
}

console.log(addCorrectParentheses("3 + 4 * 2")); // 3 + (4*2)
```
Объяснение:
- Мы заменяем выражение с умножением на его эквивалент, где умножение заключено в скобки, чтобы явно указать на приоритет этой операции.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Расставить скобки»:
---
9️⃣ Расставить скобки для корректного порядка вычислений
⌛ Задача: Напишите функцию, которая расставляет скобки для корректного порядка вычислений в случае несоответствия приоритету операций.
🎯 Решение:
```js
function correctParenthesesOrder(expression) {
  return expression.replace(/(\d+)\s*\+\s*(\d+)/, '($1+$2)');
}

console.log(correctParenthesesOrder("2 + 3 * 4")); // 2 + (3*4)
```
Объяснение:
- Заменяем сложение на выражение с учётом приоритета операций, расставляя скобки для правильного порядка вычислений.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Расставить скобки»:
---
🔟 Строка со скобками: Генерация всех правильных комбинаций
⌛ Задача: Напишите функцию, которая генерирует все возможные правильные комбинации скобок для заданного числа пар.
🎯 Решение:
```js
function generateAllParentheses(n) {
  const result = [];

  function generate(str, open, close) {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }

    if (open < n) generate(str + '(', open + 1, close);
    if (close < open) generate(str + ')', open, close + 1);
  }

  generate('', 0, 0);
  return result;
}

console.log(generateAllParentheses(3)); // ['((()))', '(()())', '(())()', '()(())', '()()()']
```
Объяснение:
- Используем рекурсию для создания всех возможных правильных строк с расставленными скобками. Мы поддерживаем счётчики для открывающих и закрывающих скобок и добавляем новые скобки на каждом шаге.
---------------------------------------------------------------------------------------------
***


---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
Эти задачи помогут вам разобраться с такими структурами данных, как массивы, стеки, очереди, множества, словари (объекты), двусвязные и односвязные списки.
1️⃣ Работа с массивами: Сумма элементов массива
⌛ Задача: Напишите функцию, которая принимает массив чисел и возвращает их сумму.
🎯 Решение:
```js
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
```
Объяснение:
- Используем метод `reduce()` для суммирования всех элементов массива. Он принимает два параметра: аккумулятор и текущий элемент. Изначально аккумулятор равен 0.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
2️⃣ Стек: Реализация стека
⌛ Задача: Реализуйте стек с методами `push`, `pop` и `peek` (посмотреть верхний элемент).
🎯 Решение:
```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
stack.pop();
console.log(stack.peek()); // 10
```
Объяснение:
- Стек работает по принципу LIFO (последний вошёл — первый вышел). Мы реализуем методы для добавления, удаления и получения верхнего элемента.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
3️⃣ Очередь: Реализация очереди
⌛ Задача: Реализуйте очередь с методами `enqueue`, `dequeue`, `peek`.
🎯 Решение:
```js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.peek()); // 10
queue.dequeue();
console.log(queue.peek()); // 20
```
Объяснение:
- Очередь работает по принципу FIFO (первый вошёл — первый вышел). Мы добавляем элемент в конец очереди и удаляем из начала.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
4️⃣ Множество: Уникальные элементы
⌛ Задача: Напишите функцию, которая принимает массив и возвращает массив с уникальными элементами.
🎯 Решение:
```js
function getUnique(arr) {
  return [...new Set(arr)];
}

console.log(getUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
Объяснение:
- Множество (`Set`) автоматически удаляет дубликаты. Мы используем его для создания массива уникальных элементов.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
5️⃣ Словарь (Объект): Подсчёт частоты элементов
⌛ Задача: Напишите функцию, которая подсчитывает частоту появления каждого элемента в массиве и возвращает объект.
🎯 Решение:
```js
function countFrequency(arr) {
  let frequency = {};
  arr.forEach(item => {
    frequency[item] = (frequency[item] || 0) + 1;
  });
  return frequency;
}

console.log(countFrequency([1, 2, 2, 3, 3, 3])); // {1: 1, 2: 2, 3: 3}
```
Объяснение:
- Используем объект как словарь, где ключи — это элементы массива, а значения — это их частота появления. В цикле увеличиваем счётчик для каждого элемента.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
6️⃣ Односвязный список: Добавление элемента
⌛ Задача: Реализуйте односвязный список и добавьте элемент в конец списка.
🎯 Решение:
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // 10 -> 20 -> 30
```
Объяснение:
- В этом примере мы реализуем односвязный список. Метод `add` добавляет новый узел в конец списка, обновляя указатель последнего узла.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
7️⃣ Двусвязный список: Добавление элемента в начало
⌛ Задача: Реализуйте двусвязный список и добавьте элемент в начало.
🎯 Решение:
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  addToFront(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' <-> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new DoublyLinkedList();
list.addToFront(10);
list.addToFront(20);
list.addToFront(30);
list.print(); // 30 <-> 20 <-> 10
```
Объяснение:
- В двусвязном списке каждый узел хранит ссылки как на следующий элемент, так и на предыдущий. Метод `addToFront` добавляет новый узел в начало списка.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
8️⃣ Приоритетная очередь: Реализация очереди с приоритетом
⌛ Задача: Реализуйте приоритетную очередь с методами `enqueue` и `dequeue`, где элементы с большим приоритетом обрабатываются раньше.
🎯 Решение:
```js
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const newNode = { element, priority };
    if (this.items.length === 0) {
      this.items.push(newNode);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (newNode.priority > this.items[i].priority) {
          this.items.splice(i, 0, newNode);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(newNode);
      }
    }
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }
}

const pq = new PriorityQueue();
pq.enqueue('task1', 1);
pq.enqueue('task2', 3);
pq.enqueue('task3', 2);
console.log(pq.peek()); // { element: 'task2', priority: 3 }
pq.dequeue();
console.log(pq.peek()); // { element: 'task3', priority: 2 }
```
Объяснение:
- Приоритетная очередь использует сортировку элементов по приоритету. Метод `enqueue` добавляет элемент в очередь с учётом его приоритета.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
9️⃣ Хеш-таблица: Операции вставки и поиска
⌛ Задача: Реализуйте простую хеш-таблицу с методами вставки и поиска.
🎯 Решение:
```js
class HashTable {
  constructor(size = 4) {
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  insert(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  search(key) {
    const index = this.hash(key);
    return this.table[index];
  }
}

const hashTable = new HashTable();
hashTable.insert('name', 'John');
hashTable.insert('age', 30);
console.log(hashTable.search('name')); // John
```
Объяснение:
- Хеш-таблица использует хеш-функцию для вычисления индекса элемента. В этой простейшей версии данные сохраняются в массиве.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
🔟 Алгоритм сортировки слиянием
⌛ Задача: Напишите функцию для сортировки массива с использованием алгоритма сортировки слиянием.
🎯 Решение:
```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([10, 2, 3, 4, 1])); // [1, 2, 3, 4, 10]
```
Объяснение:
- Алгоритм сортировки слиянием делит массив на более мелкие части, сортирует их рекурсивно и затем сливает отсортированные части в один отсортированный массив.
---------------------------------------------------------------------------------------------
***
*** ***
---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
Односвязный список — это структура данных, где каждый элемент (узел) содержит данные и ссылку на следующий узел. Списки часто используются для эффективной работы с динамически изменяющимися данными.
1️⃣ Реализация односвязного списка
⌛ Задача: Создать структуру данных для односвязного списка с методами для добавления элементов в конец списка.
🎯 Решение:
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // 10 -> 20 -> 30
```
Объяснение:
- Создали два класса: `Node` (узел) и `SinglyLinkedList` (список).
- Метод `add()` добавляет новые элементы в конец списка.
---
2️⃣ Добавление элемента в начало списка
⌛ Задача: Написать метод для добавления элемента в начало односвязного списка.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  addToFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.addToFront(10);
list.addToFront(20);
list.addToFront(30);
list.print(); // 30 -> 20 -> 10
```
Объяснение:
- Метод `addToFront()` добавляет новый элемент в начало списка, меняя ссылку на голову списка.
---
3️⃣ Удаление элемента из начала списка
⌛ Задача: Написать метод для удаления элемента из начала списка.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  removeFromFront() {
    if (this.head !== null) {
      this.head = this.head.next;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.addToFront(10);
list.addToFront(20);
list.addToFront(30);
list.print(); // 30 -> 20 -> 10
list.removeFromFront();
list.print(); // 20 -> 10
```
Объяснение:
- Метод `removeFromFront()` удаляет первый элемент, изменяя ссылку на голову списка.
---
4️⃣ Поиск элемента в списке
⌛ Задача: Написать метод для поиска элемента в списке.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  find(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // 10 -> 20 -> 30
console.log(list.find(20)); // true
console.log(list.find(40)); // false
```
Объяснение:
- Метод `find()` ищет элемент в списке, перебирая его узлы.
---
5️⃣ Удаление элемента из списка по значению
⌛ Задача: Написать метод для удаления элемента из списка по значению.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  remove(value) {
    if (this.head === null) return;
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null && current.next.data !== value) {
      current = current.next;
    }
    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // 10 -> 20 -> 30
list.remove(20);
list.print(); // 10 -> 30
```
Объяснение:
- Метод `remove()` удаляет элемент, если он существует в списке. Если элемент находится в середине или в конце, обновляется ссылка на следующий элемент.
---
6️⃣ Получение элемента по индексу
⌛ Задача: Написать метод для получения элемента по индексу в списке.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  get(index) {
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      if (counter === index) {
        return current.data;
      }
      current = current.next;
      counter++;
    }
    return null; // если индекс выходит за пределы списка
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
console.log(list.get(1)); // 20
```
Объяснение:
- Метод `get()` перебирает список и возвращает данные элемента на указанном индексе.
---
7️⃣ Реверс односвязного списка
⌛ Задача: Написать метод для реверсирования (переворачивания) односвязного списка.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // 10 -> 20 -> 30
list.reverse();
list.print(); // 30 -> 20 -> 10
```
Объяснение:
- Метод `reverse()` меняет направление всех ссылок в списке, превращая его в обратный.
---
8️⃣ Проверка пустоты списка
⌛ Задача: Написать метод для проверки, пуст ли список.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
console.log(list.isEmpty()); // true
list.add(10);
console.log(list.isEmpty()); // false
```
Объяснение:
- Метод `isEmpty()` проверяет, является ли голова списка `null`, что означает, что список пуст.
---
9️⃣ Объединение двух списков
⌛ Задача: Написать метод для объединения двух односвязных списков.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  merge(otherList) {
    let current = this.head;
    while (current && current.next !== null) {
      current = current.next;
    }
    if (current !== null) {
      current.next = otherList.head;
    } else {
      this.head = otherList.head;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();
list1.add(10);
list1.add(20);
list2.add(30);
list2.add(40);
list1.merge(list2);
list1.print(); // 10 -> 20 -> 30 -> 40
```
Объяснение:
- Метод `merge()` объединяет два списка, соединяя конец первого списка с началом второго.
---
🔟 Подсчёт элементов в списке
⌛ Задача: Написать метод для подсчёта количества элементов в односвязном списке.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  count() {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
console.log(list.count()); // 3
```
Объяснение:
- Метод `count()` перебирает список и увеличивает счётчик для каждого узла, возвращая количество элементов в списке.
Односвязный список — это мощная структура данных, которая позволяет эффективно добавлять, удалять и манипулировать элементами, но с затратами на произвольный доступ.
---------------------
⋙ ❍ Множество:
---
Множество — это структура данных, которая хранит уникальные значения. В JavaScript для работы с множествами используется встроенный объект `Set`. Множества не содержат повторяющихся элементов, и их элементы не упорядочены.
1️⃣ Создание множества и добавление элементов
⌛ Задача: Реализовать множество и добавить в него несколько элементов.
🎯 Решение:
```js
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set); // Set { 1, 2, 3 }
```
Объяснение:
- Множество создается с помощью конструктора `Set()`.
- Метод `add()` добавляет элементы в множество.
- В множестве не может быть повторяющихся значений.
---
2️⃣ Проверка наличия элемента в множестве
⌛ Задача: Написать функцию для проверки, существует ли элемент в множестве.
🎯 Решение:
```js
const set = new Set([1, 2, 3]);
console.log(set.has(2)); // true
console.log(set.has(5)); // false
```
Объяснение:
- Метод `has()` проверяет наличие элемента в множестве.
- Если элемент существует, возвращается `true`, если нет — `false`.
---
3️⃣ Удаление элемента из множества
⌛ Задача: Написать функцию для удаления элемента из множества.
🎯 Решение:
```js
const set = new Set([1, 2, 3]);
set.delete(2);
console.log(set); // Set { 1, 3 }
```
Объяснение:
- Метод `delete()` удаляет элемент из множества.
- Если элемент существует, он будет удален, иначе множество остается без изменений.
---
4️⃣ Очищение множества
⌛ Задача: Написать метод для очистки множества (удаления всех элементов).
🎯 Решение:
```js
const set = new Set([1, 2, 3]);
set.clear();
console.log(set); // Set {}
```
Объяснение:
- Метод `clear()` удаляет все элементы из множества, делая его пустым.
---
5️⃣ Перебор всех элементов множества
⌛ Задача: Написать метод для перебора всех элементов множества и вывода их на экран.
🎯 Решение:
```js
const set = new Set([1, 2, 3]);
set.forEach(value => console.log(value));
// 1
// 2
// 3
```
Объяснение:
- Метод `forEach()` используется для перебора всех элементов множества и выполнения функции для каждого элемента.
---
6️⃣ Получение размера множества
⌛ Задача: Написать функцию для получения количества элементов в множестве.
🎯 Решение:
```js
const set = new Set([1, 2, 3, 4]);
console.log(set.size); // 4
```
Объяснение:
- Свойство `size` возвращает количество элементов в множестве.
---
7️⃣ Объединение двух множеств
⌛ Задача: Написать функцию для объединения двух множеств.
🎯 Решение:
```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const union = new Set([...set1, ...set2]);
console.log(union); // Set { 1, 2, 3, 4, 5 }
```
Объяснение:
- Для объединения двух множеств мы используем оператор распространения (`...`), который распаковывает элементы из каждого множества и собирает их в новое множество.
---
8️⃣ Пересечение двух множеств
⌛ Задача: Написать функцию для нахождения пересечения двух множеств.
🎯 Решение:
```js
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection); // Set { 3 }
```
Объяснение:
- Для нахождения пересечения используем метод `filter()`, чтобы отфильтровать только те элементы, которые есть в обоих множествах.
---
9️⃣ Разность двух множеств
⌛ Задача: Написать функцию для нахождения разности двух множеств (элементы, которые есть в первом множестве, но отсутствуют во втором).
🎯 Решение:
```js
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5]);
const difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(difference); // Set { 1, 2 }
```
Объяснение:
- Для нахождения разности используем метод `filter()`, чтобы отфильтровать элементы, которые есть в первом множестве, но нет во втором.
---
🔟 Симметрическая разность двух множеств
⌛ Задача: Написать функцию для нахождения симметрической разности двух множеств (элементы, которые есть в одном множестве, но отсутствуют в другом).
🎯 Решение:
```js
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);
const symmetricDifference = new Set([
  ...[...set1].filter(x => !set2.has(x)),
  ...[...set2].filter(x => !set1.has(x))
]);
console.log(symmetricDifference); // Set { 1, 2, 5, 6 }
```
Объяснение:
- Симметрическая разность состоит из элементов, которые есть в одном из двух множеств, но отсутствуют в другом.
- Для этого используем два фильтра: один для элементов из первого множества, другой — для элементов из второго.
Множества в JavaScript являются полезной структурой данных, которая позволяет работать с уникальными элементами. С помощью методов `add()`, `delete()`, `has()`, а также с использованием операторов для объединения, пересечения и разности множеств, можно легко манипулировать данными.
---------------------
⋙ ❍ Словарь:
---
Словарь или объект в JavaScript — это структура данных, которая хранит данные в виде пар "ключ-значение". Это основной способ работы с ассоциативными массивами в JavaScript.
1️⃣ Создание словаря и добавление элементов
⌛ Задача: Реализовать словарь с методами для добавления элементов и получения значений по ключу.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  get(key) {
    return this.items[key] || undefined;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
console.log(dict.get('apple')); // fruit
console.log(dict.get('carrot')); // vegetable
console.log(dict.get('banana')); // undefined
```
Объяснение:
- Создали словарь с методами для добавления и получения значений по ключу.
- Если ключ не существует, возвращаем `undefined`.
---
2️⃣ Проверка наличия ключа в словаре
⌛ Задача: Написать метод для проверки, существует ли ключ в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  has(key) {
    return key in this.items;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
console.log(dict.has('apple')); // true
console.log(dict.has('banana')); // false
```
Объяснение:
- Метод `has()` проверяет наличие ключа в словаре с помощью оператора `in`.
---
3️⃣ Удаление элемента по ключу
⌛ Задача: Написать метод для удаления элемента по ключу.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  remove(key) {
    if (this.has(key)) {
      delete this.items[key];
    }
  }

  has(key) {
    return key in this.items;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('banana', 'fruit');
dict.remove('banana');
console.log(dict.has('banana')); // false
```
Объяснение:
- Метод `remove()` удаляет элемент, если ключ существует в словаре.
---
4️⃣ Получение всех ключей из словаря
⌛ Задача: Написать метод для получения всех ключей в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  keys() {
    return Object.keys(this.items);
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('banana', 'fruit');
console.log(dict.keys()); // ['apple', 'banana']
```
Объяснение:
- Метод `keys()` возвращает массив всех ключей с помощью `Object.keys()`.
---
5️⃣ Получение всех значений из словаря
⌛ Задача: Написать метод для получения всех значений в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  values() {
    return Object.values(this.items);
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
console.log(dict.values()); // ['fruit', 'vegetable']
```
Объяснение:
- Метод `values()` возвращает массив всех значений с помощью `Object.values()`.
---
6️⃣ Перебор всех элементов словаря
⌛ Задача: Написать метод для перебора всех элементов словаря и вывода их на экран.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  forEach(callback) {
    for (let key in this.items) {
      callback(key, this.items[key]);
    }
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
dict.forEach((key, value) => console.log(`${key}: ${value}`));
// apple: fruit
// carrot: vegetable
```
Объяснение:
- Метод `forEach()` перебирает все ключи и значения, вызывая переданную функцию для каждого элемента.
---
7️⃣ Слияние двух словарей
⌛ Задача: Написать метод для слияния двух словарей в один.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  merge(otherDict) {
    for (let key in otherDict.items) {
      this.items[key] = otherDict.items[key];
    }
  }
}

const dict1 = new Dictionary();
dict1.add('apple', 'fruit');
const dict2 = new Dictionary();
dict2.add('carrot', 'vegetable');
dict1.merge(dict2);
console.log(dict1.keys()); // ['apple', 'carrot']
```
Объяснение:
- Метод `merge()` объединяет два словаря. Все ключи и значения второго словаря добавляются в первый.
---
8️⃣ Подсчёт количества элементов в словаре
⌛ Задача: Написать метод для подсчёта количества элементов в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  size() {
    return Object.keys(this.items).length;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('banana', 'fruit');
console.log(dict.size()); // 2
```
Объяснение:
- Метод `size()` возвращает количество элементов в словаре, используя `Object.keys()`.
---
9️⃣ Фильтрация словаря
⌛ Задача: Написать метод для фильтрации словаря по условию (например, все ключи, связанные с фруктами).
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  filter(callback) {
    const filtered = new Dictionary();
    for (let key in this.items) {
      if (callback(key, this.items[key])) {
        filtered.add(key, this.items[key]);
      }
    }
    return filtered;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
dict.add('banana', 'fruit');
const fruits = dict.filter((key, value) => value === 'fruit');
console.log(fruits.keys()); // ['apple', 'banana']
```
Объяснение:
- Метод `filter()` создает новый словарь с элементами, которые удовлетворяют условию в `callback`.
---
🔟 Обновление значений по ключу
⌛ Задача: Написать метод для обновления значения в словаре по ключу.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  update(key, newValue) {
    if (this.has(key)) {
      this.items[key] = newValue;
    }
  }

  has(key) {
    return key in this.items;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.update('apple', 'red fruit');
console.log(dict.get('apple')); // 'red fruit'
```
Объяснение:
- Метод `update()` обновляет значение для существующего ключа. Если ключ не существует, ничего не происходит.
Итог
Словарь — это отличная структура данных для хранения ассоциативных пар "ключ-значение". Он широко используется для быстрого доступа к данным, а в JavaScript для этой цели чаще всего используют объекты.
Словарь позволяет легко добавлять, удалять элементы, проверять их наличие и проводить различные манипуляции с данными.
---------------------
⋙ ❍ Стек:
---
Стек (Stack) в JavaScript
Что такое стек?
Стек (Stack) — это структура данных, работающая по принципу LIFO (Last In, First Out — последний вошёл, первый вышел).
Основные операции стека
1. push(x) – добавляет элемент в стек.
2. pop() – удаляет и возвращает верхний элемент.
3. peek() – возвращает верхний элемент без удаления.
4. isEmpty() – проверяет, пуст ли стек.
5. size() – возвращает количество элементов.
---
🎯 Простая реализация стека на массиве
```js
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

const s = new Stack();
s.push(10);
s.push(20);
console.log(s.pop()); // 20
console.log(s.peek()); // 10
console.log(s.isEmpty()); // false
```
---
1️⃣ Проверка правильности скобок (Valid Parentheses)
⌛ Задача: Проверить, является ли строка с `()`, `{}`, `[]` правильной (парные скобки).
🎯 Решение:
```js
function isValidParentheses(s) {
  const stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("(){}[]")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("{[()]}")); // true
```
Объяснение:
- Если видим открывающую скобку – кладём в стек.
- Если встречаем закрывающую – сравниваем с вершиной стека.
---
2️⃣ Преобразование десятичного числа в двоичное
⌛ Задача: Написать функцию, которая переводит число в двоичную систему.
🎯 Решение:
```js
function decimalToBinary(n) {
  const stack = [];

  while (n > 0) {
    stack.push(n % 2);
    n = Math.floor(n / 2);
  }

  return stack.reverse().join('');
}

console.log(decimalToBinary(10)); // "1010"
console.log(decimalToBinary(25)); // "11001"
```
Объяснение:
- Остаток от деления на `2` сохраняем в стек.
- Читаем стек в обратном порядке.
---
3️⃣ Операции над стеком (Min Stack)
⌛ Задача: Реализовать стек с функцией getMin(), которая за O(1) находит минимум.
🎯 Решение:
```js
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x);
    }
  }

  pop() {
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const ms = new MinStack();
ms.push(3);
ms.push(5);
ms.push(2);
ms.push(1);
console.log(ms.getMin()); // 1
ms.pop();
console.log(ms.getMin()); // 2
```
Объяснение:
- minStack хранит минимальный элемент в каждый момент.
---
4️⃣ Обратный порядок строки (Reverse String)
⌛ Задача: Перевернуть строку с помощью стека.
🎯 Решение:
```js
function reverseString(s) {
  const stack = s.split('');
  let reversed = '';

  while (stack.length) {
    reversed += stack.pop();
  }

  return reversed;
}

console.log(reverseString("hello")); // "olleh"
```
Объяснение:
- Кладём символы в стек, затем достаём в обратном порядке.
---
5️⃣ Постфиксная нотация (Reverse Polish Notation, RPN)
⌛ Задача: Вычислить выражение в обратной польской нотации.
🎯 Решение:
```js
function evalRPN(tokens) {
  const stack = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(eval(`${a} ${token} ${b}`));
    }
  }

  return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
```
Объяснение:
- Если видим число – кладём в стек.
- Если оператор – берём два числа и выполняем операцию.
---
6️⃣ Отмена последнего действия (Undo)
🎯 Решение:
```js
class UndoStack {
  constructor() {
    this.stack = [];
  }

  execute(action) {
    this.stack.push(action);
    console.log(`Выполнено: ${action}`);
  }

  undo() {
    console.log(`Отменено: ${this.stack.pop()}`);
  }
}

const editor = new UndoStack();
editor.execute("Написать код");
editor.execute("Добавить комментарий");
editor.undo(); // "Отменено: Добавить комментарий"
```
---
7️⃣ Проверка палиндрома
🎯 Решение:
```js
function isPalindrome(s) {
  const stack = s.split('');
  return s === stack.reverse().join('');
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```
---
8️⃣ Сортировка стека
🎯 Решение:
```js
function sortStack(stack) {
  return stack.sort((a, b) => a - b);
}

console.log(sortStack([3, 1, 4, 2])); // [1, 2, 3, 4]
```
---
9️⃣ Баланс скобок в математических выражениях
🎯 Решение:
```js
console.log(isValidParentheses("[(2+3) * (5/2)]")); // true
```
---
🔟 История браузера (Back button)
🎯 Решение:
```js
class BrowserHistory {
  constructor() {
    this.history = [];
  }

  visit(page) {
    this.history.push(page);
  }

  back() {
    return this.history.pop();
  }
}

const browser = new BrowserHistory();
browser.visit("google.com");
browser.visit("stackoverflow.com");
console.log(browser.back()); // "stackoverflow.com"
```
Стек – полезная структура данных для отката изменений, парсинга выражений, управления вызовами функций.
---------------------
⋙ ❍ Очередь с приоритетом:
---
Что такое очередь с приоритетом?
Очередь с приоритетом — это структура данных, похожая на обычную очередь, но с одной особенностью: элементы извлекаются не в порядке добавления, а в порядке их приоритета.
🛠 Основные операции
1. enqueue (добавление элемента с приоритетом)
2. dequeue (извлечение элемента с наивысшим приоритетом)
3. peek (просмотр элемента с наивысшим приоритетом, без удаления)
4. isEmpty (проверка на пустоту)
5. size (количество элементов)
---
🎯 Реализация очереди с приоритетом
Обычно очередь с приоритетом реализуется с массивом (менее эффективно) или бинарной кучей (более эффективно).
Простая реализация на массиве (O(n) на добавление, O(1) на извлечение)
```js
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority); // Сортируем по приоритету (O(n log n))
  }

  dequeue() {
    return this.queue.shift(); // Удаляем элемент с наивысшим приоритетом (O(1))
  }

  peek() {
    return this.queue[0]; // Возвращаем элемент с наивысшим приоритетом без удаления
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

const pq = new PriorityQueue();
pq.enqueue("Легкая задача", 3);
pq.enqueue("Срочная задача", 1);
pq.enqueue("Средняя задача", 2);
console.log(pq.dequeue()); // { element: 'Срочная задача', priority: 1 }
```
---
1️⃣ Реализация приоритетной очереди на куче (heap)
⌛ Задача: Реализовать приоритетную очередь с использованием бинарной кучи для оптимального времени работы.
🎯 Решение (O(log n) на добавление и удаление):
```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(element, priority) {
    this.heap.push({ element, priority });
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  sinkDown(index) {
    let leftChild, rightChild, minIndex;
    while (true) {
      leftChild = 2 * index + 1;
      rightChild = 2 * index + 2;
      minIndex = index;

      if (leftChild < this.heap.length && this.heap[leftChild].priority < this.heap[minIndex].priority) {
        minIndex = leftChild;
      }
      if (rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[minIndex].priority) {
        minIndex = rightChild;
      }
      if (minIndex === index) break;
      [this.heap[minIndex], this.heap[index]] = [this.heap[index], this.heap[minIndex]];
      index = minIndex;
    }
  }
}

const pq = new MinHeap();
pq.insert("Task A", 2);
pq.insert("Task B", 1);
pq.insert("Task C", 3);
console.log(pq.extractMin()); // { element: 'Task B', priority: 1 }
```
---
2️⃣ Обработка задач с разными приоритетами
⌛ Задача: Написать систему обработки задач, где более важные выполняются первыми.
🎯 Решение:
```js
class TaskScheduler {
  constructor() {
    this.pq = new MinHeap();
  }

  addTask(task, priority) {
    this.pq.insert(task, priority);
  }

  executeNextTask() {
    return this.pq.extractMin();
  }
}

const scheduler = new TaskScheduler();
scheduler.addTask("Fix bug", 1);
scheduler.addTask("Develop feature", 2);
console.log(scheduler.executeNextTask()); // Fix bug
```
---
3️⃣ Реализация алгоритма Дейкстры
⌛ Задача: Найти кратчайший путь в графе с помощью очереди с приоритетом.
🎯 Решение:
```js
function dijkstra(graph, start) {
  const pq = new MinHeap();
  const distances = {};
  for (let node in graph) distances[node] = Infinity;
  distances[start] = 0;

  pq.insert(start, 0);

  while (pq.heap.length) {
    let { element: current } = pq.extractMin();

    for (let neighbor in graph[current]) {
      let newDist = distances[current] + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.insert(neighbor, newDist);
      }
    }
  }
  return distances;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, "A"));
```
---
4️⃣ Медиана потока чисел (Median Stream)
⌛ Задача: Поддерживать поток чисел и находить медиану.
🎯 Решение:
Используем две очереди с приоритетом (макс-кучу и мин-кучу):
```js
class MedianFinder {
  constructor() {
    this.low = new MaxHeap();
    this.high = new MinHeap();
  }

  addNum(num) {
    this.low.insert(num, -num);
    this.high.insert(this.low.extractMax().element, this.low.extractMax().priority);
    if (this.low.size() < this.high.size()) {
      this.low.insert(this.high.extractMin().element, -this.high.extractMin().priority);
    }
  }

  findMedian() {
    return this.low.size() > this.high.size() ? this.low.peek().element : (this.low.peek().element + this.high.peek().element) / 2;
  }
}
```
Очередь с приоритетом полезна для обработки задач, алгоритмов поиска пути, оптимизации маршрутов и других задач, где важен порядок приоритетов!
---
5️⃣ Симуляция процессов в ОС (с приоритетами) в JavaScript
⌛ Задача:
Реализовать планировщик процессов, в котором:
- Каждый процесс имеет приоритет (чем меньше число, тем выше приоритет).
- Планировщик сначала выполняет более важные процессы.
- Если процессы с одинаковым приоритетом, они выполняются в порядке добавления.
- После выполнения процесс удаляется из очереди.
🎯 Решение:
Используем очередь с приоритетом (`Priority Queue`), основанную на минимальной куче (Min Heap).
```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(process, priority) {
    this.heap.push({ process, priority });
    this._bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._sinkDown(0);

    return min;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  _sinkDown(index) {
    let leftChild, rightChild;
    let smallest = index;

    while (true) {
      leftChild = 2 * index + 1;
      rightChild = 2 * index + 2;

      if (leftChild < this.heap.length && this.heap[leftChild].priority < this.heap[smallest].priority) {
        smallest = leftChild;
      }

      if (rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[smallest].priority) {
        smallest = rightChild;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class ProcessScheduler {
  constructor() {
    this.queue = new MinHeap();
  }

  addProcess(name, priority) {
    console.log(`Процесс "${name}" добавлен с приоритетом ${priority}`);
    this.queue.insert(name, priority);
  }

  runNextProcess() {
    if (this.queue.isEmpty()) {
      console.log("Нет процессов для выполнения.");
      return;
    }
    const { process, priority } = this.queue.extractMin();
    console.log(`🔄 Выполняется процесс "${process}" с приоритетом ${priority}`);
  }
}

// 🔥 Симуляция работы планировщика процессов:
const scheduler = new ProcessScheduler();

scheduler.addProcess("Антивирус", 2);
scheduler.addProcess("Видео-рендеринг", 5);
scheduler.addProcess("Системное обновление", 1);
scheduler.addProcess("Музыка", 4);

scheduler.runNextProcess(); // Выполняется "Системное обновление" (приоритет 1)
scheduler.runNextProcess(); // Выполняется "Антивирус" (приоритет 2)
scheduler.runNextProcess(); // Выполняется "Музыка" (приоритет 4)
scheduler.runNextProcess(); // Выполняется "Видео-рендеринг" (приоритет 5)
scheduler.runNextProcess(); // Нет процессов для выполнения
```
---
Объяснение:
1. Используем очередь с приоритетом (Min Heap):
   - Чем меньше число приоритета, тем выше важность процесса.
   - Min Heap автоматически сортирует процессы, поддерживая их в правильном порядке.
2. Алгоритм работы:
   - addProcess(name, priority) — добавляет процесс в очередь.
   - runNextProcess() — выполняет наиболее важный процесс и удаляет его.
3. Симуляция работы ОС:
   - Сначала выполняются критически важные процессы.
   - Затем менее важные процессы (например, музыка, рендеринг видео).
---
📌 Итог
✔ Такой подход используется в операционных системах для управления задачами.
✔ Позволяет эффективно планировать работу процессора.
✔ Приоритеты управляют порядком выполнения процессов. 🚀
---
6️⃣ Оптимальное планирование задач на сервере
⌛ Задача: Реализовать систему планирования задач на сервере, где задачи с более высоким приоритетом выполняются первыми.
🎯 Решение:
```js
class TaskScheduler {
  constructor() {
    this.pq = new MinHeap();
  }

  addTask(taskName, priority) {
    this.pq.insert(taskName, priority);
  }

  runNextTask() {
    const nextTask = this.pq.extractMin();
    return nextTask ? `Выполняется: ${nextTask.element}` : "Нет задач";
  }
}

const server = new TaskScheduler();
server.addTask("Обновить БД", 2);
server.addTask("Запустить бэкап", 1);
server.addTask("Очистить логи", 3);

console.log(server.runNextTask()); // Выполняется: Запустить бэкап
console.log(server.runNextTask()); // Выполняется: Обновить БД
```
Объяснение:
- Каждая задача имеет приоритет.
- Сервер выполняет задачи в порядке их важности.
---
7️⃣ Обработка заявок в службе поддержки
⌛ Задача: Написать систему обработки заявок, где **VIP-клиенты получают помощь быстрее.
🎯 Решение:
```js
class SupportQueue {
  constructor() {
    this.pq = new MinHeap();
  }

  addRequest(clientName, priority) {
    this.pq.insert(clientName, priority);
  }

  processNextRequest() {
    const nextClient = this.pq.extractMin();
    return nextClient ? `Обслуживается клиент: ${nextClient.element}` : "Нет запросов";
  }
}

const support = new SupportQueue();
support.addRequest("Обычный клиент", 3);
support.addRequest("VIP-клиент", 1);
support.addRequest("Премиум-клиент", 2);

console.log(support.processNextRequest()); // Обслуживается клиент: VIP-клиент
console.log(support.processNextRequest()); // Обслуживается клиент: Премиум-клиент
```
Объяснение:
- VIP-клиенты получают более высокий приоритет (меньшие значения).
- Используем приоритетную очередь для быстрой обработки.
---
8️⃣ Система бронирования билетов
⌛ Задача: Написать систему бронирования билетов, где клиенты с **платными подписками** получают приоритет при покупке.
🎯 Решение:
```js
class TicketQueue {
  constructor() {
    this.pq = new MinHeap();
  }

  bookTicket(clientName, membershipType) {
    const priority = membershipType === "VIP" ? 1 : membershipType === "Premium" ? 2 : 3;
    this.pq.insert(clientName, priority);
  }

  processBooking() {
    const client = this.pq.extractMin();
    return client ? `Билет оформлен для: ${client.element}` : "Нет заявок";
  }
}

const tickets = new TicketQueue();
tickets.bookTicket("Анна", "Standard");
tickets.bookTicket("Иван", "VIP");
tickets.bookTicket("Олег", "Premium");

console.log(tickets.processBooking()); // Билет оформлен для: Иван
console.log(tickets.processBooking()); // Билет оформлен для: Олег
```
Объяснение:
- VIP > Premium > Standard (меньший приоритет — выше приоритет).
- VIP-клиенты первыми получают билеты.
---
9️⃣ Алгоритм A* (Поиск пути в лабиринте)
⌛ Задача: Реализовать поиск кратчайшего пути в лабиринте с использованием A* (A-star).
🎯 Решение (упрощённый вариант):
```js
function aStar(start, goal, graph) {
  const pq = new MinHeap();
  pq.insert(start, 0);
  const cameFrom = {};
  const costSoFar = { [start]: 0 };

  while (pq.heap.length) {
    let { element: current } = pq.extractMin();
    if (current === goal) break;

    for (let neighbor in graph[current]) {
      let newCost = costSoFar[current] + graph[current][neighbor];
      if (!(neighbor in costSoFar) || newCost < costSoFar[neighbor]) {
        costSoFar[neighbor] = newCost;
        let priority = newCost;
        pq.insert(neighbor, priority);
        cameFrom[neighbor] = current;
      }
    }
  }

  return cameFrom;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(aStar("A", "D", graph));
```
Объяснение:
- A* ищет путь к цели, используя приоритетную очередь.
- Находит оптимальный маршрут в графе.
---
🔟 Очередь задач для робота на складе
⌛ Задача: Реализовать систему управления складским роботом, который выполняет **более срочные задачи раньше.
🎯 Решение:
```js
class WarehouseRobot {
  constructor() {
    this.taskQueue = new MinHeap();
  }

  addTask(task, priority) {
    this.taskQueue.insert(task, priority);
  }

  processTask() {
    const nextTask = this.taskQueue.extractMin();
    return nextTask ? `Робот выполняет: ${nextTask.element}` : "Нет задач";
  }
}

const robot = new WarehouseRobot();
robot.addTask("Переместить ящик A", 2);
robot.addTask("Срочная доставка", 1);
robot.addTask("Распаковка товаров", 3);

console.log(robot.processTask()); // Робот выполняет: Срочная доставка
console.log(robot.processTask()); // Робот выполняет: Переместить ящик A
```
Объяснение:
- Более срочные задачи выполняются первыми.
- Приоритетная очередь позволяет управлять задачами эффективно.
Итог
Очередь с приоритетом — мощная структура данных, которую можно использовать:
- Для управления задачами в серверных системах.
- Для алгоритмов поиска пути (A* и Dijkstra).
- В службах поддержки, логистике, бронировании билетов.
- В искусственном интеллекте (AI), робототехнике, планировании маршрутов.
⚡ Где ещё можно использовать?
- Система управления лифтом 🚀
- Распределение CPU-процессов 💻
- Оптимизация рекламных аукционов 📊
> Очереди с приоритетом помогают оптимально управлять ресурсами и ускорять алгоритмы.
---------------------
⋙ ❍ Дек:
---
Дек (Deque) в JavaScript:
🔹 Что такое дек?
Дек (двусторонняя очередь, deque — double-ended queue) — структура данных, в которой элементы можно добавлять и удалять с обоих концов. Дек объединяет возможности стека (LIFO) и очереди (FIFO).
🛠 Основные операции дека
- Добавление в начало (`unshift()`) и в конец (`push()`).
- Удаление из начала (`shift()`) и из конца (`pop()`).
- Просмотр первого (`front()`) и последнего (`back()`) элемента.
- Проверка на пустоту (`isEmpty()`).
---
🎯 Реализация дека
JavaScript не имеет встроенного класса `Deque`, но мы можем реализовать его с использованием массива или объекта.
🎯 Реализация на массиве
```js
class Deque {
  constructor() {
    this.items = [];
  }

  pushBack(item) { this.items.push(item); }  // Добавить в конец
  pushFront(item) { this.items.unshift(item); } // Добавить в начало
  popBack() { return this.items.pop(); } // Удалить с конца
  popFront() { return this.items.shift(); } // Удалить с начала
  front() { return this.items[0]; } // Первый элемент
  back() { return this.items[this.items.length - 1]; } // Последний элемент
  isEmpty() { return this.items.length === 0; } // Проверка на пустоту
  size() { return this.items.length; } // Размер дека
  display() { console.log(this.items); } // Вывести содержимое
}

const deque = new Deque();
deque.pushFront(1);
deque.pushBack(2);
deque.pushFront(3);
deque.display(); // [3, 1, 2]
```
---
1️⃣ Реализация дека с помощью объекта (оптимизация)
⌛ Задача: Реализовать дек на основе объекта (без `unshift()`, который медленный).
🎯 Решение:
```js
class Deque {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  pushFront(item) {
    this.frontIndex--;
    this.items[this.frontIndex] = item;
  }

  pushBack(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
  }

  popFront() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  popBack() {
    if (this.isEmpty()) return undefined;
    this.backIndex--;
    const item = this.items[this.backIndex];
    delete this.items[this.backIndex];
    return item;
  }

  isEmpty() { return this.frontIndex === this.backIndex; }
  size() { return this.backIndex - this.frontIndex; }
  front() { return this.items[this.frontIndex]; }
  back() { return this.items[this.backIndex - 1]; }
}

const deque = new Deque();
deque.pushFront(10);
deque.pushBack(20);
console.log(deque.popFront()); // 10
console.log(deque.popBack()); // 20
```
---
2️⃣ Палиндром с использованием дека
⌛ Задача: Проверить, является ли строка палиндромом (читается одинаково в обе стороны).
🎯 Решение:
```js
const isPalindrome = (str) => {
  const deque = new Deque();
  for (let char of str) deque.pushBack(char);

  while (deque.size() > 1) {
    if (deque.popFront() !== deque.popBack()) return false;
  }
  return true;
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
```
---
3️⃣ Имитация очереди с приоритетом
⌛ Задача: Использовать дек для реализации приоритетной очереди.
🎯 Решение:
```js
class PriorityQueue {
  constructor() {
    this.deque = new Deque();
  }

  enqueue(item, isHighPriority = false) {
    isHighPriority ? this.deque.pushFront(item) : this.deque.pushBack(item);
  }

  dequeue() { return this.deque.popFront(); }
}

const pq = new PriorityQueue();
pq.enqueue("обычная задача");
pq.enqueue("срочная задача", true);
console.log(pq.dequeue()); // "срочная задача"
```
---
4️⃣ Очередь для обработки задач
⌛ Задача: Реализовать дек для задач с возможностью отмены последней операции.
🎯 Решение:
```js
class TaskManager {
  constructor() {
    this.deque = new Deque();
  }

  addTask(task) { this.deque.pushBack(task); }
  undoTask() { return this.deque.popBack(); }
}

const tasks = new TaskManager();
tasks.addTask("Задача 1");
tasks.addTask("Задача 2");
console.log(tasks.undoTask()); // "Задача 2"
```
---
5️⃣ Обратный порядок слов
⌛ Задача: Перевернуть строку с использованием дека.
🎯 Решение:
```js
const reverseString = (str) => {
  const deque = new Deque();
  for (let char of str) deque.pushFront(char);

  let reversed = "";
  while (!deque.isEmpty()) reversed += deque.popFront();
  return reversed;
};

console.log(reverseString("hello")); // "olleh"
```
---
6️⃣ Циклический сдвиг массива
⌛ Задача: Сдвинуть массив вправо на `k` позиций.
🎯 Решение:
```js
const rotateArray = (arr, k) => {
  const deque = new Deque();
  for (let num of arr) deque.pushBack(num);

  for (let i = 0; i < k; i++) deque.pushFront(deque.popBack());

  return [...deque.items];
};

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
```
---
7️⃣ Симуляция кэша (LRU Cache)
⌛ Задача: Реализовать LRU-кеш.
🎯 Решение:
```js
class LRUCache {
  constructor(size) {
    this.deque = new Deque();
    this.size = size;
    this.cache = new Set();
  }

  accessPage(page) {
    if (this.cache.has(page)) {
      this.deque.popFront(page);
      this.cache.delete(page);
    } else if (this.deque.size() === this.size) {
      this.cache.delete(this.deque.popBack());
    }

    this.deque.pushFront(page);
    this.cache.add(page);
  }

  display() { console.log([...this.deque.items]); }
}

const cache = new LRUCache(3);
cache.accessPage(1);
cache.accessPage(2);
cache.accessPage(3);
cache.accessPage(4);
cache.display(); // [4, 3, 2]
```
---
8️⃣ Проверка сбалансированных скобок
```js
const isBalanced = (str) => {
  const deque = new Deque();
  for (let char of str) {
    if (char === '(') deque.pushBack(char);
    else if (char === ')') {
      if (deque.isEmpty()) return false;
      deque.popBack();
    }
  }
  return deque.isEmpty();
};

console.log(isBalanced("(())")); // true
console.log(isBalanced("(()")) ; // false
```
---
9️⃣ Симуляция хода змейки (Snake Game) с использованием дека
⌛ Задача: Реализовать логику движения змейки, используя `Deque`.
🎯 Решение:
```js
class SnakeGame {
  constructor() {
    this.snake = new Deque();
    this.snake.pushBack([0, 0]); // Начальная позиция змейки
    this.directions = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  }

  move(direction) {
    let head = this.snake.back();
    let newHead = [head[0] + this.directions[direction][0], head[1] + this.directions[direction][1]];

    this.snake.pushBack(newHead);
    this.snake.popFront(); // Удаляем хвост (если не съели еду)

    return newHead;
  }

  display() {
    console.log([...this.snake.items]);
  }
}

const game = new SnakeGame();
game.move("R"); // Двигаем змейку вправо
game.move("D"); // Двигаем вниз
game.display(); // [[0,1], [1,1]]
```
Объяснение:
- `Deque` используется для хранения координат тела змейки.
- Добавляем новую голову (`pushBack()`), удаляем хвост (`popFront()`), если змейка не съела еду.
---
🔟 Поддержка истории действий (Undo/Redo)
⌛ Задача: Реализовать механизм Undo / Redo с помощью дека.
🎯 Решение:
```js
class HistoryManager {
  constructor() {
    this.undoStack = new Deque();
    this.redoStack = new Deque();
  }

  performAction(action) {
    this.undoStack.pushBack(action);
    this.redoStack = new Deque(); // Очистить Redo-стек после нового действия
  }

  undo() {
    if (!this.undoStack.isEmpty()) {
      let lastAction = this.undoStack.popBack();
      this.redoStack.pushBack(lastAction);
      return `Отменено: ${lastAction}`;
    }
    return "Нечего отменять";
  }

  redo() {
    if (!this.redoStack.isEmpty()) {
      let redoAction = this.redoStack.popBack();
      this.undoStack.pushBack(redoAction);
      return `Повторено: ${redoAction}`;
    }
    return "Нечего повторять";
  }

  displayHistory() {
    console.log("История действий:", [...this.undoStack.items]);
  }
}

const history = new HistoryManager();
history.performAction("Открыт файл");
history.performAction("Написан код");
console.log(history.undo()); // "Отменено: Написан код"
console.log(history.redo()); // "Повторено: Написан код"
```
Объяснение:
- Используем два дека: `undoStack` (для отмены) и `redoStack` (для повторения).
- При новом действии очищаем `redoStack`, т.к. после новых операций старые "повторения" уже не актуальны.
Дек — мощный инструмент для решения задач, связанных с историей действий, обработкой строк, симуляцией игр и даже алгоритмами поиска!
---------------------
⋙ ❍ Графы:
---
Графы в JavaScript:
Что такое граф?
Граф — это структура данных, которая состоит из:
- Вершин (nodes, vertices) — объекты или узлы.
- Рёбер (edges) — связи между вершинами.
Виды графов
🔹 Ориентированные и неориентированные
- В ориентированном графе связи имеют направление (например, однонаправленные дороги).
- В неориентированном графе связи двусторонние (например, друзья в соцсетях).
🔹 Взвешенные и невзвешенные
- Взвешенные графы имеют "вес" у рёбер (например, стоимость билета или расстояние).
- Невзвешенные графы имеют только связи без весов.
---
Как представить граф в памяти?
🔸 Матрица смежности (подходит для плотных графов)
Массив `n × n`, где `1` означает связь между вершинами, а `0` — её отсутствие.
```js
const adjacencyMatrix = [
  [0, 1, 1], // Вершина 0 соединена с 1 и 2
  [1, 0, 1], // Вершина 1 соединена с 0 и 2
  [1, 1, 0]  // Вершина 2 соединена с 0 и 1
];
```
🔸 Список смежности (подходит для разреженных графов)
Объект, где ключи — вершины, а значения — массивы смежных вершин.
```js
const adjacencyList = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1]
};
```
---
1️⃣ Создание графа
⌛ Задача: Реализовать структуру графа с методами **добавления вершин и рёбер.
🎯 Решение и объяснение:
Используем объект `adjacencyList` для хранения графа.
```js
class Graph {
  constructor() {
    this.adjacencyList = {}; // Хранение графа
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // Для неориентированного графа
  }

  display() {
    console.log(this.adjacencyList);
  }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.display();
// Вывод: { '1': [ 2 ], '2': [ 1, 3 ], '3': [ 2 ] }
```
---
2️⃣ Обход в глубину (DFS)
⌛ Задача: Реализовать DFS для обхода графа.
🎯 Решение и объяснение:
DFS рекурсивно посещает вершины, углубляясь как можно дальше.
```js
const dfs = (graph, start, visited = new Set()) => {
  if (!visited.has(start)) {
    console.log(start);
    visited.add(start);
    for (let neighbor of graph[start]) {
      dfs(graph, neighbor, visited);
    }
  }
};

const graph2 = { 0: [1, 2], 1: [0, 3], 2: [0], 3: [1] };
dfs(graph2, 0);
// Вывод: 0 1 3 2
```
---
3️⃣ Обход в ширину (BFS)
⌛ Задача: Реализовать BFS для обхода графа.
🎯 Решение и объяснение:
BFS проходит граф по уровням, используя очередь.
```js
const bfs = (graph, start) => {
  const queue = [start];
  const visited = new Set(queue);

  while (queue.length) {
    const node = queue.shift();
    console.log(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
};

bfs(graph2, 0);
// Вывод: 0 1 2 3
```
---
4️⃣ Проверка пути между двумя вершинами
⌛ Задача: Проверить, есть ли путь между вершинами.
🎯 Решение и объяснение:
Используем DFS.
```js
const hasPath = (graph, start, end, visited = new Set()) => {
  if (start === end) return true;
  if (visited.has(start)) return false;

  visited.add(start);
  for (let neighbor of graph[start]) {
    if (hasPath(graph, neighbor, end, visited)) return true;
  }
  return false;
};

console.log(hasPath(graph2, 0, 3)); // true
console.log(hasPath(graph2, 2, 3)); // false
```
---
5️⃣ Количество компонент связности
⌛ Задача: Подсчитать количество несвязанных частей графа.
🎯 Решение и объяснение:
Запускаем DFS для каждой новой компоненты.
```js
const countComponents = (graph) => {
  const visited = new Set();
  let count = 0;

  const dfs = (node) => {
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) dfs(neighbor);
    }
  };

  for (let node in graph) {
    if (!visited.has(Number(node))) {
      count++;
      dfs(Number(node));
    }
  }
  return count;
};

console.log(countComponents({ 0: [1], 1: [0], 2: [] })); // 2
```
---
6️⃣ Поиск цикла
```js
const hasCycle = (graph, node, visited = new Set(), parent = -1) => {
  visited.add(node);
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      if (hasCycle(graph, neighbor, visited, node)) return true;
    } else if (neighbor !== parent) {
      return true;
    }
  }
  return false;
};
```
---
7️⃣ Кратчайший путь (BFS)
```js
const shortestPathBFS = (graph, start, end) => {
  const queue = [[start, 0]];
  const visited = new Set();

  while (queue.length) {
    const [node, dist] = queue.shift();
    if (node === end) return dist;

    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1;
};

console.log(shortestPathBFS(graph2, 0, 3)); // 2
```
---
8️⃣ Алгоритм Дейкстры
Используем приоритетную очередь для нахождения кратчайшего пути во взвешенном графе.
```js
// Реализация приоритетной очереди и Дейкстры
```
---
9️⃣ Проверка, является ли граф деревом
```js
const isTree = (graph) => {
  let edges = 0;
  for (let key in graph) edges += graph[key].length;
  edges /= 2;
  return countComponents(graph) === 1 && edges === Object.keys(graph).length - 1;
};
```
---
🔟 Нахождение мостов (DFS)
```js
// Используем алгоритм Тарьяна
```
---------------------
⋙ ❍ Природа графа:
---
Граф — это структура данных, состоящая из множества вершин (узлов) и рёбер (связей между узлами). Графы бывают ориентированные и неориентированные, взвешенные и невзвешенные, связные и несвязные.
1. ⌛ Задача: Определение, является ли граф связным
Граф считается связным, если между любой парой вершин существует путь. Проверим, является ли граф, представленный в виде списка смежности, связным.
🎯 Решение:
Используем обход в глубину (DFS) для проверки, можно ли достичь все вершины из стартовой.
```javascript
const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0, 3],
  3: [1, 2]
};

const isConnected = (graph) => {
  const visited = new Set();
  const startNode = Object.keys(graph)[0];

  const dfs = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        dfs(neighbor);
      }
    }
  };

  dfs(startNode);
  return visited.size === Object.keys(graph).length;
};

console.log(isConnected(graph)); // true
```
---
2. ⌛ Задача: Проверка, является ли граф деревом
Граф является деревом, если он связен и не содержит циклов.
🎯 Решение:
- Граф является деревом, если количество рёбер = количеству вершин - 1.
- Граф не содержит циклов (используем DFS для проверки).
```javascript
const isTree = (graph) => {
  const visited = new Set();
  let edgeCount = 0;

  const dfs = (node, parent) => {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor !== parent) {
        if (!dfs(neighbor, node)) return false;
        edgeCount++;
      }
    }
    return true;
  };

  const startNode = Object.keys(graph)[0];
  if (!dfs(startNode, null)) return false;

  return visited.size === Object.keys(graph).length && edgeCount === visited.size - 1;
};

const graph1 = { 0: [1, 2], 1: [0], 2: [0] }; // Дерево
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // С циклом, не дерево

console.log(isTree(graph1)); // true
console.log(isTree(graph2)); // false
```
---
3. ⌛ Задача: Проверка, является ли граф двудольным
Граф двудольный, если его вершины можно разбить на два множества, такие что все рёбра соединяют вершины из разных множеств.
🎯 Решение:
Используем BFS и красим вершины в два цвета.
```javascript
const isBipartite = (graph) => {
  const colors = {};

  for (let node in graph) {
    if (!(node in colors)) {
      colors[node] = 0;
      const queue = [node];

      while (queue.length) {
        let current = queue.shift();
        for (let neighbor of graph[current]) {
          if (!(neighbor in colors)) {
            colors[neighbor] = 1 - colors[current];
            queue.push(neighbor);
          } else if (colors[neighbor] === colors[current]) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

const graph1 = { 0: [1, 3], 1: [0, 2], 2: [1, 3], 3: [0, 2] };
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] };

console.log(isBipartite(graph1)); // true
console.log(isBipartite(graph2)); // false
```
---
4. ⌛ Задача: Определение количества компонентов связности
Если граф несвязный, его можно разбить на несколько компонент связности.
🎯 Решение:
Запускаем *DFS из каждой непосещённой вершины и считаем компоненты.
```javascript
const countComponents = (graph) => {
  const visited = new Set();
  let count = 0;

  const dfs = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        dfs(neighbor);
      }
    }
  };

  for (let node in graph) {
    if (!visited.has(node)) {
      count++;
      dfs(node);
    }
  }

  return count;
};

const graph1 = { 0: [1], 1: [0], 2: [3], 3: [2] }; // Две компоненты
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // Одна компонента

console.log(countComponents(graph1)); // 2
console.log(countComponents(graph2)); // 1
```
---
5. ⌛ Задача: Поиск цикла в неориентированном графе
Определим, есть ли в графе цикл.
🎯 Решение:
Используем DFS с отслеживанием родителя.
```javascript
const hasCycle = (graph) => {
  const visited = new Set();

  const dfs = (node, parent) => {
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  };

  for (let node in graph) {
    if (!visited.has(node)) {
      if (dfs(node, null)) return true;
    }
  }
  return false;
};

const graph1 = { 0: [1], 1: [0, 2], 2: [1] }; // Без цикла
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // С циклом

console.log(hasCycle(graph1)); // false
console.log(hasCycle(graph2)); // true
```
---

6. ⌛ Задача: Проверка, является ли граф полным
Граф называется полным, если каждая вершина соединена со всеми другими вершинами.
🎯 Решение:
В полном графе с `n` вершинами у каждой вершины должно быть `n-1` соседей.
```javascript
const isCompleteGraph = (graph) => {
  const nodes = Object.keys(graph);
  const n = nodes.length;

  for (let node of nodes) {
    if (graph[node].length !== n - 1) {
      return false;
    }
  }
  return true;
};

const graph1 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // Полный
const graph2 = { 0: [1], 1: [0, 2], 2: [1] }; // Не полный

console.log(isCompleteGraph(graph1)); // true
console.log(isCompleteGraph(graph2)); // false
```
---
7. ⌛ Задача: Поиск кратчайшего пути в невзвешенном графе (BFS)
Используем поиск в ширину (BFS), так как в невзвешенном графе он гарантирует нахождение кратчайшего пути.
🎯 Решение:
Мы будем использовать очередь (`queue`), чтобы проходить по графу уровнями.
```javascript
const shortestPathBFS = (graph, start, target) => {
  const queue = [[start, 0]]; // (вершина, расстояние)
  const visited = new Set();

  while (queue.length) {
    const [node, dist] = queue.shift();

    if (node === target) return dist;

    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1; // Если пути нет
};

const graph = { 0: [1, 2], 1: [0, 3], 2: [0, 3], 3: [1, 2] };

console.log(shortestPathBFS(graph, 0, 3)); // 2
console.log(shortestPathBFS(graph, 0, 4)); // -1 (нет пути)
```
---
8. ⌛ Задача: Поиск кратчайшего пути в взвешенном графе (алгоритм Дейкстры)
Для поиска кратчайшего пути в взвешенном графе используем алгоритм Дейкстры.
🎯 Решение:
Используем приоритетную очередь (min-heap).
```javascript
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift().element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const dijkstra = (graph, start) => {
  const distances = {};
  const pq = new PriorityQueue();

  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    let current = pq.dequeue();

    for (let neighbor in graph[current]) {
      let newDist = distances[current] + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.enqueue(neighbor, newDist);
      }
    }
  }

  return distances;
};

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, "A")); // { A: 0, B: 1, C: 3, D: 4 }
```
---
9. ⌛ Задача: Проверка, является ли граф планарным
Граф планарный, если его можно нарисовать на плоскости без пересечения рёбер.
🎯 Решение:
Используем формулу Эйлера для простого графа:
\[
V - E + F = 2
\]
где `V` — вершины, `E` — рёбра, `F` — грани. Для графов без граней используем критическое неравенство.
- В неориентированном графе без циклов должно быть `E ≤ 3V - 6`.
- В ориентированном графе `E ≤ 2V - 4`.
```javascript
const isPlanarGraph = (graph) => {
  const V = Object.keys(graph).length;
  let E = 0;

  for (let node in graph) {
    E += graph[node].length;
  }
  E /= 2; // Каждое ребро посчитано дважды

  return E <= 3 * V - 6;
};

const graph1 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // Полный граф K3 (планарный)
const graph2 = { 0: [1, 2, 3], 1: [0, 2, 3], 2: [0, 1, 3], 3: [0, 1, 2] }; // Полный граф K4 (планарный)
const graph3 = { 0: [1, 2, 3, 4], 1: [0, 2, 3, 4], 2: [0, 1, 3, 4], 3: [0, 1, 2, 4], 4: [0, 1, 2, 3] }; // Полный граф K5 (не планарный)

console.log(isPlanarGraph(graph1)); // true
console.log(isPlanarGraph(graph2)); // true
console.log(isPlanarGraph(graph3)); // false
```
---
10. ⌛ Задача: Нахождение мостов в графе
Мост — это ребро, удаление которого увеличивает число компонент связности.
🎯 Решение:
Используем обход в глубину (DFS) и время входа в вершину.
```javascript
const findBridges = (graph) => {
  let time = 0;
  const discovery = {};
  const low = {};
  const bridges = [];

  const dfs = (node, parent) => {
    discovery[node] = low[node] = ++time;

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;

      if (!(neighbor in discovery)) {
        dfs(neighbor, node);
        low[node] = Math.min(low[node], low[neighbor]);

        if (low[neighbor] > discovery[node]) {
          bridges.push([node, neighbor]);
        }
      } else {
        low[node] = Math.min(low[node], discovery[neighbor]);
      }
    }
  };

  for (let node in graph) {
    if (!(node in discovery)) dfs(node, null);
  }

  return bridges;
};

const graph = { 0: [1, 2], 1: [0, 2, 3], 2: [0, 1], 3: [1, 4], 4: [3] };

console.log(findBridges(graph)); // [[3, 4]]
```
---------------------
⋙ ❍ Представление графа в памяти компьютера:
---
Графы могут быть представлены в памяти несколькими способами, включая списки смежности и матрицы смежности. Для каждой задачи я объясню решение и представлю пример кода.
1. ⌛ Задача: Представление графа с использованием матрицы смежности
Представьте неориентированный граф с 4 вершинами, где вершины соединены следующим образом: 0 - 1, 0 - 2, 1 - 3.
🎯 Решение:
Матрица смежности — это двумерный массив, где строка i и столбец j содержат 1, если между вершинами i и j есть ребро, и 0, если нет.
```javascript
const graph = [
  [0, 1, 1, 0], // Вершина 0 соединена с вершинами 1 и 2
  [1, 0, 0, 1], // Вершина 1 соединена с вершинами 0 и 3
  [1, 0, 0, 0], // Вершина 2 соединена с вершинами 0
  [0, 1, 0, 0]  // Вершина 3 соединена с вершинами 1
];

console.log(graph);
```
2. ⌛ Задача: Представление направленного графа с помощью списка смежности
Создайте направленный граф с 3 вершинами, где 0 -> 1, 1 -> 2.
🎯 Решение:
Список смежности — это массив, где каждый элемент — это массив смежных вершин для данной вершины.
```javascript
const graph = {
  0: [1], // Вершина 0 соединена с вершиной 1
  1: [2], // Вершина 1 соединена с вершиной 2
  2: []   // Вершина 2 не соединена с другими вершинами
};

console.log(graph);
```
3. ⌛ Задача: Поиск всех смежных вершин для вершины 0 в списке смежности
Для графа из предыдущего примера найдите все вершины, которые смежны с вершиной 0.
🎯 Решение:
Для поиска всех смежных вершин нужно просто извлечь список смежности для вершины 0.
```javascript
const graph = {
  0: [1],
  1: [2],
  2: []
};

const getNeighbors = (graph, vertex) => graph[vertex] || [];

console.log(getNeighbors(graph, 0)); // [1]
```
4. ⌛ Задача: Проверка наличия ребра между двумя вершинами в матрице смежности
Проверьте, есть ли ребро между вершинами 0 и 2 в графе, представленном матрицей смежности.
🎯 Решение:
Проверка на наличие ребра сводится к проверке значения в соответствующей ячейке матрицы.
```javascript
const graph = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 1, 0, 0]
];

const hasEdge = (graph, vertex1, vertex2) => graph[vertex1][vertex2] === 1;

console.log(hasEdge(graph, 0, 2)); // true
console.log(hasEdge(graph, 1, 2)); // false
```
5. ⌛ Задача: Добавление ребра в граф, представленный списком смежности
Добавьте ребро между вершинами 1 и 2 в граф, представленный списком смежности.
🎯 Решение:
Для добавления ребра нужно добавить вершину в список смежности соответствующей вершины.
```javascript
const graph = {
  0: [1],
  1: [2],
  2: []
};

const addEdge = (graph, vertex1, vertex2) => {
  graph[vertex1].push(vertex2);
};

addEdge(graph, 1, 2); // Добавляем ребро 1 -> 2
console.log(graph);
```
6. ⌛ Задача: Удаление ребра из графа, представленного списком смежности
Удалите ребро между вершинами 0 и 1 в графе, представленном списком смежности.
🎯 Решение:
Для удаления ребра нужно удалить соответствующую вершину из списка смежности.
```javascript
const graph = {
  0: [1],
  1: [2],
  2: []
};

const removeEdge = (graph, vertex1, vertex2) => {
  const index = graph[vertex1].indexOf(vertex2);
  if (index !== -1) {
    graph[vertex1].splice(index, 1);
  }
};

removeEdge(graph, 0, 1); // Удаляем ребро 0 -> 1
console.log(graph);
```
7. ⌛ Задача: Поиск всех вершин графа, которые не имеют исходящих рёбер (в списке смежности)
Для графа из предыдущего примера найдите вершины, которые не имеют исходящих рёбер.
🎯 Решение:
Для поиска таких вершин нужно проверить все списки смежности и выявить те, которые пусты.
```javascript
const graph = {
  0: [1],
  1: [2],
  2: []
};

const findVerticesWithNoOutgoingEdges = graph => {
  return Object.keys(graph).filter(vertex => graph[vertex].length === 0);
};

console.log(findVerticesWithNoOutgoingEdges(graph)); // [2]
```
8. ⌛ Задача: Проверка, является ли граф ориентированным
Проверьте, является ли граф, представленный матрицей смежности, ориентированным. Граф ориентированный, если для каждой пары вершин (i, j) выполняется условие: если есть ребро из i в j, то нет ребра из j в i.
🎯 Решение:
Для проверки нужно пройтись по матрице и убедиться, что если `graph[i][j] === 1`, то `graph[j][i] === 0`.
```javascript
const graph = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
];

const isDirected = graph => {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (graph[i][j] === 1 && graph[j][i] === 1) {
        return false; // Граф не ориентированный
      }
    }
  }
  return true;
};

console.log(isDirected(graph)); // true
```
9. ⌛ Задача: Транспонирование графа, представленного матрицей смежности
Создайте транспонированную матрицу для графа, представленного матрицей смежности (все рёбра графа меняются на противоположные).
🎯 Решение:
Транспонирование матрицы сводится к обмену строк с колонками.
```javascript
const graph = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
];

const transposeGraph = graph => {
  const n = graph.length;
  const transposed = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      transposed[j][i] = graph[i][j];
    }
  }
  return transposed;
};

console.log(transposeGraph(graph));
```
10. ⌛ Задача: Представление взвешенного графа с помощью списка смежности
Представьте взвешенный направленный граф с 3 вершинами, где веса рёбер следующие: 0 -> 1 (вес 5), 1 -> 2 (вес 3).
🎯 Решение:
Для взвешенного графа в списке смежности можно хранить массив объектов с вершинами и весами.
```javascript
const graph = {
  0: [{ vertex: 1, weight: 5 }],
  1: [{ vertex: 2, weight: 3 }],
  2: []
};

console.log(graph);
```
Эти задачи покрывают основные способы представления графов в памяти и дают представление о том, как манипулировать графами в JavaScript.
---------------------
⋙ ❍ Обходы графа:
---
1. Обход графа в глубину (DFS)
⌛ Задача: Напишите функцию, которая будет обходить граф в глубину и возвращать список посещенных вершин.
🎯 Решение:
```javascript
function dfs(graph, start) {
    let visited = new Set();
    let result = [];

    function visit(node) {
        if (visited.has(node)) return;
        visited.add(node);
        result.push(node);

        for (let neighbor of graph[node]) {
            visit(neighbor);
        }
    }

    visit(start);
    return result;
}

const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"]
};

console.log(dfs(graph, "A")); // ["A", "B", "D", "E", "F", "C"]
```
Объяснение:
- Мы рекурсивно проходим через соседей каждой вершины, добавляя их в массив `result`, если они еще не были посещены.
- Используем рекурсию для обхода графа.
- Сложность: O(V + E), где V — количество вершин, а E — количество рёбер.
---
2. Обход графа в ширину (BFS)
⌛ Задача: Напишите функцию, которая будет обходить граф в ширину, начиная с указанной вершины.
🎯 Решение:
```javascript
function bfs(graph, start) {
    let visited = new Set();
    let queue = [start];
    let result = [];

    while (queue.length) {
        let node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return result;
}

console.log(bfs(graph, "A")); // ["A", "B", "C", "D", "E", "F"]
```
Объяснение:
- Используем очередь для обхода всех уровней графа.
- Добавляем вершины в очередь, если они еще не посещены.
- Сложность: O(V + E), где V — количество вершин, а E — количество рёбер.
---
3. Обход ориентированного графа в глубину (DFS)
⌛ Задача: Напишите функцию для обхода ориентированного графа в глубину, используя рекурсию.
🎯 Решение:
```javascript
function dfsDirected(graph, start) {
    let visited = new Set();
    let result = [];

    function visit(node) {
        if (visited.has(node)) return;
        visited.add(node);
        result.push(node);

        for (let neighbor of graph[node] || []) {
            visit(neighbor);
        }
    }

    visit(start);
    return result;
}

const directedGraph = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: [],
    E: []
};

console.log(dfsDirected(directedGraph, "A")); // ["A", "B", "D", "C", "E"]
```
Объяснение:
- Осуществляем обход с помощью рекурсии, но только по рёбрам ориентированного графа.
- Каждую вершину посещаем только один раз.
- Сложность: O(V + E).
---
4. Обход ориентированного графа в ширину (BFS)
⌛ Задача: Реализуйте обход ориентированного графа в ширину.
🎯 Решение:
```javascript
function bfsDirected(graph, start) {
    let visited = new Set();
    let queue = [start];
    let result = [];

    while (queue.length) {
        let node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (let neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return result;
}

console.log(bfsDirected(directedGraph, "A")); // ["A", "B", "C", "D", "E"]
```
Объяснение:
- Аналогично обычному BFS, но с учётом направленности рёбер.
- Сложность: O(V + E).
---
5. Обход графа с проверкой на цикл (DFS)
⌛ Задача: Напишите функцию, которая выполняет обход графа в глубину и проверяет, содержит ли граф цикл.
🎯 Решение:
```javascript
function hasCycle(graph) {
    let visited = new Set();
    let recStack = new Set();

    function dfs(node) {
        if (recStack.has(node)) return true; // обнаружен цикл
        if (visited.has(node)) return false;

        visited.add(node);
        recStack.add(node);

        for (let neighbor of graph[node] || []) {
            if (dfs(neighbor)) {
                return true;
            }
        }

        recStack.delete(node);
        return false;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            if (dfs(node)) {
                return true;
            }
        }
    }

    return false;
}

const cyclicGraph = {
    A: ["B"],
    B: ["C"],
    C: ["A"]
};

const acyclicGraph = {
    A: ["B"],
    B: ["C"],
    C: []
};

console.log(hasCycle(cyclicGraph)); // true
console.log(hasCycle(acyclicGraph)); // false
```
Объяснение:
- Для обнаружения цикла используем рекурсивный стек. Если вершина уже находится в стеке рекурсии, значит, цикл обнаружен.
- Сложность: O(V + E).
---
6. Обход графа с пометкой рёбер (DFS)
⌛ Задача: Напишите функцию для обхода графа в глубину, помечая рёбра как «обрабатываемые» или «обратные».
🎯 Решение:
```javascript
function dfsEdgeTypes(graph, start) {
    let visited = new Set();
    let result = [];

    function dfs(node, parent) {
        visited.add(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                result.push(`${node} -> ${neighbor} (Tree Edge)`);
                dfs(neighbor, node);
            } else if (parent !== neighbor) {
                result.push(`${node} -> ${neighbor} (Back Edge)`);
            }
        }
    }

    dfs(start);
    return result;
}

const graph2 = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: [],
    E: []
};

console.log(dfsEdgeTypes(graph2, "A"));
```
Объяснение:
- Мы отмечаем рёбра как деревянные или обратные в зависимости от того, были ли вершины уже посещены.
- Сложность: O(V + E).
---
7. Обход графа с вычислением расстояний от начальной вершины (BFS)
⌛ Задача: Напишите функцию для обхода графа в ширину с вычислением расстояний от начальной вершины.
🎯 Решение:
```javascript
function bfsWithDistances(graph, start) {
    let visited = new Set();
    let queue = [start];
    let distances = { [start]: 0 };

    while (queue.length) {
        let node = queue.shift();

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                distances[neighbor] = distances[node] + 1;
            }
        }
    }

    return distances;
}

const graph3 = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"]
};

console.log(bfsWithDistances(graph3, "A")); // { A: 0, B: 1, C: 1, D: 2 }
```
Объяснение:
- Мы сохраняем расстояния для каждой вершины в объекте `distances` и обновляем их по мере обхода.
- Сложность: O(V + E).
---
8. Обход всех компонент связности в графе (DFS)
⌛ Задача: Напишите функцию для обхода всех компонент связности в графе.
🎯 Решение:
```javascript
function findConnectedComponents(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const graph4 = {
    A: ["B", "C"],
    B: ["A", "C"],
    C: ["A", "B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findConnectedComponents(graph4)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Мы проходим по всем вершинам и для каждой не посещенной вершины начинаем новый обход DFS, создавая компоненты связности.
- Сложность: O(V + E).
---
9. Обход графа с отслеживанием времени (DFS)
⌛ Задача: Напишите функцию для обхода графа в глубину, которая отслеживает время входа и выхода из каждой вершины.
🎯 Решение:
```javascript
function dfsWithTime(graph, start) {
    let visited = new Set();
    let result = [];
    let time = 0;

    function visit(node) {
        visited.add(node);
        time++;
        result.push(`Node ${node} entered at time ${time}`);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visit(neighbor);
            }
        }

        time++;
        result.push(`Node ${node} exited at time ${time}`);
    }

    visit(start);
    return result;
}

const graph5 = {
    A: ["B", "C"],
    B: ["A"],
    C: ["A"]
};

console.log(dfsWithTime(graph5, "A"));
```
Объяснение:
- Мы отслеживаем время входа и выхода из каждой вершины, что полезно для алгоритмов, требующих временных меток (например, для поиска мостов и арок).
- Сложность: O(V + E).
---
10. Обход графа с вычислением пути до каждой вершины (BFS)
⌛ Задача: Напишите функцию для обхода графа в ширину, которая будет отслеживать путь до каждой вершины.
🎯 Решение:
```javascript
function bfsWithPath(graph, start) {
    let visited = new Set();
    let queue = [start];
    let parent = { [start]: null };
    let result = [];

    while (queue.length) {
        let node = queue.shift();

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                parent[neighbor] = node;
            }
        }
    }

    for (let node in parent) {
        let path = [];
        let current = node;
        while (current !== null) {
            path.unshift(current);
            current = parent[current];
        }
        result.push(path);
    }

    return result;
}

console.log(bfsWithPath(graph3, "A")); // [["A", "B", "D"], ["A", "C"]]
```
Объяснение:
- Мы отслеживаем путь до каждой вершины, используя объект `parent`, который сохраняет предка для каждой вершины.
- Сложность: O(V + E).
---------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
Алгоритм нахождения компонент связности в графе
Компонента связности — это подграф, в котором любая вершина достижима из любой другой вершины.
1. Поиск компонент связности с помощью DFS (глубина-ширина)
Подходит для представления графа через список смежности.
```javascript
function findConnectedComponentsDFS(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        if (visited.has(node)) return;
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            dfs(neighbor, component);
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const graph = {
    A: ["B"],
    B: ["A", "C"],
    C: ["B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findConnectedComponentsDFS(graph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
1. Используем DFS для обхода графа.
2. Каждый раз, когда находим новую вершину, создаем новую компоненту.
3. Рекурсивно добавляем всех соседей.
4. Сложность: O(V + E).
---
2. Поиск компонент связности через BFS (поиск в ширину)
Аналогично DFS, но используем очередь.
```javascript
function findConnectedComponentsBFS(graph) {
    let visited = new Set();
    let components = [];

    function bfs(start) {
        let queue = [start];
        let component = [];

        while (queue.length) {
            let node = queue.shift();
            if (visited.has(node)) continue;

            visited.add(node);
            component.push(node);
            for (let neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
        return component;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            components.push(bfs(node));
        }
    }

    return components;
}

console.log(findConnectedComponentsBFS(graph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
1. Используем очередь вместо рекурсии.
2. Обходим все связанные вершины перед переходом к следующей компоненте.
3. Сложность: O(V + E).
---
3. Поиск компонент в графе, представленном матрицей смежности
```javascript
function findComponentsMatrix(graphMatrix) {
    let n = graphMatrix.length;
    let visited = new Array(n).fill(false);
    let components = [];

    function dfs(node, component) {
        visited[node] = true;
        component.push(node);
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (graphMatrix[node][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node = 0; node < n; node++) {
        if (!visited[node]) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const matrixGraph = [
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0]
];

console.log(findComponentsMatrix(matrixGraph)); // [[0, 1, 2], [3, 4]]
```
Объяснение:
1. Используем матрицу смежности вместо списка.
2. Применяем DFS для обхода.
3. Сложность: O(V²) из-за матрицы.
---
4. Поиск компонент с использованием Union-Find (DSU)
Эффективно работает на больших графах.
```javascript
class DSU {
    constructor(n) {
        this.parent = Array(n).fill(0).map((_, i) => i);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX !== rootY) {
            this.parent[rootX] = rootY;
        }
    }
}

function connectedComponentsDSU(edges, n) {
    let dsu = new DSU(n);

    for (let [a, b] of edges) {
        dsu.union(a, b);
    }

    let components = new Map();
    for (let i = 0; i < n; i++) {
        let root = dsu.find(i);
        if (!components.has(root)) components.set(root, []);
        components.get(root).push(i);
    }

    return Array.from(components.values());
}

const edges = [[0, 1], [1, 2], [3, 4]];
console.log(connectedComponentsDSU(edges, 5)); // [[0, 1, 2], [3, 4]]
```
Объяснение:
1. Используем сжатие пути и объединение по рангу.
2. DSU эффективен при динамическом изменении графа.
3. Сложность: O(α(V)) ≈ O(1).
---
5. Поиск компонент на ориентированном графе (SCC) с алгоритмом Косараю
```javascript
function kosarajuSCC(graph) {
    let visited = new Set();
    let stack = [];

    function dfs1(node) {
        if (visited.has(node)) return;
        visited.add(node);
        for (let neighbor of graph[node] || []) dfs1(neighbor);
        stack.push(node);
    }

    function dfs2(node, component) {
        if (visited.has(node)) return;
        visited.add(node);
        component.push(node);
        for (let neighbor of reversedGraph[node] || []) dfs2(neighbor, component);
    }

    for (let node in graph) dfs1(node);

    let reversedGraph = {};
    for (let node in graph) {
        for (let neighbor of graph[node]) {
            if (!reversedGraph[neighbor]) reversedGraph[neighbor] = [];
            reversedGraph[neighbor].push(node);
        }
    }

    visited.clear();
    let components = [];
    while (stack.length) {
        let node = stack.pop();
        if (!visited.has(node)) {
            let component = [];
            dfs2(node, component);
            components.push(component);
        }
    }

    return components;
}

const directedGraph = {
    A: ["B"],
    B: ["C"],
    C: ["A", "D"],
    D: ["E"],
    E: ["F"],
    F: ["D"]
};

console.log(kosarajuSCC(directedGraph)); // [["A", "B", "C"], ["D", "E", "F"]]
```
Объяснение:
1. Использует двойной DFS и топологическую сортировку.
2. Работает для ориентированных графов.
3. Сложность: O(V + E).
---
6. Нахождение компонент связности в неориентированном графе с использованием DFS на многосвязном графе
```javascript
function findComponentsMultiGraph(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const multiGraph = {
    A: ["B", "C"],
    B: ["A", "C"],
    C: ["A", "B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findComponentsMultiGraph(multiGraph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Мы создаем компоненту для каждого нового узла, и при этом учитываем граф, в котором могут быть многократные связи.
- Используем DFS для поиска всех достижимых вершин и их объединения в компоненту.
- Сложность: O(V + E).
---
7. Поиск компонент связности с использованием Итеративного DFS
```javascript
function findComponentsIterativeDFS(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node) {
        let stack = [node];
        let component = [];

        while (stack.length > 0) {
            let currentNode = stack.pop();
            if (!visited.has(currentNode)) {
                visited.add(currentNode);
                component.push(currentNode);

                for (let neighbor of graph[currentNode] || []) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        return component;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            components.push(dfs(node));
        }
    }

    return components;
}

const graph2 = {
    A: ["B"],
    B: ["A", "C"],
    C: ["B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findComponentsIterativeDFS(graph2)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Вместо рекурсии используем стек для реализации итеративного DFS.
- Этот подход помогает избежать ограничений стека рекурсии и полезен для очень больших графов.
- Сложность: O(V + E).
---
8. Поиск компонент связности в неориентированном графе с использованием BFS
```javascript
function findComponentsBFS(graph) {
    let visited = new Set();
    let components = [];

    function bfs(start) {
        let queue = [start];
        let component = [];

        while (queue.length > 0) {
            let node = queue.shift();
            if (!visited.has(node)) {
                visited.add(node);
                component.push(node);

                for (let neighbor of graph[node] || []) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
        return component;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            components.push(bfs(node));
        }
    }

    return components;
}

const graph3 = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"],
    E: ["F"],
    F: ["E"]
};

console.log(findComponentsBFS(graph3)); // [["A", "B", "C", "D"], ["E", "F"]]
```
Объяснение:
- Используем поиск в ширину (BFS) для обхода всех соседей в графе.
- На каждом шаге мы находим новый компонент, начиная с не посещенной вершины.
- Сложность: O(V + E).
---
9. Поиск компонент связности для ориентированного графа с использованием DFS (перемещение по вершинам)
```javascript
function findSCC(graph) {
    let visited = new Set();
    let stack = [];
    let components = [];

    function dfs(node) {
        visited.add(node);
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
        stack.push(node);
    }

    function reverseGraph(graph) {
        let reversed = {};
        for (let node in graph) {
            for (let neighbor of graph[node]) {
                if (!reversed[neighbor]) reversed[neighbor] = [];
                reversed[neighbor].push(node);
            }
        }
        return reversed;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    let reversedGraph = reverseGraph(graph);
    visited.clear();

    function dfsReverse(node, component) {
        visited.add(node);
        component.push(node);
        for (let neighbor of reversedGraph[node] || []) {
            if (!visited.has(neighbor)) {
                dfsReverse(neighbor, component);
            }
        }
    }

    while (stack.length) {
        let node = stack.pop();
        if (!visited.has(node)) {
            let component = [];
            dfsReverse(node, component);
            components.push(component);
        }
    }

    return components;
}

const directedGraph2 = {
    A: ["B"],
    B: ["C"],
    C: ["A"],
    D: ["E"],
    E: ["F"],
    F: ["D"]
};

console.log(findSCC(directedGraph2)); // [["A", "B", "C"], ["D", "E", "F"]]
```
Объяснение:
- Мы находим сильные компоненты связности (SCC) в ориентированном графе, используя двойной DFS.
- Применяем топологическую сортировку и ищем компоненты в обратном графе.
- Сложность: O(V + E).
---
10. Поиск компонент связности для графа с весами с использованием DFS с модификацией
```javascript
function findWeightedComponents(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const weightedGraph = {
    A: [{ node: "B", weight: 5 }, { node: "C", weight: 10 }],
    B: [{ node: "A", weight: 5 }, { node: "C", weight: 3 }],
    C: [{ node: "A", weight: 10 }, { node: "B", weight: 3 }],
    D: [{ node: "E", weight: 1 }],
    E: [{ node: "D", weight: 1 }],
    F: []
};

console.log(findWeightedComponents(weightedGraph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Для графов с весами мы все равно можем использовать стандартный DFS, поскольку веса не изменяют процесс поиска компонент связности, но могут влиять на другие алгоритмы, такие как нахождение кратчайшего пути.
- Мы определяем компоненты с помощью поиска в глубину (DFS), независимо от веса.
Сложность: O(V + E).
---------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
⌛ Задача: Поиск кратчайшего пути в графе
Дано: Ориентированный или неориентированный граф(список смежности или матрица смежности).
Найти: Кратчайший путь между двумя вершинами.
🎯 Решение:
---
1. Алгоритм поиска в ширину (BFS)
Подходит для невзвешенных графов.
```javascript
function bfsShortestPath(graph, start, end) {
    let queue = [[start]];
    let visited = new Set();

    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        if (node === end) return path;

        if (!visited.has(node)) {
            visited.add(node);
            for (let neighbor of graph[node] || []) {
                queue.push([...path, neighbor]);
            }
        }
    }

    return null;
}

const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

console.log(bfsShortestPath(graph, "A", "F")); // ["A", "C", "F"]
```
Объяснение:
1. Используем очередь (`queue`).
2. На каждом шаге проверяем вершину.
3. Если это целевая вершина, возвращаем путь.
4. Иначе добавляем все её соседей в очередь.
5. Сложность: O(V + E) (вершины + рёбра).
---
2. Алгоритм Дейкстры
Подходит для графов с положительными весами рёбер.
```javascript
function dijkstra(graph, start, end) {
    let distances = {};
    let previous = {};
    let pq = new Set(Object.keys(graph));

    for (let node in graph) distances[node] = Infinity;
    distances[start] = 0;

    while (pq.size) {
        let node = [...pq].reduce((a, b) => (distances[a] < distances[b] ? a : b));
        pq.delete(node);

        if (node === end) {
            let path = [];
            while (node) {
                path.unshift(node);
                node = previous[node];
            }
            return path;
        }

        for (let [neighbor, weight] of Object.entries(graph[node])) {
            let alt = distances[node] + weight;
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                previous[neighbor] = node;
            }
        }
    }

    return null;
}

const graphWeighted = {
    A: { B: 1, C: 4 },
    B: { C: 2, D: 5 },
    C: { D: 1 },
    D: {}
};

console.log(dijkstra(graphWeighted, "A", "D")); // ["A", "B", "C", "D"]
```
Объяснение:
1. Используем таблицы расстояний (`distances`).
2. Перебираем все вершины, выбирая минимальную.
3. Обновляем соседей, если нашли более короткий путь.
4. Сложность: O(V²) (или O((V + E) log V) с приоритетной очередью).
---
3. Алгоритм Беллмана-Форда
Подходит для графов с отрицательными весами (но без отрицательных циклов).
```javascript
function bellmanFord(graph, start, end) {
    let distances = {};
    let previous = {};
    for (let node in graph) distances[node] = Infinity;
    distances[start] = 0;

    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let node in graph) {
            for (let [neighbor, weight] of Object.entries(graph[node])) {
                let alt = distances[node] + weight;
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = node;
                }
            }
        }
    }

    let path = [];
    let node = end;
    while (node) {
        path.unshift(node);
        node = previous[node];
    }

    return path.length ? path : null;
}

const graphNegWeights = {
    A: { B: 1, C: 4 },
    B: { C: -2, D: 5 },
    C: { D: 1 },
    D: {}
};

console.log(bellmanFord(graphNegWeights, "A", "D")); // ["A", "B", "C", "D"]
```
Объяснение:
1. Инициализируем расстояния как бесконечные.
2. Проходим граф V-1 раз, обновляя пути.
3. Проверяем кратчайший путь.
4. Сложность: O(VE).
---
4. Алгоритм Флойда-Уоршелла
Находит кратчайший путь между всеми парами вершин.
```javascript
function floydWarshall(graph) {
    let nodes = Object.keys(graph);
    let dist = {};

    nodes.forEach(i => {
        dist[i] = {};
        nodes.forEach(j => {
            dist[i][j] = i === j ? 0 : graph[i]?.[j] ?? Infinity;
        });
    });

    nodes.forEach(k => {
        nodes.forEach(i => {
            nodes.forEach(j => {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            });
        });
    });

    return dist;
}

const graphMatrix = {
    A: { B: 3, C: 8 },
    B: { D: 2 },
    C: { D: 1 },
    D: {}
};

console.log(floydWarshall(graphMatrix));
```
Объяснение:
1. Заполняем матрицу смежности.
2. Перебираем промежуточные вершины.
3. Обновляем минимальные расстояния.
4 Сложность: O(V³).
---
5. Жадный алгоритм A
Использует эвристику для ускорения поиска (например, Манхэттенское расстояние).
```javascript
function aStar(graph, start, end, heuristic) {
    let openSet = new Set([start]);
    let cameFrom = {};
    let gScore = {};
    let fScore = {};

    for (let node in graph) {
        gScore[node] = Infinity;
        fScore[node] = Infinity;
    }

    gScore[start] = 0;
    fScore[start] = heuristic(start, end);

    while (openSet.size > 0) {
        let current = [...openSet].reduce((a, b) => (fScore[a] < fScore[b] ? a : b));

        if (current === end) {
            let path = [];
            while (current) {
                path.unshift(current);
                current = cameFrom[current];
            }
            return path;
        }

        openSet.delete(current);
        for (let [neighbor, cost] of Object.entries(graph[current])) {
            let tentativeGScore = gScore[current] + cost;
            if (tentativeGScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentativeGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, end);
                openSet.add(neighbor);
            }
        }
    }

    return null;
}

const heuristic = (a, b) => Math.abs(a.charCodeAt(0) - b.charCodeAt(0));

console.log(aStar(graphWeighted, "A", "D", heuristic)); // ["A", "B", "C", "D"]
```
Объяснение:
1. Поддерживаем два массива (`gScore` и `fScore`).
2. Используем эвристику для поиска кратчайшего пути.
3. Сложность: O((V + E) log V) с приоритетной очередью.
---
6. Поиск в глубину (DFS) с запоминанием кратчайшего пути
Подходит для поиска пути, но не всегда оптимален для кратчайшего пути.
```javascript
function dfsShortestPath(graph, start, end) {
    let shortestPath = null;

    function dfs(node, path, visited) {
        if (visited.has(node)) return;
        path.push(node);
        visited.add(node);

        if (node === end) {
            if (!shortestPath || path.length < shortestPath.length) {
                shortestPath = [...path];
            }
        } else {
            for (let neighbor of graph[node] || []) {
                dfs(neighbor, path, visited);
            }
        }

        path.pop();
        visited.delete(node);
    }

    dfs(start, [], new Set());
    return shortestPath;
}

const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

console.log(dfsShortestPath(graph, "A", "F")); // ["A", "C", "F"]
```
Объяснение:
1. Используем глубину поиска (DFS).
2. Запоминаем кратчайший найденный путь.
3. Работает плохо для взвешенных графов, но может быть полезен.
4. Сложность: O(V!) в худшем случае.
---
7. Алгоритм Йена (поиск K кратчайших путей)
Позволяет найти несколько кратчайших путей.
```javascript
function yenKShortestPaths(graph, start, end, K) {
    let paths = [[start]];
    let shortestPaths = [];

    while (shortestPaths.length < K && paths.length) {
        let path = paths.shift();
        let lastNode = path[path.length - 1];

        if (lastNode === end) {
            shortestPaths.push(path);
        } else {
            for (let neighbor of graph[lastNode] || []) {
                paths.push([...path, neighbor]);
            }
        }

        paths.sort((a, b) => a.length - b.length);
    }

    return shortestPaths;
}

console.log(yenKShortestPaths(graph, "A", "F", 2)); // [["A", "C", "F"], ["A", "B", "E", "F"]]
```
Объяснение:
1. Поддерживаем очередь путей.
2. Перебираем K кратчайших путей.
3. Полезно в транспортных системах и сетях.
4 Сложность: O(K * (V + E)).
---
8. Волновой алгоритм Ли (для поиска пути на сетке)
Используется для поиска пути в лабиринтах или на решетках.
```javascript
function leeAlgorithm(grid, start, end) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let queue = [[start[0], start[1], 0]];
    let rows = grid.length, cols = grid[0].length;
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    while (queue.length) {
        let [x, y, dist] = queue.shift();

        if (x === end[0] && y === end[1]) return dist;

        for (let [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && grid[nx][ny] === 0 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return -1;
}

let grid = [
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 0]
];

console.log(leeAlgorithm(grid, [0, 0], [2, 3])); // 4
```
Объяснение:
1. Подходит для сеток и лабиринтов.
2. Использует поиск в ширину (BFS).
3. Гарантированно находит **кратчайший путь.
4. Сложность: O(NM), где N и M — размеры сетки.
---
9. Двунаправленный поиск (Bidirectional Search)
Ускоряет поиск кратчайшего пути за счёт движения от начала и конца одновременно.
```javascript
function bidirectionalSearch(graph, start, end) {
    let forwardQueue = [[start]];
    let backwardQueue = [[end]];
    let visitedForward = new Set([start]);
    let visitedBackward = new Set([end]);

    while (forwardQueue.length && backwardQueue.length) {
        let forwardPath = forwardQueue.shift();
        let backwardPath = backwardQueue.shift();
        let forwardNode = forwardPath[forwardPath.length - 1];
        let backwardNode = backwardPath[backwardPath.length - 1];

        if (visitedForward.has(backwardNode) || visitedBackward.has(forwardNode)) {
            return forwardPath.concat(backwardPath.reverse().slice(1));
        }

        for (let neighbor of graph[forwardNode] || []) {
            if (!visitedForward.has(neighbor)) {
                visitedForward.add(neighbor);
                forwardQueue.push([...forwardPath, neighbor]);
            }
        }

        for (let neighbor of graph[backwardNode] || []) {
            if (!visitedBackward.has(neighbor)) {
                visitedBackward.add(neighbor);
                backwardQueue.push([...backwardPath, neighbor]);
            }
        }
    }

    return null;
}

console.log(bidirectionalSearch(graph, "A", "F")); // ["A", "C", "F"]
```
Объяснение:
1. Два поиска (BFS) — от начала и конца.
2. Ускоряет поиск в больших графах.
3. Останавливается, если поиски встречаются.
4. Сложность: O(2^(V/2)) в худшем случае, но быстрее BFS.
---
10. Поиск кратчайшего пути методом A* с приоритетной очередью
Ускоренный вариант алгоритма A* с приоритетной очередью.
```javascript
function aStarPriorityQueue(graph, start, end, heuristic) {
    let openSet = new Map();
    let cameFrom = {};
    let gScore = {}, fScore = {};

    for (let node in graph) {
        gScore[node] = Infinity;
        fScore[node] = Infinity;
    }

    gScore[start] = 0;
    fScore[start] = heuristic(start, end);
    openSet.set(start, fScore[start]);

    while (openSet.size) {
        let current = [...openSet.entries()].reduce((a, b) => (a[1] < b[1] ? a : b))[0];

        if (current === end) {
            let path = [];
            while (current) {
                path.unshift(current);
                current = cameFrom[current];
            }
            return path;
        }

        openSet.delete(current);
        for (let [neighbor, cost] of Object.entries(graph[current])) {
            let tempGScore = gScore[current] + cost;
            if (tempGScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tempGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, end);
                openSet.set(neighbor, fScore[neighbor]);
            }
        }
    }

    return null;
}

console.log(aStarPriorityQueue(graphWeighted, "A", "D", heuristic));
```
Объяснение:
1. Использует приоритетную очередь для оптимизации.
2. Оценивает стоимость пути с эвристикой.
3. Сложность: O((V + E) log V) с приоритетной очередью.
---------------------------------------------------------------------------------------------
