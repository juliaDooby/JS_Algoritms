---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
7️⃣ Проверка сбалансированных скобок
```js
const isBalanced = (str) => {
  const deque = new Deque();
  for (let char of str) {
    if (char === '(') deque.pushBack(char);
    else if (char === ')') {
      if (deque.isEmpty()) return false;
      deque.popBack();
    }
  }
  return deque.isEmpty();
};

console.log(isBalanced("(())")); // true
console.log(isBalanced("(()")) ; // false
```
---------------------------------------------------------------------------------------------
