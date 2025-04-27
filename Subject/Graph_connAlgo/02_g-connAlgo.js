---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
2. Поиск компонент в графе, представленном матрицей смежности
```javascript
function findComponentsMatrix(graphMatrix) {
    let n = graphMatrix.length;
    let visited = new Array(n).fill(false);
    let components = [];

    function dfs(node, component) {
        visited[node] = true;
        component.push(node);
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (graphMatrix[node][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node = 0; node < n; node++) {
        if (!visited[node]) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const matrixGraph = [
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0]
];

console.log(findComponentsMatrix(matrixGraph)); // [[0, 1, 2], [3, 4]]
```
Объяснение:
1. Используем матрицу смежности вместо списка.
2. Применяем DFS для обхода.
3. Сложность: O(V²) из-за матрицы.
---------------------------------------------------------------------------------------------
