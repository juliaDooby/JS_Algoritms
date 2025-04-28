---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
6️⃣ Двусвязный список: Добавление элемента в начало
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
