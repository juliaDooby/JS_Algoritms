---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
5. ⌛ Задача: Проверка, является ли граф полным
Граф называется полным, если каждая вершина соединена со всеми другими вершинами.
🎯 Решение:
В полном графе с `n` вершинами у каждой вершины должно быть `n-1` соседей.
```javascript
const isCompleteGraph = (graph) => {
  const nodes = Object.keys(graph);
  const n = nodes.length;

  for (let node of nodes) {
    if (graph[node].length !== n - 1) {
      return false;
    }
  }
  return true;
};

const graph1 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // Полный
const graph2 = { 0: [1], 1: [0, 2], 2: [1] }; // Не полный

console.log(isCompleteGraph(graph1)); // true
console.log(isCompleteGraph(graph2)); // false
```
---------------------------------------------------------------------------------------------
