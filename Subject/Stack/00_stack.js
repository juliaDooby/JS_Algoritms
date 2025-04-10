---------------------------------------------------------------------------------------------
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
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
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
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
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
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
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
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
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
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
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
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
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
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
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
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
---
8️⃣ Сортировка стека
🎯 Решение:
```js
function sortStack(stack) {
  return stack.sort((a, b) => a - b);
}

console.log(sortStack([3, 1, 4, 2])); // [1, 2, 3, 4]
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
---
9️⃣ Баланс скобок в математических выражениях
🎯 Решение:
```js
console.log(isValidParentheses("[(2+3) * (5/2)]")); // true
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
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
---------------------------------------------------------------------------------------------
