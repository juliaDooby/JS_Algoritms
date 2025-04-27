---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
Алгоритм нахождения компонент связности в графе
Компонента связности — это подграф, в котором любая вершина достижима из любой другой вершины.
0. Поиск компонент связности с помощью DFS (глубина-ширина)
Подходит для представления графа через список смежности.
```javascript
function findConnectedComponentsDFS(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        if (visited.has(node)) return;
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            dfs(neighbor, component);
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

const graph = {
    A: ["B"],
    B: ["A", "C"],
    C: ["B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findConnectedComponentsDFS(graph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
1. Используем DFS для обхода графа.
2. Каждый раз, когда находим новую вершину, создаем новую компоненту.
3. Рекурсивно добавляем всех соседей.
4. Сложность: O(V + E).
---------------------------------------------------------------------------------------------
