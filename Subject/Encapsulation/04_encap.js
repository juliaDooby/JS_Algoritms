---------------------------------------------------------------------------------------------  
⋙ ❍ Инкапсуляция (сделал все поля класса публичными и не создал конструктор)):
---
4. Геттеры и сеттеры
⌛ Задача: Реализуйте класс `Rectangle` с инкапсулированными свойствами `width` и `height`.
🎯 Решение:
```javascript
class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get area() {
    return this.#width * this.#height;
  }

  set width(value) {
    if (value > 0) this.#width = value;
  }

  get width() {
    return this.#width;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50
rect.width = 20;
console.log(rect.area); // 200
```
Объяснение: Геттеры и сеттеры позволяют управлять доступом к приватным свойствам.
---------------------------------------------------------------------------------------------  
