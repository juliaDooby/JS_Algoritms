---------------------------------------------------------------------------------------------
⋙ ❍ Графы:
---
8️⃣ Проверка, является ли граф деревом
```js
const isTree = (graph) => {
  let edges = 0;
  for (let key in graph) edges += graph[key].length;
  edges /= 2;
  return countComponents(graph) === 1 && edges === Object.keys(graph).length - 1;
};
```
---------------------------------------------------------------------------------------------
