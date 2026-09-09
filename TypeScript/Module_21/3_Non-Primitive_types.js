"use strict";
// ====================================================
//       Non-Primitive types: Array
// ====================================================

const numbers = [1, 2, 3, 4, 5]; // Array of numbers
// numbers.push("String"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

const friends = ["Alice", "Bob", "Charlie"]; // Array of strings
const answers = [true, false, true, false];

// Mixed array
const mixedArray = ["Alex", 29, "John", 23, 309];
let numbers2 = [1, 2, 3, 4, 5]; // Another way to define an array of numbers'
console.log(numbers2);

// ====================================================
//      Non-Primitive types: Object
// ====================================================

const student = {
  name: "John Doe",
  age: 20,
  isPassed: true,
};

console.log(object);
// student.age = "old" // Error: Type 'string' is not assignable to type 'number'.
student.age = 21;
console.log(student);


   