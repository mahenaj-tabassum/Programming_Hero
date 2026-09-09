const arrOfObj = [
  { name: "Rafi", score: 90 },
  { name: "Sadia", score: 65 },
  { name: "Karim", score: 85 },
  { name: "Nafis", score: 75 },
];

function generateLeaderboard(students) {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  if (students.length === 0) {
    return "Invalid";
  }
  for (const student of students) {
    if (student === null || typeof student !== "object") {
      return "Invalid";
    }

    const keys = Object.keys(student);

    if (!keys.includes("name") || !keys.includes("score")) {
      return "Invalid";
    }
    if (typeof student.score !== "number") {
      return "Invalid";
    }
  }

  const qualified = students.filter((student) => {
    return student.score >= 70;
  });

  const names = qualified.map(({ name }) => {
    return name.toUpperCase();
  });

  return names.slice(0, 3);
}

console.log(generateLeaderboard(arrOfObj));
