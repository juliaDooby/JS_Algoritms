---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
1️⃣ Реализация приоритетной очереди на куче (heap)
⌛ Задача: Реализовать приоритетную очередь с использованием бинарной кучи для оптимального времени работы.
🎯 Решение (O(log n) на добавление и удаление):
```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(element, priority) {
    this.heap.push({ element, priority });
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  sinkDown(index) {
    let leftChild, rightChild, minIndex;
    while (true) {
      leftChild = 2 * index + 1;
      rightChild = 2 * index + 2;
      minIndex = index;

      if (leftChild < this.heap.length && this.heap[leftChild].priority < this.heap[minIndex].priority) {
        minIndex = leftChild;
      }
      if (rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[minIndex].priority) {
        minIndex = rightChild;
      }
      if (minIndex === index) break;
      [this.heap[minIndex], this.heap[index]] = [this.heap[index], this.heap[minIndex]];
      index = minIndex;
    }
  }
}

const pq = new MinHeap();
pq.insert("Task A", 2);
pq.insert("Task B", 1);
pq.insert("Task C", 3);
console.log(pq.extractMin()); // { element: 'Task B', priority: 1 }
```
---------------------------------------------------------------------------------------------
