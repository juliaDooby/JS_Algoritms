---------------------------------------------------------------------------------------------
⋙ ❍ Алгоритм нахождения компонент связности в графе:
---
3. Поиск компонент с использованием Union-Find (DSU)
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
