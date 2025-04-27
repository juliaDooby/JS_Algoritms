---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
3. Алгоритм Флойда-Уоршелла
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
