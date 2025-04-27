---------------------------------------------------------------------------------------------
⋙ ❍ Графы:
---
6️⃣ Кратчайший путь (BFS)
```js
const shortestPathBFS = (graph, start, end) => {
  const queue = [[start, 0]];
  const visited = new Set();

  while (queue.length) {
    const [node, dist] = queue.shift();
    if (node === end) return dist;

    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1;
};

console.log(shortestPathBFS(graph2, 0, 3)); // 2
```
---------------------------------------------------------------------------------------------
