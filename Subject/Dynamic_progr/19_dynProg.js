---------------------------------------------------------------------------------------------
⋙ ❍ Динамическое программирование:
---
19. ⌛ Задача: Наибольшая возрастающая подпоследовательность
Дана последовательность чисел. Необходимо найти длину наибольшей возрастающей подпоследовательности.
🎯 Решение:
```javascript
function longestIncreasingSubsequence(nums) {
  if (nums.length === 0) return 0;

  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]));  // 4
```
Объяснение:
Мы используем динамическое программирование для решения задачи. В массиве `dp` хранится длина наибольшей возрастающей подпоследовательности, заканчивающейся на каждом элементе. Если элемент текущей последовательности больше предыдущего, то длина возрастающей подпоследовательности обновляется.
---------------------------------------------------------------------------------------------
