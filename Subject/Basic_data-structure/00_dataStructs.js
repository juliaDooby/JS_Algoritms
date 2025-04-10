---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
Эти задачи помогут вам разобраться с такими структурами данных, как массивы, стеки, очереди, множества, словари (объекты), двусвязные и односвязные списки.
1️⃣ Работа с массивами: Сумма элементов массива
⌛ Задача: Напишите функцию, которая принимает массив чисел и возвращает их сумму.
🎯 Решение:
```js
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
```
Объяснение:
- Используем метод `reduce()` для суммирования всех элементов массива. Он принимает два параметра: аккумулятор и текущий элемент. Изначально аккумулятор равен 0.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
2️⃣ Стек: Реализация стека
⌛ Задача: Реализуйте стек с методами `push`, `pop` и `peek` (посмотреть верхний элемент).
🎯 Решение:
```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
stack.pop();
console.log(stack.peek()); // 10
```
Объяснение:
- Стек работает по принципу LIFO (последний вошёл — первый вышел). Мы реализуем методы для добавления, удаления и получения верхнего элемента.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
3️⃣ Очередь: Реализация очереди
⌛ Задача: Реализуйте очередь с методами `enqueue`, `dequeue`, `peek`.
🎯 Решение:
```js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.peek()); // 10
queue.dequeue();
console.log(queue.peek()); // 20
```
Объяснение:
- Очередь работает по принципу FIFO (первый вошёл — первый вышел). Мы добавляем элемент в конец очереди и удаляем из начала.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
4️⃣ Множество: Уникальные элементы
⌛ Задача: Напишите функцию, которая принимает массив и возвращает массив с уникальными элементами.
🎯 Решение:
```js
function getUnique(arr) {
  return [...new Set(arr)];
}

console.log(getUnique([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```
Объяснение:
- Множество (`Set`) автоматически удаляет дубликаты. Мы используем его для создания массива уникальных элементов.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
5️⃣ Словарь (Объект): Подсчёт частоты элементов
⌛ Задача: Напишите функцию, которая подсчитывает частоту появления каждого элемента в массиве и возвращает объект.
🎯 Решение:
```js
function countFrequency(arr) {
  let frequency = {};
  arr.forEach(item => {
    frequency[item] = (frequency[item] || 0) + 1;
  });
  return frequency;
}

console.log(countFrequency([1, 2, 2, 3, 3, 3])); // {1: 1, 2: 2, 3: 3}
```
Объяснение:
- Используем объект как словарь, где ключи — это элементы массива, а значения — это их частота появления. В цикле увеличиваем счётчик для каждого элемента.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
6️⃣ Односвязный список: Добавление элемента
⌛ Задача: Реализуйте односвязный список и добавьте элемент в конец списка.
🎯 Решение:
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new SinglyLinkedList();
list.add(10);
list.add(20);
list.add(30);
list.print(); // 10 -> 20 -> 30
```
Объяснение:
- В этом примере мы реализуем односвязный список. Метод `add` добавляет новый узел в конец списка, обновляя указатель последнего узла.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
7️⃣ Двусвязный список: Добавление элемента в начало
⌛ Задача: Реализуйте двусвязный список и добавьте элемент в начало.
🎯 Решение:
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  addToFront(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  print() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.data + ' <-> ';
      current = current.next;
    }
    console.log(result.slice(0, -4));
  }
}

const list = new DoublyLinkedList();
list.addToFront(10);
list.addToFront(20);
list.addToFront(30);
list.print(); // 30 <-> 20 <-> 10
```
Объяснение:
- В двусвязном списке каждый узел хранит ссылки как на следующий элемент, так и на предыдущий. Метод `addToFront` добавляет новый узел в начало списка.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
8️⃣ Приоритетная очередь: Реализация очереди с приоритетом
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
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
9️⃣ Хеш-таблица: Операции вставки и поиска
⌛ Задача: Реализуйте простую хеш-таблицу с методами вставки и поиска.
🎯 Решение:
```js
class HashTable {
  constructor(size = 4) {
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  insert(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  search(key) {
    const index = this.hash(key);
    return this.table[index];
  }
}

const hashTable = new HashTable();
hashTable.insert('name', 'John');
hashTable.insert('age', 30);
console.log(hashTable.search('name')); // John
```
Объяснение:
- Хеш-таблица использует хеш-функцию для вычисления индекса элемента. В этой простейшей версии данные сохраняются в массиве.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
🔟 Алгоритм сортировки слиянием
⌛ Задача: Напишите функцию для сортировки массива с использованием алгоритма сортировки слиянием.
🎯 Решение:
```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([10, 2, 3, 4, 1])); // [1, 2, 3, 4, 10]
```
Объяснение:
- Алгоритм сортировки слиянием делит массив на более мелкие части, сортирует их рекурсивно и затем сливает отсортированные части в один отсортированный массив.
---------------------------------------------------------------------------------------------
