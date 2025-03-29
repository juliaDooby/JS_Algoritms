Z
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Индексы бд на алгоритмах:
---
Индексы в базах данных используются для ускорения поиска и извлечения данных. Индексы помогают ускорить выполнение запросов, не сканируя всю таблицу, а только определённые данные, например, через бинарные деревья или хэш-таблицы.
В контексте реализации на JavaScript, можно имитировать работу с базой данных, создавая индексы для поиска по данным, например, с использованием бинарного поиска или хэш-таблиц.
1. Индексы на основе бинарного дерева поиска (BST)
Бинарное дерево поиска — это структура данных, где для каждого узла выполняется условие, что левый дочерний узел имеет меньшее значение, а правый — большее.
🎯 Решение: Реализация бинарного дерева поиска
```javascript
class TreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key, value) {
    const newNode = new TreeNode(key, value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (key < current.key) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (key > current.key) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        current.value = value; // Обновляем значение, если ключ существует
        return;
      }
    }
  }

  search(key) {
    let current = this.root;
    while (current) {
      if (key === current.key) return current.value;
      if (key < current.key) current = current.left;
      else current = current.right;
    }
    return null; // Если элемент не найден
  }

  delete(key) {
    this.root = this._deleteRecursively(this.root, key);
  }

  _deleteRecursively(node, key) {
    if (!node) return node;

    if (key < node.key) {
      node.left = this._deleteRecursively(node.left, key);
    } else if (key > node.key) {
      node.right = this._deleteRecursively(node.right, key);
    } else {
      // Если ключ найден
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      node.key = this._findMin(node.right).key; // Находим минимальный элемент в правом поддереве
      node.right = this._deleteRecursively(node.right, node.key);
    }
    return node;
  }

  _findMin(node) {
    while (node.left) node = node.left;
    return node;
  }
}

const bst = new BinarySearchTree();
bst.insert(50, "value 50");
bst.insert(30, "value 30");
bst.insert(70, "value 70");
bst.insert(20, "value 20");
bst.insert(40, "value 40");

console.log(bst.search(30)); // "value 30"
bst.delete(30);
console.log(bst.search(30)); // null
```
Объяснение:
- В этом примере мы создаем бинарное дерево поиска (BST), где:
  - Каждый узел имеет ключ и значение.
  - Для поиска и вставки мы рекурсивно сравниваем ключи и находим правильную позицию для каждого нового узла.
  - Метод `delete` позволяет удалять узлы с учётом трех вариантов: отсутствие детей, один ребенок и два ребенка.
---
2. Индексы с использованием хэш-таблиц
Хэш-таблица использует хэш-функцию для вычисления индекса в массиве, где каждый ключ будет хранить своё значение. Это позволяет делать поиск, вставку и удаление за O(1) в среднем случае.
🎯 Решение: Реализация хэш-таблицы
```javascript
class HashTable {
  constructor(size = 100) {
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  search(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return null;

    for (const [storedKey, value] of bucket) {
      if (storedKey === key) return value;
    }
    return null;
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

const hashTable = new HashTable();
hashTable.insert("name", "Alice");
hashTable.insert("age", 25);
hashTable.insert("country", "USA");

console.log(hashTable.search("age")); // 25
console.log(hashTable.search("country")); // "USA"
hashTable.delete("age");
console.log(hashTable.search("age")); // null
```
Объяснение:
- В хэш-таблице мы используем массив для хранения элементов, а каждый элемент вычисляется с использованием хэш-функции.
- Хэш-функция генерирует индекс на основе строки ключа.
- В случае коллизий (когда два ключа хэшируются в одинаковый индекс) мы используем массив внутри ячейки для хранения пары ключ-значение.
- Методы `insert`, `search` и `delete` работают с хэш-таблицей с использованием индекса.
---
3. Индексы на основе сортированного массива (двойной индексации)
Этот метод используется для ускорения поиска в таблицах, когда индексы отсортированы. Такой подход полезен для хранения данных, которые могут быть отсортированы по определённому ключу.
🎯 Решение: Реализация индекса с сортировкой
```javascript
class SortedIndex {
  constructor() {
    this.data = [];
  }

  insert(key, value) {
    this.data.push([key, value]);
    this.data.sort((a, b) => a[0] - b[0]);  // Сортируем по ключу
  }

  search(key) {
    let left = 0;
    let right = this.data.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (this.data[mid][0] === key) return this.data[mid][1];
      if (this.data[mid][0] < key) left = mid + 1;
      else right = mid - 1;
    }

    return null;  // Если ключ не найден
  }

  delete(key) {
    const index = this.data.findIndex(item => item[0] === key);
    if (index !== -1) {
      this.data.splice(index, 1);
      return true;
    }
    return false;  // Если элемент не найден
  }
}

const index = new SortedIndex();
index.insert(1, "apple");
index.insert(3, "banana");
index.insert(2, "cherry");

console.log(index.search(2)); // "cherry"
index.delete(2);
console.log(index.search(2)); // null
```
Объяснение:
- Мы создаем отсортированный индекс, который поддерживает сортировку по ключу.
- Метод `insert` добавляет элементы и сразу сортирует массив.
- Для поиска мы используем бинарный поиск, чтобы найти элемент по ключу за O(log N).
- Метод `delete` удаляет элемент, используя поиск по индексу.
Резюме:
1. Бинарное дерево поиска (BST) — используется для хранения элементов с быстрым поиском, добавлением и удалением. Каждый узел хранит ключ и значение, и структура данных поддерживает быструю вставку и поиск по ключу.
2. Хэш-таблица — более эффективная структура данных для быстрого поиска с использованием хэш-функции. Столкновение решается через связанный список внутри ячеек.
3. Сортированный массив — полезен для задач, где важен порядок и нужно быстро находить элементы через бинарный поиск.


