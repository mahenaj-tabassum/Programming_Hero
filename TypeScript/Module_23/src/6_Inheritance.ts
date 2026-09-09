// =================================================
//  Inheritance

// Inheritance means a new class(child class) can reuse the properties and methods of
// an existing class(parent class)

// A child class can replace a parent's method.

// extends -> Reuse another class

// super() -> Call the parent constructor
// =================================================

class Animal {
  constructor(public name: string) {}
  eat() {
    console.log(`${this.name} is eating`);
  }
  speak(){
    console.log(`Some sound`);
  }
}

class Dog extends Animal {
  // super() — Calling the Parent Constructor
  public bread: string;
  constructor(name: string, bread: string) {
    super(name);
    this.bread = bread;
  }

  // Overriding Parent class
  speak(){
    console.log(`Woof`);
  }

  // Adding New Methods
  bark() {
    console.log(`${this.name} says woof!`);
  }
}
class Cat extends Animal {}

const dog = new Dog("Black", "Golder Retriever");
const cat = new Cat("Mimi");
dog.speak()
dog.eat();
cat.eat();
dog.bark();



// Real-Life Example: Employee System
class Employee{
    constructor(
        public name: string,
        public salary: number
    ){}
    work(){
        console.log(`${this.name} is working`);
    }
}
class Developer extends Employee{
    code(){
        console.log(`${this.name} is coding`);
    }
}
class Manager extends Employee{
    manage(){
        console.log(`${this.name} is managing the team`);
    }
}

const dev = new Developer("Leo", 2000)
const manager = new Manager("Alex", 3000)
dev.work()
dev.code()

manager.work()
manager.manage()