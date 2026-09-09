class StudentInfo {
  name: string = "Alex";
  email: string = "alex@gmail.com";

  // constructor - special method
  constructor(studentName: string, studentEmail: string) {
    this.name = studentName;
    this.email = studentEmail;
  }

  // Method - 1
  getInfo(): string {
    return `Ich bin ${this.name.charAt(0).toUpperCase()}, mein email ist ${this.email}`;
  }
}

let leo = new StudentInfo("leo", "leo@gmail.com");
console.log(leo);

console.log(leo.getInfo());

// Tea shop

class TeaShop {
  title: string;
  soldItems: any = [];

  constructor(title: string) {
    this.title = title;
  }

  buy(name: string, price: number) {
    this.soldItems.push({ name, price });
  }
  totalSold() {
    const total = this.soldItems.reduce(
      (acc: any, item: any) => acc + item.price,
      0,
    );
    return total;
  }
}

const shop1 = new TeaShop("TeeLaden");
console.log(shop1);
shop1.buy("Tee", 10);
shop1.buy("Kekse", 20);
console.log(shop1);
console.log(shop1.totalSold());
