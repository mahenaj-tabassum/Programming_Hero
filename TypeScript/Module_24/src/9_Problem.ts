// ==================================================
//      Bank Transaction Processor
// ==================================================

type Deposit = {
  type: "deposit";
  amount: number;
};
type Withdraw = {
  type: "withdraw";
  amount: number;
};
type Transaction = Deposit | Withdraw;

function processTransaction(amount: number, transaction: Transaction) {
  if (transaction.type === "deposit") {
    return (amount += transaction.amount);
  } else {
    return transaction.amount > amount
      ? amount
      : (amount -= transaction.amount);
  }
}
console.log(processTransaction(5000, { type: "withdraw", amount: 6000 }));
