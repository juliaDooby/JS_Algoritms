---------------------------------------------------------------------------------------------
📌 [Простые алгоритмы]:
---------------------
⋙ ❍ 2 указателя бегают по связ. списку:
---
3. Проверка, является ли список палиндромом
⌛ Задача: Проверить, можно ли прочитать список одинаково в обоих направлениях.
🎯 Решение: Найти середину, развернуть вторую половину, затем сравнить.
```javascript
function isPalindrome(head) {
    if (!head || !head.next) return true;

    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = reverseList(slow);
    let firstHalf = head;

    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true;
}

function reverseList(head) {
    let prev = null;
    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
```
Объяснение:
1. Находим середину списка.
2. Разворачиваем вторую половину списка.
3. Сравниваем первую и вторую половины.
---------------------------------------------------------------------------------------------
