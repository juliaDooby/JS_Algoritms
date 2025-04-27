---------------------------------------------------------------------------------------------
⋙ ❍ Задача о рюкзаке:
---
9. Задача о рюкзаке с дополнительными ограничениями по стоимости
⌛Задача: Решите задачу о рюкзаке, где существуют ограничения на стоимость каждого предмета и максимальный вес рюкзака.
🎯 Решение:
```js
function knapsackWithConstraints(items, capacity, costLimit) {
  const dp = Array(capacity + 1).fill(0);

  items.forEach(item => {
    if (item.value <= costLimit) {
      for (let w = capacity; w >= item.weight; w--) {
        dp[w] = Math.max(dp[w], dp[w - item.weight] + item.value);
      }
    }
  });

  return dp[capacity];
}

const items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
];

console.log(knapsackWithConstraints(items, 50, 100)); // 220
```
Объяснение:
- Мы добавили дополнительное ограничение на максимальную стоимость предметов, которые могут быть выбраны.
---------------------------------------------------------------------------------------------
