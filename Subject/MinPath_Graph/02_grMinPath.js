---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
2. Алгоритм Беллмана-Форда
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
