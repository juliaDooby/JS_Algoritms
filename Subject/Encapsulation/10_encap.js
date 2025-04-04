---------------------------------------------------------------------------------------------  
⋙ ❍ Инкапсуляция (сделал все поля класса публичными и не создал конструктор)):
---
10. Создать класс `BankAccount` с приватными методами для депозита и снятия
⌛ Задача: Реализовать класс `BankAccount` с приватными методами для депозита, снятия денег и проверки баланса.
🎯 Решение:
```javascript
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Недостаточно средств");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 300
// console.log(account.#balance); // Ошибка: приватное свойство
```
Объяснение:
- Свойство `#balance` инкапсулировано, и его нельзя изменить напрямую снаружи класса.
- Методы `deposit` и `withdraw` предоставляют интерфейс для работы с балансом.
--------------------------------------------------------------------------------------------- 
