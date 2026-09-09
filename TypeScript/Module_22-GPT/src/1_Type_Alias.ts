/**
 * ============================================================
 *                    TYPE ALIAS
 * ============================================================
 *
 * => A type alias lets us give a custom name to a type.
 *
 * Syntax:
 * type TypeName = Type;
 *
 * Useful for:
 * - Reusing object shapes
 * - Union types
 * - Literal types
 * - Function types
 */

/** ============================================================
 *                    1. BASIC EXAMPLE
 * ============================================================ */

type Age = number;

// Age is another name for number
let myAge: Age = 40;

console.log(myAge);
// Output: 40

/** ============================================================
 *                    2. TYPE ALIAS WITH OBJECT
 * ============================================================ */

// Without type alias → repetitive
let student_1: {
  name: string;
  age: number;
  isPassed: boolean;
} = {
  name: "Ali",
  age: 18,
  isPassed: true,
};

// With type alias → reusable
type Student = {
  name: string;
  age: number;
  isPassed: boolean;
};

let student1: Student = {
  name: "Alex",
  age: 18,
  isPassed: true,
};

let student2: Student = {
  name: "Leo",
  age: 19,
  isPassed: false,
};

console.log(student1);
// Output: { name: "Alex", age: 18, isPassed: true }

console.log(student2);
// Output: { name: "Leo", age: 19, isPassed: false }

/** ============================================================
 *                    3. TYPE ALIAS WITH FUNCTIONS
 * ============================================================ */

type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => {
  return a + b;
};

console.log(add(10, 20));
// Output: 30

/** ============================================================
 *                    4. TYPE ALIAS WITH UNION TYPES
 * ============================================================ */

type Id = string | number;

let userId: Id;

userId = 123;
// Output: 123

userId = "string";
// Output: string

/** ============================================================
 *                    5. TYPE ALIAS WITH LITERAL TYPES
 * ============================================================ */

type Direction = "up" | "down" | "left" | "right";

let direction: Direction;

direction = "up";
// Output: up

direction = "down";
// Output: down

direction = "left";
// Output: left

direction = "right";
// Output: right

// direction = "forward"; // ❌ Error: not an allowed Direction

/** ============================================================
 *                    6. OPTIONAL PROPERTIES
 * ============================================================ */

type User = {
  name: string;
  age: number;
  email?: string; // Optional property
};

const user1: User = {
  name: "John",
  age: 20,
};

const user2: User = {
  name: "Max",
  age: 21,
  email: "max@example.com",
};

console.log(user1);
// Output: { name: "John", age: 20 }

console.log(user2);
// Output: { name: "Max", age: 21, email: "max@example.com" }

/** ============================================================
 *                    7. TYPE ALIAS + FUNCTION PARAMETER
 * ============================================================ */

type Product = {
  name: string;
  price: number;
};

function printProduct(product: Product): void {
  console.log(product.name);
  console.log(product.price);
}

printProduct({
  name: "Laptop",
  price: 50000,
});

// Output:
// Laptop
// 50000

/** ============================================================
 *                    QUICK RECAP 🧠
 * ============================================================
 *
 * type Age = number;
 * → Gives a name to a type.
 *
 * type Student = { ... };
 * → Gives a reusable name to an object shape.
 *
 * type Id = string | number;
 * → Creates a reusable union type.
 *
 * type Direction = "up" | "down" | "left" | "right";
 * → Restricts a value to specific literal values.
 *
 * type AddFunction = (a: number, b: number) => number;
 * → Creates a reusable function type.
 *
 * email?: string;
 * → Makes a property optional.
 */
