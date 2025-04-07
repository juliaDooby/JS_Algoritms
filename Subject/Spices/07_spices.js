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
