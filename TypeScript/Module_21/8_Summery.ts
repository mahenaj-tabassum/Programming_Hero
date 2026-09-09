/**
 * ============================================================
 * TypeScript Basics — Summary
 * ============================================================
 *
 * Topics:
 * 1. Primitive Types
 * 2. Array Types
 * 3. Functions
 * 4. Function Return Types
 * 5. Returning Arrays
 * 6. Returning Objects
 * 7. Object Types
 * ============================================================
 */


// ============================================================
// 1. PRIMITIVE TYPES
// ============================================================

// string
const studentName: string = "Alex Johnson";

// number
const studentAge: number = 19;

// boolean
const isStudent: boolean = true;

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Is Student:", isStudent);


// ============================================================
// 2. ARRAY TYPES
// ============================================================

/**
 * `number[]`
 *
 * Means:
 * "An array containing numbers."
 */

const studentGrades: number[] = [
  85,
  90,
  78,
  92,
  88,
];


/**
 * `Array<string>`
 *
 * Means:
 * "An array containing strings."
 *
 * `string[]` and `Array<string>` mean essentially
 * the same thing.
 */

const studentMajors: Array<string> = [
  "Computer Science",
  "Physics",
];

console.log("Grades:", studentGrades);
console.log("Majors:", studentMajors);


// ============================================================
// 3. FUNCTION WITH ARRAY PARAMETER
// ============================================================

/**
 * `grades: number[]`
 *
 * The function accepts an array of numbers.
 *
 * `: number`
 *
 * The function returns a number.
 */

function calculateAverageGrade(
  grades: number[],
): number {

  const total = grades.reduce(
    (acc, grade) => acc + grade,
    0,
  );

  const average = total / grades.length;

  return average;
}

const averageGrade = calculateAverageGrade(studentGrades);

console.log("Average Grade:", averageGrade);


// ============================================================
// 4. FUNCTION RETURNING AN ARRAY
// ============================================================

/**
 * Parameters:
 *   num1 → number
 *   num2 → number
 *
 * Return:
 *   number[]
 *
 * The function returns an array containing a number.
 */

function addNumbers(
  num1: number,
  num2: number,
): number[] {

  const sum = num1 + num2;

  return [sum];
}

const sumResult = addNumbers(10, 20);

console.log("Sum Array:", sumResult);

// Output:
// [30]


// ============================================================
// 5. FUNCTION RETURNING AN OBJECT
// ============================================================

/**
 * The function returns an object containing a `sum` property.
 *
 * `sum: number`
 * means the property is required and must be a number.
 */

function addNumbersAsObject(
  num1: number,
  num2: number,
): { sum: number } {

  const sum = num1 + num2;

  return { sum };
}

const objectResult = addNumbersAsObject(10, 20);

console.log("Sum Object:", objectResult);

// Output:
// { sum: 30 }


// ============================================================
// 6. OBJECT TYPE
// ============================================================

/**
 * We can describe the structure of an object
 * using an inline object type.
 */

const studentInformation: {
  fullName: string;
  age: number;
  id: number;
  isEnrolled: boolean;
} = {
  fullName: "Alex Johnson",
  age: 19,
  id: 12345,
  isEnrolled: true,
};

console.log("Student Information:");
console.log(studentInformation);


// ============================================================
// 7. ACCESSING OBJECT PROPERTIES
// ============================================================

console.log("Name:", studentInformation.fullName);
console.log("Age:", studentInformation.age);
console.log("ID:", studentInformation.id);
console.log("Enrolled:", studentInformation.isEnrolled);


// ============================================================
// FINAL SUMMARY
// ============================================================

/**
 * Primitive types:
 *
 * string
 * number
 * boolean
 *
 *
 * Array types:
 *
 * number[]
 * string[]
 * Array<string>
 *
 *
 * Function:
 *
 * function name(parameter: type): returnType {
 *   ...
 * }
 *
 *
 * Returning an array:
 *
 * function add(a: number, b: number): number[] {
 *   return [a + b];
 * }
 *
 *
 * Returning an object:
 *
 * function add(a: number, b: number): { sum: number } {
 *   return { sum: a + b };
 * }
 *
 *
 * Object type:
 *
 * {
 *   name: string;
 *   age: number;
 * }
 *
 *
 * ============================================================
 * Key idea:
 *
 * TypeScript allows us to describe the SHAPE of our data
 * and the TYPES of values our code works with.
 * ============================================================
 */