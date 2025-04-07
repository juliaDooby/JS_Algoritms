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
