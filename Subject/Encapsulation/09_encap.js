---------------------------------------------------------------------------------------------  
⋙ ❍ Инкапсуляция (сделал все поля класса публичными и не создал конструктор)):
---
9. Полиморфизм с инкапсуляцией
⌛ Задача: Создайте класс `Shape` и наследников `Circle` и `Square`.
🎯 Решение:
```javascript
class Shape {
  #type;

  constructor(type) {
    this.#type = type;
  }

  getType() {
    return this.#type;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super("Square");
    this.side = side;
  }

  getArea() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(5), new Square(4)];

shapes.forEach((shape) =>
  console.log(`${shape.getType()} Area: ${shape.getArea()}`)
);
```
--------------------------------------------------------------------------------------------- 
