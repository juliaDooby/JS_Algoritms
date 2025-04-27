---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
9. Обход графа с вычислением пути до каждой вершины (BFS)
⌛ Задача: Напишите функцию для обхода графа в ширину, которая будет отслеживать путь до каждой вершины.
🎯 Решение:
```javascript
function bfsWithPath(graph, start) {
    let visited = new Set();
    let queue = [start];
    let parent = { [start]: null };
    let result = [];

    while (queue.length) {
        let node = queue.shift();

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                parent[neighbor] = node;
            }
        }
    }

    for (let node in parent) {
        let path = [];
        let current = node;
        while (current !== null) {
            path.unshift(current);
            current = parent[current];
        }
        result.push(path);
    }

    return result;
}

console.log(bfsWithPath(graph3, "A")); // [["A", "B", "D"], ["A", "C"]]
```
Объяснение:
- Мы отслеживаем путь до каждой вершины, используя объект `parent`, который сохраняет предка для каждой вершины.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
