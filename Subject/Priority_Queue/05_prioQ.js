---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
5️⃣ Симуляция процессов в ОС (с приоритетами) в JavaScript
⌛ Задача:
Реализовать планировщик процессов, в котором:
- Каждый процесс имеет приоритет (чем меньше число, тем выше приоритет).
- Планировщик сначала выполняет более важные процессы.
- Если процессы с одинаковым приоритетом, они выполняются в порядке добавления.
- После выполнения процесс удаляется из очереди.
🎯 Решение:
Используем очередь с приоритетом (`Priority Queue`), основанную на минимальной куче (Min Heap).
```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(process, priority) {
    this.heap.push({ process, priority });
    this._bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._sinkDown(0);

    return min;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  _sinkDown(index) {
    let leftChild, rightChild;
    let smallest = index;

    while (true) {
      leftChild = 2 * index + 1;
      rightChild = 2 * index + 2;

      if (leftChild < this.heap.length && this.heap[leftChild].priority < this.heap[smallest].priority) {
        smallest = leftChild;
      }

      if (rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[smallest].priority) {
        smallest = rightChild;
      }

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class ProcessScheduler {
  constructor() {
    this.queue = new MinHeap();
  }

  addProcess(name, priority) {
    console.log(`Процесс "${name}" добавлен с приоритетом ${priority}`);
    this.queue.insert(name, priority);
  }

  runNextProcess() {
    if (this.queue.isEmpty()) {
      console.log("Нет процессов для выполнения.");
      return;
    }
    const { process, priority } = this.queue.extractMin();
    console.log(`🔄 Выполняется процесс "${process}" с приоритетом ${priority}`);
  }
}

// 🔥 Симуляция работы планировщика процессов:
const scheduler = new ProcessScheduler();

scheduler.addProcess("Антивирус", 2);
scheduler.addProcess("Видео-рендеринг", 5);
scheduler.addProcess("Системное обновление", 1);
scheduler.addProcess("Музыка", 4);

scheduler.runNextProcess(); // Выполняется "Системное обновление" (приоритет 1)
scheduler.runNextProcess(); // Выполняется "Антивирус" (приоритет 2)
scheduler.runNextProcess(); // Выполняется "Музыка" (приоритет 4)
scheduler.runNextProcess(); // Выполняется "Видео-рендеринг" (приоритет 5)
scheduler.runNextProcess(); // Нет процессов для выполнения
```
---
Объяснение:
1. Используем очередь с приоритетом (Min Heap):
   - Чем меньше число приоритета, тем выше важность процесса.
   - Min Heap автоматически сортирует процессы, поддерживая их в правильном порядке.
2. Алгоритм работы:
   - addProcess(name, priority) — добавляет процесс в очередь.
   - runNextProcess() — выполняет наиболее важный процесс и удаляет его.
3. Симуляция работы ОС:
   - Сначала выполняются критически важные процессы.
   - Затем менее важные процессы (например, музыка, рендеринг видео).
---
📌 Итог
✔ Такой подход используется в операционных системах для управления задачами.
✔ Позволяет эффективно планировать работу процессора.
✔ Приоритеты управляют порядком выполнения процессов. 
---------------------------------------------------------------------------------------------
