---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
1️⃣ Добавление элемента в начало списка
⌛ Задача: Написать метод для добавления элемента в начало односвязного списка.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  addToFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
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
list.addToFront(10);
list.addToFront(20);
list.addToFront(30);
list.print(); // 30 -> 20 -> 10
```
Объяснение:
- Метод `addToFront()` добавляет новый элемент в начало списка, меняя ссылку на голову списка.
---------------------------------------------------------------------------------------------
