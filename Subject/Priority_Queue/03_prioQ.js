---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
3️⃣ Реализация алгоритма Дейкстры
⌛ Задача: Найти кратчайший путь в графе с помощью очереди с приоритетом.
🎯 Решение:
```js
function dijkstra(graph, start) {
  const pq = new MinHeap();
  const distances = {};
  for (let node in graph) distances[node] = Infinity;
  distances[start] = 0;

  pq.insert(start, 0);

  while (pq.heap.length) {
    let { element: current } = pq.extractMin();

    for (let neighbor in graph[current]) {
      let newDist = distances[current] + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.insert(neighbor, newDist);
      }
    }
  }
  return distances;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, "A"));
```
---------------------------------------------------------------------------------------------
