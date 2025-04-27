---------------------------------------------------------------------------------------------
⋙ ❍ Задача LCS:
---
1️⃣ ⌛ Задача на восстановление LCЗадача Найдите не только длину LCS, но и саму подпоследовательность.
🎯 Решение:
```js
function lcsWithSequence(str1, str2) {
  const m = str1.length, n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let lcsString = '';
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcsString = str1[i - 1] + lcsString;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcsString;
}

console.log(lcsWithSequence("AGGTAB", "GXTXAYB")); // GTAB
```Объяснение Мы строим таблицу, как в предыдущем решении, но после вычисления длины LCS, мы восстанавливаем саму подпоследовательность, двигаясь по таблице обратно.
---------------------------------------------------------------------------------------------
