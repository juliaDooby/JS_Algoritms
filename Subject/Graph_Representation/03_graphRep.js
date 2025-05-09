---------------------------------------------------------------------------------------------
⋙ ❍ Представление графа в памяти компьютера:
---
3. ⌛ Задача: Проверка наличия ребра между двумя вершинами в матрице смежности
Проверьте, есть ли ребро между вершинами 0 и 2 в графе, представленном матрицей смежности.
🎯 Решение:
Проверка на наличие ребра сводится к проверке значения в соответствующей ячейке матрицы.
```javascript
const graph = [
  [0, 1, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 1, 0, 0]
];

const hasEdge = (graph, vertex1, vertex2) => graph[vertex1][vertex2] === 1;

console.log(hasEdge(graph, 0, 2)); // true
console.log(hasEdge(graph, 1, 2)); // false
```
---------------------------------------------------------------------------------------------
