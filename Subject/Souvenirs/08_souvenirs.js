---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Сувениры»:
---
8️⃣ Составление набора сувениров с минимальной стоимостью
⌛ Задача: Напишите функцию, которая находит набор сувениров с минимальной стоимостью, но при этом каждый набор должен содержать хотя бы один сувенир.
🎯 Решение:
```js
function findCheapestSet(souvenirs) {
  return souvenirs.reduce((minSet, current) => {
    const newSet = [...minSet, current];
    const total = newSet.reduce((sum, item) => sum + item.price, 0);
    if (!minSet.length || total < minSet.reduce((sum, item) => sum + item.price, 0)) {
      return newSet;
    }
    return minSet;
  }, []);
}

const souvenirs = [
  { name: "Тарелка", price: 20 },
  { name: "Магнит", price: 5 },
  { name: "Фигурка", price: 50 },
  { name: "Маска", price: 30 }
];

console.log(findCheapestSet(souvenirs));
// [{ name: 'Магнит', price: 5 }]
```
Объяснение:
- Мы перебираем все возможные наборы сувениров и выбираем тот, который имеет минимальную стоимость.
---------------------------------------------------------------------------------------------
