---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
1️⃣ Стек: Реализация стека
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
