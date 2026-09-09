// ==============================
//  Problem - 1
// ==============================

const getBatteryStatus = (percentage: number): string => {
  if (percentage >= 0 && percentage <= 20) {
    return "Low";
  } else if (percentage >= 21 && percentage <= 50) {
    return "Medium";
  } else if (percentage >= 51 && percentage <= 90) {
    return "High";
  } else {
    return "Full";
  }
};

// ==============================
//  Problem - 2
// ==============================

interface Booking {
  name: string;
  guests: number;
  time: string;
}

function formatBookingConfirmation(booking: Booking): string {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}

// ==============================
//  Problem - 3
// ==============================

function calculateWeeklyTotal(expenses: number[]): number {
  if (expenses.length === 0) {
    return 0;
  }
  const result = expenses.reduce((acc, number) => {
    let total = acc + number;
    return total;
  }, 0);
  return result;
}

// ==============================
//  Problem - 4
// ==============================

type Light = "red" | "yellow" | "green";

function getTrafficAction(light: Light): string {
  if (light === "red") {
    return "Stop";
  } else if (light === "yellow") {
    return "Slow Down";
  } else {
    return "Go";
  }
}

// ==============================
//  Problem - 5
// ==============================

interface QuizSummary {
  total: number;
  average: number;
}

function getQuizSummary(scores: number[]): QuizSummary {
  const total = scores.reduce((acc, num) => {
    return acc + num;
  }, 0);

  const average = total / scores.length;

  if (scores.length === 0) {
    return {
      total: 0,
      average: 0,
    };
  }
  return {
    total,
    average,
  };
}
