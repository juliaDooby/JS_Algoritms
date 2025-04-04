---------------------------------------------------------------------------------------------  
⋙ ❍ Инкапсуляция (сделал все поля класса публичными и не создал конструктор)):
---
5. Создание singleton через инкапсуляцию
⌛ Задача: Реализуйте класс `Database` с шаблоном Singleton.
🎯 Решение:
```javascript
class Database {
  static #instance;

  constructor(connectionString) {
    if (Database.#instance) {
      return Database.#instance;
    }
    this.connectionString = connectionString;
    Database.#instance = this;
  }
}

const db1 = new Database("db://localhost");
const db2 = new Database("db://remote");

console.log(db1 === db2); // true
```
Объяснение: Приватное статическое свойство `#instance` обеспечивает наличие только одного экземпляра класса.
---------------------------------------------------------------------------------------------
