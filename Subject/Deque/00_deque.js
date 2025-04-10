---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
Дек (Deque) в JavaScript:
🔹 Что такое дек?
Дек (двусторонняя очередь, deque — double-ended queue) — структура данных, в которой элементы можно добавлять и удалять с обоих концов. Дек объединяет возможности стека (LIFO) и очереди (FIFO).
🛠 Основные операции дека
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
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
1️⃣ Реализация дека с помощью объекта (оптимизация)
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
---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
2️⃣ Палиндром с использованием дека
⌛ Задача: Проверить, является ли строка палиндромом (читается одинаково в обе стороны).
🎯 Решение:
```js
const isPalindrome = (str) => {
  const deque = new Deque();
  for (let char of str) deque.pushBack(char);

  while (deque.size() > 1) {
    if (deque.popFront() !== deque.popBack()) return false;
  }
  return true;
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
3️⃣ Имитация очереди с приоритетом
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
---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
4️⃣ Очередь для обработки задач
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
---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
5️⃣ Обратный порядок слов
⌛ Задача: Перевернуть строку с использованием дека.
🎯 Решение:
```js
const reverseString = (str) => {
  const deque = new Deque();
  for (let char of str) deque.pushFront(char);

  let reversed = "";
  while (!deque.isEmpty()) reversed += deque.popFront();
  return reversed;
};

console.log(reverseString("hello")); // "olleh"
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
6️⃣ Циклический сдвиг массива
⌛ Задача: Сдвинуть массив вправо на `k` позиций.
🎯 Решение:
```js
const rotateArray = (arr, k) => {
  const deque = new Deque();
  for (let num of arr) deque.pushBack(num);

  for (let i = 0; i < k; i++) deque.pushFront(deque.popBack());

  return [...deque.items];
};

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
7️⃣ Симуляция кэша (LRU Cache)
⌛ Задача: Реализовать LRU-кеш.
🎯 Решение:
```js
class LRUCache {
  constructor(size) {
    this.deque = new Deque();
    this.size = size;
    this.cache = new Set();
  }

  accessPage(page) {
    if (this.cache.has(page)) {
      this.deque.popFront(page);
      this.cache.delete(page);
    } else if (this.deque.size() === this.size) {
      this.cache.delete(this.deque.popBack());
    }

    this.deque.pushFront(page);
    this.cache.add(page);
  }

  display() { console.log([...this.deque.items]); }
}

const cache = new LRUCache(3);
cache.accessPage(1);
cache.accessPage(2);
cache.accessPage(3);
cache.accessPage(4);
cache.display(); // [4, 3, 2]
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
8️⃣ Проверка сбалансированных скобок
```js
const isBalanced = (str) => {
  const deque = new Deque();
  for (let char of str) {
    if (char === '(') deque.pushBack(char);
    else if (char === ')') {
      if (deque.isEmpty()) return false;
      deque.popBack();
    }
  }
  return deque.isEmpty();
};

console.log(isBalanced("(())")); // true
console.log(isBalanced("(()")) ; // false
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
9️⃣ Симуляция хода змейки (Snake Game) с использованием дека
⌛ Задача: Реализовать логику движения змейки, используя `Deque`.
🎯 Решение:
```js
class SnakeGame {
  constructor() {
    this.snake = new Deque();
    this.snake.pushBack([0, 0]); // Начальная позиция змейки
    this.directions = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  }

  move(direction) {
    let head = this.snake.back();
    let newHead = [head[0] + this.directions[direction][0], head[1] + this.directions[direction][1]];

    this.snake.pushBack(newHead);
    this.snake.popFront(); // Удаляем хвост (если не съели еду)

    return newHead;
  }

  display() {
    console.log([...this.snake.items]);
  }
}

const game = new SnakeGame();
game.move("R"); // Двигаем змейку вправо
game.move("D"); // Двигаем вниз
game.display(); // [[0,1], [1,1]]
```
Объяснение:
- `Deque` используется для хранения координат тела змейки.
- Добавляем новую голову (`pushBack()`), удаляем хвост (`popFront()`), если змейка не съела еду.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
🔟 Поддержка истории действий (Undo/Redo)
⌛ Задача: Реализовать механизм Undo / Redo с помощью дека.
🎯 Решение:
```js
class HistoryManager {
  constructor() {
    this.undoStack = new Deque();
    this.redoStack = new Deque();
  }

  performAction(action) {
    this.undoStack.pushBack(action);
    this.redoStack = new Deque(); // Очистить Redo-стек после нового действия
  }

  undo() {
    if (!this.undoStack.isEmpty()) {
      let lastAction = this.undoStack.popBack();
      this.redoStack.pushBack(lastAction);
      return `Отменено: ${lastAction}`;
    }
    return "Нечего отменять";
  }

  redo() {
    if (!this.redoStack.isEmpty()) {
      let redoAction = this.redoStack.popBack();
      this.undoStack.pushBack(redoAction);
      return `Повторено: ${redoAction}`;
    }
    return "Нечего повторять";
  }

  displayHistory() {
    console.log("История действий:", [...this.undoStack.items]);
  }
}

const history = new HistoryManager();
history.performAction("Открыт файл");
history.performAction("Написан код");
console.log(history.undo()); // "Отменено: Написан код"
console.log(history.redo()); // "Повторено: Написан код"
```
Объяснение:
- Используем два дека: `undoStack` (для отмены) и `redoStack` (для повторения).
- При новом действии очищаем `redoStack`, т.к. после новых операций старые "повторения" уже не актуальны.
Дек — мощный инструмент для решения задач, связанных с историей действий, обработкой строк, симуляцией игр и даже алгоритмами поиска!
---------------------------------------------------------------------------------------------
