---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
6. ⌛ Задача: Поиск кратчайшего пути в невзвешенном графе (BFS)
Используем поиск в ширину (BFS), так как в невзвешенном графе он гарантирует нахождение кратчайшего пути.
🎯 Решение:
Мы будем использовать очередь (`queue`), чтобы проходить по графу уровнями.
```javascript
const shortestPathBFS = (graph, start, target) => {
  const queue = [[start, 0]]; // (вершина, расстояние)
  const visited = new Set();

  while (queue.length) {
    const [node, dist] = queue.shift();

    if (node === target) return dist;

    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        queue.push([neighbor, dist + 1]);
      }
    }
  }
  return -1; // Если пути нет
};

const graph = { 0: [1, 2], 1: [0, 3], 2: [0, 3], 3: [1, 2] };

console.log(shortestPathBFS(graph, 0, 3)); // 2
console.log(shortestPathBFS(graph, 0, 4)); // -1 (нет пути)
```
---------------------------------------------------------------------------------------------
