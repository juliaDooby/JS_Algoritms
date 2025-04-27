---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
1. Поиск компонент связности через BFS (поиск в ширину)
Аналогично DFS, но используем очередь.
```javascript
function findConnectedComponentsBFS(graph) {
    let visited = new Set();
    let components = [];

    function bfs(start) {
        let queue = [start];
        let component = [];

        while (queue.length) {
            let node = queue.shift();
            if (visited.has(node)) continue;

            visited.add(node);
            component.push(node);
            for (let neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
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

console.log(findConnectedComponentsBFS(graph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
1. Используем очередь вместо рекурсии.
2. Обходим все связанные вершины перед переходом к следующей компоненте.
3. Сложность: O(V + E).
---------------------------------------------------------------------------------------------
