---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Пара ближайших точек»:
---
2. ⌛ Задача: Реализация функции для подсчета расстояния
Условие:
Напишите отдельную функцию для вычисления расстояния между двумя точками.
🎯 Решение:
```javascript
function distance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

const p1 = {x: 1, y: 1};
const p2 = {x: 4, y: 5};
console.log(distance(p1, p2));  // 5
```
Объяснение:
Функция `distance` использует стандартную формулу для нахождения расстояния между двумя точками в двумерном пространстве.
---------------------------------------------------------------------------------------------  
