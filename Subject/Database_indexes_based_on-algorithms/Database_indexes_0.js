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
