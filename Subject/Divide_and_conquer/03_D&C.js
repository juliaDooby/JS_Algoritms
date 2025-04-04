--------------------------------------------------------------------------------------------- 
⋙ ❍ Алгоритмы «Разделяй и властвуй»:
---
3. Задача: Подсчет инверсий
⌛ Задача: Подсчитать количество инверсий в массиве. Инверсия — это пара элементов (i, j), где i < j и arr[i] > arr[j].
🎯 Решение:
```javascript
function countInversions(arr) {
    let [sortedArr, count] = mergeSortAndCount(arr);
    return count;
}

function mergeSortAndCount(arr) {
    if (arr.length <= 1) return [arr, 0];
    const middle = Math.floor(arr.length / 2);
    const [left, leftCount] = mergeSortAndCount(arr.slice(0, middle));
    const [right, rightCount] = mergeSortAndCount(arr.slice(middle));
    const [merged, splitCount] = mergeAndCount(left, right);

    return [merged, leftCount + rightCount + splitCount];
}

function mergeAndCount(left, right) {
    let result = [], i = 0, j = 0, count = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) result.push(left[i++]);
        else {
            result.push(right[j++]);
            count += left.length - i;
        }
    }

    return [result.concat(left.slice(i), right.slice(j)), count];
}

console.log(countInversions([1, 20, 6, 4, 5])); // Выводит 5
```
Объяснение: Используется модификация сортировки слиянием, которая подсчитывает количество инверсий при слиянии двух отсортированных подмассивов.
--------------------------------------------------------------------------------------------- 
