---------------------------------------------------------------------------------------------
⋙ ❍ Графы:
---
2️⃣ Обход в ширину (BFS)
⌛ Задача: Реализовать BFS для обхода графа.
🎯 Решение и объяснение:
BFS проходит граф по уровням, используя очередь.
```js
const bfs = (graph, start) => {
  const queue = [start];
  const visited = new Set(queue);

  while (queue.length) {
    const node = queue.shift();
    console.log(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
};

bfs(graph2, 0);
// Вывод: 0 1 2 3
```
---------------------------------------------------------------------------------------------
