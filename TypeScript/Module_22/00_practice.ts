// ==============================================
//  Problem - 1
// ==============================================

const value1: unknown = "Hello TypeScript";

const length_1 = (value1 as string).length;
console.log("length 1:", length_1);

const length_2 = (<string>value1).length;
console.log("length 2:", length_2);

// ==============================================
//  Problem - 2
// ==============================================

let value2: string | number = "100";

let numberValue: number;

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
const riskyNumber = value2 as unknown as number;

/**
 * Number("100")              // actually converts the value → 100
 * value as number            // tells TypeScript to trust you
 * value as unknown as number // forces TypeScript to accept the assertion
 *
 */

// ==============================================
//  Problem - 3
// ==============================================
interface Product {
  title: string;
  price: number;
  inStock?: boolean;
}

const product1: Product = {
  title: "Iphone 17",
  price: 799,
  inStock: true,
};
const product2: Product = {
  title: "OnePlus 15",
  price: 999.9,
};

function printPrice(productDetails: Product): void {
  console.log("Price of the Product is: ", productDetails.price);
}

printPrice({ title: "Mouse", price: 500, inStock: true });

// ==============================================
//  Problem - 4
// ==============================================

// A type alias can represent a union of literal values.
type PaymentMethod = "cash" | "card" | "mobile";
/**
 * Why interface can't express this?
 
// Interface is mainly used to describe the shape of objects.
// It cannot directly represent a standalone union like:
// "cash" | "card" | "mobile"

 */

interface Order {
  id: number;
  method: PaymentMethod;
}

let method: PaymentMethod = "card";
const order: Order = {
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

function getLastItem<T>(array: T[]): T {
  return array[array.length - 1];
}

console.log("Last item from array: ", getLastItem([10, 20, 30, 40]));

// Getting first and last item from array
const numbers = [10, 20, 30];
console.log(numbers.at(0)); // First
console.log(numbers.at(-1)); // Last
