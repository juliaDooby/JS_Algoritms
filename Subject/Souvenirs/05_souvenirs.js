---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
5️⃣ Комбинирование сувениров с максимальной общей стоимостью
⌛ Задача: Напишите функцию, которая выбирает сувениры таким образом, чтобы их общая стоимость была максимальной, но не превышала заданного бюджета.
🎯 Решение:
```js
function getMaxValueCombination(souvenirs, budget) {
  let bestCombination = [];
  let maxValue = 0;

  for (let i = 0; i < (1 << souvenirs.length); i++) {
    let combination = [];
    let total = 0;

    for (let j = 0; j < souvenirs.length; j++) {
      if (i & (1 << j)) {
        combination.push(souvenirs[j]);
        total += souvenirs[j].price;
      }
    }

    if (total <= budget && total > maxValue) {
      maxValue = total;
      bestCombination = combination;
    }
  }

  return bestCombination;
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(getMaxValueCombination(souvenirs, 55));
// [{ name: 'Тарелка', price: 20 }, { name: 'Магнит', price: 5 }]
```
Объяснение:
- Используем битовую маску для генерации всех возможных комбинаций сувениров и выбираем ту, чья общая стоимость не превышает бюджет и максимальна.
---------------------------------------------------------------------------------------------
