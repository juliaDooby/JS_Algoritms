---------------------------------------------------------------------------------------------
📌 [Жадные алгоритмы]:
---
4. Задача: Жадный алгоритм для нахождения минимального пути в графе (Алгоритм Дейкстры)
⌛ Задача: Найти кратчайший путь от исходной вершины до всех остальных вершин в графе с положительными весами.
🎯 Решение:
```javascript
function dijkstra(graph, start) {
    const dist = {};
    const visited = new Set();
    const queue = [[start, 0]];

    graph.forEach((_, vertex) => {
        dist[vertex] = Infinity;
    });
    dist[start] = 0;

    while (queue.length > 0) {
        const [vertex, distance] = queue.pop();
        if (visited.has(vertex)) continue;
        visited.add(vertex);

        for (let [neighbor, weight] of graph[vertex]) {
            const newDist = distance + weight;
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                queue.push([neighbor, newDist]);
            }
        }
    }

    return dist;
}

const graph = {
    A: [['B', 1], ['C', 4]],
    B: [['A', 1], ['C', 2], ['D', 5]],
    C: [['A', 4], ['B', 2], ['D', 1]],
    D: [['B', 5], ['C', 1]],
};
console.log(dijkstra(graph, 'A')); // Выводит минимальные расстояния от вершины A
```
Объяснение: Мы используем жадный алгоритм Дейкстры для нахождения кратчайших путей в графе с положительными весами.
--------------------------------------------------------------------------------------------- 
