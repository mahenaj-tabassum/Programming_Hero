/** ==============================================================
 * 1. Method Overriding
 * => Method overriding means a child can replace a method inherited from the parent class with its own version
 * ============================================================== */

// Parent Class
class Animal {
  constructor(public name: string) {}
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Child class
class Dog extends Animal {
  // Overriding

  speak(): void {
    // Can We Use super While Overriding?
    super.speak();
    console.log(`${this.name} says Woof!!`);
  }
}

const dog = new Dog("Buddy");

// Dog inherited speak(), but then overrode it with a new implementation.
dog.speak();

class Cat extends Animal {
  // Overriding
  speak(): void {
    console.log(`${this.name} says Meow!!`);
  }
}

class Bird extends Animal {
  // Overriding
  speak(): void {
    console.log(`${this.name} says Chirp!!`);
  }
}

/** ==============================================================
 * 2. Polymorphism -> One interface, many behaviors.
 * ============================================================== */

const animals: Animal[] = [new Dog("Buddy"), new Cat("Mini"), new Bird("Sky")];
console.log(animals);

for (const animal of animals) {
  // That's runtime polymorphism.
  animal.speak();
}
