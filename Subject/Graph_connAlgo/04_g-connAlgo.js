---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
4. Поиск компонент на ориентированном графе (SCC) с алгоритмом Косараю
```javascript
function kosarajuSCC(graph) {
    let visited = new Set();
    let stack = [];

    function dfs1(node) {
        if (visited.has(node)) return;
        visited.add(node);
        for (let neighbor of graph[node] || []) dfs1(neighbor);
        stack.push(node);
    }

    function dfs2(node, component) {
        if (visited.has(node)) return;
        visited.add(node);
        component.push(node);
        for (let neighbor of reversedGraph[node] || []) dfs2(neighbor, component);
    }

    for (let node in graph) dfs1(node);

    let reversedGraph = {};
    for (let node in graph) {
        for (let neighbor of graph[node]) {
            if (!reversedGraph[neighbor]) reversedGraph[neighbor] = [];
            reversedGraph[neighbor].push(node);
        }
    }

    visited.clear();
    let components = [];
    while (stack.length) {
        let node = stack.pop();
        if (!visited.has(node)) {
            let component = [];
            dfs2(node, component);
            components.push(component);
        }
    }

    return components;
}

const directedGraph = {
    A: ["B"],
    B: ["C"],
    C: ["A", "D"],
    D: ["E"],
    E: ["F"],
    F: ["D"]
};

console.log(kosarajuSCC(directedGraph)); // [["A", "B", "C"], ["D", "E", "F"]]
```
Объяснение:
1. Использует двойной DFS и топологическую сортировку.
2. Работает для ориентированных графов.
3. Сложность: O(V + E).
---------------------------------------------------------------------------------------------
