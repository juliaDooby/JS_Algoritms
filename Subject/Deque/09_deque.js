---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
9. Поддержка истории действий (Undo/Redo)
⌛ Задача: Реализовать механизм Undo / Redo с помощью дека.
🎯 Решение:
```js
class HistoryManager {
  constructor() {
    this.undoStack = new Deque();
    this.redoStack = new Deque();
  }

  performAction(action) {
    this.undoStack.pushBack(action);
    this.redoStack = new Deque(); // Очистить Redo-стек после нового действия
  }

  undo() {
    if (!this.undoStack.isEmpty()) {
      let lastAction = this.undoStack.popBack();
      this.redoStack.pushBack(lastAction);
      return `Отменено: ${lastAction}`;
    }
    return "Нечего отменять";
  }

  redo() {
    if (!this.redoStack.isEmpty()) {
      let redoAction = this.redoStack.popBack();
      this.undoStack.pushBack(redoAction);
      return `Повторено: ${redoAction}`;
    }
    return "Нечего повторять";
  }

  displayHistory() {
    console.log("История действий:", [...this.undoStack.items]);
  }
}

const history = new HistoryManager();
history.performAction("Открыт файл");
history.performAction("Написан код");
console.log(history.undo()); // "Отменено: Написан код"
console.log(history.redo()); // "Повторено: Написан код"
```
Объяснение:
- Используем два дека: `undoStack` (для отмены) и `redoStack` (для повторения).
- При новом действии очищаем `redoStack`, т.к. после новых операций старые "повторения" уже не актуальны.
Дек — мощный инструмент для решения задач, связанных с историей действий, обработкой строк, симуляцией игр и даже алгоритмами поиска!
---------------------------------------------------------------------------------------------
