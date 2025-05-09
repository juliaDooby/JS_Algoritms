---------------------------------------------------------------------------------------------
📌 [Простые алгоритмы]:
---------------------
⋙ ❍ 2 указателя бегают по связ. списку:
---
8. Поиск пересечения двух списков
⌛ Задача: Найти точку, где два списка пересекаются (или вернуть `null`).
🎯 Решение: Используем два указателя, которые сначала проходят свои списки, затем меняются местами.
```javascript
function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }

    return a; // либо точка пересечения, либо null
}
```
Объяснение:
- Если списки разной длины, указатели дойдут до конца и поменяются местами.
- Это гарантирует, что они встретятся в точке пересечения (или в `null`, если пересечения нет).
---------------------------------------------------------------------------------------------
