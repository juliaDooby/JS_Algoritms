---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
7️⃣ Проверка пустоты списка
⌛ Задача: Написать метод для проверки, пуст ли список.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
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
console.log(list.isEmpty()); // true
list.add(10);
console.log(list.isEmpty()); // false
```
Объяснение:
- Метод `isEmpty()` проверяет, является ли голова списка `null`, что означает, что список пуст.
---------------------------------------------------------------------------------------------
