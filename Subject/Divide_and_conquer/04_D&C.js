--------------------------------------------------------------------------------------------- 
⋙ ❍ Алгоритмы «Разделяй и властвуй»:
---
4. Задача: Разделение массива на части
⌛ Задача: Разделить массив на два подмассива с минимальной разницей в их суммах.
🎯 Решение:
```javascript
function minDifferencePartition(arr) {
    const totalSum = arr.reduce((sum, num) => sum + num, 0);
    const target = Math.floor(totalSum / 2);
    const dp = Array(arr.length + 1).fill(null).map(() => Array(target + 1).fill(false));
    dp[0][0] = true;

    for (let i = 1; i <= arr.length; i++) {
        for (let j = 0; j <= target; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= arr[i - 1]) dp[i][j] = dp[i][j] || dp[i - 1][j - arr[i - 1]];
        }
    }

    for (let j = target; j >= 0; j--) {
        if (dp[arr.length][j]) {
            return totalSum - 2 * j;
        }
    }
}

console.log(minDifferencePartition([1, 2, 3, 9])); // Выводит 3
```
Объяснение: Это задача с применением динамического программирования, но она также использует принцип "разделяй и властвуй". Мы пытаемся найти подмножество, сумма которого как можно ближе к половине общей суммы.
--------------------------------------------------------------------------------------------- 
