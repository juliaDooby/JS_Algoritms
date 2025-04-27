---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
9. Поиск кратчайшего пути методом A* с приоритетной очередью
Ускоренный вариант алгоритма A* с приоритетной очередью.
```javascript
function aStarPriorityQueue(graph, start, end, heuristic) {
    let openSet = new Map();
    let cameFrom = {};
    let gScore = {}, fScore = {};

    for (let node in graph) {
        gScore[node] = Infinity;
        fScore[node] = Infinity;
    }

    gScore[start] = 0;
    fScore[start] = heuristic(start, end);
    openSet.set(start, fScore[start]);

    while (openSet.size) {
        let current = [...openSet.entries()].reduce((a, b) => (a[1] < b[1] ? a : b))[0];

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
            let tempGScore = gScore[current] + cost;
            if (tempGScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tempGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, end);
                openSet.set(neighbor, fScore[neighbor]);
            }
        }
    }

    return null;
}

console.log(aStarPriorityQueue(graphWeighted, "A", "D", heuristic));
```
Объяснение:
1. Использует приоритетную очередь для оптимизации.
2. Оценивает стоимость пути с эвристикой.
3. Сложность: O((V + E) log V) с приоритетной очередью.
---------------------------------------------------------------------------------------------
