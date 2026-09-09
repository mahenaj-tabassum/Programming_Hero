class Student {
  name: string = "Alex";
  email: string = "alex@gmail.com";
}

// Instantiate
// Instance
const alex = new Student();
console.log(alex);

class StudentInfo {
  name: string = "Alex";
  email: string = "alex@gmail.com";

  // constructor - special method
  constructor(studentName: string, studentEmail: string) {
    this.name = studentName;
    this.email = studentEmail;
  }
}

let leo = new StudentInfo("leo", "leo@gmail.com");
console.log(leo);
