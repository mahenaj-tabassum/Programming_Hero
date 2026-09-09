// =============================================
// Primitives Types in TypeScript
// =============================================

let fullName: string = "John Doe";
let age: number = 20;
let isStudent: boolean = true;

let bigNumber: bigint = 12345678901234567890n;

let nothing: null = null;
let notAssigned: undefined = undefined;

let id: symbol = Symbol("id");


// =============================================
// Examples of Type Annotations
// =============================================

let district: string = "Dhaka";
district = "Chittagong";
// district =  430;             // This will cause a type error
// const officer: string = 145  // This will cause a type error

const stock: number = 100;

const isAvailable: boolean = false;

let input: any = "hello";
// input = 100

console.log(district);
console.log(stock);
console.log(isAvailable);
console.log(input);
