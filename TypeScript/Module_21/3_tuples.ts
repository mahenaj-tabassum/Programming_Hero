// A tuple is like an array, but TypeScript knows
// the exact type and order of each position
let user: [string, number] = ["John", 25]; // Tuple with a string and a number

const location1: [number, number] = [23.456, 45.678];
const entries: [string, number] = ["age", 24];

// recap.ts
const books: string[] = ["The Great Gatsby", "1984", "To Kill a Mockingbird"];
const runs: number[] = [5, 10, 15, 20, 25];

const shoppingList: [string, number] = ["Apples", 5]; // Tuple with a string and a number

const book: {
  // Constant property (Literal type)
  name: "The Great Gatsby";
  author: string;
  year: number;
  price: number;
  pages: number;
  // Optional property
  isPopular?: boolean;
} = {
  name: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  price: 10.99,
  pages: 180,
};

// book.name = "The Great Gatsby 2"; // Error: Cannot assign to 'name' because it is a constant property