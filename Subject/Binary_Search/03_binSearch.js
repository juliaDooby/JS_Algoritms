---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Напишите бинарный поиск по памяти или канстомный линкед лист, обход графа за N сложность:
---
3.
Реализация обхода в глубину (DFS)
```javascript
function dfs(graph, start, visited = new Set(), result = []) {
  if (visited.has(start)) return;

  visited.add(start);
  result.push(start);

  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, result);
    }
  }

  return result;
}

// Пример графа
const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [6],
  6: [],
};

// Пример использования
const startNode = 1;
console.log(dfs(graph, startNode)); // [1, 2, 4, 3, 5, 6]
```
Объяснение BFS и DFS:
1. BFS (ширина):
   - Использует очередь (`queue`) для обхода.
   - Проходит уровень за уровнем.
2. DFS (глубина):
   - Использует рекурсию (или стек) для обхода.
   - Проходит до конца одного пути, затем возвращается.
Вывод
- Бинарный поиск: Для отсортированных массивов, O(log N).
- Кастомный связный список: Гибкость в работе с элементами, O(N) для операций поиска/удаления.
- Обход графа:
  - BFS и DFS обходят граф за O(V + E).
  - Выбор зависит от задачи (поиск кратчайшего пути — BFS, поиск путей вглубь — DFS).
  ---------------------------------------------------------------------------------------------  
