---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
4️⃣ Обратный порядок слов
⌛ Задача: Перевернуть строку с использованием дека.
🎯 Решение:
```js
const reverseString = (str) => {
  const deque = new Deque();
  for (let char of str) deque.pushFront(char);

  let reversed = "";
  while (!deque.isEmpty()) reversed += deque.popFront();
  return reversed;
};

console.log(reverseString("hello")); // "olleh"
```
---------------------------------------------------------------------------------------------
