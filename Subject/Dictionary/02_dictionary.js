---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
2️⃣ Удаление элемента по ключу
⌛ Задача: Написать метод для удаления элемента по ключу.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  remove(key) {
    if (this.has(key)) {
      delete this.items[key];
    }
  }

  has(key) {
    return key in this.items;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('banana', 'fruit');
dict.remove('banana');
console.log(dict.has('banana')); // false
```
Объяснение:
- Метод `remove()` удаляет элемент, если ключ существует в словаре.
---------------------------------------------------------------------------------------------
