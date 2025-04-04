---------------------------------------------------------------------------------------------  
⋙ ❍ Инкапсуляция (сделал все поля класса публичными и не создал конструктор)):
---
6. Инкапсуляция через фабричные функции
⌛ Задача: Реализуйте фабричную функцию для создания объекта с приватными данными.
🎯 Решение:
```javascript
function createUser(name) {
  let balance = 0;

  return {
    name,
    addBalance(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const user = createUser("Alice");
user.addBalance(100);
console.log(user.getBalance()); // 100
// console.log(user.balance); // undefined
```
Объяснение: `balance` защищён внутри замыкания.
---------------------------------------------------------------------------------------------  
