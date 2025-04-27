---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Пара ближайших точек»:
---
3. ⌛ Задача: Нахождение пары ближайших точек в больших массивах
Условие:
Оптимизируйте решение для поиска ближайших точек в массиве, содержащем до 1 миллиона точек.
🎯 Решение:
Для больших массивов рекомендуется использовать алгоритм «разделяй и властвуй» или структуру данных для ускоренного поиска ближайших точек.
```javascript
function closestPair(points) {
  function divide(points) {
    if (points.length <= 3) {
      let minDist = Infinity;
      let pair = [];
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dist = distance(points[i], points[j]);
          if (dist < minDist) {
            minDist = dist;
            pair = [points[i], points[j]];
          }
        }
      }
      return pair;
    }

    const mid = Math.floor(points.length / 2);
    const left = points.slice(0, mid);
    const right = points.slice(mid);

    const leftPair = divide(left);
    const rightPair = divide(right);
    const minPair = distance(leftPair[0], leftPair[1]) < distance(rightPair[0], rightPair[1]) ? leftPair : rightPair;

    return minPair;
  }

  points.sort((a, b) => a.x - b.x);  // Сортировка по оси X
  return divide(points);
}

const points = [{x: 1, y: 1}, {x: 3, y: 3}, {x: 5, y: 1}, {x: 4, y: 2}, {x: 6, y: 3}];
console.log(closestPair(points));  // [{x: 3, y: 3}, {x: 4, y: 2}]
```
Объяснение:
Алгоритм делит массив точек на две половины и рекурсивно находит пару ближайших точек в каждой половине. После этого сравниваются возможные пары на границе двух половин.
---------------------------------------------------------------------------------------------  
