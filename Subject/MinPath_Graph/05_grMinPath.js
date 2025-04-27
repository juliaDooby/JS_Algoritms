---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
5. Поиск в глубину (DFS) с запоминанием кратчайшего пути
Подходит для поиска пути, но не всегда оптимален для кратчайшего пути.
```javascript
function dfsShortestPath(graph, start, end) {
    let shortestPath = null;

    function dfs(node, path, visited) {
        if (visited.has(node)) return;
        path.push(node);
        visited.add(node);

        if (node === end) {
            if (!shortestPath || path.length < shortestPath.length) {
                shortestPath = [...path];
            }
        } else {
            for (let neighbor of graph[node] || []) {
                dfs(neighbor, path, visited);
            }
        }

        path.pop();
        visited.delete(node);
    }

    dfs(start, [], new Set());
    return shortestPath;
}

const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

console.log(dfsShortestPath(graph, "A", "F")); // ["A", "C", "F"]
```
Объяснение:
1. Используем глубину поиска (DFS).
2. Запоминаем кратчайший найденный путь.
3. Работает плохо для взвешенных графов, но может быть полезен.
4. Сложность: O(V!) в худшем случае.
---------------------------------------------------------------------------------------------
