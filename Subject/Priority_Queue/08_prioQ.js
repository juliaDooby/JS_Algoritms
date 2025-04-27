---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
8️⃣ Система бронирования билетов
⌛ Задача: Написать систему бронирования билетов, где клиенты с **платными подписками** получают приоритет при покупке.
🎯 Решение:
```js
class TicketQueue {
  constructor() {
    this.pq = new MinHeap();
  }

  bookTicket(clientName, membershipType) {
    const priority = membershipType === "VIP" ? 1 : membershipType === "Premium" ? 2 : 3;
    this.pq.insert(clientName, priority);
  }

  processBooking() {
    const client = this.pq.extractMin();
    return client ? `Билет оформлен для: ${client.element}` : "Нет заявок";
  }
}

const tickets = new TicketQueue();
tickets.bookTicket("Анна", "Standard");
tickets.bookTicket("Иван", "VIP");
tickets.bookTicket("Олег", "Premium");

console.log(tickets.processBooking()); // Билет оформлен для: Иван
console.log(tickets.processBooking()); // Билет оформлен для: Олег
```
Объяснение:
- VIP > Premium > Standard (меньший приоритет — выше приоритет).
- VIP-клиенты первыми получают билеты.
---------------------------------------------------------------------------------------------
