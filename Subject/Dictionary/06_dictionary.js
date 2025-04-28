---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
6️⃣ Слияние двух словарей
⌛ Задача: Написать метод для слияния двух словарей в один.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  merge(otherDict) {
    for (let key in otherDict.items) {
      this.items[key] = otherDict.items[key];
    }
  }
}

const dict1 = new Dictionary();
dict1.add('apple', 'fruit');
const dict2 = new Dictionary();
dict2.add('carrot', 'vegetable');
dict1.merge(dict2);
console.log(dict1.keys()); // ['apple', 'carrot']
```
Объяснение:
- Метод `merge()` объединяет два словаря. Все ключи и значения второго словаря добавляются в первый.
---------------------------------------------------------------------------------------------
