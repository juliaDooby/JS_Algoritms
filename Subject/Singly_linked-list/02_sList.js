---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
2️⃣ Удаление элемента из начала списка
⌛ Задача: Написать метод для удаления элемента из начала списка.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  removeFromFront() {
    if (this.head !== null) {
      this.head = this.head.next;
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
list.addToFront(10);
list.addToFront(20);
list.addToFront(30);
list.print(); // 30 -> 20 -> 10
list.removeFromFront();
list.print(); // 20 -> 10
```
Объяснение:
- Метод `removeFromFront()` удаляет первый элемент, изменяя ссылку на голову списка.
---------------------------------------------------------------------------------------------
