---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
4️⃣ Удаление элемента из списка по значению
⌛ Задача: Написать метод для удаления элемента из списка по значению.
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

  remove(value) {
    if (this.head === null) return;
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null && current.next.data !== value) {
      current = current.next;
    }
    if (current.next !== null) {
      current.next = current.next.next;
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
list.remove(20);
list.print(); // 10 -> 30
```
Объяснение:
- Метод `remove()` удаляет элемент, если он существует в списке. Если элемент находится в середине или в конце, обновляется ссылка на следующий элемент.
---------------------------------------------------------------------------------------------
