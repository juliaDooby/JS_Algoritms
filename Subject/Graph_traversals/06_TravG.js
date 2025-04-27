---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
6. Обход графа с вычислением расстояний от начальной вершины (BFS)
⌛ Задача: Напишите функцию для обхода графа в ширину с вычислением расстояний от начальной вершины.
🎯 Решение:
```javascript
function bfsWithDistances(graph, start) {
    let visited = new Set();
    let queue = [start];
    let distances = { [start]: 0 };

    while (queue.length) {
        let node = queue.shift();

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                distances[neighbor] = distances[node] + 1;
            }
        }
    }

    return distances;
}

const graph3 = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"]
};

console.log(bfsWithDistances(graph3, "A")); // { A: 0, B: 1, C: 1, D: 2 }
```
Объяснение:
- Мы сохраняем расстояния для каждой вершины в объекте `distances` и обновляем их по мере обхода.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
