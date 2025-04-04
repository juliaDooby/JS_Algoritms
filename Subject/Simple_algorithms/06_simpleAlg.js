---------------------------------------------------------------------------------------------
📌 [Простые алгоритмы]:
---------------------
⋙ ❍ 2 указателя бегают по связ. списку:
---
6. Слияние K отсортированных списков (метод слияния 2-х списков)
⌛ Задача: Объединить `K` отсортированных списков в один отсортированный.
🎯 Решение: Используем попарное слияние с `mergeTwoLists`.
```javascript
function mergeKLists(lists) {
    if (lists.length === 0) return null;

    while (lists.length > 1) {
        let mergedLists = [];

        for (let i = 0; i < lists.length; i += 2) {
            let l1 = lists[i];
            let l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }

        lists = mergedLists;
    }

    return lists[0];
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}
```
Объяснение:
- Попарно объединяем списки, пока не останется один.
- Используем `mergeTwoLists` из предыдущей задачи.
- Сложность O(NlogK), где `N` — общее количество узлов, `K` — число списков.
---------------------------------------------------------------------------------------------
