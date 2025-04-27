---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
4️⃣ Выбор сувениров по заданному бюджету
⌛ Задача: Напишите функцию, которая выбирает сувениры, сумма стоимости которых не превышает заданного бюджета.
🎯 Решение:
```js
function selectSouvenirsByBudget(souvenirs, budget) {
  let selected = [];
  let total = 0;

  for (let souvenir of souvenirs) {
    if (total + souvenir.price <= budget) {
      selected.push(souvenir);
      total += souvenir.price;
    }
  }

  return selected;
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(selectSouvenirsByBudget(souvenirs, 55));
// [{ name: 'Тарелка', price: 20 }, { name: 'Магнит', price: 5 }]
```
Объяснение:
- Перебираем сувениры и добавляем их в список выбранных, если сумма их цен не превышает бюджет.
---------------------------------------------------------------------------------------------
