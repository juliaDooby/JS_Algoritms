---------------------------------------------------------------------------------------------
⋙ ❍ Графы:
---
5️⃣ Поиск цикла
```js
const hasCycle = (graph, node, visited = new Set(), parent = -1) => {
  visited.add(node);
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      if (hasCycle(graph, neighbor, visited, node)) return true;
    } else if (neighbor !== parent) {
      return true;
    }
  }
  return false;
};
```
---------------------------------------------------------------------------------------------
