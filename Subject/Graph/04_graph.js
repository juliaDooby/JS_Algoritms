---------------------------------------------------------------------------------------------
⋙ ❍ Графы:
---
4️⃣ Количество компонент связности
⌛ Задача: Подсчитать количество несвязанных частей графа.
🎯 Решение и объяснение:
Запускаем DFS для каждой новой компоненты.
```js
const countComponents = (graph) => {
  const visited = new Set();
  let count = 0;

  const dfs = (node) => {
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) dfs(neighbor);
    }
  };

  for (let node in graph) {
    if (!visited.has(Number(node))) {
      count++;
      dfs(Number(node));
    }
  }
  return count;
};

console.log(countComponents({ 0: [1], 1: [0], 2: [] })); // 2
```
---------------------------------------------------------------------------------------------
