---------------------------------------------------------------------------------------------
📌 [Жадные алгоритмы]:
---
7. Задача: Пожарные машины
⌛ Задача: Есть несколько пожароопасных участков в городе. Для каждого участка определен радиус действия пожарных машин. Нужно минимизировать количество машин для покрытия всех участков.
🎯 Решение:
```javascript
function minFireTrucks(ranges) {
    ranges.sort((a, b) => a[0] - b[0]); // Сортируем по начальной точке

    let count = 0;
    let end = -Infinity;

    for (let range of ranges) {
        if (range[0] > end) {
            count++;
            end = range[1];
        }
    }

    return count;
}

const ranges = [[1, 5], [2, 6], [4, 8], [7, 9]];
console.log(minFireTrucks(ranges)); // Выводит 3
```
Объяснение: Используем жадный подход, чтобы минимизировать количество машин, покрытия участков.
--------------------------------------------------------------------------------------------- 
