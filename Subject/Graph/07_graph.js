---------------------------------------------------------------------------------------------
⋙ ❍ Графы:
---
7️⃣ Алгоритм Дейкстры
Используем приоритетную очередь для нахождения кратчайшего пути во взвешенном графе.
```js
// Реализация приоритетной очереди и Дейкстры
```
Алгоритм Дейкстры используется для нахождения кратчайших путей в графе, не для поиска мостов.  
Мосты — это структура связности графа, а Дейкстра — это оптимизация расстояний.
Поиск мостов строится на алгоритмах типа DFS, Тарьяна, а не на Дейкстре.
---
Почему Дейкстра не подходит для мостов?
- Дейкстра работает только с взвешенными графами (где есть стоимости рёбер).
- Он ищет самые дешёвые пути от одной вершины до всех остальных.
- Мосты связаны с тем, разрывается ли граф, а не с тем, какой путь короче.
- Иногда даже рёбра с большим весом могут быть важнее для связности, чем с минимальным.
Напрямую Дейкстра не даёт информацию о мостах.
---
Есть интересный хак:
> Можно искать критические рёбра в графе так:
> - Удалить ребро
> - Перезапустить Дейкстру
> - Проверить: если какой-то путь сильно увеличился или вообще стал недостижим, значит это ребро было критическим.

Это будет очень медленно (O(m·(n + m) log n)), но логика интересная.
---
Постановка задачи:
Найти все критические рёбра в графе через перезапуск Дейкстры.
Решение на JavaScript
```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const node = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx][0] <= node[0]) break;
      this.heap[idx] = this.heap[parentIdx];
      idx = parentIdx;
    }
    this.heap[idx] = node;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const node = this.heap[0];
    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = null;

      if (leftIdx < length && this.heap[leftIdx][0] < node[0]) {
        swapIdx = leftIdx;
      }
      if (
        rightIdx < length &&
        this.heap[rightIdx][0] < (swapIdx === null ? node[0] : this.heap[leftIdx][0])
      ) {
        swapIdx = rightIdx;
      }
      if (swapIdx === null) break;
      this.heap[idx] = this.heap[swapIdx];
      idx = swapIdx;
    }
    this.heap[idx] = node;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function dijkstra(n, graph, removedEdge) {
  const dist = Array(n).fill(Infinity);
  dist[0] = 0;
  const heap = new MinHeap();
  heap.push([0, 0]); // [distance, vertex]

  while (!heap.isEmpty()) {
    const [d, v] = heap.pop();
    if (d > dist[v]) continue;

    for (const [to, weight] of graph[v]) {
      if (removedEdge && ((v === removedEdge[0] && to === removedEdge[1]) || (v === removedEdge[1] && to === removedEdge[0]))) {
        continue; // "удаляем" ребро
      }
      if (dist[to] > dist[v] + weight) {
        dist[to] = dist[v] + weight;
        heap.push([dist[to], to]);
      }
    }
  }
  return dist;
}

function findCriticalEdges(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const originalDistances = dijkstra(n, graph, null);
  const criticalEdges = [];

  for (const [u, v, w] of edges) {
    const newDistances = dijkstra(n, graph, [u, v]);
    for (let i = 0; i < n; i++) {
      if (originalDistances[i] < Infinity && newDistances[i] === Infinity) {
        // Путь разорван
        criticalEdges.push([u, v]);
        break;
      }
    }
  }

  return criticalEdges;
}

// Пример:
const n = 5;
const edges = [
  [0, 1, 1],
  [1, 2, 1],
  [2, 0, 1],
  [1, 3, 1],
  [3, 4, 1]
];

console.log(findCriticalEdges(n, edges));
// Вывод: [ [ 1, 3 ], [ 3, 4 ] ]
```
---
 Пояснение:
- Сначала находим расстояния во всём графе без удаления.
- Потом для каждого ребра:
  - Удаляем его временно.
  - Перезапускаем Дейкстру.
  - Если какое-то расстояние стало недостижимым (`Infinity`), значит ребро критическое.
- Добавляем его в ответ.
---
- Поиск мостов классически → через DFS (Тарьяна).
- Через Дейкстру*можно сделать более тяжёлый, но универсальный способ поиска критических рёбер.
- Он работает не только для безвесовых графов, но и для взвешенных.
---------------------------------------------------------------------------------------------
