---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
4️⃣ Медиана потока чисел (Median Stream)
⌛ Задача: Поддерживать поток чисел и находить медиану.
🎯 Решение:
Используем две очереди с приоритетом (макс-кучу и мин-кучу):
```js
class MedianFinder {
  constructor() {
    this.low = new MaxHeap();
    this.high = new MinHeap();
  }

  addNum(num) {
    this.low.insert(num, -num);
    this.high.insert(this.low.extractMax().element, this.low.extractMax().priority);
    if (this.low.size() < this.high.size()) {
      this.low.insert(this.high.extractMin().element, -this.high.extractMin().priority);
    }
  }

  findMedian() {
    return this.low.size() > this.high.size() ? this.low.peek().element : (this.low.peek().element + this.high.peek().element) / 2;
  }
}
```
Очередь с приоритетом полезна для обработки задач, алгоритмов поиска пути, оптимизации маршрутов и других задач, где важен порядок приоритетов!
---------------------------------------------------------------------------------------------
