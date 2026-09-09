// =================================================
//      Music App Listening Time Tracker
// =================================================

type Track = {
  title: string;
  minutes: number;
};

function calculateTotalListeningTime(tracks: Track[]) {
  let totalMinute = tracks.reduce((acc, item): number => {
    return item.minutes + acc;
  }, 0);

  return totalMinute;
}

const tracks = [
  { title: "Blinding Lights", minutes: 3 },
  { title: "Levitating", minutes: 4 },
  { title: "Peaches", minutes: 3 },
];

console.log("Minutes:",calculateTotalListeningTime(tracks));
// 10

/**
 * .reduce()
 * => takes an array and reduces it to one final value
 * => sum, object, string
 */
const numbers = [10, 20, 30];
console.log(numbers[0]);

// Sum
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // 60

// Largest Number
const maxNum = numbers.reduce(
  (largest: number, num) => (num > largest ? num : largest),
  numbers[0]!, // I am sure that array isn't empty
);
console.log(maxNum);
