/** ==============================================================
 * 1. Abstraction
 * => Abstraction means showing only the essential features while hiding unnecessary implementation details
 *
 * Encapsulation:
 *      Hides data
 *      Uses private/protected
 *      Protects internal state
 * Abstraction:
 *      Hides implementation
 *      Uses abstract classes or interfaces
 *      Simplifies usage
 *
 * Abstract Class
 * => An abstract class is a class that cannot be used to create objects directly.
 * Instead, it's meant to be inherited.
 *
 * Abstract Class Can Have Normal Methods Too
 *
 * Abstract Class vs Interface
 *
 * Abstract class can contain real code.
 *
 * Interface mainly defines a contract.
 * ============================================================== */

abstract class Animal {
  constructor(public name: string) {}
  eat() {
    console.log(`${this.name} is eating`);
  }
  //   Normal Method
  abstract speak(): void;
}

// Implementing the Abstract Method
class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} says Woof!`);
  }
}
class Cat extends Animal {
  speak() {
    console.log(`${this.name} says Meow!`);
  }
}

const dog = new Dog("Buddy");
const cat = new Cat("Mimi");

dog.speak();
cat.speak();

/**
 * What if a Child Doesn't Implement It?
    class Bird extends Animal {}

    TypeScript immediately complains. Error:
    Non-abstract class 'Bird' does not implement inherited abstract member 'speak'.

    This is one of the biggest advantages.

    The compiler forces every child to follow the contract.
 */

abstract class Payment {
  abstract pay(amount: number): void;
  printReceipt() {
    console.log(`Receipt Printed`);
  }
}
class CreditCard extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}
class Paypal extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using Paypal`);
  }
}

const payments: Payment[] = [new CreditCard(), new Paypal()];
for (const payment of payments) {
  (payment.pay(500), payment.printReceipt());
}
