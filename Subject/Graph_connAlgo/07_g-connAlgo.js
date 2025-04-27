---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
7. Поиск компонент связности в неориентированном графе с использованием BFS
```javascript
function findComponentsBFS(graph) {
    let visited = new Set();
    let components = [];

    function bfs(start) {
        let queue = [start];
        let component = [];

        while (queue.length > 0) {
            let node = queue.shift();
            if (!visited.has(node)) {
                visited.add(node);
                component.push(node);

                for (let neighbor of graph[node] || []) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
        return component;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            components.push(bfs(node));
        }
    }

    return components;
}

const graph3 = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"],
    E: ["F"],
    F: ["E"]
};

console.log(findComponentsBFS(graph3)); // [["A", "B", "C", "D"], ["E", "F"]]
```
Объяснение:
- Используем поиск в ширину (BFS) для обхода всех соседей в графе.
- На каждом шаге мы находим новый компонент, начиная с не посещенной вершины.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
