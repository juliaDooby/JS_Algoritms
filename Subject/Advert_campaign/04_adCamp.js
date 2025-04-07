--------------------------------------------------------------------------------------------- 
⋙ ❍ Задача «Рекламная кампания»:
---
4. ⌛ Задача: Сравнение эффективности двух рекламных кампаний
Условие:
Есть данные по расходам и доходам двух рекламных кампаний. Нужно определить, какая кампания была более эффективной с точки зрения дохода на каждый потраченный рубль.
🎯 Решение:
```javascript
function calculateROI(revenue, expense) {
  return revenue / expense;
}

let campaign1Revenue = 10000, campaign1Expense = 5000;
let campaign2Revenue = 12000, campaign2Expense = 7000;

let campaign1ROI = calculateROI(campaign1Revenue, campaign1Expense);
let campaign2ROI = calculateROI(campaign2Revenue, campaign2Expense);

if (campaign1ROI > campaign2ROI) {
  console.log("Кампания 1 была более эффективной.");
} else {
  console.log("Кампания 2 была более эффективной.");
}
```
Объяснение:
Для оценки эффективности кампании используется коэффициент ROI (Return on Investment), который вычисляется как отношение дохода к расходам.
--------------------------------------------------------------------------------------------- 
