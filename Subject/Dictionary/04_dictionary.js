---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
4️⃣ Получение всех значений из словаря
⌛ Задача: Написать метод для получения всех значений в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  values() {
    return Object.values(this.items);
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
console.log(dict.values()); // ['fruit', 'vegetable']
```
Объяснение:
- Метод `values()` возвращает массив всех значений с помощью `Object.values()`.
---------------------------------------------------------------------------------------------
