---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
8. Поиск компонент связности для ориентированного графа с использованием DFS (перемещение по вершинам)
```javascript
function findSCC(graph) {
    let visited = new Set();
    let stack = [];
    let components = [];

    function dfs(node) {
        visited.add(node);
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
        stack.push(node);
    }

    function reverseGraph(graph) {
        let reversed = {};
        for (let node in graph) {
            for (let neighbor of graph[node]) {
                if (!reversed[neighbor]) reversed[neighbor] = [];
                reversed[neighbor].push(node);
            }
        }
        return reversed;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    let reversedGraph = reverseGraph(graph);
    visited.clear();

    function dfsReverse(node, component) {
        visited.add(node);
        component.push(node);
        for (let neighbor of reversedGraph[node] || []) {
            if (!visited.has(neighbor)) {
                dfsReverse(neighbor, component);
            }
        }
    }

    while (stack.length) {
        let node = stack.pop();
        if (!visited.has(node)) {
            let component = [];
            dfsReverse(node, component);
            components.push(component);
        }
    }

    return components;
}

const directedGraph2 = {
    A: ["B"],
    B: ["C"],
    C: ["A"],
    D: ["E"],
    E: ["F"],
    F: ["D"]
};

console.log(findSCC(directedGraph2)); // [["A", "B", "C"], ["D", "E", "F"]]
```
Объяснение:
- Мы находим сильные компоненты связности (SCC) в ориентированном графе, используя двойной DFS.
- Применяем топологическую сортировку и ищем компоненты в обратном графе.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
