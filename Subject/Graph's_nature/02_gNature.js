---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
2. ⌛ Задача: Проверка, является ли граф двудольным
Граф двудольный, если его вершины можно разбить на два множества, такие что все рёбра соединяют вершины из разных множеств.
🎯 Решение:
Используем BFS и красим вершины в два цвета.
```javascript
const isBipartite = (graph) => {
  const colors = {};

  for (let node in graph) {
    if (!(node in colors)) {
      colors[node] = 0;
      const queue = [node];

      while (queue.length) {
        let current = queue.shift();
        for (let neighbor of graph[current]) {
          if (!(neighbor in colors)) {
            colors[neighbor] = 1 - colors[current];
            queue.push(neighbor);
          } else if (colors[neighbor] === colors[current]) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

const graph1 = { 0: [1, 3], 1: [0, 2], 2: [1, 3], 3: [0, 2] };
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] };

console.log(isBipartite(graph1)); // true
console.log(isBipartite(graph2)); // false
```
---------------------------------------------------------------------------------------------
