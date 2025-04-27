---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
5️⃣ Получение элемента по индексу
⌛ Задача: Написать метод для получения элемента по индексу в списке.
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

  get(index) {
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      if (counter === index) {
        return current.data;
      }
      current = current.next;
      counter++;
    }
    return null; // если индекс выходит за пределы списка
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
console.log(list.get(1)); // 20
```
Объяснение:
- Метод `get()` перебирает список и возвращает данные элемента на указанном индексе.
---------------------------------------------------------------------------------------------