Z
---------------------------------------------------------------------------------------------  
⋙ ❍ Хэш-таблицы (!хэшмап)(массив, остаток от деления и два вида разрешения коллизий разрешаются связанным списком):
---
Реализация хэш-таблицы с разрешением коллизий с использованием связанного списка
⌛ Задача: Реализуйте хэш-таблицу, используя массив для хранения элементов и метод разрешения коллизий через связанные списки. В хэш-таблице данные будут храниться в виде пар ключ-значение. При коллизии (когда два ключа имеют одинаковый хэш) элементы будут храниться в связанном списке.
🎯 Решение:
1. Массив как базовая структура: Хэш-таблица использует массив для хранения элементов. Индекс для каждого элемента будет вычисляться как остаток от деления хэш-функции.
2. Хэш-функция: Для получения индекса мы будем использовать простую хэш-функцию, которая возвращает остаток от деления на размер массива.
3. Разрешение коллизий: В случае коллизий (когда два элемента имеют одинаковый индекс) мы будем хранить элементы в связанном списке на этом индексе. Связанный список будет содержать элементы с одинаковым хэшом.
4. Операции:
   - Добавление: Добавление элемента в хэш-таблицу с использованием хэш-функции.
   - Поиск: Поиск элемента в хэш-таблице по ключу.
   - Удаление: Удаление элемента из хэш-таблицы.
---
Реализация хэш-таблицы с разрешением коллизий через связанный список
Шаг 1: Определим структуру данных для связанного списка.
```javascript
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
```
- `ListNode` представляет собой элемент связанного списка. Каждый узел содержит пару `key-value` и указатель на следующий узел.
Шаг 2: Реализуем хэш-таблицу.
```javascript
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size); // Массив для хранения связанных списков
  }

  // Хэш-функция (остаток от деления)
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  // Добавление элемента в хэш-таблицу
  set(key, value) {
    const index = this.hash(key);

    // Создаём новый узел
    const newNode = new ListNode(key, value);

    if (!this.table[index]) {
      // Если на этом индексе нет элемента, добавляем новый
      this.table[index] = newNode;
    } else {
      // Если на индексе уже есть элементы, разрешаем коллизию через связанный список
      let current = this.table[index];

      // Проверим, есть ли уже элемент с таким же ключом
      while (current) {
        if (current.key === key) {
          current.value = value; // Обновляем значение, если ключ найден
          return;
        }
        if (!current.next) break;
        current = current.next;
      }

      // Если элемент с таким ключом не найден, добавляем его в конец связанного списка
      current.next = newNode;
    }
  }

  // Поиск элемента по ключу
  get(key) {
    const index = this.hash(key);
    let current = this.table[index];

    // Пробегаем по связанному списку
    while (current) {
      if (current.key === key) {
        return current.value; // Возвращаем значение, если ключ найден
      }
      current = current.next;
    }

    return undefined; // Возвращаем undefined, если ключ не найден
  }

  // Удаление элемента по ключу
  remove(key) {
    const index = this.hash(key);
    let current = this.table[index];
    let prev = null;

    // Пробегаем по связанному списку
    while (current) {
      if (current.key === key) {
        if (prev) {
          // Если элемент не первый в списке, удаляем его
          prev.next = current.next;
        } else {
          // Если элемент первый, просто меняем указатель
          this.table[index] = current.next;
        }
        return true; // Элемент удален
      }
      prev = current;
      current = current.next;
    }

    return false; // Элемент не найден
  }
}
```
Пример использования хэш-таблицы
```javascript
const hashTable = new HashTable();

// Добавление элементов
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("occupation", "developer");

// Поиск элементов
console.log(hashTable.get("name")); // Alice
console.log(hashTable.get("age")); // 25
console.log(hashTable.get("occupation")); // developer

// Обновление значения
hashTable.set("age", 26);
console.log(hashTable.get("age")); // 26

// Удаление элемента
hashTable.remove("age");
console.log(hashTable.get("age")); // undefined
```
Объяснение:
1. Хэш-функция: Простой способ вычисления хэша, основанный на вычислении суммы кодов символов и взятии остатка от деления на размер хэш-таблицы.
2. Обработка коллизий: Если два элемента имеют одинаковый хэш, они хранятся в связном списке на одном индексе массива. Мы используем метод перебора элементов в списке, чтобы найти нужный элемент или добавить новый.
3. Операции:
   - `set()`: Добавляет новый элемент или обновляет существующий.
   - `get()`: Ищет элемент по ключу, пробегая по связанному списку, если коллизия произошла.
   - `remove()`: Удаляет элемент по ключу, также обрабатывая случаи с коллизиями.
Резюме:
- Хэш-таблица — это структура данных, использующая хэш-функцию для быстрого поиска элементов.
- Связанные списки используются для разрешения коллизий, когда два элемента имеют одинаковый хэш.
- Это решение эффективно для большинства задач, где требуется хранить и быстро искать элементы по ключу.


