---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
8️⃣ Симуляция хода змейки (Snake Game) с использованием дека
⌛ Задача: Реализовать логику движения змейки, используя `Deque`.
🎯 Решение:
```js
class SnakeGame {
  constructor() {
    this.snake = new Deque();
    this.snake.pushBack([0, 0]); // Начальная позиция змейки
    this.directions = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  }

  move(direction) {
    let head = this.snake.back();
    let newHead = [head[0] + this.directions[direction][0], head[1] + this.directions[direction][1]];

    this.snake.pushBack(newHead);
    this.snake.popFront(); // Удаляем хвост (если не съели еду)

    return newHead;
  }

  display() {
    console.log([...this.snake.items]);
  }
}

const game = new SnakeGame();
game.move("R"); // Двигаем змейку вправо
game.move("D"); // Двигаем вниз
game.display(); // [[0,1], [1,1]]
```
Объяснение:
- `Deque` используется для хранения координат тела змейки.
- Добавляем новую голову (`pushBack()`), удаляем хвост (`popFront()`), если змейка не съела еду.
---------------------------------------------------------------------------------------------
