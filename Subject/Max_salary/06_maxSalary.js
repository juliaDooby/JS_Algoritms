--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Максимальный оклад»:
---
6. ⌛ Задача: Нахождение сотрудников с окладом ниже среднего
Условие:
Нужно найти сотрудников, чьи оклады ниже среднего.
🎯 Решение:
```javascript
function findEmployeesBelowAverage(employees) {
  let averageSalary = calculateAverageSalary(employees.map(employee => employee.salary));
  return employees.filter(employee => employee.salary < averageSalary).map(employee => employee.name);
}

let employees = [
  { name: "Иван", salary: 35000 },
  { name: "Мария", salary: 45000 },
  { name: "Алексей", salary: 50000 },
  { name: "Елена", salary: 60000 },
];

console.log(`Сотрудники с окладом ниже среднего: ${findEmployeesBelowAverage(employees)}`);  // [ 'Иван', 'Мария' ]
```
Объяснение:
Аналогично задаче выше, только находим сотрудников с зарплатой ниже средней.
--------------------------------------------------------------------------------------------- 
