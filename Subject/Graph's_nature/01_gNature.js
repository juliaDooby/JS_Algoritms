---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
1. ⌛ Задача: Проверка, является ли граф деревом
Граф является деревом, если он связен и не содержит циклов.
🎯 Решение:
- Граф является деревом, если количество рёбер = количеству вершин - 1.
- Граф не содержит циклов (используем DFS для проверки).
```javascript
const isTree = (graph) => {
  const visited = new Set();
  let edgeCount = 0;

  const dfs = (node, parent) => {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor !== parent) {
        if (!dfs(neighbor, node)) return false;
        edgeCount++;
      }
    }
    return true;
  };

  const startNode = Object.keys(graph)[0];
  if (!dfs(startNode, null)) return false;

  return visited.size === Object.keys(graph).length && edgeCount === visited.size - 1;
};

const graph1 = { 0: [1, 2], 1: [0], 2: [0] }; // Дерево
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // С циклом, не дерево

console.log(isTree(graph1)); // true
console.log(isTree(graph2)); // false
```
---------------------------------------------------------------------------------------------
