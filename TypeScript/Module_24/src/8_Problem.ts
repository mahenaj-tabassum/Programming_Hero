// ==================================================
//      Hospital Patient Status
// ==================================================

type GeneralPatient = {
  name: string;
  age: number;
  type: "general"; // Literal
};

type EmergencyLevel = 1 | 2 | 3;
type EmergencyPatient = {
  name: string;
  age: number;
  type: "emergency"; // Literal
  emergencyLevel?: EmergencyLevel;
};
type Patient = GeneralPatient | EmergencyPatient;

function getPatientStatus(patient: Patient) {
  // Type Narrowing
  if (patient.type === "emergency") {
    if (patient.emergencyLevel === 1) {
      return "Critical emergency";
    } else if (patient.emergencyLevel === 2) {
      return "Serious emergency";
    } else {
      return "Moderate emergency";
    }
  }
  return "General patient";
}

console.log(
  getPatientStatus({
    name: "Alex",
    age: 60,
    type: "general",
  }),
);

/** Type Narrowing
 * Type narrowing means typescript starts with a broad type and then narrows it down
 * to a more specific type after checking a condition
 */

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.charAt(0).toUpperCase()); // value is string
  } else {
    console.log(value * value); // value is a string
  }
}

/**
 * Discriminated Unions
 * => This is a special type of union where every object has one common property(called the discriminator) with different literal values
 */
type Cash = {
  method: "cash";
  amount: number;
};
type Card = {
  method: "card";
  amount: number;
  cardNumber: string;
};
type Payment = Cash | Card;

function pay2(payment: Payment) {
  if (payment.method === "cash") {
    console.log(payment.amount);
  } else {
    console.log(payment.cardNumber);
  }
}
