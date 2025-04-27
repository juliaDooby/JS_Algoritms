---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
7. ⌛ Задача: Поиск кратчайшего пути в взвешенном графе (алгоритм Дейкстры)
Для поиска кратчайшего пути в взвешенном графе используем алгоритм Дейкстры.
🎯 Решение:
Используем приоритетную очередь (min-heap).
```javascript
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift().element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const dijkstra = (graph, start) => {
  const distances = {};
  const pq = new PriorityQueue();

  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    let current = pq.dequeue();

    for (let neighbor in graph[current]) {
      let newDist = distances[current] + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.enqueue(neighbor, newDist);
      }
    }
  }

  return distances;
};

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, "A")); // { A: 0, B: 1, C: 3, D: 4 }
```
---------------------------------------------------------------------------------------------
