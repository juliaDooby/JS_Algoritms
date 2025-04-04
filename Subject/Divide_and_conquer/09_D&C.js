--------------------------------------------------------------------------------------------- 
⋙ ❍ Алгоритмы «Разделяй и властвуй»:
---
9. Задача: Максимальная сумма прямоугольной подматрицы
⌛ Задача: Найти максимальную сумму прямоугольной подматрицы в двумерном массиве.
🎯 Решение:
```javascript
function maxSumSubMatrix(matrix) {
    let maxSum = -Infinity;
    let n = matrix.length;
    let m = matrix[0].length;

    for (let top = 0; top < n; top++) {

 let temp = Array(m).fill(0);
        for (let bottom = top; bottom < n; bottom++) {
            for (let i = 0; i < m; i++) {
                temp[i] += matrix[bottom][i];
            }
            maxSum = Math.max(maxSum, maxSubArraySum(temp));
        }
    }

    return maxSum;
}

function maxSubArraySum(arr) {
    let max = -Infinity, sum = 0;
    for (let num of arr) {
        sum = Math.max(num, sum + num);
        max = Math.max(max, sum);
    }
    return max;
}

console.log(maxSumSubMatrix([[1, -2, 1], [1, -1, 3], [3, 1, -1]])); // Выводит 5
```
Объяснение: Алгоритм сначала суммирует строки и затем применяет метод поиска максимальной суммы подмассива для каждой возможной прямоугольной области в двумерном массиве.
Алгоритмы "Разделяй и властвуй" эффективно решают задачи, разделяя проблему на меньшие подзадачи и рекурсивно обрабатывая их.
--------------------------------------------------------------------------------------------- 
