---------------------------------------------------------------------------------------------  
⋙ ❍ Инкапсуляция (сделал все поля класса публичными и не создал конструктор)):
---
13. Инкапсулировать состояние в React-компоненте с `useState`
⌛ Задача: В React создайте компонент, в котором инкапсулировано состояние. Только внутренние методы могут изменять это состояние, а наружу оно передается через геттер.
🎯 Решение:
```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Внутренний метод для изменения состояния
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Геттер для состояния
  const getCount = () => count;

  return (
    <div>
      <h1>Counter: {getCount()}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```
Обяснение:
- Внутренние методы `increment` и `decrement` изменяют состояние с помощью `setCount`.
- Внешний код не может напрямую изменять `count`, он только может использовать геттер `getCount`.
---------------------------------------------------------------------------------------------  
