---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
8. Обход графа с отслеживанием времени (DFS)
⌛ Задача: Напишите функцию для обхода графа в глубину, которая отслеживает время входа и выхода из каждой вершины.
🎯 Решение:
```javascript
function dfsWithTime(graph, start) {
    let visited = new Set();
    let result = [];
    let time = 0;

    function visit(node) {
        visited.add(node);
        time++;
        result.push(`Node ${node} entered at time ${time}`);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visit(neighbor);
            }
        }

        time++;
        result.push(`Node ${node} exited at time ${time}`);
    }

    visit(start);
    return result;
}

const graph5 = {
    A: ["B", "C"],
    B: ["A"],
    C: ["A"]
};

console.log(dfsWithTime(graph5, "A"));
```
Объяснение:
- Мы отслеживаем время входа и выхода из каждой вершины, что полезно для алгоритмов, требующих временных меток (например, для поиска мостов и арок).
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
