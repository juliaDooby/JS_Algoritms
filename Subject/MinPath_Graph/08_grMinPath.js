---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
8. Двунаправленный поиск (Bidirectional Search)
Ускоряет поиск кратчайшего пути за счёт движения от начала и конца одновременно.
```javascript
function bidirectionalSearch(graph, start, end) {
    let forwardQueue = [[start]];
    let backwardQueue = [[end]];
    let visitedForward = new Set([start]);
    let visitedBackward = new Set([end]);

    while (forwardQueue.length && backwardQueue.length) {
        let forwardPath = forwardQueue.shift();
        let backwardPath = backwardQueue.shift();
        let forwardNode = forwardPath[forwardPath.length - 1];
        let backwardNode = backwardPath[backwardPath.length - 1];

        if (visitedForward.has(backwardNode) || visitedBackward.has(forwardNode)) {
            return forwardPath.concat(backwardPath.reverse().slice(1));
        }

        for (let neighbor of graph[forwardNode] || []) {
            if (!visitedForward.has(neighbor)) {
                visitedForward.add(neighbor);
                forwardQueue.push([...forwardPath, neighbor]);
            }
        }

        for (let neighbor of graph[backwardNode] || []) {
            if (!visitedBackward.has(neighbor)) {
                visitedBackward.add(neighbor);
                backwardQueue.push([...backwardPath, neighbor]);
            }
        }
    }

    return null;
}

console.log(bidirectionalSearch(graph, "A", "F")); // ["A", "C", "F"]
```
Объяснение:
1. Два поиска (BFS) — от начала и конца.
2. Ускоряет поиск в больших графах.
3. Останавливается, если поиски встречаются.
4. Сложность: O(2^(V/2)) в худшем случае, но быстрее BFS.
---------------------------------------------------------------------------------------------
