---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Индексы бд на алгоритмах:
---
Индексы в базах данных используются для ускорения поиска и извлечения данных. Индексы помогают ускорить выполнение запросов, не сканируя всю таблицу, а только определённые данные, например, через бинарные деревья или хэш-таблицы.
В контексте реализации на JavaScript, можно имитировать работу с базой данных, создавая индексы для поиска по данным, например, с использованием бинарного поиска или хэш-таблиц.
0. Индексы на основе бинарного дерева поиска (BST)
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
---------------------------------------------------------------------------------------------  
