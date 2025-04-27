---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
9️⃣ Алгоритм A* (Поиск пути в лабиринте)
⌛ Задача: Реализовать поиск кратчайшего пути в лабиринте с использованием A* (A-star).
🎯 Решение (упрощённый вариант):
```js
function aStar(start, goal, graph) {
  const pq = new MinHeap();
  pq.insert(start, 0);
  const cameFrom = {};
  const costSoFar = { [start]: 0 };

  while (pq.heap.length) {
    let { element: current } = pq.extractMin();
    if (current === goal) break;

    for (let neighbor in graph[current]) {
      let newCost = costSoFar[current] + graph[current][neighbor];
      if (!(neighbor in costSoFar) || newCost < costSoFar[neighbor]) {
        costSoFar[neighbor] = newCost;
        let priority = newCost;
        pq.insert(neighbor, priority);
        cameFrom[neighbor] = current;
      }
    }
  }

  return cameFrom;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(aStar("A", "D", graph));
```
Объяснение:
- A* ищет путь к цели, используя приоритетную очередь.
- Находит оптимальный маршрут в графе.
---------------------------------------------------------------------------------------------
