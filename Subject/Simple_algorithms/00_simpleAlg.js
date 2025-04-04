
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
---------------------------------------------------------------------------------------------
⋙ ❍ 2 указателя бегают по связ. списку:
---
1. Нахождение середины связного списка
⌛ Задача: Найти середину списка.
🎯 Решение: Используем медленный и быстрый указатели.
```javascript
function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; // slow будет указывать на середину списка
}
```
Объяснение:
- `slow` двигается по 1 шагу.
- `fast` двигается по 2 шагам.
- Когда `fast` дойдет до конца, `slow` будет в середине.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ 2 указателя бегают по связ. списку:
---
2. Нахождение точки начала цикла
⌛ Задача: Если цикл есть, найти узел, с которого он начинается.
🎯 Решение: Используем алгоритм Флойда, но после нахождения встречи запускаем еще один указатель.
```javascript
function detectCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            let pointer = head;
            while (pointer !== slow) {
                pointer = pointer.next;
                slow = slow.next;
            }
            return pointer;
        }
    }

    return null;
}
```
Объяснение:
1. Определяем, есть ли цикл (как в `hasCycle`).
2. Если цикл найден, запускаем новый указатель с `head` и двигаем оба (новый и `slow`) по 1 шагу.
3. Они встретятся в начале цикла.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
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
---------------------------------------------------------------------------------------------
⋙ ❍ 2 указателя бегают по связ. списку:
---
4. Объединение двух отсортированных списков
⌛ Задача: Объединить два отсортированных списка в один отсортированный.
🎯 Решение: Используем два указателя, двигаясь по обоим спискам.
```javascript
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
1. Создаем фиктивный узел (`dummy`), чтобы легко работать с `next`.
2. Двигаем два указателя `l1` и `l2`, добавляя меньший узел в `current`.
3. Добавляем оставшуюся часть, если один из списков закончился.
---------------------------------------------------------------------------------------------
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
---------------------------------------------------------------------------------------------
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
---------------------------------------------------------------------------------------------
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
---------------------------------------------------------------------------------------------
⋙ ❍ 2 указателя бегают по связ. списку:
---
9. Удаление дубликатов из отсортированного списка (без сохранения повторов)
⌛ Задача: Удалить все дубликаты из отсортированного списка (если элемент повторяется, убрать все его копии).
🎯 Решение: Используем два указателя: `prev` (предыдущий) и `current` (текущий).
```javascript
function deleteDuplicates(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (head !== null) {
        if (head.next !== null && head.val === head.next.val) {
            while (head.next !== null && head.val === head.next.val) {
                head = head.next;
            }
            prev.next = head.next;
        } else {
            prev = prev.next;
        }
        head = head.next;
    }

    return dummy.next;
}
```
Объяснение:
- Если `head` и `head.next` одинаковые, пропускаем все дубликаты.
- `prev.next = head.next` удаляет повторяющиеся узлы.
- Работает за O(N), так как проходит по списку один раз.
Вывод:
Все эти решения используют технику двух указателей, но в разных вариациях:
1. Два указателя на разных скоростях (`findMiddle`, `hasCycle`).
2. Один указатель отстает от другого (`removeNthFromEnd`).
3. Два указателя, проходящие по разным спискам (`getIntersectionNode`).
4. Два вспомогательных списка (`partition`).
5. Два указателя для удаления дубликатов (`deleteDuplicates`).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
Поиск подстроки в строке — одна из классических задач в программировании. Вот 5 различных способов решения этой задачи на JavaScript с объяснениями.
10. Встроенный метод `indexOf` (простейший способ)
⌛ Задача: Найти первую позицию подстроки `needle` в строке `haystack`, если она существует, иначе вернуть `-1`.
🎯 Решение:
```javascript
function findSubstring(haystack, needle) {
    return haystack.indexOf(needle);
}

