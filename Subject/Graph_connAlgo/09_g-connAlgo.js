---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
9. Поиск компонент связности для графа с весами с использованием DFS с модификацией
```javascript
function findWeightedComponents(graph) {
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

const weightedGraph = {
    A: [{ node: "B", weight: 5 }, { node: "C", weight: 10 }],
    B: [{ node: "A", weight: 5 }, { node: "C", weight: 3 }],
    C: [{ node: "A", weight: 10 }, { node: "B", weight: 3 }],
    D: [{ node: "E", weight: 1 }],
    E: [{ node: "D", weight: 1 }],
    F: []
};

console.log(findWeightedComponents(weightedGraph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Для графов с весами мы все равно можем использовать стандартный DFS, поскольку веса не изменяют процесс поиска компонент связности, но могут влиять на другие алгоритмы, такие как нахождение кратчайшего пути.
- Мы определяем компоненты с помощью поиска в глубину (DFS), независимо от веса.
Сложность: O(V + E).
---------------------------------------------------------------------------------------------