Z
---------------------------------------------------------------------------------------------  
⋙ ❍ Инкапсуляция (сделал все поля класса публичными и не создал конструктор)):
---
1. Инкапсуляция через приватные свойства
⌛ Задача: Реализуйте класс `Counter` с приватным свойством `count`, которое нельзя изменить напрямую.
🎯 Решение:
```javascript
class Counter {
  #count = 0; // Приватное свойство

  increment() {
    this.#count++;
  }

  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // 1
// console.log(counter.#count); // Ошибка: приватное свойство
```
Объяснение: Свойство `#count` доступно только внутри класса. Внешний код не может его прочитать или изменить напрямую.
---
2. Приватные методы
⌛ Задача: Реализуйте класс `User`, в котором есть приватный метод для проверки пароля.
🎯 Решение:
```javascript
class User {
  #password;

  constructor(password) {
    this.#password = password;
  }

  #checkPassword(input) {
    return input === this.#password;
  }

  login(input) {
    return this.#checkPassword(input) ? "Login successful" : "Access denied";
  }
}

const user = new User("secret");
console.log(user.login("secret")); // Login successful
// console.log(user.#checkPassword("secret")); // Ошибка: приватный метод
```
Объяснение: Метод `#checkPassword` доступен только внутри класса.
---
3. Инкапсуляция через функции и замыкания
⌛ Задача: Реализуйте функцию `createCounter` с приватным состоянием.
🎯 Решение:
```javascript
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
// console.log(counter.count); // undefined
```
Объяснение: Переменная `count` скрыта внутри замыкания и доступна только через методы объекта.
---
4. Использование Symbol для приватных свойств
⌛ Задача: Реализуйте класс с приватными свойствами через `Symbol`.
🎯 Решение:
```javascript
const _id = Symbol("id");

class Product {
  constructor(id, name) {
    this[_id] = id;
    this.name = name;
  }

  getId() {
    return this[_id];
  }
}

const product = new Product(123, "Laptop");
console.log(product.getId()); // 123
// console.log(product[_id]); // undefined
```
Объяснение: Символы создают уникальные свойства, которые невозможно случайно перезаписать или прочитать напрямую.
---
5. Геттеры и сеттеры
⌛ Задача: Реализуйте класс `Rectangle` с инкапсулированными свойствами `width` и `height`.
🎯 Решение:
```javascript
class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get area() {
    return this.#width * this.#height;
  }

  set width(value) {
    if (value > 0) this.#width = value;
  }

  get width() {
    return this.#width;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50
rect.width = 20;
console.log(rect.area); // 200
```
Объяснение: Геттеры и сеттеры позволяют управлять доступом к приватным свойствам.
---
6. Создание singleton через инкапсуляцию
⌛ Задача: Реализуйте класс `Database` с шаблоном Singleton.
🎯 Решение:
```javascript
class Database {
  static #instance;

  constructor(connectionString) {
    if (Database.#instance) {
      return Database.#instance;
    }
    this.connectionString = connectionString;
    Database.#instance = this;
  }
}

const db1 = new Database("db://localhost");
const db2 = new Database("db://remote");

console.log(db1 === db2); // true
```
Объяснение: Приватное статическое свойство `#instance` обеспечивает наличие только одного экземпляра класса.
---
7. Инкапсуляция через фабричные функции
⌛ Задача: Реализуйте фабричную функцию для создания объекта с приватными данными.
🎯 Решение:
```javascript
function createUser(name) {
  let balance = 0;

  return {
    name,
    addBalance(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const user = createUser("Alice");
user.addBalance(100);
console.log(user.getBalance()); // 100
// console.log(user.balance); // undefined
```
Объяснение: `balance` защищён внутри замыкания.
---
8. Использование WeakMap для приватных данных
⌛ Задача: Реализуйте класс с приватными данными через `WeakMap`.
🎯 Решение:
```javascript
const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, { name });
  }

  getName() {
    return privateData.get(this).name;
  }
}

const user = new User("Bob");
console.log(user.getName()); // Bob
// console.log(privateData.get(user)); // Приватные данные недоступны извне
```
Объяснение: `WeakMap` используется для хранения приватных данных, связанных с экземпляром.
---
9. Инкапсуляция в модулях ES6
⌛ Задача: Реализуйте модуль с приватными данными.
🎯 Решение:
`user.js`:
```javascript
const users = [];

export function addUser(user) {
  users.push(user);
}

export function getUsers() {
  return users;
}
```

