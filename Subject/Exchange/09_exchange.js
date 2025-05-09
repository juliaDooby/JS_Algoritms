--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Размен»:
---
9️⃣ Задача: Невозможность размена суммы
⌛ Задача: Напишите функцию, которая возвращает `true`, если размен суммы невозможен с данным набором монет.
🎯 Решение:
```js
function isChangePossible(amount, coins) {
  const dp = Array(amount + 1).fill(false);
  dp[0] = true; // 0 сумму можно разменять, не используя монеты.

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = dp[i] || dp[i - coin];
    }
  }

  return dp[amount];
}

console.log(isChangePossible(7, [2, 3])); // false
```
Объяснение: Мы проверяем, возможно ли составить сумму с данным набором монет с помощью динамического программирования.
--------------------------------------------------------------------------------------------- 
