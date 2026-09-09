// Difference between Interface and Type alias
type UserRole = "Admin" | "User" | "Moderator" | "Guest";

interface User {
  name: string;
  rol: UserRole;
  email: string;
}
interface Admin extends User {
  permissions: string[];
}
interface Moderator extends User {
  moderatedSections: string[];
}
const bigBoss: Admin = {
  name: "Big Boss",
  rol: "Admin",
  email: "user@gmail.com",
  permissions: ["manage_users", "edit_content"],
};

type book = {
  title: string;
  author: string;
  publishedYear: number;
};

// Duplicate identifier 'book'.
// type book = {
//     location: string
// }

interface Gift {
  name: string;
}
interface Gift {
  price: number;
}

const birthdayGift: Gift = {
  name: "Chocolate",
  price: 40,
};
