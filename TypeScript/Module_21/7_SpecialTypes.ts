/**
 * ============================================================
 * TypeScript Special Types
 * ============================================================
 *
 * Topics:
 * 1. Union Types
 * 2. Nullable Types (null)
 * 3. Undefined
 * 4. any
 * 5. unknown
 * 6. never
 *
 *
 * Quick Mental Model:
 *
 * union   → 🔀 This OR that
 * null    → 📭 Intentionally no value
 * any     → ⚠️ Don't check this value
 * unknown → ❓ I don't know the type yet
 * never   → 🚫 This can never happen/return normally
 */

// ============================================================
// 1. UNION TYPE
// ============================================================

/**
 * A union type allows a value to have more than one possible type.
 *
 * `number | string`
 *
 * means:
 *     number OR string
 */

let userId: number | string;

userId = 101; // ✅ number
userId = "ABC101"; // ✅ string
// userId = true;   // ❌ boolean is not allowed

// ------------------------------------------------------------
// Union Type with Function Parameters
// ------------------------------------------------------------

/**
 * A function can accept different types of arguments.
 */

function calculateTax(amount: number | string, taxRate: number): number {
  /**
   * If amount is a string, convert it to a number.
   *
   * parseFloat("200") → 200
   */
  if (typeof amount === "string") {
    amount = parseFloat(amount);
  }

  return amount * taxRate;
}

const myTax = calculateTax(100, 0.15);
const yourTax = calculateTax("200", 0.3);

console.log("My Tax:", myTax); // 15
console.log("Your Tax:", yourTax); // 60

// ============================================================
// 2. NULLABLE TYPES
// ============================================================

/**
 * `null` means:
 *
 * "There is intentionally no value."
 *
 * A variable can be nullable by using:
 *
 *     type | null
 */

let myPast: number | null = null;

console.log(myPast); // null

// Later, we can give it a number.

myPast = 2020;

console.log(myPast); // 2020

// ------------------------------------------------------------
// Nullable Function Return
// ------------------------------------------------------------

/**
 * A function may return a value OR null.
 */

function findUserAge(userId: number): number | null {
  if (userId === 1) {
    return 25;
  }

  return null;
}

const age5 = findUserAge(1);

console.log(age5); // 25

const unknownUserAge = findUserAge(999);

console.log(unknownUserAge); // null

// ------------------------------------------------------------
// Checking for null
// ------------------------------------------------------------

let username: string | null = null;

if (username !== null) {
  console.log(username);
} else {
  console.log("No username available.");
}

// ============================================================
// 3. UNDEFINED
// ============================================================

/**
 * `undefined` usually means:
 *
 * "A value has not been assigned/provided."
 */

let myMoney: number | undefined;

console.log(myMoney); // undefined

myMoney = 500;

console.log(myMoney); // 500

// ------------------------------------------------------------
// Undefined vs Null
// ------------------------------------------------------------

/**
 * null:
 *     Intentionally no value.
 *
 * undefined:
 *     Value hasn't been assigned/provided.
 */

let selectedUser: string | null = null;

let accountBalance: number | undefined;

console.log(selectedUser); // null
console.log(accountBalance); // undefined

// ============================================================
// 4. ANY
// ============================================================

/**
 * `any` means:
 *
 * "TypeScript, don't check this value."
 *
 * A variable with `any` can hold almost anything.
 */

let myVariable: any = "Hello, World!";

myVariable = 100;
myVariable = true;
myVariable = { name: "John" };

// TypeScript will allow this:

myVariable.doSomething();
myVariable.someRandomProperty;
myVariable();

/**
 * ⚠️ This is why `any` can be dangerous.
 *
 * TypeScript cannot protect us from mistakes when using `any`.
 */

// ------------------------------------------------------------
// Example of why `any` is risky
// ------------------------------------------------------------

const usernameAny: any = "John";

// TypeScript allows this,
// but JavaScript will fail at runtime.

// usernameAny.toFixed(); // ⚠️ Runtime error

// 🎯 Use `any` only when you really need to bypass type checking.

// ============================================================
// 5. UNKNOWN
// ============================================================

