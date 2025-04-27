---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
3. Обход ориентированного графа в ширину (BFS)
⌛ Задача: Реализуйте обход ориентированного графа в ширину.
🎯 Решение:
```javascript
function bfsDirected(graph, start) {
    let visited = new Set();
    let queue = [start];
    let result = [];

    while (queue.length) {
        let node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            for (let neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return result;
}

console.log(bfsDirected(directedGraph, "A")); // ["A", "B", "C", "D", "E"]
```
Объяснение:
- Аналогично обычному BFS, но с учётом направленности рёбер.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
