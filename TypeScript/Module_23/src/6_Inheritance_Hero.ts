// Parent Class / Super Class
class User {
  private _name: string;
  private _age: number;
  protected _email: string;

  constructor(name: string, age: number, email: string) {
    this._name = name;
    this._email = email;
    this._age = age;
  }

  get age() {
    return this._age;
  }
  set age(value: number) {
    if (value < 0 || value > 100) {
      throw new Error("Age is not valid!");
    }
    this._age = value;
  }
}

// Child Class
class Student extends User {
  private _fee: number;

  constructor(name: string, age: number, email: string, fee: number) {
    super(name, age, email);
    this._fee = fee;
  }
}

const student = new Student("Leo", 20, "leo@mail.com", 200);
console.log(student.age);
console.log(student);
const user = new User("Alex", 20, "alex@gmail.com");
user.age = 30;
console.log(user.age);
