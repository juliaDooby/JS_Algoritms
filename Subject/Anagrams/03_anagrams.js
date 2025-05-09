---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Анаграммы:
---
3. 🎯 Решение с использованием регулярных выражений
Если строки содержат только буквы, можно использовать регулярное выражение для проверки анаграмм. Однако этот метод не столь гибок, как предыдущие, и не будет работать, если строки содержат пробелы или специальные символы.
Пример (не рекомендуемый метод для общего использования):
```javascript
function areAnagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(areAnagrams("listen", "silent")); // true
```
Этот метод идентичен подходу с использованием сортировки и `join`, только это скорее нестандартное решение, которое мы разобрали раньше.
Резюме:
1. Сортировка строк: Самый простой способ — отсортировать символы в строках и сравнить их.
2. Подсчёт символов с использованием объекта или `Map`: Это более эффективный способ, который работает за O(n), так как мы не сортируем строки, а просто подсчитываем символы.
3. Регулярные выражения — подходят только для специфичных случаев (например, без пробелов и символов).
--------------------------------------------------------------------------------------------- 
