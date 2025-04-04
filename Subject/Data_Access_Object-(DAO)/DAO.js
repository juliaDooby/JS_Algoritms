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
⋙ ❍ ⌛ Задача: Реализовать DAO даошку:
---
1. 
2. Реализация DAO на React
В React мы реализуем DAO как сервисный класс, который будет вызываться из компонентов.
Код
1. Сервисный класс (`UserDAO`)
```javascript
class UserDAO {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id) || null;
  }

  addUser(user) {
    const newUser = { id: this.nextId++, ...user };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id, updatedFields) {
    const user = this.getUserById(id);
    if (!user) return null;

    Object.assign(user, updatedFields);
    return user;
  }

  deleteUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

export default new UserDAO(); // Экспортируем экземпляр DAO
```
---
2. Компонент React
```jsx
import React, { useState, useEffect } from "react";
import userDAO from "./UserDAO"; // Импортируем DAO

function UserManager() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", age: "" });

  // Загружаем пользователей при монтировании
  useEffect(() => {
    setUsers(userDAO.getAllUsers());
  }, []);

  // Обработчик для добавления пользователя
  const handleAddUser = () => {
    const addedUser = userDAO.addUser({
      name: newUser.name,
      age: parseInt(newUser.age),
    });
    setUsers([...users, addedUser]); // Обновляем состояние
    setNewUser({ name: "", age: "" }); // Очищаем форму
  };

  // Обработчик для удаления пользователя
  const handleDeleteUser = (id) => {
    userDAO.deleteUser(id);
    setUsers(userDAO.getAllUsers()); // Обновляем состояние
  };

  return (
    <div style={styles.container}>
      <h1>User Manager</h1>
      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          style={styles.input}
          type="number"
          placeholder="Age"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <button style={styles.button} onClick={handleAddUser}>
          Add User
        </button>
      </div>
      <ul style={styles.list}>
        {users.map((user) => (
          <li key={user.id} style={styles.listItem}>
            {user.name} ({user.age} years old)
            <button
              style={styles.deleteButton}
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default UserManager;
```
Объяснение:
1. Сервисный класс `UserDAO`:
   - Инкапсулирует логику работы с данными (CRUD).
   - Может быть заменён на реализацию с API или базой данных.
2. React-компонент `UserManager`:
   - Подключается к `UserDAO` для управления состоянием.
   - Использует `useState` для управления пользователями и формой.
   - Использует `useEffect` для загрузки данных при монтировании.
Итог
1. На JavaScript DAO предоставляет интерфейс для работы с локальными данными.
2. На React реализуется UI для взаимодействия с DAO.
3. DAO можно легко адаптировать для работы с REST API или базой данных.
---------------------------------------------------------------------------------------------  
