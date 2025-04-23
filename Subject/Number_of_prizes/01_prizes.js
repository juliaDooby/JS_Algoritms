--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Количество призов»:
---
1. ⌛ Задача: Разделение призов по категориям
Условие:
Есть общее количество призов, которые нужно распределить по категориям, где количество призов в каждой категории заранее известно.
🎯 Решение:
```javascript
function distributePrizes(totalPrizes, categories) {
  let distribution = {};
  let remainingPrizes = totalPrizes;

  categories.forEach(category => {
    distribution[category] = Math.floor(remainingPrizes / categories.length);
    remainingPrizes -= distribution[category];
  });

  return distribution;
}

let totalPrizes = 100;
let categories = ['1-й', '2-й', '3-й'];
console.log(distributePrizes(totalPrizes, categories));
```
Объяснение:
Призы делятся на количество категорий, но остаток от деления корректируется путем уменьшения оставшихся призов.
--------------------------------------------------------------------------------------------- 
