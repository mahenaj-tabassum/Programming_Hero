/**
 * Destructuring, Rest & Spread Operators
 *
 * 1. Object Destructuring
 * 2. Rename while Destructuring
 * 3. Array Destructuring
 * 4. Rest Operator
 * 5. Spread Operator
 */

// ============================================================
// 1. OBJECT DESTRUCTURING
// ============================================================

const userInfo: {
  name: string;
  age1: number;
  isAdmin: boolean;
} = {
  name: "John Doe",
  age1: 30,
  isAdmin: true,
};


// Without destructuring:

// const age = userInfo.age1;

// const personName = userInfo.name;


// With destructuring:

const { age1, isAdmin } = userInfo;

console.log("Age:", age1);
console.log("Is Admin:", isAdmin);

// Output:
// Age: 30
// Is Admin: true

// ============================================================
// 2. RENAME WHILE DESTRUCTURING
// ============================================================

// age1 → userAge
// isAdmin → adminStatus

const { age1: userAge, isAdmin: adminStatus } = userInfo;

console.log("User Age:", userAge);
console.log("Admin Status:", adminStatus);

// Output:
// User Age: 30
// Admin Status: true

// ============================================================
// 3. ARRAY DESTRUCTURING
// ============================================================

const userInfoArray: [boolean, string, number] = [true, "John Doe", 30];

// The first value is skipped using `,`
const [, personName, personAge] = userInfoArray;

console.log("Person Name:", personName);
console.log("Person Age:", personAge);

// Output:
// Person Name: John Doe
// Person Age: 30

// ============================================================
// 4. REST OPERATOR
// ============================================================

const device = {
  name: "iPhone",
  type: "Smartphone",
  price: 999,
  color: "black",
  storage: "128GB",
};

const { name: deviceName, ...deviceInfo } = device;

console.log("Device Name:", deviceName);
console.log("Device Info:", deviceInfo);

// Output:
// Device Name: iPhone
//
// Device Info:
// {
//   type: "Smartphone",
//   price: 999,
//   color: "black",
//   storage: "128GB"
// }

// ============================================================
// 5. SPREAD OPERATOR
// ============================================================

const numbers3: number[] = [1, 2, 3];
const newNumbers3: number[] = [4, 6, 7];

const closeFriends: string[] = ["Alice", "Bob"];

const allNumbers: number[] = [...numbers3, ...newNumbers3];

console.log("All Numbers:", allNumbers);

// Output:
// All Numbers: [1, 2, 3, 4, 6, 7]

// We can also combine arrays:

const allFriends: string[] = [...closeFriends, "John", "Sara"];

console.log("All Friends:", allFriends);

// Output:
// All Friends: ["Alice", "Bob", "John", "Sara"]
