---------------------------------------------------------------------------------------------
⋙ ❍ Основные структуры данных:
---
8️⃣ Хеш-таблица: Операции вставки и поиска
⌛ Задача: Реализуйте простую хеш-таблицу с методами вставки и поиска.
🎯 Решение:
```js
class HashTable {
  constructor(size = 4) {
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  insert(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  search(key) {
    const index = this.hash(key);
    return this.table[index];
  }
}

const hashTable = new HashTable();
hashTable.insert('name', 'John');
hashTable.insert('age', 30);
console.log(hashTable.search('name')); // John
```
Объяснение:
- Хеш-таблица использует хеш-функцию для вычисления индекса элемента. В этой простейшей версии данные сохраняются в массиве.
---------------------------------------------------------------------------------------------
