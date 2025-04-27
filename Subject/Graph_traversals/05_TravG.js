---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
5. Обход графа с пометкой рёбер (DFS)
⌛ Задача: Напишите функцию для обхода графа в глубину, помечая рёбра как «обрабатываемые» или «обратные».
🎯 Решение:
```javascript
function dfsEdgeTypes(graph, start) {
    let visited = new Set();
    let result = [];

    function dfs(node, parent) {
        visited.add(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                result.push(`${node} -> ${neighbor} (Tree Edge)`);
                dfs(neighbor, node);
            } else if (parent !== neighbor) {
                result.push(`${node} -> ${neighbor} (Back Edge)`);
            }
        }
    }

    dfs(start);
    return result;
}

const graph2 = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: [],
    E: []
};

console.log(dfsEdgeTypes(graph2, "A"));
```
Объяснение:
- Мы отмечаем рёбра как деревянные или обратные в зависимости от того, были ли вершины уже посещены.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