`main.js`:
```javascript
import { addUser, getUsers } from "./user.js";

addUser("Alice");
console.log(getUsers()); // ["Alice"]
// console.log(users); // Ошибка: users недоступен
```
Объяснение: Приватные данные инкапсулируются в модуле.
---
10. Полиморфизм с инкапсуляцией
⌛ Задача: Создайте класс `Shape` и наследников `Circle` и `Square`.
🎯 Решение:
```javascript
class Shape {
  #type;

  constructor(type) {
    this.#type = type;
  }

  getType() {
    return this.#type;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super("Square");
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(5), new Square(4)];

shapes.forEach((shape) =>
  console.log(`${shape.getType()} Area: ${shape.getArea()}`)
);
```
---
11. Создать класс `BankAccount` с приватными методами для депозита и снятия
⌛ Задача: Реализовать класс `BankAccount` с приватными методами для депозита, снятия денег и проверки баланса.
🎯 Решение:
```javascript
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Недостаточно средств");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 300
// console.log(account.#balance); // Ошибка: приватное свойство
```
Объяснение:
- Свойство `#balance` инкапсулировано, и его нельзя изменить напрямую снаружи класса.
- Методы `deposit` и `withdraw` предоставляют интерфейс для работы с балансом.
---
12. Реализовать класс `Logger` с ограниченным доступом к логам
⌛ Задача: Реализовать класс `Logger`, который хранит логи и предоставляет методы для записи и получения логов. Логи должны быть приватными, и внешний код не должен иметь доступа к ним напрямую.
🎯 Решение:
```javascript
class Logger {
  #logs = [];

  log(message) {
    this.#logs.push(message);
  }

  getLogs() {
    return this.#logs.slice();
  }
}

const logger = new Logger();
logger.log("Лог 1");
logger.log("Лог 2");
console.log(logger.getLogs()); // ["Лог 1", "Лог 2"]
// console.log(logger.#logs); // Ошибка: приватное свойство
```
Объяснение:
- Логи хранятся в приватном свойстве `#logs`.
- Метод `getLogs` возвращает копию массива логов, предотвращая прямой доступ к внутренним данным.
---
13. Сделать фабрику для управления доступом к данным
⌛ Задача: Реализовать фабричную функцию, которая создаёт объект с приватными данными, а внешним кодом можно управлять только через предоставленный интерфейс.
🎯 Решение:
```javascript
function createUser(name, age) {
  let _name = name;
  let _age = age;

  return {
    getName() {
      return _name;
    },
    getAge() {
      return _age;
    },
    setName(newName) {
      if (newName) _name = newName;
    },
    setAge(newAge) {
      if (newAge > 0) _age = newAge;
    }
  };
}

const user = createUser("Alice", 25);
console.log(user.getName()); // Alice
user.setName("Bob");
console.log(user.getName()); // Bob
// console.log(user._name); // undefined
```
Объяснение:
- Приватные данные инкапсулируются внутри замыкания и доступны только через публичные методы.
---
14. Инкапсулировать состояние в React-компоненте с `useState`
⌛ Задача: В React создайте компонент, в котором инкапсулировано состояние. Только внутренние методы могут изменять это состояние, а наружу оно передается через геттер.
🎯 Решение:
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Внутренний метод для изменения состояния
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Геттер для состояния
  const getCount = () => count;

  return (
    <div>
      <h1>Counter: {getCount()}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```
Обяснение:
- Внутренние методы `increment` и `decrement` изменяют состояние с помощью `setCount`.
- Внешний код не может напрямую изменять `count`, он только может использовать геттер `getCount`.
---
15. Создать модуль для работы с API, скрывающий реализацию запросов
⌛ Задача: Создать модуль для работы с API, который инкапсулирует логику выполнения HTTP-запросов и предоставляет только публичный интерфейс.
🎯 Решение:
```javascript
// api.js
const api = (() => {
  const apiUrl = "https://api.example.com/";

  const fetchData = async (endpoint) => {
    const response = await fetch(apiUrl + endpoint);
    const data = await response.json();
    return data;
  };

  return {
    getUserData: (userId) => fetchData(`users/${userId}`),
  };
})();

api.getUserData(1).then((data) => console.log(data));
```
Объяснение:
- Вся логика работы с API инкапсулирована внутри модуля `api`, а наружу доступен только метод `getUserData`.
- Приватная функция `fetchData` скрыта и не доступна извне.
---
16. Реализовать класс `Cache`, защищающий данные от прямого доступа
⌛ Задача: Реализовать класс `Cache`, который инкапсулирует кэшированные данные и предоставляет методы для работы с ними, скрывая внутреннюю структуру данных.
🎯 Решение:
```javascript
class Cache {
  #data = {};

  get(key) {
    return this.#data[key] || null;
  }

  set(key, value) {
    this.#data[key] = value;
  }

  clear() {
    this.#data = {};
  }
}

const cache = new Cache();
cache.set("user", { name: "Alice", age: 25 });
console.log(cache.get("user")); // { name: "Alice", age: 25 }
// console.log(cache.#data); // Ошибка: приватное свойство
```
Объяснение:
- Приватное свойство `#data` скрывает структуру данных.
- Внешний код может только использовать методы `get`, `set` и `clear` для работы с кэшем.
---
17. Инкапсулировать сложную логику в модули и экспортировать только интерфейс
⌛ Задача: Реализовать модуль, который инкапсулирует сложную логику (например, для работы с датами) и предоставляет только интерфейс для работы.
🎯 Решение:
```javascript
// dateUtils.js
const dateUtils = (() => {
  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return {
    format: formatDate,
  };
})();

console.log(dateUtils.format(new Date())); // Форматирует дату: 21/9/2021
```
Объяснение:
- Сложная логика работы с датами инкапсулирована в модуле `dateUtils`.
- Наружу экспортируется только функция `format`, скрывая другие детали реализации.
Итог
Эти задачи охватывают различные аспекты инкапсуляции в JavaScript и React:
- Использование приватных свойств и методов в классах.
- Применение фабричных функций и замыканий.
- Инкапсуляция состояния в React.
- Скрытие сложной логики и взаимодействия с API.


Z
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Разворот массива:
---
Разворот массива — это операция, при которой элементы массива меняют порядок на обратный.
🎯 Решение: Вот несколько способов реализации на JavaScript:
1. С использованием встроенного метода `reverse`
Самый простой способ — использовать метод `reverse`:
```javascript
const array = [1, 2, 3, 4, 5];
const reversedArray = array.reverse();

console.log("Оригинальный массив:", array);      // [5, 4, 3, 2, 1]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- `reverse` изменяет исходный массив, так что будьте осторожны при использовании.
---
2. С использованием цикла `for`
Если вы хотите оставить исходный массив неизменным, используйте цикл для создания нового массива:
```javascript
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);

console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
---
3. С использованием деструктуризации и `reduce`
```javascript
function reverseArray(arr) {
  return arr.reduce((acc, curr) => [curr, ...acc], []);
}
const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);
console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- Функция `reduce` добавляет текущий элемент в начало результирующего массива.
---
4. С использованием двух указателей
Этот метод изменяет исходный массив на месте, минимизируя использование памяти:
```javascript
function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Меняем местами элементы
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

const array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);

console.log("Развёрнутый массив:", array); // [5, 4, 3, 2, 1]
```
Особенность:
- Этот метод не создаёт новый массив и экономит память.
- Используется деструктуризация для обмена элементов местами.
---
5. С использованием рекурсии
```javascript
function reverseArray(arr) {
  if (arr.length === 0) return [];
  return [arr[arr.length - 1]].concat(reverseArray(arr.slice(0, -1)));
}

const array = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(array);

console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- Рекурсивный метод хорошо работает для небольших массивов.
- При больших массивах может вызвать переполнение стека вызовов.
---
6. С использованием `Array.from`
```javascript
const array = [1, 2, 3, 4, 5];
const reversedArray = Array.from(array).reverse();

console.log("Оригинальный массив:", array);      // [1, 2, 3, 4, 5]
console.log("Развёрнутый массив:", reversedArray); // [5, 4, 3, 2, 1]
```
Особенность:
- `Array.from(array)` создаёт копию массива, поэтому `reverse` не изменяет оригинал.
Итог
Когда использовать какой метод:
1. `reverse`: Когда нужно быстро изменить порядок, и исходный массив может быть изменён.
2. Цикл `for`: Если вы хотите сохранить оригинальный массив неизменным.
3. `reduce`: Когда требуется функциональный стиль программирования.
4. Два указателя: Для экономии памяти и работы на месте.
5. Рекурсия: Для учебных целей или когда массивы небольшие.

