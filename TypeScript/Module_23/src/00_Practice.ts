// ===============================================
//  Step 1: Create the Base Class
// ===============================================

class Ride {
  constructor(
    public readonly id: string,
    public driver: string,
    protected busy: boolean = false,
  ) {}
  calculateFare(distance: number): number {
    return distance;
  }
  isAvailAble(): boolean {
    return !this.busy;
  }
  startRide() {
    this.busy = true;
  }
  endRide() {
    this.busy = false;
  }
}

// ===============================================
//  Step 2: Create Three Ride Types
// ===============================================

class EconomyRickshaw extends Ride {
  // Method Overriding
  calculateFare(distance: number): number {
    return distance * 10;
  }
}
class ComfortRickshaw extends Ride {
  calculateFare(distance: number): number {
    return distance * 15;
  }
}
class PremiumRickshaw extends Ride {
  calculateFare(distance: number): number {
    return distance * 20;
  }
}

// ===============================================
//  Step 3: Test Overriding
// ===============================================
const eco = new EconomyRickshaw("R1", "Rahim");
const comfort = new EconomyRickshaw("R2", "Karim");
const premium = new EconomyRickshaw("R1", "Salam");

// Same method call. Different Behavior. Polymorphism
console.log(eco.calculateFare(5));
console.log(comfort.calculateFare(5));
console.log(premium.calculateFare(5));

// ===============================================
//  Step 4: Build the Wallet
// ===============================================
class Wallet {
  private balance = 0;

  get currentBalance() {
    return this.balance;
  }
  deposit(amount: number) {
    if (amount <= 0) {
      console.log("Invalid Deposit");
      return;
    }
    this.balance = this.balance + amount;
  }
  withDraw(amount: number) {
    if (amount > this.balance) {
      console.log("Insufficient Balance");
      return false;
    }
    this.balance -= amount;
    return true;
  }
}

const wallet = new Wallet();
wallet.deposit(5000);
console.log(wallet.currentBalance);
wallet.withDraw(50);
console.log(wallet.currentBalance);

// ===============================================
//  Step 5: Build the Dispatcher
// ===============================================
class Dispatcher {
  assignRide(rides: Ride[], distance: number): Ride | null {
    let cheapest: Ride | null = null;

    for (const ride of rides) {
      if (!ride.isAvailAble()) continue;

      if (
        cheapest === null ||
        ride.calculateFare(distance) < cheapest.calculateFare(distance)
      ) {
        cheapest = ride;
      }
    }
    if (cheapest) {
      cheapest.startRide();
    }
    return cheapest;
  }
}

// ===============================================
//  Step 6: Full Example
// ===============================================
const rides: Ride[] = [
  new PremiumRickshaw("P1", "Jamal"),
  new EconomyRickshaw("P2", "Kamal"),
  new ComfortRickshaw("P3", "Salam"),
];

const dispatcher = new Dispatcher();
const chosen = dispatcher.assignRide(rides, 4);
console.log(chosen);

const walletDispatcher = new Wallet();
walletDispatcher.deposit(100);
const ride = dispatcher.assignRide(rides, 5);
if (ride) {
  const fare = ride.calculateFare(5);
  if (wallet.withDraw(fare)) {
    console.log(`Ride Booked with ${ride.driver} for ${fare}`);
  }
}
