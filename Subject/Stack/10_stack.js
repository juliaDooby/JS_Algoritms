---------------------------------------------------------------------------------------------
⋙ ❍ Стек:
---
🔟 История браузера (Back button)
🎯 Решение:
```js
class BrowserHistory {
  constructor() {
    this.history = [];
  }

  visit(page) {
    this.history.push(page);
  }

  back() {
    return this.history.pop();
  }
}

const browser = new BrowserHistory();
browser.visit("google.com");
browser.visit("stackoverflow.com");
console.log(browser.back()); // "stackoverflow.com"
```
Стек – полезная структура данных для отката изменений, парсинга выражений, управления вызовами функций.
---------------------------------------------------------------------------------------------
