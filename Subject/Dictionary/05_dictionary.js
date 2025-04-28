---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
5️⃣ Перебор всех элементов словаря
⌛ Задача: Написать метод для перебора всех элементов словаря и вывода их на экран.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  forEach(callback) {
    for (let key in this.items) {
      callback(key, this.items[key]);
    }
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
dict.forEach((key, value) => console.log(`${key}: ${value}`));
// apple: fruit
// carrot: vegetable
```
Объяснение:
- Метод `forEach()` перебирает все ключи и значения, вызывая переданную функцию для каждого элемента.
---------------------------------------------------------------------------------------------
