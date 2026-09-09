// ==================================================
//      Shopping Cart Calculator
// ==================================================

type Product = {
  name: string;
  price: number;
};

const products1 = [
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 800 },
  { name: "USB Cable", price: 300 },
];
const products2 = [
  { name: "Book", price: 500 },
  { name: "Pen", price: 50 },
  { name: "Bag", price: 1200 },
];

const calculateCartTotal = (products: Product[]): number => {
  let total: number = products.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  return total;
};

console.log(calculateCartTotal(products1)); // 2600
console.log(calculateCartTotal(products2)); // 1750



// ==================================================
//      With for of loop
// ==================================================
const calculateCartTotal1 = (products: Product[]) => {
  let total = 0;
  for (let product of products) {
    total = total + product.price;
  }
  return total;
};
calculateCartTotal1(products1);