/**
 * `unknown` means:
 *
 * "We don't know the type of this value yet."
 *
 * Unlike `any`, TypeScript DOES NOT allow us to
 * use the value without checking its type.
 */

let value: unknown = "Hello";

// This is NOT allowed:
//
// console.log(value.toUpperCase());
// ❌ Error
//
// Why?
//
// Because TypeScript doesn't know whether `value` is
// a string, number, boolean, object, etc.

// ------------------------------------------------------------
// Type Checking with typeof
// ------------------------------------------------------------

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// We can change the value:

value = 100;

if (typeof value === "number") {
  console.log(value * 2);
}

// Another example:

value = true;

if (typeof value === "boolean") {
  console.log("Boolean value:", value);
}

// ============================================================
// UNKNOWN vs ANY
// ============================================================

/**
 * ANY
 *
 * TypeScript:
 *     "Do whatever you want."
 */

let anything: any = "Hello";

anything.toUpperCase(); // ✅
anything.doSomething(); // ✅
anything.random(); // ✅

/**
 * UNKNOWN
 *
 * TypeScript:
 *     "You don't know what this is.
 *      Check it before using it."
 */

let something: unknown = "Hello";

if (typeof something === "string") {
  something.toUpperCase(); // ✅
}

// 🎯 Prefer `unknown` when you don't know the type,
// instead of immediately using `any`

// ============================================================
// 6. NEVER
// ============================================================

/**
 * `never` represents something that:
 *
 *     NEVER returns normally.
 *
 * A common example is a function that always throws an error.
 */

function throwError(message: string): never {
  throw new Error(message);
}

// ------------------------------------------------------------
// Another example: Infinite Loop
// ------------------------------------------------------------

function runForever(): never {
  while (true) {
    console.log("Running...");
  }
}

// This function never finishes normally.

// ============================================================
// VOID vs NEVER
// ============================================================

/**
 * `void`
 *
 * The function finishes,
 * but doesn't return a value.
 */

function sayHello(): void {
  console.log("Hello!");
}

sayHello();

// ------------------------------------------------------------

/**
 * `never`
 *
 * The function NEVER finishes normally.
 */

function crashProgram(): never {
  throw new Error("Program crashed!");
}

// ============================================================
// 7. NEVER IN EXHAUSTIVE CHECKING
// ============================================================

/**
 * `never` can also help TypeScript make sure
 * all possible cases have been handled.
 */

type Role = "admin" | "user";

function getPermission(role: Role): string {
  switch (role) {
    case "admin":
      return "Full access";

    case "user":
      return "Limited access";

    default:
      return handleUnexpectedRole(role);
  }
}

/**
 * If a new role is added later but we forget to handle it,
 * TypeScript can help identify the problem.
 */

function handleUnexpectedRole(value: never): never {
  throw new Error(`Unexpected role: ${value}`);
}

console.log(getPermission("admin"));
console.log(getPermission("user"));

// ============================================================
// FINAL SUMMARY
// ============================================================

/**
 *
 * UNION
 * 🔀
 * "This OR that"
 *
 * Example:
 *     string | number
 *
 *
 * NULL
 * 📭
 * "Intentionally no value"
 *
 * Example:
 *     string | null
 *
 *
 * UNDEFINED
 * ❓
 * "No value has been assigned/provided"
 *
 * Example:
 *     number | undefined
 *
 *
 * ANY
 * ⚠️
 * "Don't check this value."
 *
 * Example:
 *     let value: any;
 *
 *
 * UNKNOWN
 * 🛡️
 * "We don't know the type yet.
 *  Check it before using it."
 *
 * Example:
 *     let value: unknown;
 *
 *
 * NEVER
 * 🚫
 * "This can never complete normally."
 *
 * Example:
 *     function fail(): never {
 *       throw new Error();
 *     }
 *
 *
 * ============================================================
 *
 *                    TypeScript
 *
 *        🔀 Union → OR
 *        📭 null → no value
 *        ❓ undefined → not assigned
 *        ⚠️ any → no type checking
 *        🛡️ unknown → check before using
 *        🚫 never → never completes normally
 *
 * ============================================================
 */
