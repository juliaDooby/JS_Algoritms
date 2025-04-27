---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
4. Жадный алгоритм A
Использует эвристику для ускорения поиска (например, Манхэттенское расстояние).
```javascript
function aStar(graph, start, end, heuristic) {
    let openSet = new Set([start]);
    let cameFrom = {};
    let gScore = {};
    let fScore = {};

    for (let node in graph) {
        gScore[node] = Infinity;
        fScore[node] = Infinity;
    }

    gScore[start] = 0;
    fScore[start] = heuristic(start, end);

    while (openSet.size > 0) {
        let current = [...openSet].reduce((a, b) => (fScore[a] < fScore[b] ? a : b));

        if (current === end) {
            let path = [];
            while (current) {
                path.unshift(current);
                current = cameFrom[current];
            }
            return path;
        }

        openSet.delete(current);
        for (let [neighbor, cost] of Object.entries(graph[current])) {
            let tentativeGScore = gScore[current] + cost;
            if (tentativeGScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentativeGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, end);
                openSet.add(neighbor);
            }
        }
    }

    return null;
}

const heuristic = (a, b) => Math.abs(a.charCodeAt(0) - b.charCodeAt(0));

console.log(aStar(graphWeighted, "A", "D", heuristic)); // ["A", "B", "C", "D"]
```
Объяснение:
1. Поддерживаем два массива (`gScore` и `fScore`).
2. Используем эвристику для поиска кратчайшего пути.
3. Сложность: O((V + E) log V) с приоритетной очередью.
---------------------------------------------------------------------------------------------
