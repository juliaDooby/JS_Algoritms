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
