// =================================================
// TypeScript OOP - Class Notes (Revision Version)
// =================================================

// A class is a blueprint (template) for creating objects.
// Think of it like a cookie cutter 🍪.
// Class = Blueprint
// Object = Actual cookie

// -------------------------------------------------
// Without a Class
// -------------------------------------------------

// You would have to repeat similar objects.

const student1 = {
  name: "Rafi",
  age: 20,
};

const student2 = {
  name: "Amina",
  age: 22,
};

// Problem:
// Repeating the same structure again and again.

// =================================================
// Basic Class
// =================================================

class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Creating objects using the class

const student3 = new Student("Rafi", 20);

console.log(student3);

// -------------------------------------------------
// Quick Memory
// -------------------------------------------------

// class → Blueprint
// new → Creates a new object
// constructor → Runs automatically
// this → Current object being created

// =================================================
// Constructor
// =================================================

// A constructor is a special function that runs
// automatically whenever a new object is created.

class StudentInfo {
  fullName: string;
  gpa: number;
  schoolName: string;
  email: string;

  constructor(
    fullName: string,
    gpa: number,
    schoolName: string,
    email: string
  ) {
    this.fullName = fullName;
    this.gpa = gpa;
    this.schoolName = schoolName;
    this.email = email;
  }

  introduce() {
    console.log(`Hallo! Ich bin ${this.fullName}`);
  }
}

const studentInfo1 = new StudentInfo(
  "Alex John",
  5,
  "Oxford",
  "alex@gmail.com"
);

console.log(studentInfo1);

studentInfo1.introduce();

// =================================================
// this Keyword
// =================================================

// "this" refers to the current object.
//
// Example:
//
// this.fullName = fullName;
//
// Means:
// Put the value into THIS object's fullName property.

// =================================================
// Parameter Properties (Shorter Syntax)
// =================================================

// Instead of declaring properties separately,
// TypeScript can create them automatically.

class StudentInfo2 {
  constructor(
    public name: string,
    public age: number
  ) {}
}

const student4 = new StudentInfo2("Amina", 22);

console.log(student4);

// Behind the scenes, TypeScript creates:
//
// name: string;
// age: number;
//
// and assigns them automatically.

// =================================================
// Methods
// =================================================

// A method is simply a function that belongs
// to a class.

class BankAccount {
  constructor(
    public owner: string,
    public balance: number
  ) {}

  // Deposit money

  deposit(amount: number) {
    this.balance += amount;
    return this.balance;
  }

  // Withdraw money

  withdraw(amount: number) {
    this.balance -= amount;
    return this.balance;
  }

  // Show current balance

  showBalance() {
    console.log(`${this.owner} has ${this.balance} taka.`);
  }
}

const account1 = new BankAccount("Mahenaj", 1000000);

console.log(account1.deposit(1000000));

console.log(account1.withdraw(100000));

account1.showBalance();

// =================================================
// Expected Output
// =================================================
//
// Student { name: 'Rafi', age: 20 }
//
// StudentInfo {
//   fullName: 'Alex John',
//   gpa: 5,
//   schoolName: 'Oxford',
//   email: 'alex@gmail.com'
// }
//
// Hallo! Ich bin Alex John
//
// StudentInfo2 { name: 'Amina', age: 22 }
//
// 2000000
// 1900000
// Mahenaj has 1900000 taka.

// =================================================
// Revision Cheat Sheet
// =================================================

/*
Class
→ Blueprint for objects

Object
→ Instance created from a class

new
→ Creates a new object

constructor
→ Special function that runs automatically

this
→ Current object

Method
→ Function inside a class

Long Syntax

class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

Short Syntax

class Student {
  constructor(public name: string) {}
}
*/

// =================================================
// Common Interview Questions
// =================================================

/*
Q1: What is a class?
A: A blueprint for creating objects.

Q2: What does "new" do?
A: It creates a new instance and calls the constructor.

Q3: What is "this"?
A: It refers to the current object being created or used.

Q4: What is the difference between a function and a method?
A:
Function → Independent
Method → Function inside a class/object
//   All object related and class related functions are called method


Q5: Why use parameter properties?
A: They reduce boilerplate by creating and assigning properties automatically.
*/