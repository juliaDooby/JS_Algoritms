---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
Односвязный список — это структура данных, где каждый элемент (узел) содержит данные и ссылку на следующий узел. Списки часто используются для эффективной работы с динамически изменяющимися данными.
0️⃣ Реализация односвязного списка
⌛ Задача: Создать структуру данных для односвязного списка с методами для добавления элементов в конец списка.
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
- Создали два класса: `Node` (узел) и `SinglyLinkedList` (список).
- Метод `add()` добавляет новые элементы в конец списка.
---------------------------------------------------------------------------------------------
