---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
Что такое очередь с приоритетом?
Очередь с приоритетом — это структура данных, похожая на обычную очередь, но с одной особенностью: элементы извлекаются не в порядке добавления, а в порядке их приоритета.
🛠 Основные операции
1. enqueue (добавление элемента с приоритетом)
2. dequeue (извлечение элемента с наивысшим приоритетом)
3. peek (просмотр элемента с наивысшим приоритетом, без удаления)
4. isEmpty (проверка на пустоту)
5. size (количество элементов)
---
🎯 Реализация очереди с приоритетом
Обычно очередь с приоритетом реализуется с массивом (менее эффективно) или бинарной кучей (более эффективно).
Простая реализация на массиве (O(n) на добавление, O(1) на извлечение)
```js
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.queue.sort((a, b) => a.priority - b.priority); // Сортируем по приоритету (O(n log n))
  }

  dequeue() {
    return this.queue.shift(); // Удаляем элемент с наивысшим приоритетом (O(1))
  }

  peek() {
    return this.queue[0]; // Возвращаем элемент с наивысшим приоритетом без удаления
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

const pq = new PriorityQueue();
pq.enqueue("Легкая задача", 3);
pq.enqueue("Срочная задача", 1);
pq.enqueue("Средняя задача", 2);
console.log(pq.dequeue()); // { element: 'Срочная задача', priority: 1 }
```
---------------------------------------------------------------------------------------------
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
---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
2️⃣ Обработка задач с разными приоритетами
⌛ Задача: Написать систему обработки задач, где более важные выполняются первыми.
🎯 Решение:
```js
class TaskScheduler {
  constructor() {
    this.pq = new MinHeap();
  }

  addTask(task, priority) {
    this.pq.insert(task, priority);
  }

  executeNextTask() {
    return this.pq.extractMin();
  }
}

const scheduler = new TaskScheduler();
scheduler.addTask("Fix bug", 1);
scheduler.addTask("Develop feature", 2);
console.log(scheduler.executeNextTask()); // Fix bug
```
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
3️⃣ Реализация алгоритма Дейкстры
⌛ Задача: Найти кратчайший путь в графе с помощью очереди с приоритетом.
🎯 Решение:
```js
function dijkstra(graph, start) {
  const pq = new MinHeap();
  const distances = {};
  for (let node in graph) distances[node] = Infinity;
  distances[start] = 0;

  pq.insert(start, 0);

  while (pq.heap.length) {
    let { element: current } = pq.extractMin();

    for (let neighbor in graph[current]) {
      let newDist = distances[current] + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.insert(neighbor, newDist);
      }
    }
  }
  return distances;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(dijkstra(graph, "A"));
```
---------------------------------------------------------------------------------------------
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
---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
6️⃣ Оптимальное планирование задач на сервере
⌛ Задача: Реализовать систему планирования задач на сервере, где задачи с более высоким приоритетом выполняются первыми.
🎯 Решение:
```js
class TaskScheduler {
  constructor() {
    this.pq = new MinHeap();
  }

  addTask(taskName, priority) {
    this.pq.insert(taskName, priority);
  }

  runNextTask() {
    const nextTask = this.pq.extractMin();
    return nextTask ? `Выполняется: ${nextTask.element}` : "Нет задач";
  }
}

const server = new TaskScheduler();
server.addTask("Обновить БД", 2);
server.addTask("Запустить бэкап", 1);
server.addTask("Очистить логи", 3);

console.log(server.runNextTask()); // Выполняется: Запустить бэкап
console.log(server.runNextTask()); // Выполняется: Обновить БД
```
Объяснение:
- Каждая задача имеет приоритет.
- Сервер выполняет задачи в порядке их важности.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
7️⃣ Обработка заявок в службе поддержки
⌛ Задача: Написать систему обработки заявок, где **VIP-клиенты получают помощь быстрее.
🎯 Решение:
```js
class SupportQueue {
  constructor() {
    this.pq = new MinHeap();
  }

  addRequest(clientName, priority) {
    this.pq.insert(clientName, priority);
  }

  processNextRequest() {
    const nextClient = this.pq.extractMin();
    return nextClient ? `Обслуживается клиент: ${nextClient.element}` : "Нет запросов";
  }
}

const support = new SupportQueue();
support.addRequest("Обычный клиент", 3);
support.addRequest("VIP-клиент", 1);
support.addRequest("Премиум-клиент", 2);

console.log(support.processNextRequest()); // Обслуживается клиент: VIP-клиент
console.log(support.processNextRequest()); // Обслуживается клиент: Премиум-клиент
```
Объяснение:
- VIP-клиенты получают более высокий приоритет (меньшие значения).
- Используем приоритетную очередь для быстрой обработки.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
8️⃣ Система бронирования билетов
⌛ Задача: Написать систему бронирования билетов, где клиенты с **платными подписками** получают приоритет при покупке.
🎯 Решение:
```js
class TicketQueue {
  constructor() {
    this.pq = new MinHeap();
  }

  bookTicket(clientName, membershipType) {
    const priority = membershipType === "VIP" ? 1 : membershipType === "Premium" ? 2 : 3;
    this.pq.insert(clientName, priority);
  }

  processBooking() {
    const client = this.pq.extractMin();
    return client ? `Билет оформлен для: ${client.element}` : "Нет заявок";
  }
}

const tickets = new TicketQueue();
tickets.bookTicket("Анна", "Standard");
tickets.bookTicket("Иван", "VIP");
tickets.bookTicket("Олег", "Premium");

console.log(tickets.processBooking()); // Билет оформлен для: Иван
console.log(tickets.processBooking()); // Билет оформлен для: Олег
```
Объяснение:
- VIP > Premium > Standard (меньший приоритет — выше приоритет).
- VIP-клиенты первыми получают билеты.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
9️⃣ Алгоритм A* (Поиск пути в лабиринте)
⌛ Задача: Реализовать поиск кратчайшего пути в лабиринте с использованием A* (A-star).
🎯 Решение (упрощённый вариант):
```js
function aStar(start, goal, graph) {
  const pq = new MinHeap();
  pq.insert(start, 0);
  const cameFrom = {};
  const costSoFar = { [start]: 0 };

  while (pq.heap.length) {
    let { element: current } = pq.extractMin();
    if (current === goal) break;

    for (let neighbor in graph[current]) {
      let newCost = costSoFar[current] + graph[current][neighbor];
      if (!(neighbor in costSoFar) || newCost < costSoFar[neighbor]) {
        costSoFar[neighbor] = newCost;
        let priority = newCost;
        pq.insert(neighbor, priority);
        cameFrom[neighbor] = current;
      }
    }
  }

  return cameFrom;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

console.log(aStar("A", "D", graph));
```
Объяснение:
- A* ищет путь к цели, используя приоритетную очередь.
- Находит оптимальный маршрут в графе.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Очередь с приоритетом:
---
🔟 Очередь задач для робота на складе
⌛ Задача: Реализовать систему управления складским роботом, который выполняет **более срочные задачи раньше.
🎯 Решение:
```js
class WarehouseRobot {
  constructor() {
    this.taskQueue = new MinHeap();
  }

  addTask(task, priority) {
    this.taskQueue.insert(task, priority);
  }

  processTask() {
    const nextTask = this.taskQueue.extractMin();
    return nextTask ? `Робот выполняет: ${nextTask.element}` : "Нет задач";
  }
}

const robot = new WarehouseRobot();
robot.addTask("Переместить ящик A", 2);
robot.addTask("Срочная доставка", 1);
robot.addTask("Распаковка товаров", 3);

console.log(robot.processTask()); // Робот выполняет: Срочная доставка
console.log(robot.processTask()); // Робот выполняет: Переместить ящик A
```
Объяснение:
- Более срочные задачи выполняются первыми.
- Приоритетная очередь позволяет управлять задачами эффективно.
Итог
Очередь с приоритетом — мощная структура данных, которую можно использовать:
- Для управления задачами в серверных системах.
- Для алгоритмов поиска пути (A* и Dijkstra).
- В службах поддержки, логистике, бронировании билетов.
- В искусственном интеллекте (AI), робототехнике, планировании маршрутов.
⚡ Где ещё можно использовать?
- Система управления лифтом 🚀
- Распределение CPU-процессов 💻
- Оптимизация рекламных аукционов 📊
> Очереди с приоритетом помогают оптимально управлять ресурсами и ускорять алгоритмы.
---------------------------------------------------------------------------------------------