console.log(findSubstring("hello world", "world")); // 6
console.log(findSubstring("hello world", "abc"));   // -1
```
Объяснение:
- `indexOf(needle)` возвращает индекс первого вхождения `needle`.
- Если `needle` нет в `haystack`, вернется `-1`.
- Работает за O(N * M) в худшем случае, где `N` — длина `haystack`, `M` — длина `needle`.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
11. Встроенный метод `includes` (проверка наличия)
⌛ Задача: Проверить, содержится ли подстрока `needle` в `haystack`.
🎯 Решение:
```javascript
function containsSubstring(haystack, needle) {
    return haystack.includes(needle);
}

console.log(containsSubstring("hello world", "world")); // true
console.log(containsSubstring("hello world", "abc"));   // false
```
Объяснение:
- `includes(needle)` просто возвращает `true` или `false`.
- Это удобно, если нужно только проверить наличие, а не искать индекс.
- Работает примерно за O(N * M).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
12. Алгоритм двух указателей (Brute Force)
⌛ Задача: Найти индекс первого вхождения `needle` в `haystack` без использования встроенных функций.
🎯 Решение:
```javascript
function bruteForceSearch(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === m) return i;
    }

    return -1;
}

console.log(bruteForceSearch("hello world", "world")); // 6
console.log(bruteForceSearch("hello world", "abc"));   // -1
```
Объяснение:
1. Проходим по `haystack` от `i = 0` до `i = N - M`.
2. Для каждого `i` проверяем, совпадает ли `needle` с `haystack[i ... i+M]`.
3. Если нашли совпадение, возвращаем `i`.
4. Работает за O(N * M) в худшем случае.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
13. Алгоритм Кнута-Морриса-Пратта (KMP)
⌛ Задача: Улучшить поиск, используя предварительную обработку подстроки `needle` для быстрого пропуска несовпадений.
🎯 Решение:
```javascript
function kmpSearch(haystack, needle) {
    if (needle.length === 0) return 0;

    let lps = computeLPS(needle);
    let i = 0, j = 0;

    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            if (j === needle.length) return i - j;
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1;
}

function computeLPS(pattern) {
    let lps = Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

console.log(kmpSearch("hello world", "world")); // 6
console.log(kmpSearch("hello world", "abc"));   // -1
```
Объяснение:
1. Предварительно строим LPS-массив (`computeLPS`), который помогает пропускать уже проверенные символы.
2. Двигаем два указателя (`i` по `haystack`, `j` по `needle`).
3. Если символы совпали, двигаем оба указателя вперед.
4. Если несовпадение, используем `lps` для быстрого сдвига `j`.
5. Работает за O(N + M).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
14. Алгоритм Рабина-Карпа (поиск с хешированием)
⌛ Задача: Использовать хеш-функцию для быстрого сравнения подстрок.
🎯 Решение:
```javascript
function rabinKarp(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
    if (m > n) return -1;

    let base = 26;
    let mod = 1e9 + 7;

    function hash(s) {
        let h = 0;
        for (let char of s) {
            h = (h * base + char.charCodeAt(0)) % mod;
        }
        return h;
    }

    let needleHash = hash(needle);
    let hayHash = hash(haystack.substring(0, m));

    if (needleHash === hayHash && haystack.substring(0, m) === needle) return 0;

    let power = 1;
    for (let i = 0; i < m - 1; i++) {
        power = (power * base) % mod;
    }

    for (let i = 1; i <= n - m; i++) {
        hayHash = (hayHash - haystack.charCodeAt(i - 1) * power % mod + mod) % mod;
        hayHash = (hayHash * base + haystack.charCodeAt(i + m - 1)) % mod;

        if (hayHash === needleHash && haystack.substring(i, i + m) === needle) {
            return i;
        }
    }

    return -1;
}

console.log(rabinKarp("hello world", "world")); // 6
console.log(rabinKarp("hello world", "abc"));   // -1
```
Объяснение:
1. Вычисляем хеш `needle`.
2. Вычисляем хеш первой подстроки `haystack`.
3. Используем rolling hash: вычисляем новые хеши за O(1), удаляя старый символ и добавляя новый.
4. Сравниваем хеши, а затем проверяем строки на совпадение.
5. Работает в среднем за O(N + M), но в худшем случае O(N * M) при коллизиях.
---
Вывод:
- `indexOf` / `includes` — простейшие и быстрые для маленьких строк.
- `Brute Force` — простой алгоритм, но медленный.
- `KMP` — улучшает поиск с помощью LPS-массива, O(N + M).
- `Rabin-Karp` — полезен для поиска нескольких подстрок, особенно в больших текстах.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
15. Метод `search()` с регулярным выражением
⌛ Задача: Найти индекс первого вхождения подстроки `needle` в строке `haystack`, используя регулярное выражение.
🎯 Решение:
```javascript
function regexSearch(haystack, needle) {
    let match = haystack.search(new RegExp(needle));
    return match !== -1 ? match : -1;
}

console.log(regexSearch("hello world", "world")); // 6
console.log(regexSearch("hello world", "abc"));   // -1
```
Объяснение:
- `search()` возвращает индекс первого совпадения с `needle`.
- Работает быстро, но не оптимально для длинных строк.
- Можно использовать сложные регулярные выражения (например, с `.*`, `\d+` и т.д.).
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
16. Метод `match()` с регулярным выражением
⌛ Задача: Найти все вхождения подстроки `needle` в строке `haystack`.
🎯 Решение:
```javascript
function findAllOccurrences(haystack, needle) {
    let matches = haystack.match(new RegExp(needle, "g"));
    return matches ? matches.length : 0;
}

console.log(findAllOccurrences("banana", "an")); // 2
console.log(findAllOccurrences("hello world", "abc")); // 0
```
Объяснение:
- `match()` с флагом `"g"` находит все вхождения.
- Возвращает массив совпадений или `null`, если совпадений нет.
- Удобно для подсчета количества вхождений.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
17. Метод `slice()` + сравнение
⌛ Задача: Найти индекс первого вхождения `needle` в `haystack`, используя `slice()`.
🎯 Решение:
```javascript
function sliceSearch(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        if (haystack.slice(i, i + m) === needle) {
            return i;
        }
    }

    return -1;
}

