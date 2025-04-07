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
