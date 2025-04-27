---------------------------------------------------------------------------------------------
⋙ ❍ Графы:
---
3️⃣ Проверка пути между двумя вершинами
⌛ Задача: Проверить, есть ли путь между вершинами.
🎯 Решение и объяснение:
Используем DFS.
```js
const hasPath = (graph, start, end, visited = new Set()) => {
  if (start === end) return true;
  if (visited.has(start)) return false;

  visited.add(start);
  for (let neighbor of graph[start]) {
    if (hasPath(graph, neighbor, end, visited)) return true;
  }
  return false;
};

console.log(hasPath(graph2, 0, 3)); // true
console.log(hasPath(graph2, 2, 3)); // false
```
---------------------------------------------------------------------------------------------
