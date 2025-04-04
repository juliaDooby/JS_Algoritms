--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Специи»:
---
1️⃣ Задача: Выборка по цене специи
⌛ Задача: Напишите функцию, которая находит все специи, цена которых меньше заданного значения.
🎯 Решение:
```js
function filterSpicesByPrice(spices, maxPrice) {
  return spices.filter(spice => spice.price < maxPrice);
}

const spices = [
  { name: "Cinnamon", price: 2 },
  { name: "Clove", price: 3 },
  { name: "Nutmeg", price: 4 },
  { name: "Saffron", price: 10 }
];

console.log(filterSpicesByPrice(spices, 5)); // [{ name: "Cinnamon", price: 2 }, { name: "Clove", price: 3 }]
```
Объяснение: Используется метод `filter` для поиска всех специй с ценой, меньшей заданной.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Специи»:
---
2️⃣ Задача: Сортировка специй по цене
⌛ Задача: Напишите функцию для сортировки массива специй по цене от наименьшей к наибольшей.
🎯 Решение:
```js
function sortSpicesByPrice(spices) {
  return spices.sort((a, b) => a.price - b.price);
}

const spices = [
  { name: "Cinnamon", price: 2 },
  { name: "Clove", price: 3 },
  { name: "Nutmeg", price: 4 },
  { name: "Saffron", price: 10 }
];

console.log(sortSpicesByPrice(spices));
// [{ name: "Cinnamon", price: 2 }, { name: "Clove", price: 3 }, { name: "Nutmeg", price: 4 }, { name: "Saffron", price: 10 }]
```
Объяснение: Используем метод `sort`, который сортирует специи по возрастанию их цены.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Специи»:
---
3️⃣ Задача: Подсчёт уникальных специй
⌛ Задача: Напишите функцию, которая находит количество уникальных специй в списке, если специи с одинаковыми названиями считаются одинаковыми.
🎯 Решение:
```js
function countUniqueSpices(spices) {
  const uniqueSpices = new Set(spices.map(spice => spice.name));
  return uniqueSpices.size;
}

const spices = [
  { name: "Cinnamon", price: 2 },
  { name: "Clove", price: 3 },
  { name: "Cinnamon", price: 4 },
  { name: "Nutmeg", price: 5 }
];

console.log(countUniqueSpices(spices)); // 3 (Cinnamon, Clove, Nutmeg)
```
Объяснение: Используется объект `Set` для удаления дубликатов по имени специи.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Специи»:
---
4️⃣ Задача: Поиск специи по названию
⌛ Задача: Напишите функцию для поиска специи по её названию.
🎯 Решение:
```js
function findSpiceByName(spices, name) {
  return spices.find(spice => spice.name.toLowerCase() === name.toLowerCase());
}

const spices = [
  { name: "Cinnamon", price: 2 },
  { name: "Clove", price: 3 },
  { name: "Nutmeg", price: 4 },
  { name: "Saffron", price: 10 }
];

console.log(findSpiceByName(spices, "Nutmeg")); // { name: "Nutmeg", price: 4 }
```
Объяснение: Используется метод `find`, чтобы найти специю по её названию, при этом игнорируется регистр.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Специи»:
---
5️⃣ Задача: Специи, которые подходят по цене для покупки
⌛ Задача: Напишите функцию, которая возвращает специи, подходящие для покупки по цене (не дороже, чем заданный бюджет).
🎯 Решение:
```js
function findAffordableSpices(spices, budget) {
  return spices.filter(spice => spice.price <= budget);
}

const spices = [
  { name: "Cinnamon", price: 2 },
  { name: "Clove", price: 3 },
  { name: "Nutmeg", price: 4 },
  { name: "Saffron", price: 10 }
];

console.log(findAffordableSpices(spices, 5));
// [{ name: "Cinnamon", price: 2 }, { name: "Clove", price: 3 }, { name: "Nutmeg", price: 4 }]
```
Объяснение: Мы фильтруем специи по критерию того, чтобы их цена была меньше или равна заданному бюджету.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Специи»:
---
6️⃣ Задача: Получение списка специй, стоящих дороже определённой цены
⌛ Задача: Напишите функцию, которая возвращает список специй, стоимость которых выше заданной.
🎯 Решение:
```js
function findExpensiveSpices(spices, minPrice) {
  return spices.filter(spice => spice.price > minPrice);
}

const spices = [
  { name: "Cinnamon", price: 2 },
  { name: "Clove", price: 3 },
  { name: "Nutmeg", price: 4 },
  { name: "Saffron", price: 10 }
];

console.log(findExpensiveSpices(spices, 5)); // [{ name: "Saffron", price: 10 }]
```
Объяснение: Мы используем фильтрацию для выбора специй, чья цена больше заданного значения.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Специи»:
---
7️⃣ Задача: Сумма всех цен специй
⌛ Задача: Напишите функцию, которая вычисляет сумму всех цен специй в списке.
🎯 Решение:
```js
function calculateTotalPrice(spices) {
  return spices.reduce((total, spice) => total + spice.price, 0);
}

const spices = [
  { name: "Cinnamon", price: 2 },
  { name: "Clove", price: 3 },
  { name: "Nutmeg", price: 4 },
  { name: "Saffron", price: 10 }
];

console.log(calculateTotalPrice(spices)); // 19
```
Объяснение: Метод `reduce` помогает нам сложить все цены специй в списке.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Специи»:
---
8️⃣ Задача: Добавление новой специи в список
⌛ Задача: Напишите функцию, которая добавляет новую специю в список специй.
🎯 Решение:
```js
function addSpice(spices, newSpice) {
  spices.push(newSpice);
  return spices;
}

const spices = [
  { name: "Cinnamon", price: 2 },
  { name: "Clove", price: 3 }
];

console.log(addSpice(spices, { name: "Nutmeg", price: 4 }));
// [{ name: "Cinnamon", price: 2 }, { name: "Clove", price: 3 }, { name: "Nutmeg", price: 4 }]
```
Объяснение: Мы используем метод `push`, чтобы добавить новый объект специи в список.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Специи»:
---
9️⃣ Задача: Проверка наличия специи по имени
⌛ Задача: Напишите функцию, которая проверяет, есть ли специя с заданным именем в списке.
🎯 Решение:
```js
function hasSpice(spices, name) {
  return spices.some(spice => spice.name.toLowerCase() === name.toLowerCase());
}

const spices = [
  { name: "Cinnamon", price: 2 },
  { name: "Clove", price: 3 }
];

console.log(hasSpice(spices, "Cinnamon")); // true
console.log(hasSpice(spices, "Nutmeg")); // false
```
Объяснение: Метод `some` проверяет, есть ли хотя бы одна специя с данным именем.
--------------------------------------------------------------------------------------------- 
--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Специи»:
---
🔟 Задача: Удаление специи по имени
⌛ Задача: Напишите функцию, которая удаляет специю по её имени из списка.
🎯 Решение:
```js
function removeSpice(spices, name) {
  const index = spices.findIndex(spice => spice.name.toLowerCase() === name.toLowerCase());
  if (index !== -1) {
    spices.splice(index, 1);
  }
  return spices;
}

const spices = [
  { name: "Cinnamon", price: 2 },
  { name: "Clove", price: 3 }
];

console.log(removeSpice(spices, "Clove")); // [{ name: "Cinnamon", price: 2 }]
```
Объяснение: Мы находим индекс специи с нужным именем и удаляем её с помощью метода `splice`.
Эти задачи иллюстрируют работу с массивами объектов и показывают, как можно манипулировать данными с помощью стандартных методов JavaScript, таких как `filter`, `map`, `reduce`, `find`, `some`, и другие.
--------------------------------------------------------------------------------------------- 
