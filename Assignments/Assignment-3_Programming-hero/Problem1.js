const obj = {
  name: "Rafi",
  age: 18,
  course: "JavaScript"
}

const studentIntroduction = (student) => {
  if (
    typeof student !== "object" ||
    student === null ||
    Object.keys(student).length === 0
  ) {
    return "Invalid";
  }
  if (Array.isArray(student)) {
    return "Invalid";
  }
  const keys = Object.keys(student);
  if (
    !keys.includes("name") ||
    !keys.includes("age") ||
    !keys.includes("course")
  ) {
    return "Invalid";
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
};
console.log(studentIntroduction(obj));