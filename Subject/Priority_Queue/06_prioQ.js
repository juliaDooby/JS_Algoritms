---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
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
---------------------------------------------------------------------------------------------
