---------------------------------------------------------------------------------------------
⋙ ❍ Задача о рюкзаке:
---
4️⃣ Взаимосвязь предметов и стоимостей
⌛Задача: У нас есть предметы, но каждый предмет имеет дополнительную зависимость от других предметов. Например, для того чтобы взять один предмет, нужно взять другой. Как решить такую задачу?
🎯 Решение:
```js
function dependencyKnapsack(items, capacity, dependencies) {
  const dp = Array(capacity + 1).fill(0);

  items.forEach(item => {
    const depItem = dependencies[item.name];
    if (depItem) {
      for (let w = capacity; w >= item.weight + depItem.weight; w--) {
        dp[w] = Math.max(dp[w], dp[w - item.weight - depItem.weight] + item.value + depItem.value);
      }
    } else {
      for (let w = capacity; w >= item.weight; w--) {
        dp[w] = Math.max(dp[w], dp[w - item.weight] + item.value);
      }
    }
  });

  return dp[capacity];
}

const items = [
  { name: "A", value: 60, weight: 10 },
  { name: "B", value: 100, weight: 20 },
  { name: "C", value: 120, weight: 30 }
];

const dependencies = {
  "A": { value: 20, weight: 5 },
  "B": { value: 50, weight: 15 }
};

console.log(dependencyKnapsack(items, 50, dependencies)); // 230
```
Объяснение:
- Для каждого предмета проверяется, есть ли зависимость. Если есть, то оба предмета считаются одновременно.
---------------------------------------------------------------------------------------------
