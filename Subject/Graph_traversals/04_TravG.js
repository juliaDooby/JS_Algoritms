---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
4. Обход графа с проверкой на цикл (DFS)
⌛ Задача: Напишите функцию, которая выполняет обход графа в глубину и проверяет, содержит ли граф цикл.
🎯 Решение:
```javascript
function hasCycle(graph) {
    let visited = new Set();
    let recStack = new Set();

    function dfs(node) {
        if (recStack.has(node)) return true; // обнаружен цикл
        if (visited.has(node)) return false;

        visited.add(node);
        recStack.add(node);

        for (let neighbor of graph[node] || []) {
            if (dfs(neighbor)) {
                return true;
            }
        }

        recStack.delete(node);
        return false;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            if (dfs(node)) {
                return true;
            }
        }
    }

    return false;
}

const cyclicGraph = {
    A: ["B"],
    B: ["C"],
    C: ["A"]
};

const acyclicGraph = {
    A: ["B"],
    B: ["C"],
    C: []
};

console.log(hasCycle(cyclicGraph)); // true
console.log(hasCycle(acyclicGraph)); // false
```
Объяснение:
- Для обнаружения цикла используем рекурсивный стек. Если вершина уже находится в стеке рекурсии, значит, цикл обнаружен.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