Z
---------------------------------------------------------------------------------------------  
⋙ ❍ Переложить данные из коллекции в коллекцию:
---
⌛ Задача: Переложить данные из одной коллекции в другую
🎯 Решение: Реализация включает:
1. На чистом JavaScript (Vanilla): Работа с массивами, объектами или другими структурами данных.
2. На React: С использованием состояния (`useState`) и компонентов.
---
1. Реализация на JavaScript
Пример 1. Перенос данных из массива в массив
```javascript
function transferData(source, destination) {
  while (source.length > 0) {
    // Удаляем элемент из исходного массива и добавляем в целевой
    const item = source.shift();
    destination.push(item);
  }
}

const sourceArray = [1, 2, 3, 4, 5];
const destinationArray = [];

transferData(sourceArray, destinationArray);

console.log("Source:", sourceArray);       // []
console.log("Destination:", destinationArray); // [1, 2, 3, 4, 5]
```
---
Пример 2. Перенос данных из объекта в объект
```javascript
function transferObjectData(source, destination) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
      delete source[key]; // Удаляем из исходного объекта
    }
  }
}

const sourceObject = { a: 1, b: 2, c: 3 };
const destinationObject = {};

transferObjectData(sourceObject, destinationObject);

console.log("Source:", sourceObject);       // {}
console.log("Destination:", destinationObject); // { a: 1, b: 2, c: 3 }
```
---
Пример 3. Перенос данных с преобразованием
```javascript
function transferAndTransform(source, destination, transformFn) {
  while (source.length > 0) {
    const item = source.shift();
    destination.push(transformFn(item)); // Преобразуем элемент перед добавлением
  }
}

const sourceArray = [1, 2, 3, 4, 5];
const destinationArray = [];

// Увеличиваем значения на 10 перед переносом
transferAndTransform(sourceArray, destinationArray, (x) => x + 10);

console.log("Source:", sourceArray);       // []
console.log("Destination:", destinationArray); // [11, 12, 13, 14, 15]
```
---
2. Реализация на React
В React перенос данных между коллекциями может быть реализован с использованием состояния (`useState`).
Пример 1. Перенос элементов из одного списка в другой
```jsx
import React, { useState } from "react";

function TransferList() {
  const [source, setSource] = useState([1, 2, 3, 4, 5]);
  const [destination, setDestination] = useState([]);

  const transferItem = () => {
    if (source.length > 0) {
      const item = source[0];
      setSource(source.slice(1)); // Удаляем элемент из исходного списка
      setDestination([...destination, item]); // Добавляем элемент в целевой список
    }
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={transferItem}>Transfer Next Item</button>
    </div>
  );
}

export default TransferList;
```
---
Пример 2. Перенос всех элементов
```jsx
import React, { useState } from "react";

function TransferAll() {
  const [source, setSource] = useState(["Apple", "Banana", "Cherry"]);
  const [destination, setDestination] = useState([]);

  const transferAllItems = () => {
    setDestination([...destination, ...source]); // Добавляем все элементы
    setSource([]); // Очищаем исходный список
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={transferAllItems}>Transfer All Items</button>
    </div>
  );
}

export default TransferAll;
```
---
Пример 3. Перенос с удалением по клику
```jsx
import React, { useState } from "react";

function TransferOnClick() {
  const [source, setSource] = useState([1, 2, 3, 4, 5]);
  const [destination, setDestination] = useState([]);

  const transferItem = (item) => {
    setSource(source.filter((i) => i !== item)); // Удаляем элемент из источника
    setDestination([...destination, item]); // Добавляем в целевой список
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => transferItem(item)}>Transfer</button>
          </li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TransferOnClick;
```
Объяснение React-кодов
1. Состояние:
   - Используется `useState` для хранения данных коллекций (`source` и `destination`).
   - Перенос выполняется с обновлением этих состояний.
2. Методы:
   - В первом примере: по одному элементу из `source` перемещается в `destination`.
   - Во втором примере: все элементы из `source` перемещаются в `destination` одним кликом.
   - В третьем примере: элементы переносятся с удалением по клику.
3. Рендеринг:
   - Используется метод `map` для отображения списков.

Z
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Пройти циклом и суммировать данные за исключением указанного отрезка:
---
🎯 Решение: Вот пример кода на JavaScript, где данные суммируются, исключая указанный отрезок индексов:
Код
```javascript
function sumExcludingRange(arr, start, end) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // Пропускаем элементы из указанного диапазона
    if (i >= start && i <= end) {
      continue;
    }

    sum += arr[i];
  }

  return sum;
}

// Пример использования
const data = [10, 20, 30, 40, 50, 60];
const startIndex = 2; // Индекс начала отрезка (включительно)
const endIndex = 4;   // Индекс конца отрезка (включительно)

const result = sumExcludingRange(data, startIndex, endIndex);

console.log("Итоговая сумма:", result); // 10 + 20 + 60 = 90
```
Объяснение:
1. Входные параметры:
   - `arr`: Массив данных, в котором будет выполняться суммирование.
   - `start`: Начальный индекс отрезка (включительно).
   - `end`: Конечный индекс отрезка (включительно).
2. Цикл `for`:
   - Перебирает все элементы массива.
   - С помощью `if (i >= start && i <= end)` мы определяем, попадает ли текущий индекс в исключаемый отрезок.
   - Если индекс попадает в исключаемый отрезок, выполняется `continue`, что пропускает текущую итерацию.
3. Сложение:
   - Элементы за пределами указанного диапазона суммируются в переменной `sum`.
4. Результат:
   - Возвращается итоговая сумма, за исключением значений в указанном отрезке.
---
Пример с пустым отрезком
Если отрезок пустой (например, `startIndex > endIndex`), все элементы будут учтены:
```javascript
const data = [10, 20, 30, 40];
console.log(sumExcludingRange(data, 5, 3)); // Сумма всех: 100
```
Пример с использованием `reduce`
Альтернативный способ через метод `reduce`:
```javascript
function sumExcludingRange(arr, start, end) {
  return arr.reduce((sum, value, index) => {
    return index >= start && index <= end ? sum : sum + value;
  }, 0);
}
// Пример использования
const data = [10, 20, 30, 40, 50];
console.log(sumExcludingRange(data, 1, 3)); // Сумма: 10 + 50 = 60
```

