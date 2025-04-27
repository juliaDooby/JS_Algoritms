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
0. 🎯 Простая реализация стека на массиве
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
