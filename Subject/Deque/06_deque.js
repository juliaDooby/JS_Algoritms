---------------------------------------------------------------------------------------------
⋙ ❍ Дек:
---
6️⃣ Симуляция кэша (LRU Cache)
⌛ Задача: Реализовать LRU-кеш.
🎯 Решение:
```js
class LRUCache {
  constructor(size) {
    this.deque = new Deque();
    this.size = size;
    this.cache = new Set();
  }

  accessPage(page) {
    if (this.cache.has(page)) {
      this.deque.popFront(page);
      this.cache.delete(page);
    } else if (this.deque.size() === this.size) {
      this.cache.delete(this.deque.popBack());
    }

    this.deque.pushFront(page);
    this.cache.add(page);
  }

  display() { console.log([...this.deque.items]); }
}

const cache = new LRUCache(3);
cache.accessPage(1);
cache.accessPage(2);
cache.accessPage(3);
cache.accessPage(4);
cache.display(); // [4, 3, 2]
```
---------------------------------------------------------------------------------------------
