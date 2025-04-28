---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Анаграммы:
---
2. 🎯 Решение с использованием `Map`
Для улучшенной читаемости можно использовать `Map` для подсчёта символов.
🎯 Решение с использованием `Map`:
```javascript
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const countMap = new Map();

  // Подсчитываем символы в первой строке
  for (let char of str1) {
    countMap.set(char, (countMap.get(char) || 0) + 1);
  }

  // Проверяем, есть ли такие же символы во второй строке
  for (let char of str2) {
    if (!countMap.has(char)) {
      return false;
    }
    countMap.set(char, countMap.get(char) - 1);
  }

  // Убедимся, что все значения в countMap равны 0
  for (let count of countMap.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false
```
Объяснение:
- Мы используем `Map` для подсчёта символов в строках.
- Для каждого символа мы увеличиваем или уменьшаем его счетчик в `Map`.
- В конце проверяем, что все счётчики равны нулю, что подтверждает, что строки содержат одинаковые символы.
---------------------------------------------------------------------------------------------  
