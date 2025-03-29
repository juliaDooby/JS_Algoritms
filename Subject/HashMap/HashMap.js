---------------------------------------------------------------------------------------------  
⋙ ❍ Хэш-таблицы (!хэшмап)(массив, остаток от деления и два вида разрешения коллизий разрешаются связанным списком):
---
Реализация хэш-таблицы с разрешением коллизий с использованием связанного списка
⌛ Задача: Реализуйте хэш-таблицу, используя массив для хранения элементов и метод разрешения коллизий через связанные списки. В хэш-таблице данные будут храниться в виде пар ключ-значение. При коллизии (когда два ключа имеют одинаковый хэш) элементы будут храниться в связанном списке.
🎯 Решение:
1. Массив как базовая структура: Хэш-таблица использует массив для хранения элементов. Индекс для каждого элемента будет вычисляться как остаток от деления хэш-функции.
2. Хэш-функция: Для получения индекса мы будем использовать простую хэш-функцию, которая возвращает остаток от деления на размер массива.
3. Разрешение коллизий: В случае коллизий (когда два элемента имеют одинаковый индекс) мы будем хранить элементы в связанном списке на этом индексе. Связанный список будет содержать элементы с одинаковым хэшом.
4. Операции:
   - Добавление: Добавление элемента в хэш-таблицу с использованием хэш-функции.
   - Поиск: Поиск элемента в хэш-таблице по ключу.
   - Удаление: Удаление элемента из хэш-таблицы.
---
Реализация хэш-таблицы с разрешением коллизий через связанный список
Шаг 1: Определим структуру данных для связанного списка.
```javascript
class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
```
- `ListNode` представляет собой элемент связанного списка. Каждый узел содержит пару `key-value` и указатель на следующий узел.
Шаг 2: Реализуем хэш-таблицу.
```javascript
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size); // Массив для хранения связанных списков
  }

  // Хэш-функция (остаток от деления)
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  // Добавление элемента в хэш-таблицу
  set(key, value) {
    const index = this.hash(key);

    // Создаём новый узел
    const newNode = new ListNode(key, value);

    if (!this.table[index]) {
      // Если на этом индексе нет элемента, добавляем новый
      this.table[index] = newNode;
    } else {
      // Если на индексе уже есть элементы, разрешаем коллизию через связанный список
      let current = this.table[index];

      // Проверим, есть ли уже элемент с таким же ключом
      while (current) {
        if (current.key === key) {
          current.value = value; // Обновляем значение, если ключ найден
          return;
        }
        if (!current.next) break;
        current = current.next;
      }

      // Если элемент с таким ключом не найден, добавляем его в конец связанного списка
      current.next = newNode;
    }
  }

  // Поиск элемента по ключу
  get(key) {
    const index = this.hash(key);
    let current = this.table[index];

    // Пробегаем по связанному списку
    while (current) {
      if (current.key === key) {
        return current.value; // Возвращаем значение, если ключ найден
      }
      current = current.next;
    }

    return undefined; // Возвращаем undefined, если ключ не найден
  }

  // Удаление элемента по ключу
  remove(key) {
    const index = this.hash(key);
    let current = this.table[index];
    let prev = null;

    // Пробегаем по связанному списку
    while (current) {
      if (current.key === key) {
        if (prev) {
          // Если элемент не первый в списке, удаляем его
          prev.next = current.next;
        } else {
          // Если элемент первый, просто меняем указатель
          this.table[index] = current.next;
        }
        return true; // Элемент удален
      }
      prev = current;
      current = current.next;
    }

    return false; // Элемент не найден
  }
}
```
Пример использования хэш-таблицы
```javascript
const hashTable = new HashTable();

// Добавление элементов
hashTable.set("name", "Alice");
hashTable.set("age", 25);
hashTable.set("occupation", "developer");

// Поиск элементов
console.log(hashTable.get("name")); // Alice
console.log(hashTable.get("age")); // 25
console.log(hashTable.get("occupation")); // developer

// Обновление значения
hashTable.set("age", 26);
console.log(hashTable.get("age")); // 26

// Удаление элемента
hashTable.remove("age");
console.log(hashTable.get("age")); // undefined
```
Объяснение:
1. Хэш-функция: Простой способ вычисления хэша, основанный на вычислении суммы кодов символов и взятии остатка от деления на размер хэш-таблицы.
2. Обработка коллизий: Если два элемента имеют одинаковый хэш, они хранятся в связном списке на одном индексе массива. Мы используем метод перебора элементов в списке, чтобы найти нужный элемент или добавить новый.
3. Операции:
   - `set()`: Добавляет новый элемент или обновляет существующий.
   - `get()`: Ищет элемент по ключу, пробегая по связанному списку, если коллизия произошла.
   - `remove()`: Удаляет элемент по ключу, также обрабатывая случаи с коллизиями.
Резюме:
- Хэш-таблица — это структура данных, использующая хэш-функцию для быстрого поиска элементов.
- Связанные списки используются для разрешения коллизий, когда два элемента имеют одинаковый хэш.
- Это решение эффективно для большинства задач, где требуется хранить и быстро искать элементы по ключу.
 ~~~ 

