---------------------------------------------------------------------------------------------
📌 [Жадные алгоритмы]:
---
6. Задача: Задача о максимальной задаче (Ожидаемое наибольшее значение)
⌛ Задача: У вас есть несколько задач с разными уровнями сложности. На каждом шаге вы можете выбрать одну задачу. Вам нужно максимизировать свой результат, если выбирать задачи в порядке их возрастания сложности.
🎯 Решение:
```javascript
function maxTaskValue(tasks) {
    tasks.sort((a, b) => a.difficulty - b.difficulty); // Сортируем по сложности
    let totalValue = 0;
    for (let task of tasks) {
        totalValue += task.value;
    }
    return totalValue;
}

const tasks = [
  {difficulty: 2, value: 10},
  {difficulty: 1, value: 5},
  {difficulty: 3, value: 20}
];
console.log(maxTaskValue(tasks)); // Выводит 35 (сумма всех значений)
```
Объяснение: Сортируем задачи по сложности и затем суммируем их стоимость.
--------------------------------------------------------------------------------------------- 
