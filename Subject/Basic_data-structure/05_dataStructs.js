---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
5️⃣ Односвязный список: Добавление элемента
⌛ Задача: Реализуйте односвязный список и добавьте элемент в конец списка.
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
- В этом примере мы реализуем односвязный список. Метод `add` добавляет новый узел в конец списка, обновляя указатель последнего узла.
---------------------------------------------------------------------------------------------
