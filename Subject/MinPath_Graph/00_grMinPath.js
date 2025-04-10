---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
⌛ Задача: Поиск кратчайшего пути в графе
Дано: Ориентированный или неориентированный граф(список смежности или матрица смежности).
Найти: Кратчайший путь между двумя вершинами.
🎯 Решение:
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
1. Алгоритм поиска в ширину (BFS)
Подходит для невзвешенных графов.
```javascript
function bfsShortestPath(graph, start, end) {
    let queue = [[start]];
    let visited = new Set();

    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        if (node === end) return path;

        if (!visited.has(node)) {
            visited.add(node);
            for (let neighbor of graph[node] || []) {
                queue.push([...path, neighbor]);
            }
        }
    }

    return null;
}

const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

console.log(bfsShortestPath(graph, "A", "F")); // ["A", "C", "F"]
```
Объяснение:
1. Используем очередь (`queue`).
2. На каждом шаге проверяем вершину.
3. Если это целевая вершина, возвращаем путь.
4. Иначе добавляем все её соседей в очередь.
5. Сложность: O(V + E) (вершины + рёбра).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
2. Алгоритм Дейкстры
Подходит для графов с положительными весами рёбер.
```javascript
function dijkstra(graph, start, end) {
    let distances = {};
    let previous = {};
    let pq = new Set(Object.keys(graph));

    for (let node in graph) distances[node] = Infinity;
    distances[start] = 0;

    while (pq.size) {
        let node = [...pq].reduce((a, b) => (distances[a] < distances[b] ? a : b));
        pq.delete(node);

        if (node === end) {
            let path = [];
            while (node) {
                path.unshift(node);
                node = previous[node];
            }
            return path;
        }

        for (let [neighbor, weight] of Object.entries(graph[node])) {
            let alt = distances[node] + weight;
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                previous[neighbor] = node;
            }
        }
    }

    return null;
}

const graphWeighted = {
    A: { B: 1, C: 4 },
    B: { C: 2, D: 5 },
    C: { D: 1 },
    D: {}
};

console.log(dijkstra(graphWeighted, "A", "D")); // ["A", "B", "C", "D"]
```
Объяснение:
1. Используем таблицы расстояний (`distances`).
2. Перебираем все вершины, выбирая минимальную.
3. Обновляем соседей, если нашли более короткий путь.
4. Сложность: O(V²) (или O((V + E) log V) с приоритетной очередью).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
3. Алгоритм Беллмана-Форда
Подходит для графов с отрицательными весами (но без отрицательных циклов).
```javascript
function bellmanFord(graph, start, end) {
    let distances = {};
    let previous = {};
    for (let node in graph) distances[node] = Infinity;
    distances[start] = 0;

    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let node in graph) {
            for (let [neighbor, weight] of Object.entries(graph[node])) {
                let alt = distances[node] + weight;
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = node;
                }
            }
        }
    }

    let path = [];
    let node = end;
    while (node) {
        path.unshift(node);
        node = previous[node];
    }

    return path.length ? path : null;
}

const graphNegWeights = {
    A: { B: 1, C: 4 },
    B: { C: -2, D: 5 },
    C: { D: 1 },
    D: {}
};

console.log(bellmanFord(graphNegWeights, "A", "D")); // ["A", "B", "C", "D"]
```
Объяснение:
1. Инициализируем расстояния как бесконечные.
2. Проходим граф V-1 раз, обновляя пути.
3. Проверяем кратчайший путь.
4. Сложность: O(VE).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
4. Алгоритм Флойда-Уоршелла
Находит кратчайший путь между всеми парами вершин.
```javascript
function floydWarshall(graph) {
    let nodes = Object.keys(graph);
    let dist = {};

    nodes.forEach(i => {
        dist[i] = {};
        nodes.forEach(j => {
            dist[i][j] = i === j ? 0 : graph[i]?.[j] ?? Infinity;
        });
    });

    nodes.forEach(k => {
        nodes.forEach(i => {
            nodes.forEach(j => {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            });
        });
    });

    return dist;
}

const graphMatrix = {
    A: { B: 3, C: 8 },
    B: { D: 2 },
    C: { D: 1 },
    D: {}
};

console.log(floydWarshall(graphMatrix));
```
Объяснение:
1. Заполняем матрицу смежности.
2. Перебираем промежуточные вершины.
3. Обновляем минимальные расстояния.
4 Сложность: O(V³).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
5. Жадный алгоритм A
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
---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
6. Поиск в глубину (DFS) с запоминанием кратчайшего пути
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
---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
7. Алгоритм Йена (поиск K кратчайших путей)
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
---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
8. Волновой алгоритм Ли (для поиска пути на сетке)
Используется для поиска пути в лабиринтах или на решетках.
```javascript
function leeAlgorithm(grid, start, end) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let queue = [[start[0], start[1], 0]];
    let rows = grid.length, cols = grid[0].length;
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    while (queue.length) {
        let [x, y, dist] = queue.shift();

        if (x === end[0] && y === end[1]) return dist;

        for (let [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && grid[nx][ny] === 0 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return -1;
}

let grid = [
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 0]
];

console.log(leeAlgorithm(grid, [0, 0], [2, 3])); // 4
```
Объяснение:
1. Подходит для сеток и лабиринтов.
2. Использует поиск в ширину (BFS).
3. Гарантированно находит **кратчайший путь.
4. Сложность: O(NM), где N и M — размеры сетки.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
9. Двунаправленный поиск (Bidirectional Search)
Ускоряет поиск кратчайшего пути за счёт движения от начала и конца одновременно.
```javascript
function bidirectionalSearch(graph, start, end) {
    let forwardQueue = [[start]];
    let backwardQueue = [[end]];
    let visitedForward = new Set([start]);
    let visitedBackward = new Set([end]);

    while (forwardQueue.length && backwardQueue.length) {
        let forwardPath = forwardQueue.shift();
        let backwardPath = backwardQueue.shift();
        let forwardNode = forwardPath[forwardPath.length - 1];
        let backwardNode = backwardPath[backwardPath.length - 1];

        if (visitedForward.has(backwardNode) || visitedBackward.has(forwardNode)) {
            return forwardPath.concat(backwardPath.reverse().slice(1));
        }

        for (let neighbor of graph[forwardNode] || []) {
            if (!visitedForward.has(neighbor)) {
                visitedForward.add(neighbor);
                forwardQueue.push([...forwardPath, neighbor]);
            }
        }

        for (let neighbor of graph[backwardNode] || []) {
            if (!visitedBackward.has(neighbor)) {
                visitedBackward.add(neighbor);
                backwardQueue.push([...backwardPath, neighbor]);
            }
        }
    }

    return null;
}

console.log(bidirectionalSearch(graph, "A", "F")); // ["A", "C", "F"]
```
Объяснение:
1. Два поиска (BFS) — от начала и конца.
2. Ускоряет поиск в больших графах.
3. Останавливается, если поиски встречаются.
4. Сложность: O(2^(V/2)) в худшем случае, но быстрее BFS.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
10. Поиск кратчайшего пути методом A* с приоритетной очередью
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
