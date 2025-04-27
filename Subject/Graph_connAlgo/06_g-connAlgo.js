---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
6. Поиск компонент связности с использованием Итеративного DFS
```javascript
function findComponentsIterativeDFS(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node) {
        let stack = [node];
        let component = [];

        while (stack.length > 0) {
            let currentNode = stack.pop();
            if (!visited.has(currentNode)) {
                visited.add(currentNode);
                component.push(currentNode);

                for (let neighbor of graph[currentNode] || []) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        return component;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            components.push(dfs(node));
        }
    }

    return components;
}

const graph2 = {
    A: ["B"],
    B: ["A", "C"],
    C: ["B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findComponentsIterativeDFS(graph2)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Вместо рекурсии используем стек для реализации итеративного DFS.
- Этот подход помогает избежать ограничений стека рекурсии и полезен для очень больших графов.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