Z
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Реализовать DAO даошку:
---
🎯 Решение: Реализация DAO (Data Access Object)
DAO (Data Access Object) — это шаблон проектирования, который используется для абстракции работы с данными. Он обеспечивает интерфейс для доступа к базе данных, файлам или другим хранилищам данных.
Мы реализуем DAO-шку, которая:
1. Предоставляет методы для чтения, создания, обновления и удаления данных.
2. Абстрагирует источник данных (локальный массив, API, база данных).
---
1. Реализация DAO на JavaScript (Vanilla)
Код
```javascript
class UserDAO {
  constructor() {
    this.users = []; // Локальное хранилище данных (может быть заменено на API/БД)
    this.nextId = 1; // Счётчик для уникальных ID
  }

  // Получить всех пользователей
  getAllUsers() {
    return this.users;
  }

  // Найти пользователя по ID
  getUserById(id) {
    return this.users.find((user) => user.id === id) || null;
  }

  // Добавить нового пользователя
  addUser(user) {
    const newUser = { id: this.nextId++, ...user };
    this.users.push(newUser);
    return newUser;
  }

  // Обновить пользователя по ID
  updateUser(id, updatedFields) {
    const user = this.getUserById(id);
    if (!user) return null;

    Object.assign(user, updatedFields);
    return user;
  }

  // Удалить пользователя по ID
  deleteUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

// Пример использования
const userDAO = new UserDAO();

// Создаём пользователей
userDAO.addUser({ name: "Alice", age: 25 });
userDAO.addUser({ name: "Bob", age: 30 });

// Получаем всех пользователей
console.log("Все пользователи:", userDAO.getAllUsers());

// Обновляем пользователя
userDAO.updateUser(1, { age: 26 });
console.log("Обновлённый пользователь:", userDAO.getUserById(1));

// Удаляем пользователя
userDAO.deleteUser(2);
console.log("После удаления:", userDAO.getAllUsers());
```
Объяснение:
1. Конструктор:
   - Создаётся массив `users` для хранения пользователей.
   - `nextId` используется для генерации уникальных идентификаторов.
2. Методы:
   - `getAllUsers`: Возвращает всех пользователей.
   - `getUserById`: Ищет пользователя по ID.
   - `addUser`: Добавляет нового пользователя.
   - `updateUser`: Обновляет данные пользователя.
   - `deleteUser`: Удаляет пользователя.
---
2. Реализация DAO на React
В React мы реализуем DAO как сервисный класс, который будет вызываться из компонентов.
Код
1. Сервисный класс (`UserDAO`)
```javascript
class UserDAO {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id) || null;
  }

  addUser(user) {
    const newUser = { id: this.nextId++, ...user };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id, updatedFields) {
    const user = this.getUserById(id);
    if (!user) return null;

    Object.assign(user, updatedFields);
    return user;
  }

  deleteUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

export default new UserDAO(); // Экспортируем экземпляр DAO
```
---
2. Компонент React
```jsx
import React, { useState, useEffect } from "react";
import userDAO from "./UserDAO"; // Импортируем DAO

function UserManager() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", age: "" });

  // Загружаем пользователей при монтировании
  useEffect(() => {
    setUsers(userDAO.getAllUsers());
  }, []);

  // Обработчик для добавления пользователя
  const handleAddUser = () => {
    const addedUser = userDAO.addUser({
      name: newUser.name,
      age: parseInt(newUser.age),
    });
    setUsers([...users, addedUser]); // Обновляем состояние
    setNewUser({ name: "", age: "" }); // Очищаем форму
  };

  // Обработчик для удаления пользователя
  const handleDeleteUser = (id) => {
    userDAO.deleteUser(id);
    setUsers(userDAO.getAllUsers()); // Обновляем состояние
  };

  return (
    <div style={styles.container}>
      <h1>User Manager</h1>
      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Age"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <button style={styles.button} onClick={handleAddUser}>
          Add User
        </button>
      </div>
      <ul style={styles.list}>
        {users.map((user) => (
          <li key={user.id} style={styles.listItem}>
            {user.name} ({user.age} years old)
            <button
              style={styles.deleteButton}
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default UserManager;
```
Объяснение:
1. Сервисный класс `UserDAO`:
   - Инкапсулирует логику работы с данными (CRUD).
   - Может быть заменён на реализацию с API или базой данных.
2. React-компонент `UserManager`:
   - Подключается к `UserDAO` для управления состоянием.
   - Использует `useState` для управления пользователями и формой.
   - Использует `useEffect` для загрузки данных при монтировании.
Итог
1. На JavaScript DAO предоставляет интерфейс для работы с локальными данными.
2. На React реализуется UI для взаимодействия с DAO.
3. DAO можно легко адаптировать для работы с REST API или базой данных.

Z
---------------------------------------------------------------------------------------------  
⋙ ❍ ПоМапить классы (map):
---
Маппинг классов на JavaScript и React
Маппинг классов — это задача, в которой необходимо применить определённые классы к элементам, например, динамически добавлять CSS-классы в зависимости от данных или состояния.
1. Реализация на чистом JavaScript
В этом примере мы маппим классы к элементам списка на основе их состояния (например, выбранный элемент получает класс `selected`).
Код JavaScript
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Class Mapping</title>
  <style>
    .item {
      padding: 10px;
      margin: 5px 0;
      border: 1px solid #ccc;
      cursor: pointer;
    }

    .selected {
      background-color: #007bff;
      color: white;
    }

    .highlight {
      font-weight: bold;
    }
  </style>
</head>
<body>
  <ul id="itemList"></ul>

  <script>
    // Данные
    const items = [
      { id: 1, name: "Item 1", isSelected: false },
      { id: 2, name: "Item 2", isSelected: true },
      { id: 3, name: "Item 3", isSelected: false },
    ];

    // Контейнер для списка
    const itemList = document.getElementById("itemList");

    // Рендерим элементы списка
    function renderItems() {
      itemList.innerHTML = ""; // Очищаем контейнер

      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;

        // Маппим классы
        li.className = "item";
        if (item.isSelected) li.classList.add("selected");

        // Обработчик клика для выбора элемента
        li.addEventListener("click", () => toggleSelection(item.id));

        itemList.appendChild(li);
      });
    }

    // Переключение состояния "isSelected"
    function toggleSelection(id) {
      items.forEach((item) => {
        item.isSelected = item.id === id ? !item.isSelected : false;
      });

      renderItems(); // Перерисовываем список
    }

    renderItems(); // Первичный рендер
  </script>
