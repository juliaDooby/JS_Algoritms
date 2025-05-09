---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Поиск в объектах (Hash Search)
---
Если данные представлены в виде объекта или карты, можно использовать прямой доступ по ключу, что делает поиск мгновенным.
🎯 Реализация:
```javascript
const data = {
  alice: 25,
  bob: 30,
  charlie: 35,
};

console.log(data['bob']); // 30
console.log(data['dave']); // undefined
```
Объяснение:
- В объектах (или структурах типа `Map`) доступ по ключу имеет сложность \( O(1) \).
- Если ключ отсутствует, возвращается `undefined`.
---------------------------------------------------------------------------------------------  
