---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
---
7️⃣ Проверка палиндрома
🎯 Решение:
```js
function isPalindrome(s) {
  const stack = s.split('');
  return s === stack.reverse().join('');
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```
---------------------------------------------------------------------------------------------
