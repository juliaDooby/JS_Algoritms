---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Напишите бинарный поиск по памяти или канстомный линкед лист, обход графа за N сложность:
---
2. Обход графа за линейное время O(N)
Обход графа может быть выполнен с использованием DFS (глубина) или BFS (ширина). Оба алгоритма имеют сложность O(V + E), где:
- V — количество вершин.
- E — количество рёбер.
Реализация обхода в ширину (BFS)
```javascript
function bfs(graph, start) {
  const visited = new Set(); // Чтобы не заходить в одну вершину дважды
  const queue = [start]; // Очередь для BFS
  const result = [];

  while (queue.length > 0) {
    const current = queue.shift();

    if (!visited.has(current)) {
      visited.add(current);
      result.push(current);

      // Добавляем всех соседей в очередь
      for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Пример графа
const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [6],
  6: [],
};

// Пример использования
const startNode = 1;
console.log(bfs(graph, startNode)); // [1, 2, 3, 4, 5, 6]
```
---------------------------------------------------------------------------------------------  
