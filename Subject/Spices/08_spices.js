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
