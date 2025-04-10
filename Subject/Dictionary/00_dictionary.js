---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
Словарь или объект в JavaScript — это структура данных, которая хранит данные в виде пар "ключ-значение". Это основной способ работы с ассоциативными массивами в JavaScript.
1️⃣ Создание словаря и добавление элементов
⌛ Задача: Реализовать словарь с методами для добавления элементов и получения значений по ключу.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  get(key) {
    return this.items[key] || undefined;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('carrot', 'vegetable');
console.log(dict.get('apple')); // fruit
console.log(dict.get('carrot')); // vegetable
console.log(dict.get('banana')); // undefined
```
Объяснение:
- Создали словарь с методами для добавления и получения значений по ключу.
- Если ключ не существует, возвращаем `undefined`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
2️⃣ Проверка наличия ключа в словаре
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
---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
3️⃣ Удаление элемента по ключу
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
---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
4️⃣ Получение всех ключей из словаря
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
---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
5️⃣ Получение всех значений из словаря
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
---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
6️⃣ Перебор всех элементов словаря
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
---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
7️⃣ Слияние двух словарей
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
---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
8️⃣ Подсчёт количества элементов в словаре
⌛ Задача: Написать метод для подсчёта количества элементов в словаре.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  size() {
    return Object.keys(this.items).length;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.add('banana', 'fruit');
console.log(dict.size()); // 2
```
Объяснение:
- Метод `size()` возвращает количество элементов в словаре, используя `Object.keys()`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
9️⃣ Фильтрация словаря
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
---------------------------------------------------------------------------------------------
⋙ ❍ Словарь:
---
🔟 Обновление значений по ключу
⌛ Задача: Написать метод для обновления значения в словаре по ключу.
🎯 Решение:
```js
class Dictionary {
  constructor() {
    this.items = {};
  }

  add(key, value) {
    this.items[key] = value;
  }

  update(key, newValue) {
    if (this.has(key)) {
      this.items[key] = newValue;
    }
  }

  has(key) {
    return key in this.items;
  }
}

const dict = new Dictionary();
dict.add('apple', 'fruit');
dict.update('apple', 'red fruit');
console.log(dict.get('apple')); // 'red fruit'
```
Объяснение:
- Метод `update()` обновляет значение для существующего ключа. Если ключ не существует, ничего не происходит.
Итог
Словарь — это отличная структура данных для хранения ассоциативных пар "ключ-значение". Он широко используется для быстрого доступа к данным, а в JavaScript для этой цели чаще всего используют объекты.
Словарь позволяет легко добавлять, удалять элементы, проверять их наличие и проводить различные манипуляции с данными.
---------------------------------------------------------------------------------------------
