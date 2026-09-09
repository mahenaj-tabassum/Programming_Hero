"use strict";
// =============================================
// Primitives Types in TypeScript
// =============================================
let fullName = "John Doe";
let age = 20;
let isStudent = true;
let bigNumber = 12345678901234567890n;
let nothing = null;
let notAssigned = undefined;
let id = Symbol("id");

// =============================================
// Examples of Type Annotations
// =============================================
let district = "Dhaka";
district = "Chittagong";
// district =  430;             // This will cause a type error
// const officer: string = 145  // This will cause a type error
const stock = 100;
const isAvailable = false;
let input = "hello";
// input = 100
console.log(district);
console.log(stock);
console.log(isAvailable);
console.log(input);
