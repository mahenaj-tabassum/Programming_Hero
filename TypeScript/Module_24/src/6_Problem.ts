// ==================================================
//       Role-Based Permission Checker
// ==================================================
// * WHat is literal type?
// * => A Literal type means a variable can only have one exact value(or one of a few exact values),
// * instead of any value of a general type
// ==================================================

// literal type
type Role = "admin" | "editor" | "viewer";

const canEdit = (role: Role): boolean => {
  if (role === "admin" || role === "editor") return true;
  return false;
};

console.log(canEdit("admin"));