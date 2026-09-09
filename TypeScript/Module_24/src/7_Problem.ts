// ==================================================
//       Product Category Search
// ==================================================

type Category = "phone" | "laptop" | "computer";

interface Products {
  name: string;
  price: number;
  category: Category;
}

const findProducts = (products: Products[], category: Category) => {
  let matchedCategory = products.filter((item) => {
    return item.category === category;
  });
  return matchedCategory;
};

console.log(
  findProducts(
    [
      { name: "iPhone 15", price: 90000, category: "phone" },
      { name: "Galaxy S24", price: 85000, category: "phone" },
      { name: "MacBook Air", price: 120000, category: "laptop" },
      { name: "Dell XPS", price: 110000, category: "laptop" },
    ],
    "phone",
  ),
);

/**
 * .filter() => creates a new array containing only the elements that pass a condition
 */

const students = [
  { name: "Alex", mark: 80 },
  { name: "Leo", mark: 45 },
];

const passed = students.filter((student) => student.mark >= 50);

console.log(passed);
