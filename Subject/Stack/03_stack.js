---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
---
3️⃣ Операции над стеком (Min Stack)
⌛ Задача: Реализовать стек с функцией getMin(), которая за O(1) находит минимум.
🎯 Решение:
```js
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x);
    }
  }

  pop() {
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const ms = new MinStack();
ms.push(3);
ms.push(5);
ms.push(2);
ms.push(1);
console.log(ms.getMin()); // 1
ms.pop();
console.log(ms.getMin()); // 2
```
Объяснение:
- minStack хранит минимальный элемент в каждый момент.
---------------------------------------------------------------------------------------------
