--------------------------------------------------------------------------------------------- 
⋙ ❍ Рандомизированные алгоритмы:
---
15. Задача: Проверка на простоту с использованием рандомизированного теста
⌛ Задача: Проверить, является ли число простым, используя рандомизированный тест Миллера-Рабина.
🎯 Решение:
```javascript
function isPrime(n, k = 5) {
    if (n <= 1) return false;
    if (n === 2) return true;

    if (n % 2 === 0) return false;

    let d = n - 1;
    let r = 0;
    while (d % 2 === 0) {
        d /= 2;
        r++;
    }

    for (let i = 0; i < k; i++) {
        let a = Math.floor(Math.random() * (n - 1)) + 1;
        let x = modPow(a, d, n);

        if (x === 1 || x === n - 1) continue;

        let isComposite = true;
        for (let j = 0; j < r - 1; j++) {
            x = modPow(x, 2, n);
            if (x === n - 1) {
                isComposite = false;
                break;
            }
        }
        if (isComposite) return false;
    }

    return true;
}

function modPow(base, exp, mod) {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2 === 1) result = (result * base) % mod;
        base = (base * base) % mod;
        exp = Math.floor(exp / 2);
    }
    return result;
}

console.log(isPrime(11));  // Выводит true
```
Объяснение: Алгоритм Миллера-Рабина использует случайные числа для тестирования, является ли число простым. Он выполняет несколько раундов проверки с различными случайными числами.
--------------------------------------------------------------------------------------------- 
