---------------------------------------------------------------------------------------------
⋙ ❍ Задача «Пара ближайших точек»:
---
5. ⌛ Задача: Нахождение пары ближайших точек в квадрате 10x10
Условие:
Найдите пару ближайших точек в заданном диапазоне (например, внутри квадрата с размером 10x10).
🎯 Решение:
Предположим, что все точки находятся в пределах квадрата 10x10. Мы будем искать пару ближайших точек в этом диапазоне.
```javascript
const points = [{x: 1, y: 1}, {x: 3, y: 4}, {x: 7, y: 8}, {x: 9, y: 9}];
console.log(closestPair(points));  // [{x: 7, y: 8}, {x: 9, y: 9}]
```
Объяснение:
Мы используем метод поиска ближайших точек, описанный ранее, и работаем с фиксированным набором точек.
---------------------------------------------------------------------------------------------  
