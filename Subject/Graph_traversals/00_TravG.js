---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
1. Обход графа в глубину (DFS)
⌛ Задача: Напишите функцию, которая будет обходить граф в глубину и возвращать список посещенных вершин.
🎯 Решение:
```javascript
function dfs(graph, start) {
    let visited = new Set();
    let result = [];

    function visit(node) {
        if (visited.has(node)) return;
        visited.add(node);
        result.push(node);

        for (let neighbor of graph[node]) {
            visit(neighbor);
        }
    }

    visit(start);
    return result;
}

const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"]
};

console.log(dfs(graph, "A")); // ["A", "B", "D", "E", "F", "C"]
```
Объяснение:
- Мы рекурсивно проходим через соседей каждой вершины, добавляя их в массив `result`, если они еще не были посещены.
- Используем рекурсию для обхода графа.
- Сложность: O(V + E), где V — количество вершин, а E — количество рёбер.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
2. Обход графа в ширину (BFS)
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
---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
3. Обход ориентированного графа в глубину (DFS)
⌛ Задача: Напишите функцию для обхода ориентированного графа в глубину, используя рекурсию.
🎯 Решение:
```javascript
function dfsDirected(graph, start) {
    let visited = new Set();
    let result = [];

    function visit(node) {
        if (visited.has(node)) return;
        visited.add(node);
        result.push(node);

        for (let neighbor of graph[node] || []) {
            visit(neighbor);
        }
    }

    visit(start);
    return result;
}

const directedGraph = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: [],
    E: []
};

console.log(dfsDirected(directedGraph, "A")); // ["A", "B", "D", "C", "E"]
```
Объяснение:
- Осуществляем обход с помощью рекурсии, но только по рёбрам ориентированного графа.
- Каждую вершину посещаем только один раз.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
4. Обход ориентированного графа в ширину (BFS)
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
---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
5. Обход графа с проверкой на цикл (DFS)
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
---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
6. Обход графа с пометкой рёбер (DFS)
⌛ Задача: Напишите функцию для обхода графа в глубину, помечая рёбра как «обрабатываемые» или «обратные».
🎯 Решение:
```javascript
function dfsEdgeTypes(graph, start) {
    let visited = new Set();
    let result = [];

    function dfs(node, parent) {
        visited.add(node);

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                result.push(`${node} -> ${neighbor} (Tree Edge)`);
                dfs(neighbor, node);
            } else if (parent !== neighbor) {
                result.push(`${node} -> ${neighbor} (Back Edge)`);
            }
        }
    }

    dfs(start);
    return result;
}

const graph2 = {
    A: ["B", "C"],
    B: ["D"],
    C: ["E"],
    D: [],
    E: []
};

console.log(dfsEdgeTypes(graph2, "A"));
```
Объяснение:
- Мы отмечаем рёбра как деревянные или обратные в зависимости от того, были ли вершины уже посещены.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
7. Обход графа с вычислением расстояний от начальной вершины (BFS)
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
---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
8. Обход всех компонент связности в графе (DFS)
⌛ Задача: Напишите функцию для обхода всех компонент связности в графе.
🎯 Решение:
```javascript
function findConnectedComponents(graph) {
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

const graph4 = {
    A: ["B", "C"],
    B: ["A", "C"],
    C: ["A", "B"],
    D: ["E"],
    E: ["D"],
    F: []
};

console.log(findConnectedComponents(graph4)); // [["A", "B", "C"], ["D", "E"], ["F"]]
```
Объяснение:
- Мы проходим по всем вершинам и для каждой не посещенной вершины начинаем новый обход DFS, создавая компоненты связности.
- Сложность: O(V + E).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
9. Обход графа с отслеживанием времени (DFS)
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
---------------------------------------------------------------------------------------------
⋙ ❍ Обходы графа:
---
10. Обход графа с вычислением пути до каждой вершины (BFS)
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
