---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
2️⃣ Очередь: Реализация очереди
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
