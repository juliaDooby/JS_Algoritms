---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
4. ⌛ Задача: Поиск цикла в неориентированном графе
Определим, есть ли в графе цикл.
🎯 Решение:
Используем DFS с отслеживанием родителя.
```javascript
const hasCycle = (graph) => {
  const visited = new Set();

  const dfs = (node, parent) => {
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  };

  for (let node in graph) {
    if (!visited.has(node)) {
      if (dfs(node, null)) return true;
    }
  }
  return false;
};

const graph1 = { 0: [1], 1: [0, 2], 2: [1] }; // Без цикла
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // С циклом

console.log(hasCycle(graph1)); // false
console.log(hasCycle(graph2)); // true
```
---------------------------------------------------------------------------------------------
