---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
7. Обход всех компонент связности в графе (DFS)
⌛ Задача: Напишите функцию для обхода всех компонент связности в графе.
🎯 Решение:
```javascript
function findConnectedComponents(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const graph4 = {
    A: ["B", "C"],
    B: ["A", "C"],
    C: ["A", "B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findConnectedComponents(graph4)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Мы проходим по всем вершинам и для каждой не посещенной вершины начинаем новый обход DFS, создавая компоненты связности.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
