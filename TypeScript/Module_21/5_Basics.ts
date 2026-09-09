 /**
  * TypeScript Basics
  *
  * Topics:
  * 1. Variables
  * 2. Conditionals
  * 3. Loops
  * 4. Arrays
  * 5. Objects
  * 6. Functions
  * 7. Arrow Functions
  * 8. Array Methods (map)
  */


// ============================================================
// 1. VARIABLES
// ============================================================

// Explicit type declaration
const brand: string = "Apple";

console.log("Brand:", brand);


// Type inference
// TypeScript automatically knows that `age` is a number.
const age = 25;

console.log("Age:", age);


// ============================================================
// 2. CONDITIONAL
// ============================================================

const price: number = 1200;

if (price > 1000) {
  const isExpensive: boolean = true;

  console.log("The product is expensive:", isExpensive);
}


// ============================================================
// 3. LOOP
// ============================================================

// `i` is explicitly declared as a number.
for (let i: number = 0; i < 5; i++) {
  console.log("Count:", i);
}


// ============================================================
// 4. ARRAY
// ============================================================

const letters: string[] = ["a", "b", "c"];

for (const letter of letters) {
  console.log(letter.toUpperCase());
}


// ============================================================
// 5. OBJECT
// ============================================================

const user: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
  name: "Alice",
  age: 20,
  isStudent: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.isStudent);


// ============================================================
// 6. FUNCTION
// ============================================================

/**
 * Finds the longer name.
 *
 * Parameters:
 *   person1 → string
 *   person2 → string
 *
 * Return:
 *   string
 */
function getLargeName(person1: string, person2: string): string {
  if (person1.length > person2.length) {
    return person1;
  }

  return person2;
}

const largeName = getLargeName("Alice", "Bob");

console.log("Larger name:", largeName);


// ============================================================
// 7. ARROW FUNCTION
// ============================================================

const getLargeNameArrow = (
  person1: string,
  person2: string,
): string => {
  if (person1.length > person2.length) {
    return person1;
  }

  return person2;
};

const bigName = getLargeNameArrow("Alice", "Bob").toUpperCase();

console.log("Big name:", bigName);


// ============================================================
// 8. MAP
// ============================================================

const marks: number[] = [10, 20, 30, 40, 50];

const doubleMarks: number[] = marks.map((mark: number): number => {
  return mark * 2;
});

console.log("Original marks:", marks);
console.log("Double marks:", doubleMarks);