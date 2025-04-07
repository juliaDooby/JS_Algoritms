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
