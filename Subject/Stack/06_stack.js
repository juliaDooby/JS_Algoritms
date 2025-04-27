---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
---
6️⃣ Отмена последнего действия (Undo)
🎯 Решение:
```js
class UndoStack {
  constructor() {
    this.stack = [];
  }

  execute(action) {
    this.stack.push(action);
    console.log(`Выполнено: ${action}`);
  }

  undo() {
    console.log(`Отменено: ${this.stack.pop()}`);
  }
}

const editor = new UndoStack();
editor.execute("Написать код");
editor.execute("Добавить комментарий");
editor.undo(); // "Отменено: Добавить комментарий"
```
---------------------------------------------------------------------------------------------
