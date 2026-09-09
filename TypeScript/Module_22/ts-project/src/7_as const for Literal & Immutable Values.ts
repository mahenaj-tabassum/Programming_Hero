const value: unknown = "Something";

let myValue = value as string;
console.log(myValue.toUpperCase());

const numberValue = value as number;

numberValue.toFixed();

let data: unknown;
interface User {
  name: string;
  email: string;
}
const userData = data as User;

userData.email;

// =========================
//  as const
// =========================

const Leo: User = {
  name: "Leo",
  email: "leo@gmail.com",
} as const;
