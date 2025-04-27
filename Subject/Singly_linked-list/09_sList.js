---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
9. Подсчёт элементов в списке
⌛ Задача: Написать метод для подсчёта количества элементов в односвязном списке.
🎯 Решение:
```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  count() {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
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
console.log(list.count()); // 3
```
Объяснение:
- Метод `count()` перебирает список и увеличивает счётчик для каждого узла, возвращая количество элементов в списке.
Односвязный список — это мощная структура данных, которая позволяет эффективно добавлять, удалять и манипулировать элементами, но с затратами на произвольный доступ.
---------------------------------------------------------------------------------------------
