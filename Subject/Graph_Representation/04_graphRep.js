---------------------------------------------------------------------------------------------
⋙ ❍ Представление графа в памяти компьютера:
---
4. ⌛ Задача: Добавление ребра в граф, представленный списком смежности
Добавьте ребро между вершинами 1 и 2 в граф, представленный списком смежности.
🎯 Решение:
Для добавления ребра нужно добавить вершину в список смежности соответствующей вершины.
```javascript
const graph = {
  0: [1],
  1: [2],
  2: []
};

const addEdge = (graph, vertex1, vertex2) => {
  graph[vertex1].push(vertex2);
};

addEdge(graph, 1, 2); // Добавляем ребро 1 -> 2
console.log(graph);
```
---------------------------------------------------------------------------------------------
