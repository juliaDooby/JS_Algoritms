---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
5. Нахождение компонент связности в неориентированном графе с использованием DFS на многосвязном графе
```javascript
function findComponentsMultiGraph(graph) {
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

const multiGraph = {
    A: ["B", "C"],
    B: ["A", "C"],
    C: ["A", "B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findComponentsMultiGraph(multiGraph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Мы создаем компоненту для каждого нового узла, и при этом учитываем граф, в котором могут быть многократные связи.
- Используем DFS для поиска всех достижимых вершин и их объединения в компоненту.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
