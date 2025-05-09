---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Пара ближайших точек»:
---
1. ⌛ Задача: Нахождение ближайших точек с использованием сортировки
Условие:
Напишите алгоритм, который находит пару ближайших точек, используя сортировку для ускорения вычислений.
🎯 Решение:
```javascript
function closestPair(points) {
  points.sort((a, b) => a.x - b.x);  // Сортируем по оси X
  let minDist = Infinity;
  let pair = [];

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[j].x - points[i].x > minDist) break;  // Прекращаем поиск, если расстояние по X больше минимального расстояния
      const dist = Math.sqrt((points[j].x - points[i].x) ** 2 + (points[j].y - points[i].y) ** 2);
      if (dist < minDist) {
        minDist = dist;
        pair = [points[i], points[j]];
      }
    }
  }

  return pair;
}

const points = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}, {x: 5, y: 5}];
console.log(closestPair(points));  // [{x: 1, y: 1}, {x: 2, y: 2}]
```
Объяснение:
В этой версии мы сначала сортируем точки по оси X. Это позволяет уменьшить количество проверяемых пар, так как мы сразу можем исключить пары, расстояние между которыми по оси X превышает минимальное расстояние.
---------------------------------------------------------------------------------------------  
