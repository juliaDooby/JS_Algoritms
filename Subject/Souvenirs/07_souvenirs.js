---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
7️⃣ Применение скидки на сувениры
⌛ Задача: Напишите функцию, которая применяет скидку к цене всех сувениров из списка, если цена превышает определенную сумму.
🎯 Решение:
```js
function applyDiscount(souvenirs, discountThreshold, discountPercentage) {
  return souvenirs.map(souvenir => {
    if (souvenir.price > discountThreshold) {
      souvenir.price *= (1 - discountPercentage / 100);
    }
    return souvenir;
  });
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(applyDiscount(souvenirs, 20, 10));
// Применит скидку 10% к "Фигурка" и "Маска"
```
Объяснение:
- Мы проходим по массиву сувениров и применяем скидку к тем, цена которых превышает порог `discountThreshold`.
---------------------------------------------------------------------------------------------
