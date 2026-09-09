"use strict";
/**
 * ============================================================
 * TypeScript Basics — Recap
 * Topics:
 * 1. Primitive Types
 * 2. Arrays
 * 3. Objects
 * 4. Tuples
 * 5. Functions
 * 6. Rest & Spread
 * 7. Destructuring
 * 8. Union Types
 * 9. Special Types
 * ============================================================
 */
// ============================================================
// 1. Primitive Types
// ============================================================
let fullName = "Mahenaj";
let age = 20;
let isStudent = true;
console.log(fullName, age, isStudent);
// ============================================================
// 2. Arrays
// ============================================================
// Array of strings
const students = ["Leo", "Jack"];
// Array of numbers
const numbers = [1, 2, 3, 4, 5];
// Another way to write number arrays
const marks = [100, 100, 90];
// Mixed array
const mixedArray = ["Alex", "Leo", "Mark", 1, 2, 3];
// Useful array methods
console.log(students.length); // 2
console.log(numbers.filter((n) => n % 2 === 0)); // [2,4]
console.log(numbers.map((n) => n * 2)); // [2,4,6,8,10]
// ============================================================
// 3. Objects
// ============================================================
const user = {
    name: "Mahenaj",
    age: 20,
};
console.log(user.name);
console.log(user.age);
// ============================================================
// 4. Tuples
// ============================================================
// Fixed order: [string, number]
const person = ["Alex", 15];
console.log(person);
// ============================================================
// 5. Functions
// ============================================================
// Function with a return value
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Mahenaj"));
// Function with no return value
function sayHello() {
    console.log("Hello!");
}
sayHello();
// Optional parameter
function login(name, password) {
    if (password) {
        return `Username: ${name}, Password: ${password}`;
    }
    return `Username: ${name}`;
}
console.log(login("Mahenaj"));
console.log(login("Mahenaj", "1234"));
console.log(login);
// ============================================================
// 6. Rest & Spread Operators
// ============================================================
// Rest: Collect many values
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(39, 29, 39, 29)); // 136
// Spread: Expand arrays
const arr1 = ["Jack", "Alice", "Mark"];
const arr2 = [1, 2, 3];
const merged = [...arr1, ...arr2];
console.log(merged);
// ============================================================
// 7. Destructuring
// ============================================================
const userInfo = {
    name: "Mahenaj",
    age: 18,
    isStudent: true,
};
// Without destructuring
const myName = userInfo.name;
const myAge = userInfo.age;
console.log(myName, myAge);
// Object destructuring
const { age: userAge } = userInfo;
console.log(userAge);
// Another object example
const bookInfo = {
    bookName: "If Cats Disappeared from the World",
    author: "Genki Kawamura",
    type: "Novel",
};
const { bookName, author } = bookInfo;
console.log(bookName);
console.log(author);
// Array destructuring
const [, second] = ["A", "B", "C", "D"];
console.log(second); // B
// ============================================================
// 8. Union Types
// ============================================================
// One variable can hold multiple types
let id;
id = 101;
id = "ABC101";
// Function using a union type
function calculateTax(amount, taxRate) {
    if (typeof amount === "string") {
        amount = parseFloat(amount);
    }
    return amount * taxRate;
}
console.log(calculateTax(100, 0.15)); // 15
console.log(calculateTax("200", 0.15)); // 30
// ============================================================
// 9. Special Types
// ============================================================
// null → intentionally empty
let userName = null;
// undefined → no value assigned yet
let money;
// ?? → uses default only for null or undefined
let userId = undefined;
console.log(userId ?? "Guest"); // Guest
// unknown → safer than any
let value = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase()); // HELLO
}
// any → turns off type checking
let x;
// never → function never finishes normally
function fail() {
    throw new Error("Something went wrong!");
}
// Uncomment to see:
// fail();
// ============================================================
// 10. Practice
// ============================================================
const city = "Chittagong";
const numberArray = [5, 10, 15, 20];
console.log(numberArray.length);
const tuple_ = ["Alex", 18];
console.log(`${tuple_[0]} is ${tuple_[1]} years old.`);
function multiply(num1, num2) {
    return num1 * num2;
}
function isAdult(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const object = {
    name: "Book",
    price: 450,
    inStock: true,
};
console.log(object.price);
const arrNum = [1, 2, 3, 4, 5, 6, 7];
const oddNum = arrNum.filter((num) => {
    return num % 2 !== 0;
});
// Mini Challenge
function calculateTotal(price, quantity) {
    let total = price * quantity;
    return {
        total,
    };
}
