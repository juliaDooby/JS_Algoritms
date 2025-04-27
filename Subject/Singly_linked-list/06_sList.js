---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
6️⃣ Реверс односвязного списка
⌛ Задача: Написать метод для реверсирования (переворачивания) односвязного списка.
🎯 Решение:
```js
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

  reverse() {
    let prev = null;
    let current = this.head;
    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
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
list.reverse();
list.print(); // 30 -> 20 -> 10
```
Объяснение:
- Метод `reverse()` меняет направление всех ссылок в списке, превращая его в обратный.
---------------------------------------------------------------------------------------------