%%%%%%%
Z
---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: !!!Написать функцию глубокого копирования объекта с доп условием - внутри есть циклические и иные ссылки между элементами, т.е. объект - не дерево:
---
Глубокое копирование объекта с учетом циклических ссылок — это сложная задача, которая требует хранения уже посещённых объектов. Для её решения мы можем использовать Map для отслеживания уже обработанных ссылок и избегания бесконечной рекурсии.
🎯 Решение:
```javascript
function deepClone(obj, map = new Map()) {
  // Если объект не является объектом или массивом, возвращаем его
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Если объект уже клонирован (циклическая ссылка), возвращаем его копию из Map
  if (map.has(obj)) {
    return map.get(obj);
  }

  // Создаем копию объекта или массива
  const clone = Array.isArray(obj) ? [] : {};

  // Сохраняем объект в Map, чтобы учесть циклические ссылки
  map.set(obj, clone);

  // Рекурсивно копируем свойства объекта или элементы массива
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}
// Пример использования
const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};
obj.b.e = obj; // Циклическая ссылка

const copiedObj = deepClone(obj);
console.log(copiedObj);
```
Объяснение:
1. Проверка типа:
   - Если объект не является объектом или массивом (`typeof obj !== "object"`), он возвращается без изменений, так как примитивы копируются по значению.
2. Обработка циклических ссылок:
   - Используется `Map`, чтобы отслеживать уже обработанные объекты.
   - Если объект уже находится в `Map`, возвращается его ранее созданная копия:
     ```javascript
     if (map.has(obj)) {
       return map.get(obj);
     }
     ```
3. Копирование свойств:
   - Рекурсивно обходим все свойства объекта с помощью `for...in` и создаём их копии.
4. Работа с массивами:
   - Если объект — массив, создаётся пустой массив:
     ```javascript
     const clone = Array.isArray(obj) ? [] : {};
     ```
5. Поддержка сложных объектов:
   - Копируются свойства объектов и массивов любого уровня вложенности, включая циклические ссылки.
---
Тесты:
Пример с циклическими ссылками:
```javascript
const obj = { a: 1 };
obj.b = obj; // Циклическая ссылка

const cloned = deepClone(obj);
console.log(cloned); // { a: 1, b: [Circular] }
console.log(cloned.b === cloned); // true
```
Пример с массивом:
```javascript
const arr = [1, 2, 3];
arr.push(arr); // Циклическая ссылка

const clonedArr = deepClone(arr);
console.log(clonedArr); // [1, 2, 3, [Circular]]
console.log(clonedArr[3] === clonedArr); // true
```
Улучшение: Копирование специальных объектов
Если нужно поддерживать такие структуры как `Date`, `Set`, `Map`, можно дополнить функцию:
```javascript
function deepClone(obj, map = new Map()) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (map.has(obj)) {
    return map.get(obj);
  }

  // Копирование специальных объектов
  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (obj instanceof Map) {
    const clonedMap = new Map();
    map.set(obj, clonedMap);
    for (const [key, value] of obj.entries()) {
      clonedMap.set(deepClone(key, map), deepClone(value, map));
    }
    return clonedMap;
  }

  if (obj instanceof Set) {
    const clonedSet = new Set();
    map.set(obj, clonedSet);
    for (const value of obj.values()) {
      clonedSet.add(deepClone(value, map));
    }
    return clonedSet;
  }

  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }

  return clone;
}
```
---
Пример использования с `Map` и `Set`
```javascript
const complexObj = {
  date: new Date(),
  map: new Map([[1, "one"]]),
  set: new Set([1, 2, 3]),
};
complexObj.self = complexObj; // Циклическая ссылка

const clonedComplexObj = deepClone(complexObj);
console.log(clonedComplexObj);
console.log(clonedComplexObj.map.get(1)); // "one"
console.log(clonedComplexObj.set.has(2)); // true
console.log(clonedComplexObj.self === clonedComplexObj); // true
```
Итог
- Функция поддерживает:
  - Глубокое копирование объектов и массивов.
  - Циклические ссылки.
  - Специальные объекты: `Date`, `Set`, `Map`.
- Решение эффективно для работы с любыми вложенными структурами. Если нужно добавить поддержку других типов, например, `RegExp`, это легко сделать.

Z
---------------------------------------------------------------------------------------------  
⋙ ❍ В цикле переложить элементы, меняя первые с последними. (фильтр-отсев кандитатов):
---
⌛ Задача: Переложить элементы массива так, чтобы первые элементы стали последними, а последние — первыми.
🎯 Решение на Vanilla JavaScript
```javascript
function reverseArray(arr) {
  const length = arr.length;
  for (let i = 0; i < length / 2; i++) {
    // Меняем первый и последний элементы
    const temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }
  return arr;
}

// Пример использования
const array = [1, 2, 3, 4, 5];
console.log("Исходный массив:", array);
console.log("Перевернутый массив:", reverseArray(array));
```
Объяснение:
1. Итерация до середины массива:
   - Мы используем цикл `for` с условием `i < length / 2`, чтобы обменивать элементы только до середины массива.
   - Это исключает лишние обмены, т. к. элементы в середине не требуют изменений.
2. Обмен элементов:
   - Используем временную переменную `temp` для сохранения текущего элемента:
     ```javascript
     const temp = arr[i];
     arr[i] = arr[length - 1 - i];
     arr[length - 1 - i] = temp;
     ```
3. Результат:
   - Первый элемент меняется местами с последним, второй — с предпоследним, и так далее.
---
🎯 Решение с использованием встроенных методов
Если вы хотите использовать встроенные методы, можно использовать `reverse`:
```javascript
const array = [1, 2, 3, 4, 5];
const reversedArray = array.reverse();
console.log("Перевернутый массив:", reversedArray);
```
Примечание: Этот метод изменяет исходный массив.
---
🎯 Пример для строк
Если вы хотите перевернуть строку:
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"
```
---------------------------------------------------------------------------------------------  
