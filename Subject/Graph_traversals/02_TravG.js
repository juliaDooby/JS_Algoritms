---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
2. Обход ориентированного графа в глубину (DFS)
⌛ Задача: Напишите функцию для обхода ориентированного графа в глубину, используя рекурсию.
🎯 Решение:
```javascript
function dfsDirected(graph, start) {
    let visited = new Set();
    let result = [];

    function visit(node) {
        if (visited.has(node)) return;
        visited.add(node);
        result.push(node);

        for (let neighbor of graph[node] || []) {
            visit(neighbor);
        }
    }

    visit(start);
    return result;
}

const directedGraph = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: [],
    E: []
};

console.log(dfsDirected(directedGraph, "A")); // ["A", "B", "D", "C", "E"]
```
Объяснение:
- Осуществляем обход с помощью рекурсии, но только по рёбрам ориентированного графа.
- Каждую вершину посещаем только один раз.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
