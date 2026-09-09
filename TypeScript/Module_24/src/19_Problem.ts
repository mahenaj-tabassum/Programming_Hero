// ===============================================
//      EV Scooter Rental Fee Calculator
// ===============================================

type Vehicle = "scooter" | "e-bike" | "moped";
function calculateRentalFee(
  vehicle: Vehicle,
  rentalDurationMin: number,
): number {
  if (vehicle === "scooter") {
    let unlockFee = 10;
    let costPerMinute = 2;
    let finalFee = unlockFee + costPerMinute * rentalDurationMin;
    return finalFee;
  }
  if (vehicle === "e-bike") {
    let finalFee = 15 + 3 * rentalDurationMin;
    return finalFee;
  }
  return 25 + 5 * rentalDurationMin;
}

console.log(calculateRentalFee("scooter", 20));
// 50    (10 + 20 x 2)

console.log(calculateRentalFee("e-bike", 20));
// 75    (15 + 20 x 3)

console.log(calculateRentalFee("moped", 20));
// 125   (25 + 20 x 5)
