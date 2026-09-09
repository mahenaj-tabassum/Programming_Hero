const arrayOfObject = [
  { name: "A", isActive: true },
  { name: "B", isActive: false },
];

function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }
  for (let item of users) {
    if (typeof item !== "object" || item === null) {
      return "Invalid";
    }
    const keys = Object.keys(item);

    if (!keys.includes("isActive")) {
      return "Invalid";
    }
  }
  return users.filter((user) => user.isActive === true);
}

console.log(filterActiveUsers(arrayOfObject));