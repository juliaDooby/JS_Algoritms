---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Очередь с О(1) сложностью операций:
---
🎯 Реализация очереди с операциями добавления (enqueue) и удаления (dequeue) за O(1) сложность возможна с использованием двух подходов:
0. Двух указателей: Голова (`head`) и хвост (`tail`) для управления массивом.
1. Связанный список: Используется для эффективного добавления/удаления.
---
0. Очередь на массиве с двумя указателями
Мы создаём фиксированный массив и управляем двумя указателями: `head` для удаления элементов и `tail` для добавления. Благодаря этому операции вставки и удаления работают за O(1).
🎯 Реализация:
```javascript
class Queue {
  constructor(size = 1000) {
    this.queue = new Array(size); // Фиксированный массив
    this.head = 0; // Указатель на первый элемент
    this.tail = 0; // Указатель на место вставки
    this.length = 0; // Количество элементов в очереди
    this.capacity = size; // Максимальный размер очереди
  }

  // Добавить элемент в очередь
  enqueue(value) {
    if (this.length === this.capacity) {
      throw new Error("Queue is full");
    }
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity; // Циклическое перемещение
    this.length++;
  }

  // Удалить элемент из очереди
  dequeue() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    const value = this.queue[this.head];
    this.head = (this.head + 1) % this.capacity; // Циклическое перемещение
    this.length--;
    return value;
  }

  // Вернуть первый элемент без удаления
  peek() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    }
    return this.queue[this.head];
  }

  // Проверить, пуста ли очередь
  isEmpty() {
    return this.length === 0;
  }

  // Получить размер очереди
  size() {
    return this.length;
  }
}

// Пример использования:
const queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);            // Очередь заполнена
console.log(queue.size());    // 4
```
Объяснение:
1. Добавление (`enqueue`):
   - Значение вставляется в позицию `tail`.
   - Указатель `tail` перемещается вперёд (циклически).
   - Сложность: O(1).
2. Удаление (`dequeue`):
   - Элемент удаляется из позиции `head`.
   - Указатель `head` перемещается вперёд (циклически).
   - Сложность: O(1).
---------------------------------------------------------------------------------------------  
