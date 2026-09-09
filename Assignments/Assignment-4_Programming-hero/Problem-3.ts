const numbers = [200, 450, 100];
const empty = [];
function calculateWeeklyTotal(expenses: number[]): number {
  if (expenses.length === 0) {
    return 0;
  }
  const result = expenses.reduce((acc, number) => {
    let total = acc + number;
    return total;
  }, 0);
  return result;
}

console.log(calculateWeeklyTotal(numbers));
