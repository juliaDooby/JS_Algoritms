---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
Граф — это структура данных, состоящая из множества вершин (узлов) и рёбер (связей между узлами). Графы бывают ориентированные и неориентированные, взвешенные и невзвешенные, связные и несвязные.
1. ⌛ Задача: Определение, является ли граф связным
Граф считается связным, если между любой парой вершин существует путь. Проверим, является ли граф, представленный в виде списка смежности, связным.
🎯 Решение:
Используем обход в глубину (DFS) для проверки, можно ли достичь все вершины из стартовой.
```javascript
const graph = {
  0: [1, 2],
  1: [0, 3],
  2: [0, 3],
  3: [1, 2]
};

const isConnected = (graph) => {
  const visited = new Set();
  const startNode = Object.keys(graph)[0];

  const dfs = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        dfs(neighbor);
      }
    }
  };

  dfs(startNode);
  return visited.size === Object.keys(graph).length;
};

console.log(isConnected(graph)); // true
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
2. ⌛ Задача: Проверка, является ли граф деревом
Граф является деревом, если он связен и не содержит циклов.
🎯 Решение:
- Граф является деревом, если количество рёбер = количеству вершин - 1.
- Граф не содержит циклов (используем DFS для проверки).
```javascript
const isTree = (graph) => {
  const visited = new Set();
  let edgeCount = 0;

  const dfs = (node, parent) => {
    if (visited.has(node)) return false;
    visited.add(node);

    for (let neighbor of graph[node]) {
      if (neighbor !== parent) {
        if (!dfs(neighbor, node)) return false;
        edgeCount++;
      }
    }
    return true;
  };

  const startNode = Object.keys(graph)[0];
  if (!dfs(startNode, null)) return false;

  return visited.size === Object.keys(graph).length && edgeCount === visited.size - 1;
};

const graph1 = { 0: [1, 2], 1: [0], 2: [0] }; // Дерево
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // С циклом, не дерево

console.log(isTree(graph1)); // true
console.log(isTree(graph2)); // false
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
3. ⌛ Задача: Проверка, является ли граф двудольным
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
---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
4. ⌛ Задача: Определение количества компонентов связности
Если граф несвязный, его можно разбить на несколько компонент связности.
🎯 Решение:
Запускаем *DFS из каждой непосещённой вершины и считаем компоненты.
```javascript
const countComponents = (graph) => {
  const visited = new Set();
  let count = 0;

  const dfs = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        dfs(neighbor);
      }
    }
  };

  for (let node in graph) {
    if (!visited.has(node)) {
      count++;
      dfs(node);
    }
  }

  return count;
};

const graph1 = { 0: [1], 1: [0], 2: [3], 3: [2] }; // Две компоненты
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // Одна компонента

console.log(countComponents(graph1)); // 2
console.log(countComponents(graph2)); // 1
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
5. ⌛ Задача: Поиск цикла в неориентированном графе
Определим, есть ли в графе цикл.
🎯 Решение:
Используем DFS с отслеживанием родителя.
```javascript
const hasCycle = (graph) => {
  const visited = new Set();

  const dfs = (node, parent) => {
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true;
      }
    }
    return false;
  };

  for (let node in graph) {
    if (!visited.has(node)) {
      if (dfs(node, null)) return true;
    }
  }
  return false;
};

const graph1 = { 0: [1], 1: [0, 2], 2: [1] }; // Без цикла
const graph2 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // С циклом

console.log(hasCycle(graph1)); // false
console.log(hasCycle(graph2)); // true
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
6. ⌛ Задача: Проверка, является ли граф полным
Граф называется полным, если каждая вершина соединена со всеми другими вершинами.
🎯 Решение:
В полном графе с `n` вершинами у каждой вершины должно быть `n-1` соседей.
```javascript
const isCompleteGraph = (graph) => {
  const nodes = Object.keys(graph);
  const n = nodes.length;

  for (let node of nodes) {
    if (graph[node].length !== n - 1) {
      return false;
    }
  }
  return true;
};

const graph1 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // Полный
const graph2 = { 0: [1], 1: [0, 2], 2: [1] }; // Не полный

console.log(isCompleteGraph(graph1)); // true
console.log(isCompleteGraph(graph2)); // false
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
7. ⌛ Задача: Поиск кратчайшего пути в невзвешенном графе (BFS)
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
---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
8. ⌛ Задача: Поиск кратчайшего пути в взвешенном графе (алгоритм Дейкстры)
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
---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
9. ⌛ Задача: Проверка, является ли граф планарным
Граф планарный, если его можно нарисовать на плоскости без пересечения рёбер.
🎯 Решение:
Используем формулу Эйлера для простого графа:
\[
V - E + F = 2
\]
где `V` — вершины, `E` — рёбра, `F` — грани. Для графов без граней используем критическое неравенство.
- В неориентированном графе без циклов должно быть `E ≤ 3V - 6`.
- В ориентированном графе `E ≤ 2V - 4`.
```javascript
const isPlanarGraph = (graph) => {
  const V = Object.keys(graph).length;
  let E = 0;

  for (let node in graph) {
    E += graph[node].length;
  }
  E /= 2; // Каждое ребро посчитано дважды

  return E <= 3 * V - 6;
};

const graph1 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] }; // Полный граф K3 (планарный)
const graph2 = { 0: [1, 2, 3], 1: [0, 2, 3], 2: [0, 1, 3], 3: [0, 1, 2] }; // Полный граф K4 (планарный)
const graph3 = { 0: [1, 2, 3, 4], 1: [0, 2, 3, 4], 2: [0, 1, 3, 4], 3: [0, 1, 2, 4], 4: [0, 1, 2, 3] }; // Полный граф K5 (не планарный)

console.log(isPlanarGraph(graph1)); // true
console.log(isPlanarGraph(graph2)); // true
console.log(isPlanarGraph(graph3)); // false
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Природа графа:
---
10. ⌛ Задача: Нахождение мостов в графе
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
