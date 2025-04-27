---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
9. ⌛ Задача: Нахождение мостов в графе
Мост — это ребро, удаление которого увеличивает число компонент связности.
🎯 Решение:
Используем обход в глубину (DFS) и время входа в вершину.
```javascript
const findBridges = (graph) => {
  let time = 0;
  const discovery = {};
  const low = {};
  const bridges = [];

  const dfs = (node, parent) => {
    discovery[node] = low[node] = ++time;

    for (let neighbor of graph[node]) {
      if (neighbor === parent) continue;

      if (!(neighbor in discovery)) {
        dfs(neighbor, node);
        low[node] = Math.min(low[node], low[neighbor]);

        if (low[neighbor] > discovery[node]) {
          bridges.push([node, neighbor]);
        }
      } else {
        low[node] = Math.min(low[node], discovery[neighbor]);
      }
    }
  };

  for (let node in graph) {
    if (!(node in discovery)) dfs(node, null);
  }

  return bridges;
};

const graph = { 0: [1, 2], 1: [0, 2, 3], 2: [0, 1], 3: [1, 4], 4: [3] };

console.log(findBridges(graph)); // [[3, 4]]
```
---------------------------------------------------------------------------------------------
