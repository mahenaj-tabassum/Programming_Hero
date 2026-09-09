/* ================================================
 * Access Modifiers & Encapsulation
 * 1. What is encapsulation?
 * => Encapsulation means keeping an object;s data ad behavior together 
 * while controlling who can access the data
 * 
 * There are 3 access modifiers.
 * 1. public
 * 2. private   - Only inside the same class
 * 3. protected - Inside the class and its child classes
/* ================================================ */

// ================================================
// Public - (Default)
// ================================================
class Student {
  constructor(
    public name: string,
    public email: string,
  ) {}
}
const student1 = new Student("Alex", "alex@gmail.com");
console.log(student1.name);
console.log(student1.email);

// Even this work
student1.name = "Leo";
console.log(student1); // name = "Leo"

// ================================================
// Private
// ================================================
class BankAccount {
  constructor(
    public owner: string,
    private balance: number,
  ) {}
  showBalance() {
    console.log(this.balance);
  }
}

// Create an account
const account = new BankAccount("Leo Jonathon", 599);
console.log(account);
// console.log(account.balance); // Property 'balance' is private...
account.showBalance();

// Real Encapsulation Example
class BankAccount2 {
  constructor(
    public owner: string,
    private balance: number,
  ) {}
  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }
  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
  showBalance() {
    console.log(`${this.owner} has ${this.balance} taka.`);
  }
}

const account2 = new BankAccount2("Mahenaj", 1000);

account2.deposit(500);
account2.withdraw(300);

account2.showBalance();

// ================================================
// Protected
// ================================================

class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// Now create a child class
class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}
const dog = new Dog("Buddy");
console.log(dog);
dog.bark();

class Player {
  constructor(private score: number) {}
  addScore(points: number) {
    this.score += points;
  }
  showScore() {
    console.log(`Score: ${this.score}`);
  }
}

// Paypal account
class Paypal {
  public phone: string;
  private pin: number;
  private balance: number;

  constructor(phone: string, pin: number, balance: number) {
    this.phone = phone;
    this.pin = pin;
    this.balance = balance;
  }
  showBalance(pin: number) {
    if (this.pin === pin) {
      return this.balance;
    }
    return `Pin is required!`;
  }
}
const paypalAccount = new Paypal("0123456789", 321, 500);

console.log(paypalAccount);
console.log(paypalAccount.showBalance(321));
