/**
 * 1. What is class?
 * => A class is a blueprint for creating objects. It defines the properties(data) and
 * methods(behavior) that every object created from that call will have
 *
 * 2. What does a constructor do?
 * => It initialize the object's properties when new is used
 *
 * => A constructor is a special method that automatically runs when a new object is created with `new`.
 * it initializes the object's properties with the values passed during creation
 *
 * 3. Why do we make property `private`?
 * => `private` is about restricting direct access from outside the class
 *
 * => We make a property `private` to hide it from code outside the class. Only methods
 * inside the same class can directly read or change that property, which helps protect
 * the object's data and maintain control over how it is modified.
 *
 */

// ======================================
// Challenge - 1
// ======================================
class Student {
  public name: string;
  private _mark: number;
  constructor(name: string, mark: number) {
    ((this.name = name), (this._mark = mark));
  }
  get getMark() {
    return `Your mark is ${this._mark}`;
  }
  updateMark(upMark: number) {
    return (this._mark = upMark);
  }
}

const student = new Student("Alex", 85);
console.log(student.name);
console.log(student.getMark);
console.log(student.updateMark(95));

// ======================================
// Challenge - 2
// ======================================

class BankAccount {
  public owner: string;
  private _balance: number;
  constructor(owner: string, balance: number) {
    this.owner = owner;
    this._balance = balance;
  }
  get getBalance() {
    return `Your Bank Balance is ${this._balance} taka`;
  }
  deposit(amount: number) {
    if (amount <= 0) {
      return "Invalid amount";
    }
    return (this._balance += amount);
  }
  withdraw(amount: number) {
    if (amount > this._balance) {
      return "Insufficient Amount";
    }
    return (this._balance -= amount);
  }
}

const account = new BankAccount("Leo", 5000);
account.deposit(3040);
account.withdraw(5);
console.log(account.getBalance);

// ======================================
// Challenge - 3
// ======================================
class Book {
  title: string;
  private _price: number;
  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  applyDiscount(percent: number) {
    const discountPrice = this._price - this._price * (percent / 100);
    this._price = discountPrice;
  }
  get getPrice() {
    return `Book price is ${this._price}`;
  }
}
const book = new Book("Atomic Habits", 400);
book.applyDiscount(25);
console.log(book.getPrice);
