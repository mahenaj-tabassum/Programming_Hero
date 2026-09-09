"use strict";
/**
 * TypeScript Functions
 *
 * A function can have:
 * 1. Parameters
 * 2. A return value
 * 3. No return value
 * 4. Optional parameters
 */
// ============================================================
// 1. PARAMETERS + RETURN VALUE
// ============================================================
function add(num1, num2) {
    const total = num1 + num2;
    return total;
}
const result = add(4, 10);
console.log(result); // 14
// ============================================================
// 2. FUNCTION WITH NO RETURN VALUE
// ============================================================
/**
 * If a function doesn't return a value,
 * we can use `void` as the return type.
 */
function sayHello() {
    console.log("Hello!");
}
sayHello();
// ============================================================
// 3. FUNCTION WITH AN ARRAY PARAMETER
// ============================================================
/**
 * `numbers` → array of numbers
 * `tax`    → number
 * `accountant` → optional string
 *
 * Return:
 *   boolean
 */
function calculate(numbers, tax, accountant) {
    console.log("Numbers:", numbers);
    console.log("Tax:", tax);
    if (accountant) {
        console.log("Accountant:", accountant);
    }
    return true;
}
calculate([1, 2, 3], 0.2, "John");
// ============================================================
// 4. OPTIONAL PARAMETERS
// ============================================================
/**
 * The `?` means the parameter is optional.
 *
 * `accountant?: string`
 *
 * So both are valid:
 */
calculate([1, 2, 3], 0.2, "John");
calculate([1, 2, 3], 0.2);
// ============================================================
// 5. FUNCTION WITH A BOOLEAN PARAMETER
// ============================================================
function doubleOrHalf(number, isDouble) {
    if (isDouble) {
        return number * 2;
    }
    return number / 2;
}
console.log(doubleOrHalf(10, true)); // 20
console.log(doubleOrHalf(10, false)); // 5
