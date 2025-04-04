---------------------------------------------------------------------------------------------
⋙ ❍ 2 указателя бегают по связ. списку:
---
7. Разделение списка на две части по X
⌛ Задача: Разделить список на две части так, чтобы все элементы < `X` шли перед элементами ≥ `X`, сохраняя порядок.
🎯 Решение: Используем два указателя и два вспомогательных списка.
```javascript
function partition(head, x) {
    let beforeHead = new ListNode(0);
    let afterHead = new ListNode(0);
    let before = beforeHead, after = afterHead;

    while (head !== null) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }

    after.next = null; // Разрываем связь с предыдущими узлами
    before.next = afterHead.next; // Соединяем два списка

    return beforeHead.next;
}
```
Объяснение:
- `before` хранит узлы < `X`, `after` — узлы ≥ `X`.
- Затем соединяем `before.next = afterHead.next`.
- Используем фиктивные узлы для удобства.
---------------------------------------------------------------------------------------------
