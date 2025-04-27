---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
8️⃣ Объединение двух списков
⌛ Задача: Написать метод для объединения двух односвязных списков.
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

  merge(otherList) {
    let current = this.head;
    while (current && current.next !== null) {
      current = current.next;
    }
    if (current !== null) {
      current.next = otherList.head;
    } else {
      this.head = otherList.head;
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

const list1 = new SinglyLinkedList();
const list2 = new SinglyLinkedList();
list1.add(10);
list1.add(20);
list2.add(30);
list2.add(40);
list1.merge(list2);
list1.print(); // 10 -> 20 -> 30 -> 40
```
Объяснение:
- Метод `merge()` объединяет два списка, соединяя конец первого списка с началом второго.
---------------------------------------------------------------------------------------------
