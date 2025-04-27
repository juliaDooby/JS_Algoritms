---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
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
---------------------------------------------------------------------------------------------
