// =================================================
//       Smart Home WiFi Signal Status
// =================================================

function getSignalStatus(strength: number): string {
  if (strength >= 0 && strength <= 20) {
    return "Weak";
  } else if (strength >= 21 && strength <= 50) {
    return "Fair";
  } else if (strength >= 51 && strength <= 80) {
    return "Good";
  }
  return "Excellent";
}

console.log(getSignalStatus(20));