console.log(sliceSearch("hello world", "world")); // 6
console.log(sliceSearch("hello world", "abc"));   // -1
```
Объяснение:
- Вместо посимвольного сравнения используем `slice(i, i + m)`.
- Работает за O(N * M) в худшем случае.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
18. Метод `split()` + проверка наличия
⌛ Задача: Проверить, содержится ли подстрока `needle` в `haystack`, используя `split()`.
🎯 Решение:
```javascript
function containsUsingSplit(haystack, needle) {
    return haystack.split(needle).length > 1;
}

console.log(containsUsingSplit("hello world", "world")); // true
console.log(containsUsingSplit("hello world", "abc"));   // false
```
Объяснение:
- `split(needle)` разрежет `haystack` по `needle`.
- Если `needle` найден, длина массива будет > 1.
- Это не самый эффективный способ, но интересный вариант.
---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------
⋙ ❍ Поиск подстроки в строке:
---
19. Метод `map()` + `join()` (альтернативный способ проверки наличия)
⌛ Задача: Проверить, содержится ли `needle` в `haystack`, используя `map()` и `join()`.
🎯 Решение:
```javascript
function checkSubstringMapJoin(haystack, needle) {
    return haystack.split("").map((char, i) => haystack.slice(i, i + needle.length)).join(" ").includes(needle);
}

console.log(checkSubstringMapJoin("hello world", "world")); // true
console.log(checkSubstringMapJoin("hello world", "abc"));   // false
```
Объяснение:
- `split("")` превращает строку в массив символов.
- `map()` создает массив всех возможных подстрок длины `needle.length`.
- `join(" ")` соединяет их в строку.
- `includes(needle)` проверяет наличие искомой подстроки.
---
Вывод:
1. `search()` и `match()` удобны при использовании регулярных выражений.
2. `slice()` помогает обойтись без встроенных методов поиска.
3. `split()` интересен, но не самый эффективный.
4. `map() + join()` — забавный, но нетипичный способ.
---------------------------------------------------------------------------------------------
