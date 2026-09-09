// ====================================================
// Non-Primitive types: Array
// ====================================================
const numbers: number[] = [1, 2, 3, 4, 5]; // Array of numbers
// numbers.push("String"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

const friends: string[] = ["Alice", "Bob", "Charlie"]; // Array of strings
const answers: boolean[] = [true, false, true, false];

// Mixed array
const mixedArray: (string | number)[] = ["Alex", 29, "John", 23, 309];
let numbers2: Array<number> = [1, 2, 3, 4, 5]; // Another way to define an array of numbers

// ====================================================
// Non-Primitive types: Object
// ====================================================

const student: { name: string; age: number; isPassed: boolean } = {
  name: "John Doe",
  age: 20,
  isPassed: true,
};

// student.age = "old" // Error: Type 'string' is not assignable to type 'number'.
student.age = 21;
console.log(student);
