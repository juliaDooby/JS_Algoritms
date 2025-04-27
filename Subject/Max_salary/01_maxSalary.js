--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Максимальный оклад»:
---
1. ⌛ Задача: Поиск сотрудника с максимальным окладом
Условие:
Необходимо найти имя сотрудника с максимальным окладом.
🎯 Решение:
```javascript
function findEmployeeWithMaxSalary(employees) {
  let maxSalaryEmployee = employees.reduce((max, employee) =>
    employee.salary > max.salary ? employee : max
  );
  return maxSalaryEmployee.name;
}

let employees = [
  { name: "Иван", salary: 35000 },
  { name: "Мария", salary: 45000 },
  { name: "Алексей", salary: 50000 },
  { name: "Елена", salary: 60000 },
];

console.log(`Сотрудник с максимальным окладом: ${findEmployeeWithMaxSalary(employees)}`);  // Елена
```
Объяснение:
Используем метод `reduce()`, чтобы найти сотрудника с максимальной зарплатой. В каждом шаге мы сравниваем текущую зарплату с максимальной.
--------------------------------------------------------------------------------------------- 
