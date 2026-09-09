// ==================================================
//      Store Inventory Status
// ==================================================

const currentStockQuantity = 0;

const getStockStatus = (stock: number): string => {
  if (stock >= 1 && stock <= 5) {
    return "Almost Sold Out";
  } else if (stock >= 6 && stock <= 20) {
    return "Available";
  } else if (stock > 20) {
    return "In Stock";
  }

  return "Out of Stock";
};


console.log(getStockStatus(currentStockQuantity));

console.log(getStockStatus(0)); // "Out of Stock"
console.log(getStockStatus(3)); // "Almost Sold Out"
console.log(getStockStatus(12)); // "Available"
console.log(getStockStatus(50)); // "In Stock"

// boundary values to double-check:
console.log(getStockStatus(5));
console.log(getStockStatus(6));
console.log(getStockStatus(20));
console.log(getStockStatus(21));