</body>
</html>
```
Объяснение JavaScript-кода
1. Маппинг классов:
   - К каждому элементу применяется базовый класс `item`.
   - Если элемент выбран (`isSelected`), добавляется класс `selected`:
     ```javascript
     if (item.isSelected) li.classList.add("selected");
     ```
2. Динамическое обновление:
   - При клике состояние элемента (`isSelected`) меняется.
   - После этого вызывается `renderItems`, чтобы перерисовать список.
---
2. Реализация на React
В React маппинг классов реализуется с помощью библиотеки `classnames` или встроенной логики.
🎯 Реализация без библиотек
```jsx
import React, { useState } from "react";

function ClassMapper() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", isSelected: false },
    { id: 2, name: "Item 2", isSelected: true },
    { id: 3, name: "Item 3", isSelected: false },
  ]);

  const toggleSelection = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false }
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className={`item ${item.isSelected ? "selected" : ""}`}
          onClick={() => toggleSelection(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ClassMapper;
```
🎯 Реализация с использованием библиотеки `classnames`
Установите библиотеку:
```bash
npm install classnames
```
Используем `classnames` для динамического маппинга классов:
```jsx
import React, { useState } from "react";
import classNames from "classnames";

function ClassMapper() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", isSelected: false },
    { id: 2, name: "Item 2", isSelected: true },
    { id: 3, name: "Item 3", isSelected: false },
  ]);

  const toggleSelection = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : { ...item, isSelected: false }
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className={classNames("item", { selected: item.isSelected })}
          onClick={() => toggleSelection(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ClassMapper;
```
---
CSS для React
```css
.item {
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  cursor: pointer;
}

.selected {
  background-color: #007bff;
  color: white;
}
```
Объяснение React-кода
1. Состояние:
   - Используется `useState` для хранения массива элементов с их состоянием.
2. Маппинг классов:
   - Без `classnames`:
     ```jsx
     className={`item ${item.isSelected ? "selected" : ""}`}
     ```
   - С использованием `classnames`:
     ```jsx
     classNames("item", { selected: item.isSelected })
     ```
3. Динамическое обновление:
   - `setItems` обновляет состояние списка, чтобы отобразить изменение класса.
---
Сравнение JavaScript и React
| Характеристика   | Vanilla JavaScript                             | React                                |
|-----------------------|----------------------------------------------------|------------------------------------------|
| Обновление данных | Ручная перерисовка DOM                             | Использование `state` и автоматический рендер |
| Маппинг классов   | `classList.add` и `classList.remove`               | Использование `className` или `classnames` |
| Простота в использовании | Быстрее для простых задач                     | Более подходящий для сложных интерфейсов |

  
Z
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Напишите бинарный поиск по памяти или канстомный линкед лист, обход графа за N сложность:
---
🎯 Решение: Реализация бинарного поиска, пользовательского связного списка и обхода графа
Ниже представлены три отдельных реализации:
1. Бинарный поиск (по массиву).
2. Кастомный связный список (Linked List).
3. Обход графа за линейное время O(N) с помощью BFS или DFS.
---
1. Бинарный поиск
Бинарный поиск применяется к отсортированным массивам, имеет сложность O(log N).
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Элемент найден
    }

    if (arr[mid] < target) {
      left = mid + 1; // Ищем в правой половине
    } else {
      right = mid - 1; // Ищем в левой половине
    }
  }

  return -1; // Элемент не найден
}

// Пример использования
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
const result = binarySearch(sortedArray, target);

console.log(result); // Индекс элемента: 3
```
Объяснение:
1. Алгоритм:
   - Определяем центральный элемент массива (`mid`).
   - Сравниваем центральный элемент с `target`.
   - Сужаем область поиска, удаляя половину массива на каждой итерации.
2. Сложность:
   - Время: O(log N), так как на каждой итерации мы делим массив пополам.
   - Память: O(1), так как не используется рекурсия.
---
2. Кастомный связный список
Реализация пользовательского `LinkedList`
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Добавить элемент в конец списка
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // Удалить элемент
  delete(value) {
    if (!this.head) return;

    // Удаляем голову
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }

    if (!current.next) {
      this.tail = current; // Обновляем хвост, если удалён последний элемент
    }
  }

  // Поиск элемента
  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  // Печать всех элементов
  print() {
    const elements = [];
    let current = this.head;

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    console.log(elements.join(" -> "));
  }
}

// Пример использования
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.print(); // 10 -> 20 -> 30

list.delete(20);
list.print(); // 10 -> 30

console.log(list.find(10)); // Node { value: 10, next: Node { ... } }
```
Объяснение:
1. Операции:
   - `append(value)`: Добавляет элемент в конец списка. Сложность O(1).
   - `delete(value)`: Удаляет элемент. Сложность O(N) в худшем случае.
   - `find(value)`: Поиск элемента. Сложность O(N).
2. Использование:
   - Связный список полезен для сценариев, где часто добавляются или удаляются элементы.
---
3. Обход графа за линейное время O(N)
Обход графа может быть выполнен с использованием DFS (глубина) или BFS (ширина). Оба алгоритма имеют сложность O(V + E), где:
- V — количество вершин.
- E — количество рёбер.
Реализация обхода в ширину (BFS)
```javascript
function bfs(graph, start) {
  const visited = new Set(); // Чтобы не заходить в одну вершину дважды
  const queue = [start]; // Очередь для BFS
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();

    if (!visited.has(current)) {
      visited.add(current);
      result.push(current);

      // Добавляем всех соседей в очередь
      for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Пример графа
const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [6],
  6: [],
};

// Пример использования
const startNode = 1;
console.log(bfs(graph, startNode)); // [1, 2, 3, 4, 5, 6]
```
---
Реализация обхода в глубину (DFS)
```javascript
function dfs(graph, start, visited = new Set(), result = []) {
  if (visited.has(start)) return;

  visited.add(start);
  result.push(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, result);
    }
  }

  return result;
}

// Пример графа
const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [6],
  6: [],
};

