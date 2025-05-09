---------------------------------------------------------------------------------------------
⋙ ❍ Представление графа в памяти компьютера:
---
9. ⌛ Задача: Представление взвешенного графа с помощью списка смежности
Представьте взвешенный направленный граф с 3 вершинами, где веса рёбер следующие: 0 -> 1 (вес 5), 1 -> 2 (вес 3).
🎯 Решение:
Для взвешенного графа в списке смежности можно хранить массив объектов с вершинами и весами.
```javascript
const graph = {
  0: [{ vertex: 1, weight: 5 }],
  1: [{ vertex: 2, weight: 3 }],
  2: []
};

console.log(graph);
```
Эти задачи покрывают основные способы представления графов в памяти и дают представление о том, как манипулировать графами в JavaScript.
---------------------------------------------------------------------------------------------
