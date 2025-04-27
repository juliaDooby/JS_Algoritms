---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
6. Алгоритм Йена (поиск K кратчайших путей)
Позволяет найти несколько кратчайших путей.
```javascript
function yenKShortestPaths(graph, start, end, K) {
    let paths = [[start]];
    let shortestPaths = [];

    while (shortestPaths.length < K && paths.length) {
        let path = paths.shift();
        let lastNode = path[path.length - 1];

        if (lastNode === end) {
            shortestPaths.push(path);
        } else {
            for (let neighbor of graph[lastNode] || []) {
                paths.push([...path, neighbor]);
            }
        }

        paths.sort((a, b) => a.length - b.length);
    }

    return shortestPaths;
}

console.log(yenKShortestPaths(graph, "A", "F", 2)); // [["A", "C", "F"], ["A", "B", "E", "F"]]
```
Объяснение:
1. Поддерживаем очередь путей.
2. Перебираем K кратчайших путей.
3. Полезно в транспортных системах и сетях.
4 Сложность: O(K * (V + E)).
---------------------------------------------------------------------------------------------
