---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
1. Обход графа в ширину (BFS)
⌛ Задача: Напишите функцию, которая будет обходить граф в ширину, начиная с указанной вершины.
🎯 Решение:
```javascript
function bfs(graph, start) {
    let visited = new Set();
    let queue = [start];
    let result = [];

    while (queue.length) {
        let node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return result;
}

console.log(bfs(graph, "A")); // ["A", "B", "C", "D", "E", "F"]
```
Объяснение:
- Используем очередь для обхода всех уровней графа.
- Добавляем вершины в очередь, если они еще не посещены.
- Сложность: O(V + E), где V — количество вершин, а E — количество рёбер.
---------------------------------------------------------------------------------------------
