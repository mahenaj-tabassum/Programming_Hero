"use strict";
// ==============================================
//  Problem - 1
// ==============================================
const value1 = "Hello TypeScript";
const length_1 = value1.length;
console.log("length 1:", length_1);
const length_2 = value1.length;
console.log("length 2:", length_2);
// ==============================================
//  Problem - 2
// ==============================================
let value2 = "100";
let numberValue;
// Why safe? Checks what value2 actually contains before treating it as a number
if (typeof value2 === "string") {
  // Cast value2 as "number"
  numberValue = Number(value2); // actually converts the value → 100
} else {
  numberValue = value2;
}
console.log(numberValue + 10);
// Risky - Double Assertion
// doesn't actually convert "100" into 100.
// It only tells TypeScript: "Trust me, treat this value as a number."
// it changes TypeScript's belief about the type, not the actual runtime value.
const riskyNumber = value2;
const product1 = {
  title: "Iphone 17",
  price: 799,
  inStock: true,
};
const product2 = {
  title: "OnePlus 15",
  price: 999.9,
};
function printPrice(productDetails) {
  console.log("Price of the Product is: ", productDetails.price);
}
printPrice({ title: "Mouse", price: 500, inStock: true });
let method = "card";
const order = {
  id: 1,
  method: method,
};
console.log(order);
// ==============================================
//  Problem - 5
// ==============================================
// T represents the type of the array elements.
//
// T[]  → array containing values of type T
// T    → function returns a value of type T
function getLastItem(array) {
  return array[array.length - 1];
}
console.log("Last item from array: ", getLastItem([10, 20, 30, 40]));
// Getting first and last item from array
const numbers = [10, 20, 30];
console.log(numbers.at(0)); // First
console.log(numbers.at(-1)); // Last
