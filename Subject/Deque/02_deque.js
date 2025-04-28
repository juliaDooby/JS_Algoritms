---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
2️⃣ Имитация очереди с приоритетом
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
---------------------------------------------------------------------------------------------
