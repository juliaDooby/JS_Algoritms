---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Размен 2»:
---
13. ⌛ Задача: Невозможный размен с минимальными потерями
Условие:
Нужно найти размен суммы с минимальными потерями. Потери — это разница между заданной суммой и суммой, которую можно составить из данных монет.
🎯 Решение:
```javascript
function minLoss(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }

  let result = dp[amount];
  if (result === Infinity) {
    for (let i = amount - 1; i >= 0; i--) {
      if (dp[i] !== Infinity) {
        result = dp[i];
        break;
      }
    }
  }

  return result === Infinity ? -1 : result;
}

console.log(minLoss([1, 2, 5], 7));  // 2
```
Объяснение:
Мы используем динамическое программирование для нахождения минимального количества монет, которые могут быть использованы для размена суммы. В случае невозможности точного размена, программа находит сумму с минимальными потерями.
---------------------------------------------------------------------------------------------
