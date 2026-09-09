// Without Object
const studentName = "Leo";
const studentAge = 16;
const studentEmail = "leo@gmail.com";

const studentName2 = "Alex";
const studentAge2 = 19;
const studentEmail2 = "alex@gmail.com";

// Object solves the grouping problem
const leo = {
  name: "Leo",
  age: 17,
  email: "leo@gmail.com",
};

function createStudent(name: string, age: number, email: string) {
  const obj = {
    name,
    age,
    email,
    forgetPassword() {
      // 100 line
    },
  };
  return obj;
}
console.log(createStudent("Rafi", 20, "rafi@gmail.com"));
