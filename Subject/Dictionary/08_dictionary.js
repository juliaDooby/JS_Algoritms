---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
8️⃣ Фильтрация словаря
⌛ Задача: Написать метод для фильтрации словаря по условию (например, все ключи, связанные с фруктами).
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  filter(callback) {
    const filtered = new Dictionary();
    for (let key in this.items) {
      if (callback(key, this.items[key])) {
        filtered.add(key, this.items[key]);
      }
    }
    return filtered;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
dict.add('banana', 'fruit');
const fruits = dict.filter((key, value) => value === 'fruit');
console.log(fruits.keys()); // ['apple', 'banana']
```
Объяснение:
- Метод `filter()` создает новый словарь с элементами, которые удовлетворяют условию в `callback`.
---------------------------------------------------------------------------------------------
