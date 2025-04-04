---------------------------------------------------------------------------------------------  
⋙ ❍ Инкапсуляция (сделал все поля класса публичными и не создал конструктор)):
---
1. Приватные методы
⌛ Задача: Реализуйте класс `User`, в котором есть приватный метод для проверки пароля.
🎯 Решение:
```javascript
class User {
  #password;

  constructor(password) {
    this.#password = password;
  }

  #checkPassword(input) {
    return input === this.#password;
  }

  login(input) {
    return this.#checkPassword(input) ? "Login successful" : "Access denied";
  }
}

const user = new User("secret");
console.log(user.login("secret")); // Login successful
// console.log(user.#checkPassword("secret")); // Ошибка: приватный метод
```
Объяснение: Метод `#checkPassword` доступен только внутри класса.
--------------------------------------------------------------------------------------------- 
