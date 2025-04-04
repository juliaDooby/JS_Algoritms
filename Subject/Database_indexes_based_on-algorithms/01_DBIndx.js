---------------------------------------------------------------------------------------------  
⋙ ❍ ⌛ Задача: Индексы бд на алгоритмах:
---
1. Индексы с использованием хэш-таблиц
Хэш-таблица использует хэш-функцию для вычисления индекса в массиве, где каждый ключ будет хранить своё значение. Это позволяет делать поиск, вставку и удаление за O(1) в среднем случае.
🎯 Решение: Реализация хэш-таблицы
```javascript
class HashTable {
  constructor(size = 100) {
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.table.length;
    }
    return hash;
  }

  insert(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  search(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return null;

    for (const [storedKey, value] of bucket) {
      if (storedKey === key) return value;
    }
    return null;
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

const hashTable = new HashTable();
hashTable.insert("name", "Alice");
hashTable.insert("age", 25);
hashTable.insert("country", "USA");

console.log(hashTable.search("age")); // 25
console.log(hashTable.search("country")); // "USA"
hashTable.delete("age");
console.log(hashTable.search("age")); // null
```
Объяснение:
- В хэш-таблице мы используем массив для хранения элементов, а каждый элемент вычисляется с использованием хэш-функции.
- Хэш-функция генерирует индекс на основе строки ключа.
- В случае коллизий (когда два ключа хэшируются в одинаковый индекс) мы используем массив внутри ячейки для хранения пары ключ-значение.
- Методы `insert`, `search` и `delete` работают с хэш-таблицей с использованием индекса.
---------------------------------------------------------------------------------------------  
