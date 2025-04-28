---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
3️⃣ Получение всех ключей из словаря
⌛ Задача: Написать метод для получения всех ключей в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  keys() {
    return Object.keys(this.items);
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('banana', 'fruit');
console.log(dict.keys()); // ['apple', 'banana']
```
Объяснение:
- Метод `keys()` возвращает массив всех ключей с помощью `Object.keys()`.
---------------------------------------------------------------------------------------------