// Пример использования
const startNode = 1;
console.log(dfs(graph, startNode)); // [1, 2, 4, 3, 5, 6]
```
Объяснение BFS и DFS:
1. BFS (ширина):
   - Использует очередь (`queue`) для обхода.
   - Проходит уровень за уровнем.
2. DFS (глубина):
   - Использует рекурсию (или стек) для обхода.
   - Проходит до конца одного пути, затем возвращается.
Вывод
- Бинарный поиск: Для отсортированных массивов, O(log N).
- Кастомный связный список: Гибкость в работе с элементами, O(N) для операций поиска/удаления.
- Обход графа:
  - BFS и DFS обходят граф за O(V + E).
  - Выбор зависит от задачи (поиск кратчайшего пути — BFS, поиск путей вглубь — DFS).


Z
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: !!!Написать функцию глубокого копирования объекта с доп условием - внутри есть циклические и иные ссылки между элементами, т.е. объект - не дерево:
---
Глубокое копирование объекта с учетом циклических ссылок — это сложная задача, которая требует хранения уже посещённых объектов. Для её решения мы можем использовать Map для отслеживания уже обработанных ссылок и избегания бесконечной рекурсии.
🎯 Решение:
```javascript
function deepClone(obj, map = new Map()) {
  // Если объект не является объектом или массивом, возвращаем его
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Если объект уже клонирован (циклическая ссылка), возвращаем его копию из Map
  if (map.has(obj)) {
    return map.get(obj);
  }

  // Создаем копию объекта или массива
  const clone = Array.isArray(obj) ? [] : {};

  // Сохраняем объект в Map, чтобы учесть циклические ссылки
  map.set(obj, clone);

  // Рекурсивно копируем свойства объекта или элементы массива
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}
// Пример использования
const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};
obj.b.e = obj; // Циклическая ссылка

const copiedObj = deepClone(obj);
console.log(copiedObj);
```
Объяснение:
1. Проверка типа:
   - Если объект не является объектом или массивом (`typeof obj !== "object"`), он возвращается без изменений, так как примитивы копируются по значению.
2. Обработка циклических ссылок:
   - Используется `Map`, чтобы отслеживать уже обработанные объекты.
   - Если объект уже находится в `Map`, возвращается его ранее созданная копия:
     ```javascript
     if (map.has(obj)) {
       return map.get(obj);
     }
     ```
3. Копирование свойств:
   - Рекурсивно обходим все свойства объекта с помощью `for...in` и создаём их копии.
4. Работа с массивами:
   - Если объект — массив, создаётся пустой массив:
     ```javascript
     const clone = Array.isArray(obj) ? [] : {};
     ```
5. Поддержка сложных объектов:
   - Копируются свойства объектов и массивов любого уровня вложенности, включая циклические ссылки.
---
Тесты:
Пример с циклическими ссылками:
```javascript
const obj = { a: 1 };
obj.b = obj; // Циклическая ссылка

const cloned = deepClone(obj);
console.log(cloned); // { a: 1, b: [Circular] }
console.log(cloned.b === cloned); // true
```
Пример с массивом:
```javascript
const arr = [1, 2, 3];
arr.push(arr); // Циклическая ссылка

const clonedArr = deepClone(arr);
console.log(clonedArr); // [1, 2, 3, [Circular]]
console.log(clonedArr[3] === clonedArr); // true
```
Улучшение: Копирование специальных объектов
Если нужно поддерживать такие структуры как `Date`, `Set`, `Map`, можно дополнить функцию:
```javascript
function deepClone(obj, map = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  // Копирование специальных объектов
  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof Map) {
    const clonedMap = new Map();
    map.set(obj, clonedMap);
    for (const [key, value] of obj.entries()) {
      clonedMap.set(deepClone(key, map), deepClone(value, map));
    }
    return clonedMap;
  }

  if (obj instanceof Set) {
    const clonedSet = new Set();
    map.set(obj, clonedSet);
    for (const value of obj.values()) {
      clonedSet.add(deepClone(value, map));
    }
    return clonedSet;
  }

  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}
```
---
Пример использования с `Map` и `Set`
```javascript
const complexObj = {
  date: new Date(),
  map: new Map([[1, "one"]]),
  set: new Set([1, 2, 3]),
};
complexObj.self = complexObj; // Циклическая ссылка

const clonedComplexObj = deepClone(complexObj);
console.log(clonedComplexObj);
console.log(clonedComplexObj.map.get(1)); // "one"
console.log(clonedComplexObj.set.has(2)); // true
console.log(clonedComplexObj.self === clonedComplexObj); // true
```
Итог
- Функция поддерживает:
  - Глубокое копирование объектов и массивов.
  - Циклические ссылки.
  - Специальные объекты: `Date`, `Set`, `Map`.
- Решение эффективно для работы с любыми вложенными структурами. Если нужно добавить поддержку других типов, например, `RegExp`, это легко сделать.

Z
---------------------------------------------------------------------------------------------  
⋙ ❍ В цикле переложить элементы, меняя первые с последними. (фильтр-отсев кандитатов):
---
⌛ Задача: Переложить элементы массива так, чтобы первые элементы стали последними, а последние — первыми.
🎯 Решение на Vanilla JavaScript
```javascript
function reverseArray(arr) {
  const length = arr.length;
  for (let i = 0; i < length / 2; i++) {
    // Меняем первый и последний элементы
    const temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }
  return arr;
}

// Пример использования
const array = [1, 2, 3, 4, 5];
console.log("Исходный массив:", array);
console.log("Перевернутый массив:", reverseArray(array));
```
Объяснение:
1. Итерация до середины массива:
   - Мы используем цикл `for` с условием `i < length / 2`, чтобы обменивать элементы только до середины массива.
   - Это исключает лишние обмены, т. к. элементы в середине не требуют изменений.
2. Обмен элементов:
   - Используем временную переменную `temp` для сохранения текущего элемента:
     ```javascript
     const temp = arr[i];
     arr[i] = arr[length - 1 - i];
     arr[length - 1 - i] = temp;
     ```
3. Результат:
   - Первый элемент меняется местами с последним, второй — с предпоследним, и так далее.
---
🎯 Решение с использованием встроенных методов
Если вы хотите использовать встроенные методы, можно использовать `reverse`:
```javascript
const array = [1, 2, 3, 4, 5];
const reversedArray = array.reverse();
console.log("Перевернутый массив:", reversedArray);
```
Примечание: Этот метод изменяет исходный массив.
---
🎯 Пример для строк
Если вы хотите перевернуть строку:
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
```
---------------------------------------------------------------------------------------------  
