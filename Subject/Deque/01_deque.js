---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
1️⃣ Палиндром с использованием дека
⌛ Задача: Проверить, является ли строка палиндромом (читается одинаково в обе стороны).
🎯 Решение:
```js
const isPalindrome = (str) => {
  const deque = new Deque();
  for (let char of str) deque.pushBack(char);

  while (deque.size() > 1) {
    if (deque.popFront() !== deque.popBack()) return false;
  }
  return true;
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
```
---------------------------------------------------------------------------------------------
