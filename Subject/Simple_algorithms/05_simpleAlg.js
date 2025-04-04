---------------------------------------------------------------------------------------------
⋙ ❍ 2 указателя бегают по связ. списку:
---
5. Удаление n-го узла с конца списка
⌛ Задача: Удалить `n`-й узел с конца списка за один проход.
🎯 Решение: Используем два указателя, второй начинает движение позже первого.
```javascript
function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
}
```
Объяснение:
1. `first` и `second` стартуют с фиктивного узла.
2. `first` двигается на `n + 1` шагов вперед.
3. Двигаем `first` и `second`, пока `first` не достигнет конца.
4. `second.next = second.next.next` удаляет `n`-й узел с конца.
---------------------------------------------------------------------------------------------
