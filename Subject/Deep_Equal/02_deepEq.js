---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Deep Equal:
---
🎯 Решение 2: С использованием `JSON.stringify`
Иногда, если объекты не содержат функций или циклических ссылок, можно использовать преобразование в JSON для сравнения.
Код:
```javascript
function deepEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Пример использования:
const objA = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objB = { name: 'Alice', details: { age: 25, city: 'NY' } };
const objC = { name: 'Alice', details: { age: 25, city: 'LA' } };

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false
```
Недостатки:
- `JSON.stringify` не поддерживает циклические ссылки.
- Сравнение чувствительно к порядку ключей в объектах.
---------------------------------------------------------------------------------------------  
