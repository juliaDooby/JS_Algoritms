---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
---
1️⃣ Проверка правильности скобок (Valid Parentheses)
⌛ Задача: Проверить, является ли строка с `()`, `{}`, `[]` правильной (парные скобки).
🎯 Решение:
```js
function isValidParentheses(s) {
  const stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValidParentheses("(){}[]")); // true
console.log(isValidParentheses("(]")); // false
console.log(isValidParentheses("{[()]}")); // true
```
Объяснение:
- Если видим открывающую скобку – кладём в стек.
- Если встречаем закрывающую – сравниваем с вершиной стека.
---------------------------------------------------------------------------------------------
