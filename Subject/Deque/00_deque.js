---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
Дек (Deque) в JavaScript:
Что такое дек?
Дек (двусторонняя очередь, deque — double-ended queue) — структура данных, в которой элементы можно добавлять и удалять с обоих концов. Дек объединяет возможности стека (LIFO) и очереди (FIFO).
Основные операции дека
- Добавление в начало (`unshift()`) и в конец (`push()`).
- Удаление из начала (`shift()`) и из конца (`pop()`).
- Просмотр первого (`front()`) и последнего (`back()`) элемента.
- Проверка на пустоту (`isEmpty()`).
---
🎯 Реализация дека
JavaScript не имеет встроенного класса `Deque`, но мы можем реализовать его с использованием массива или объекта.
🎯 Реализация на массиве
```js
class Deque {
  constructor() {
    this.items = [];
  }

  pushBack(item) { this.items.push(item); }  // Добавить в конец
  pushFront(item) { this.items.unshift(item); } // Добавить в начало
  popBack() { return this.items.pop(); } // Удалить с конца
  popFront() { return this.items.shift(); } // Удалить с начала
  front() { return this.items[0]; } // Первый элемент
  back() { return this.items[this.items.length - 1]; } // Последний элемент
  isEmpty() { return this.items.length === 0; } // Проверка на пустоту
  size() { return this.items.length; } // Размер дека
  display() { console.log(this.items); } // Вывести содержимое
}

const deque = new Deque();
deque.pushFront(1);
deque.pushBack(2);
deque.pushFront(3);
deque.display(); // [3, 1, 2]
```
------------------
0️⃣ Реализация дека с помощью объекта (оптимизация)
⌛ Задача: Реализовать дек на основе объекта (без `unshift()`, который медленный).
🎯 Решение:
```js
class Deque {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  pushFront(item) {
    this.frontIndex--;
    this.items[this.frontIndex] = item;
  }

  pushBack(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
  }

  popFront() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  popBack() {
    if (this.isEmpty()) return undefined;
    this.backIndex--;
    const item = this.items[this.backIndex];
    delete this.items[this.backIndex];
    return item;
  }

  isEmpty() { return this.frontIndex === this.backIndex; }
  size() { return this.backIndex - this.frontIndex; }
  front() { return this.items[this.frontIndex]; }
  back() { return this.items[this.backIndex - 1]; }
}

const deque = new Deque();
deque.pushFront(10);
deque.pushBack(20);
console.log(deque.popFront()); // 10
console.log(deque.popBack()); // 20
```
---------------------------------------------------------------------------------------------
