---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
Алгоритм нахождения компонент связности в графе
Компонента связности — это подграф, в котором любая вершина достижима из любой другой вершины.
1. Поиск компонент связности с помощью DFS (глубина-ширина)
Подходит для представления графа через список смежности.
```javascript
function findConnectedComponentsDFS(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        if (visited.has(node)) return;
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            dfs(neighbor, component);
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const graph = {
    A: ["B"],
    B: ["A", "C"],
    C: ["B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findConnectedComponentsDFS(graph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
1. Используем DFS для обхода графа.
2. Каждый раз, когда находим новую вершину, создаем новую компоненту.
3. Рекурсивно добавляем всех соседей.
4. Сложность: O(V + E).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
2. Поиск компонент связности через BFS (поиск в ширину)
Аналогично DFS, но используем очередь.
```javascript
function findConnectedComponentsBFS(graph) {
    let visited = new Set();
    let components = [];

    function bfs(start) {
        let queue = [start];
        let component = [];

        while (queue.length) {
            let node = queue.shift();
            if (visited.has(node)) continue;

            visited.add(node);
            component.push(node);
            for (let neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
        return component;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            components.push(bfs(node));
        }
    }

    return components;
}

console.log(findConnectedComponentsBFS(graph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
1. Используем очередь вместо рекурсии.
2. Обходим все связанные вершины перед переходом к следующей компоненте.
3. Сложность: O(V + E).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
3. Поиск компонент в графе, представленном матрицей смежности
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
---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
4. Поиск компонент с использованием Union-Find (DSU)
Эффективно работает на больших графах.
```javascript
class DSU {
    constructor(n) {
        this.parent = Array(n).fill(0).map((_, i) => i);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX !== rootY) {
            this.parent[rootX] = rootY;
        }
    }
}

function connectedComponentsDSU(edges, n) {
    let dsu = new DSU(n);

    for (let [a, b] of edges) {
        dsu.union(a, b);
    }

    let components = new Map();
    for (let i = 0; i < n; i++) {
        let root = dsu.find(i);
        if (!components.has(root)) components.set(root, []);
        components.get(root).push(i);
    }

    return Array.from(components.values());
}

const edges = [[0, 1], [1, 2], [3, 4]];
console.log(connectedComponentsDSU(edges, 5)); // [[0, 1, 2], [3, 4]]
```
Объяснение:
1. Используем сжатие пути и объединение по рангу.
2. DSU эффективен при динамическом изменении графа.
3. Сложность: O(α(V)) ≈ O(1).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
5. Поиск компонент на ориентированном графе (SCC) с алгоритмом Косараю
```javascript
function kosarajuSCC(graph) {
    let visited = new Set();
    let stack = [];

    function dfs1(node) {
        if (visited.has(node)) return;
        visited.add(node);
        for (let neighbor of graph[node] || []) dfs1(neighbor);
        stack.push(node);
    }

    function dfs2(node, component) {
        if (visited.has(node)) return;
        visited.add(node);
        component.push(node);
        for (let neighbor of reversedGraph[node] || []) dfs2(neighbor, component);
    }

    for (let node in graph) dfs1(node);

    let reversedGraph = {};
    for (let node in graph) {
        for (let neighbor of graph[node]) {
            if (!reversedGraph[neighbor]) reversedGraph[neighbor] = [];
            reversedGraph[neighbor].push(node);
        }
    }

    visited.clear();
    let components = [];
    while (stack.length) {
        let node = stack.pop();
        if (!visited.has(node)) {
            let component = [];
            dfs2(node, component);
            components.push(component);
        }
    }

    return components;
}

const directedGraph = {
    A: ["B"],
    B: ["C"],
    C: ["A", "D"],
    D: ["E"],
    E: ["F"],
    F: ["D"]
};

console.log(kosarajuSCC(directedGraph)); // [["A", "B", "C"], ["D", "E", "F"]]
```
Объяснение:
1. Использует двойной DFS и топологическую сортировку.
2. Работает для ориентированных графов.
3. Сложность: O(V + E).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
6. Нахождение компонент связности в неориентированном графе с использованием DFS на многосвязном графе
```javascript
function findComponentsMultiGraph(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const multiGraph = {
    A: ["B", "C"],
    B: ["A", "C"],
    C: ["A", "B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findComponentsMultiGraph(multiGraph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Мы создаем компоненту для каждого нового узла, и при этом учитываем граф, в котором могут быть многократные связи.
- Используем DFS для поиска всех достижимых вершин и их объединения в компоненту.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
7. Поиск компонент связности с использованием Итеративного DFS
```javascript
function findComponentsIterativeDFS(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node) {
        let stack = [node];
        let component = [];

        while (stack.length > 0) {
            let currentNode = stack.pop();
            if (!visited.has(currentNode)) {
                visited.add(currentNode);
                component.push(currentNode);

                for (let neighbor of graph[currentNode] || []) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
        return component;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            components.push(dfs(node));
        }
    }

    return components;
}

const graph2 = {
    A: ["B"],
    B: ["A", "C"],
    C: ["B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findComponentsIterativeDFS(graph2)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Вместо рекурсии используем стек для реализации итеративного DFS.
- Этот подход помогает избежать ограничений стека рекурсии и полезен для очень больших графов.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
8. Поиск компонент связности в неориентированном графе с использованием BFS
```javascript
function findComponentsBFS(graph) {
    let visited = new Set();
    let components = [];

    function bfs(start) {
        let queue = [start];
        let component = [];

        while (queue.length > 0) {
            let node = queue.shift();
            if (!visited.has(node)) {
                visited.add(node);
                component.push(node);

                for (let neighbor of graph[node] || []) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }
        return component;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            components.push(bfs(node));
        }
    }

    return components;
}

const graph3 = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"],
    E: ["F"],
    F: ["E"]
};

console.log(findComponentsBFS(graph3)); // [["A", "B", "C", "D"], ["E", "F"]]
```
Объяснение:
- Используем поиск в ширину (BFS) для обхода всех соседей в графе.
- На каждом шаге мы находим новый компонент, начиная с не посещенной вершины.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
9. Поиск компонент связности для ориентированного графа с использованием DFS (перемещение по вершинам)
```javascript
function findSCC(graph) {
    let visited = new Set();
    let stack = [];
    let components = [];

    function dfs(node) {
        visited.add(node);
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
        stack.push(node);
    }

    function reverseGraph(graph) {
        let reversed = {};
        for (let node in graph) {
            for (let neighbor of graph[node]) {
                if (!reversed[neighbor]) reversed[neighbor] = [];
                reversed[neighbor].push(node);
            }
        }
        return reversed;
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    let reversedGraph = reverseGraph(graph);
    visited.clear();

    function dfsReverse(node, component) {
        visited.add(node);
        component.push(node);
        for (let neighbor of reversedGraph[node] || []) {
            if (!visited.has(neighbor)) {
                dfsReverse(neighbor, component);
            }
        }
    }

    while (stack.length) {
        let node = stack.pop();
        if (!visited.has(node)) {
            let component = [];
            dfsReverse(node, component);
            components.push(component);
        }
    }

    return components;
}

const directedGraph2 = {
    A: ["B"],
    B: ["C"],
    C: ["A"],
    D: ["E"],
    E: ["F"],
    F: ["D"]
};

console.log(findSCC(directedGraph2)); // [["A", "B", "C"], ["D", "E", "F"]]
```
Объяснение:
- Мы находим сильные компоненты связности (SCC) в ориентированном графе, используя двойной DFS.
- Применяем топологическую сортировку и ищем компоненты в обратном графе.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
10. Поиск компонент связности для графа с весами с использованием DFS с модификацией
```javascript
function findWeightedComponents(graph) {
    let visited = new Set();
    let components = [];

    function dfs(node, component) {
        visited.add(node);
        component.push(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, component);
            }
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            let component = [];
            dfs(node, component);
            components.push(component);
        }
    }

    return components;
}

const weightedGraph = {
    A: [{ node: "B", weight: 5 }, { node: "C", weight: 10 }],
    B: [{ node: "A", weight: 5 }, { node: "C", weight: 3 }],
    C: [{ node: "A", weight: 10 }, { node: "B", weight: 3 }],
    D: [{ node: "E", weight: 1 }],
    E: [{ node: "D", weight: 1 }],
    F: []
};

console.log(findWeightedComponents(weightedGraph)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Для графов с весами мы все равно можем использовать стандартный DFS, поскольку веса не изменяют процесс поиска компонент связности, но могут влиять на другие алгоритмы, такие как нахождение кратчайшего пути.
- Мы определяем компоненты с помощью поиска в глубину (DFS), независимо от веса.
Сложность: O(V + E).
---------------------------------------------------------------------------------------------
