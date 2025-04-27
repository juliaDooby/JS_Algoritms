--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Максимальный оклад»:
---
4. ⌛ Задача: Нахождение всех сотрудников с окладом больше среднего
Условие:
Нужно вывести всех сотрудников, чьи оклады превышают среднее значение.
🎯 Решение:
```javascript
function findEmployeesAboveAverage(employees) {
  let averageSalary = calculateAverageSalary(employees.map(employee => employee.salary));
  return employees.filter(employee => employee.salary > averageSalary).map(employee => employee.name);
}

let employees = [
  { name: "Иван", salary: 35000 },
  { name: "Мария", salary: 45000 },
  { name: "Алексей", salary: 50000 },
  { name: "Елена", salary: 60000 },
];

console.log(`Сотрудники с окладом выше среднего: ${findEmployeesAboveAverage(employees)}`);  // [ 'Алексей', 'Елена' ]
```
Объяснение:
Сначала находим среднюю зарплату, затем фильтруем сотрудников с зарплатой выше средней, и в конце выводим их имена.
--------------------------------------------------------------------------------------------- 
