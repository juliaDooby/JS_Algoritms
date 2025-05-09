---------------------------------------------------------------------------------------------
⋙ ❍ Представление графа в памяти компьютера:
---
7. ⌛ Задача: Проверка, является ли граф ориентированным
Проверьте, является ли граф, представленный матрицей смежности, ориентированным. Граф ориентированный, если для каждой пары вершин (i, j) выполняется условие: если есть ребро из i в j, то нет ребра из j в i.
🎯 Решение:
Для проверки нужно пройтись по матрице и убедиться, что если `graph[i][j] === 1`, то `graph[j][i] === 0`.
```javascript
const graph = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
];

const isDirected = graph => {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (graph[i][j] === 1 && graph[j][i] === 1) {
        return false; // Граф не ориентированный
      }
    }
  }
  return true;
};

console.log(isDirected(graph)); // true
```
---------------------------------------------------------------------------------------------
