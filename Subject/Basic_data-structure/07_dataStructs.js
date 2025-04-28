---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
7️⃣ Приоритетная очередь: Реализация очереди с приоритетом
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
