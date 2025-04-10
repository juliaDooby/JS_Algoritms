---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
Односвязный список — это структура данных, где каждый элемент (узел) содержит данные и ссылку на следующий узел. Списки часто используются для эффективной работы с динамически изменяющимися данными.
1️⃣ Реализация односвязного списка
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
---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
2️⃣ Добавление элемента в начало списка
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
---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
3️⃣ Удаление элемента из начала списка
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
---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
4️⃣ Поиск элемента в списке
⌛ Задача: Написать метод для поиска элемента в списке.
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

  find(value) {
    let current = this.head;
    while (current !== null) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
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
console.log(list.find(20)); // true
console.log(list.find(40)); // false
```
Объяснение:
- Метод `find()` ищет элемент в списке, перебирая его узлы.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
5️⃣ Удаление элемента из списка по значению
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
---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
6️⃣ Получение элемента по индексу
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
---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
7️⃣ Реверс односвязного списка
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
---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
8️⃣ Проверка пустоты списка
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
---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
9️⃣ Объединение двух списков
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
---------------------------------------------------------------------------------------------
⋙ ❍ Односвязный список:
---
🔟 Подсчёт элементов в списке
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
