// ==================================================
//      Social Media Profile Formatter
// ==================================================

type UserT = {
  name: string;
  age: number;
  city: string;
};

interface User {
  name: string;
  age: number;
  city: string;
}

const userObject: User = {
  name: "Alex",
  age: 22,
  city: "London",
};

const formatUserProfile = (user: User): string => {
  return `${user.name} is ${user.age} years old and lives in ${user.city}`;
};
console.log(formatUserProfile(userObject));
