--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Количество призов»:
---
5. ⌛ Задача: Проверка, можно ли получить определенный приз
Условие:
Необходимо проверить, может ли человек получить определенный приз, если он удовлетворяет условиям.
🎯 Решение:
```javascript
function canGetPrize(age, prizeRequirement) {
  return age >= prizeRequirement ? "Приз получен" : "Приз не получен";
}

let age = 25;
let prizeRequirement = 18;

console.log(canGetPrize(age, prizeRequirement));  // "Приз получен"
```
Объяснение:
Проверяется, подходит ли возраст для получения приза. Если возраст больше или равен минимальному требованию, приз выдается.
--------------------------------------------------------------------------------------------- 
