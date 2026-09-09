//  ========================================================
//      Problem 1
//  ========================================================

function printUser(name: string, age: number): string {
  return `${name} is ${age} years old.`;
}
console.log(printUser("Mahenaj", 18));

//  ========================================================
//      Problem 2
//  ========================================================

const productName: string = "Laptop";
const productPrice: number = 45000;
const isAvailable: boolean = true;

console.log(
  `${productName} cost ${productPrice} and is available: ${isAvailable}`,
);

//  ========================================================
//      Problem 3
//  ========================================================
const nameArray: string[] = ["Amina", "Rahim", "Karim", "Salma", "Rafi"];
console.log(`Total student: ${nameArray.length}`);

//  ========================================================
//      Problem 4
//  ========================================================
const infoTuple: [string, number] = ["Amina", 22];
console.log(`${infoTuple[0]} is ${infoTuple[1]} years old.`);

//  ========================================================
//      Problem 5
//  ========================================================

const userObject: {
  name: string;
  email?: string;
} = {
  name: "Amina",
};
console.log(
  `Name: ${userObject.name}, Email: ${userObject.email ? userObject.email : "Not provided"}`,
);

//  ========================================================
//      Problem 6
//  ========================================================
function isEven(num: number): boolean {
  if (num % 2 !== 0) {
    return false;
  }
  return true;
}

console.log(isEven(6));

//  ========================================================
//      Problem 7
//  ========================================================

function sumAll(...numbers: number[]): number {
  let total = 0;
  for (const number of numbers) {
    total = total + number;
  }
  return total;
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7));
//  ========================================================
//      Problem 8
//  ========================================================

const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const mergedArray: number[] = [...array1, ...array2];

console.log(mergedArray);

//  ========================================================
//      Problem 9
//  ========================================================
const number_: number = 4;
const result: string =
  number_ > 0 ? "Positive" : number_ < 0 ? "Negative" : "Zero";
console.log(result);

//  ========================================================
//      Problem 10
//      ?? only considers null and undefined as missing.
//  ========================================================

let userName: undefined | string = undefined;
if (typeof userName === "undefined") {
  console.log(userName ?? "Guest");
}

//  ========================================================
//      Problem 11
//  ========================================================
let name2: unknown = "Hello";
if (typeof name2 === "string") {
  console.log(name2);
}

//  ========================================================
//      Problem 12
//  ========================================================
const userInformation: {
  name: string;
  age: number;
  email: string;
  skills: string[];
  active: boolean;
} = {
  name: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML", "CSS", "TypeScript"],
  active: true,
};
console.log(`Name: ${userInformation.name}`);
console.log(`Age: ${userInformation.age}`);
console.log(`Email: ${userInformation.email}`);
console.log(`Skills: ${userInformation.skills.join(", ")}`);
console.log(`Active: ${userInformation.active}`);

//  ========================================================
//      Problem 13
//  ========================================================

const shoppingCart: {
  product: string;
  price: number;
  qty: number;
  availability: boolean;
} = {
  product: "Laptop",
  price: 4599,
  qty: 2,
  availability: true,
};

console.log(`Product: ${shoppingCart.product}`);
console.log(`Price: ${shoppingCart.price}`);
console.log(`Quantity: ${shoppingCart.qty}`);
console.log(`Available: ${shoppingCart.availability}`);

//  ========================================================
//      Problem 14
//  ========================================================

function userLoginCheck(userName: string, password: string): string {
  if (userName === "Amina" && password === "1234") {
    return "Login successful";
  } else {
    return "Invalid credentials";
  }
}

console.log(userLoginCheck("Amina", "1234"));

//  ========================================================
//      Problem 15
//  ========================================================
const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const filteredArray: number[] = numberArray.filter((number: number) => {
  return number % 2 === 0;
});
console.log(filteredArray);

//  ========================================================
//      Problem 16
//  ========================================================
const userObj = {
  name: "Amina",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
console.log(`Country: ${userObj.address.country}`);

//  ========================================================
//      Problem 17
//  ========================================================
function totalPrice(price: number, qty: number){
    return price * qty
}

console.log(totalPrice(20,4));
