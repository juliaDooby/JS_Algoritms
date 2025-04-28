---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Deep Equal:
---
🎯 Решение 1: Сравнение массивов и объектов
Этот подход поддерживает сравнение как массивов, так и объектов.
Код:
```javascript
function deepEqual(obj1, obj2) {
  // Если объекты идентичны
  if (obj1 === obj2) return true;

  // Если это массивы
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.every((value, index) => deepEqual(value, obj2[index]));
  }

  // Если это не объекты или null
  if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
    return false;
  }

  // Если это объекты
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => deepEqual(obj1[key], obj2[key]));
}

// Пример использования:
const arr1 = [1, { a: 1 }, [2, 3]];
const arr2 = [1, { a: 1 }, [2, 3]];
const arr3 = [1, { a: 2 }, [2, 3]];

console.log(deepEqual(arr1, arr2)); // true
console.log(deepEqual(arr1, arr3)); // false
```
--------------------------------------------------------------------------------------------- 
