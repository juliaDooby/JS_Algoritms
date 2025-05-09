---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Размен 2»:
---
5. ⌛ Задача: Размен для всех возможных сумм от 0 до N
Условие:
Нужно найти минимальное количество монет для всех возможных сумм от 0 до N.
🎯 Решение:
```javascript
function coinChangeAll(coins, N) {
  const dp = Array(N + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= N; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp.slice(0, N + 1);
}

console.log(coinChangeAll([1, 2, 5], 11));
```
Объяснение:
Мы строим массив `dp`, в котором для каждой суммы от 0 до N содержится минимальное количество монет для размена.
---------------------------------------------------------------------------------------------
