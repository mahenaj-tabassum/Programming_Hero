"use strict";
const numbers = [1000, 250];
const empty = [];
function calculateWeeklyTotal(expenses) {
  if (expenses.length === 0) {
    return 0;
  }
  const result = expenses.reduce((acc, number) => {
    let total = acc + number;
    return total;
  }, 0);
  return result;
}
console.log(calculateWeeklyTotal(empty));
