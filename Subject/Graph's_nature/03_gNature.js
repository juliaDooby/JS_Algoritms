---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
3. ⌛ Задача: Определение количества компонентов связности
Если граф несвязный, его можно разбить на несколько компонент связности.
🎯 Решение:
Запускаем *DFS из каждой непосещённой вершины и считаем компоненты.
```javascript
const countComponents = (graph) => {
  const visited = new Set();
  let count = 0;

  const dfs = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        dfs(neighbor);
      }
    }
  };

  for (let node in graph) {
    if (!visited.has(node)) {
      count++;
      dfs(node);
    }
  }

  return count;
};

const graph1 = { 0: [1], 1: [0], 2: [3], 3: [2] }; // Две компоненты
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // Одна компонента

console.log(countComponents(graph1)); // 2
console.log(countComponents(graph2)); // 1
```
---------------------------------------------------------------------------------------------
