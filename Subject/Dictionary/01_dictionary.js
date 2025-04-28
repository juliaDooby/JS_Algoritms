---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
1️⃣ Проверка наличия ключа в словаре
⌛ Задача: Написать метод для проверки, существует ли ключ в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  has(key) {
    return key in this.items;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
console.log(dict.has('apple')); // true
console.log(dict.has('banana')); // false
```
Объяснение:
- Метод `has()` проверяет наличие ключа в словаре с помощью оператора `in`.
---------------------------------------------------------------------------------------------
