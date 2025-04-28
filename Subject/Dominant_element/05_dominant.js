--------------------------------------------------------------------------------------------- 
⋙ ❍ Поиск доминирующего элемента:
---
5. ⌛ Задача: Поиск доминирующего элемента среди строк
Условие:
Найдите строковый доминирующий элемент в массиве строк. Если такой элемент существует, верните его.
🎯 Решение:
```javascript
function findDominantStringElement(arr) {
  const n = arr.length;
  const frequency = {};

  for (const str of arr) {
    frequency[str] = (frequency[str] || 0) + 1;
    if (frequency[str] > n / 2) {
      return str;
    }
  }
  return -1;
}

console.log(findDominantStringElement(["apple", "banana", "apple", "apple"]));  // "apple"
console.log(findDominantStringElement(["apple", "banana", "cherry"]));          // -1
```
Объяснение:
Задача аналогична предыдущей, но с массивом строк. Мы проверяем, если строка встречается более чем половину раз.
--------------------------------------------------------------------------------------------- 
