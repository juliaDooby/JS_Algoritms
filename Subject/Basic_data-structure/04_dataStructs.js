---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
4️⃣ Словарь (Объект): Подсчёт частоты элементов
⌛ Задача: Напишите функцию, которая подсчитывает частоту появления каждого элемента в массиве и возвращает объект.
🎯 Решение:
```js
function countFrequency(arr) {
  let frequency = {};
  arr.forEach(item => {
    frequency[item] = (frequency[item] || 0) + 1;
  });
  return frequency;
}

console.log(countFrequency([1, 2, 2, 3, 3, 3])); // {1: 1, 2: 2, 3: 3}
```
Объяснение:
- Используем объект как словарь, где ключи — это элементы массива, а значения — это их частота появления. В цикле увеличиваем счётчик для каждого элемента.
---------------------------------------------------------------------------------------------
