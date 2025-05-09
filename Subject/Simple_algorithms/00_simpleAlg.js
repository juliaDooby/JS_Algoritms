---------------------------------------------------------------------------------------------
📌 [Простые алгоритмы]:
---------------------
⋙ ❍ 2 указателя бегают по связ. списку:
---
Задачи с двумя указателями (two pointers) в связном списке встречаются довольно часто. Два указателя могут двигаться с разной скоростью, останавливаться в разных местах или идти навстречу друг другу.
0. Определение наличия цикла в связном списке (Floyd’s Cycle Detection)
⌛ Задача: Определить, содержит ли связанный список цикл.
🎯 Решение: Используем два указателя: `slow` (медленный) и `fast` (быстрый).
```javascript
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}
```
Объяснение:
- `slow` двигается по 1 узлу за шаг.
- `fast` двигается по 2 узла за шаг.
- Если есть цикл, `fast` догонит `slow`, и мы вернем `true`.
- Если `fast` достигнет конца (`null`), цикла нет.
---------------------------------------------------------------------------------------------
