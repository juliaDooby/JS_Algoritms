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
