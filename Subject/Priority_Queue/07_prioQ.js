---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
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
---------------------------------------------------------------------------------------------
