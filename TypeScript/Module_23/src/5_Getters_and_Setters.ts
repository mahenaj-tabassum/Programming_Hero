/** ===================================================
 * Getters & Setters
 * => Let read and update private data safely
 *
 * A getter is a method marked `get` that is read like a property and returns a value.
 * 
 *  A setter is a method marked set that is assigned to 
 *  like a property and receives the assigned value, allowing 
 *  it to be validated or rejected before any field changes.
 * 
 * Getter (get) → Reads or returns a value.
 * Setter (set) → Updates a value, usually with validation.
 *
 * A getter behaves like a property, even though it's actually running a method.
 * ===================================================*/

// ========================================
//  Getter
// ========================================

class BankAccount {
  constructor(
    public ownerName: string,
    private balance: number,
  ) {}

  // Getter
  get currentBalance() {
    return this.balance;
  }
}
const account = new BankAccount("Alex", 5000);
console.log(account.currentBalance); // account.get currentBalance();

// ========================================
//  Setter
// ========================================
class Student {
  constructor(
    public name: string,
    private _mark: number,
  ) {}

  get mark() {
    return this._mark;
  }
  // setter
  set changeMark(newMark: number) {
    this._mark = newMark; // setters can't return a value
  }
}

const student = new Student("Leo", 98);

student.changeMark = 100;
console.log(student);

// ========================
// Real Example: Bank Account
// ========================

class BankAccount2 {
  constructor(
    public owner: string,
    private _balance: number,
  ) {}
  get balance() {
    return this._balance;
  }
  set balance(amount: number) {
    if (amount >= 0) {
      this._balance = amount;
    } else {
      console.log("Balance can't be negative");
    }
  }
}

const account2 = new BankAccount2("Leo", 1000);
console.log(account2.balance);

account2.balance = 2000;
console.log(account2.balance);

account2.balance = -2000;
console.log(account2.balance);
