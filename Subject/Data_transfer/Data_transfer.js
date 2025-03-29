Z
---------------------------------------------------------------------------------------------  
⋙ ❍ Переложить данные из коллекции в коллекцию:
---
⌛ Задача: Переложить данные из одной коллекции в другую
🎯 Решение: Реализация включает:
1. На чистом JavaScript (Vanilla): Работа с массивами, объектами или другими структурами данных.
2. На React: С использованием состояния (`useState`) и компонентов.
---
1. Реализация на JavaScript
Пример 1. Перенос данных из массива в массив
```javascript
function transferData(source, destination) {
  while (source.length > 0) {
    // Удаляем элемент из исходного массива и добавляем в целевой
    const item = source.shift();
    destination.push(item);
  }
}

const sourceArray = [1, 2, 3, 4, 5];
const destinationArray = [];

transferData(sourceArray, destinationArray);

console.log("Source:", sourceArray);       // []
console.log("Destination:", destinationArray); // [1, 2, 3, 4, 5]
```
---
Пример 2. Перенос данных из объекта в объект
```javascript
function transferObjectData(source, destination) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
      delete source[key]; // Удаляем из исходного объекта
    }
  }
}

const sourceObject = { a: 1, b: 2, c: 3 };
const destinationObject = {};

transferObjectData(sourceObject, destinationObject);

console.log("Source:", sourceObject);       // {}
console.log("Destination:", destinationObject); // { a: 1, b: 2, c: 3 }
```
---
Пример 3. Перенос данных с преобразованием
```javascript
function transferAndTransform(source, destination, transformFn) {
  while (source.length > 0) {
    const item = source.shift();
    destination.push(transformFn(item)); // Преобразуем элемент перед добавлением
  }
}

const sourceArray = [1, 2, 3, 4, 5];
const destinationArray = [];

// Увеличиваем значения на 10 перед переносом
transferAndTransform(sourceArray, destinationArray, (x) => x + 10);

console.log("Source:", sourceArray);       // []
console.log("Destination:", destinationArray); // [11, 12, 13, 14, 15]
```
---
2. Реализация на React
В React перенос данных между коллекциями может быть реализован с использованием состояния (`useState`).
Пример 1. Перенос элементов из одного списка в другой
```jsx
import React, { useState } from "react";

function TransferList() {
  const [source, setSource] = useState([1, 2, 3, 4, 5]);
  const [destination, setDestination] = useState([]);

  const transferItem = () => {
    if (source.length > 0) {
      const item = source[0];
      setSource(source.slice(1)); // Удаляем элемент из исходного списка
      setDestination([...destination, item]); // Добавляем элемент в целевой список
    }
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={transferItem}>Transfer Next Item</button>
    </div>
  );
}

export default TransferList;
```
---
Пример 2. Перенос всех элементов
```jsx
import React, { useState } from "react";

function TransferAll() {
  const [source, setSource] = useState(["Apple", "Banana", "Cherry"]);
  const [destination, setDestination] = useState([]);

  const transferAllItems = () => {
    setDestination([...destination, ...source]); // Добавляем все элементы
    setSource([]); // Очищаем исходный список
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={transferAllItems}>Transfer All Items</button>
    </div>
  );
}

export default TransferAll;
```
---
Пример 3. Перенос с удалением по клику
```jsx
import React, { useState } from "react";

function TransferOnClick() {
  const [source, setSource] = useState([1, 2, 3, 4, 5]);
  const [destination, setDestination] = useState([]);

  const transferItem = (item) => {
    setSource(source.filter((i) => i !== item)); // Удаляем элемент из источника
    setDestination([...destination, item]); // Добавляем в целевой список
  };

  return (
    <div>
      <h3>Source List</h3>
      <ul>
        {source.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => transferItem(item)}>Transfer</button>
          </li>
        ))}
      </ul>
      <h3>Destination List</h3>
      <ul>
        {destination.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TransferOnClick;
```
Объяснение React-кодов
1. Состояние:
   - Используется `useState` для хранения данных коллекций (`source` и `destination`).
   - Перенос выполняется с обновлением этих состояний.
2. Методы:
   - В первом примере: по одному элементу из `source` перемещается в `destination`.
   - Во втором примере: все элементы из `source` перемещаются в `destination` одним кликом.
   - В третьем примере: элементы переносятся с удалением по клику.
3. Рендеринг:
   - Используется метод `map` для отображения списков.

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
