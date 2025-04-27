---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
1. Алгоритм Дейкстры
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
