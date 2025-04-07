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
