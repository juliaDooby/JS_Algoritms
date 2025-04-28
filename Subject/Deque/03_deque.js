---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
3️⃣ Очередь для обработки задач
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
---------------------------------------------------------------------------------------------
