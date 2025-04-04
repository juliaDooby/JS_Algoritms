---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Реализовать DAO даошку:
---
0.
🎯 Решение: Реализация DAO (Data Access Object)
DAO (Data Access Object) — это шаблон проектирования, который используется для абстракции работы с данными. Он обеспечивает интерфейс для доступа к базе данных, файлам или другим хранилищам данных.
Мы реализуем DAO-шку, которая:
1. Предоставляет методы для чтения, создания, обновления и удаления данных.
2. Абстрагирует источник данных (локальный массив, API, база данных).
---
1. Реализация DAO на JavaScript (Vanilla)
Код
```javascript
class UserDAO {
  constructor() {
    this.users = []; // Локальное хранилище данных (может быть заменено на API/БД)
    this.nextId = 1; // Счётчик для уникальных ID
  }

  // Получить всех пользователей
  getAllUsers() {
    return this.users;
  }

  // Найти пользователя по ID
  getUserById(id) {
    return this.users.find((user) => user.id === id) || null;
  }

  // Добавить нового пользователя
  addUser(user) {
    const newUser = { id: this.nextId++, ...user };
    this.users.push(newUser);
    return newUser;
  }

  // Обновить пользователя по ID
  updateUser(id, updatedFields) {
    const user = this.getUserById(id);
    if (!user) return null;

    Object.assign(user, updatedFields);
    return user;
  }

  // Удалить пользователя по ID
  deleteUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

// Пример использования
const userDAO = new UserDAO();

// Создаём пользователей
userDAO.addUser({ name: "Alice", age: 25 });
userDAO.addUser({ name: "Bob", age: 30 });

// Получаем всех пользователей
console.log("Все пользователи:", userDAO.getAllUsers());

// Обновляем пользователя
userDAO.updateUser(1, { age: 26 });
console.log("Обновлённый пользователь:", userDAO.getUserById(1));

// Удаляем пользователя
userDAO.deleteUser(2);
console.log("После удаления:", userDAO.getAllUsers());
```
Объяснение:
1. Конструктор:
   - Создаётся массив `users` для хранения пользователей.
   - `nextId` используется для генерации уникальных идентификаторов.
2. Методы:
   - `getAllUsers`: Возвращает всех пользователей.
   - `getUserById`: Ищет пользователя по ID.
   - `addUser`: Добавляет нового пользователя.
   - `updateUser`: Обновляет данные пользователя.
   - `deleteUser`: Удаляет пользователя.
--------------------------------------------------------------------------------------------- 
