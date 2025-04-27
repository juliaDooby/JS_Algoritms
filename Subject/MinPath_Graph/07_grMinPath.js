---------------------------------------------------------------------------------------------
⋙ ❍ Задача поиска кратчайшего пути в графе:
---
7. Волновой алгоритм Ли (для поиска пути на сетке)
Используется для поиска пути в лабиринтах или на решетках.
```javascript
function leeAlgorithm(grid, start, end) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let queue = [[start[0], start[1], 0]];
    let rows = grid.length, cols = grid[0].length;
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    while (queue.length) {
        let [x, y, dist] = queue.shift();

        if (x === end[0] && y === end[1]) return dist;

        for (let [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && grid[nx][ny] === 0 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }
    }

    return -1;
}

let grid = [
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 0, 0]
];

console.log(leeAlgorithm(grid, [0, 0], [2, 3])); // 4
```
Объяснение:
1. Подходит для сеток и лабиринтов.
2. Использует поиск в ширину (BFS).
3. Гарантированно находит **кратчайший путь.
4. Сложность: O(NM), где N и M — размеры сетки.
---------------------------------------------------------------------------------------------
