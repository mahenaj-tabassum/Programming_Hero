// ================================================================
//  Problem 1
// ================================================================

const studentIntroduction = (student) => {
  if (
    typeof student !== "object" ||
    student === null ||
    Object.keys(student).length === 0
  ) {
    return "Invalid";
  }

  if (Array.isArray(student)) {
    return "Invalid";
  }

  const keys = Object.keys(student);

  if (
    !keys.includes("name") ||
    !keys.includes("age") ||
    !keys.includes("course")
  ) {
    return "Invalid";
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
};

// ================================================================
//  Problem 2
// ================================================================

const filterActiveUsers = (users) => {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  for (let item of users) {
    if (typeof item !== "object" || item === null) {
      return "Invalid";
    }

    const keys = Object.keys(item);

    if (!keys.includes("isActive")) {
      return "Invalid";
    }
  }
  return users.filter((user) => user.isActive === true);
};

// ================================================================
//  Problem 3
// ================================================================

const countHashtags = (caption) => {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const words = caption.split(" ");

  let hashtagCount = 0;
  let longestTag = "";

  for (const word of words) {
    if (word.startsWith("#")) {
      const tag = word.slice(1);

      hashtagCount++;

      if (tag.length > longestTag.length) {
        longestTag = tag;
      }
    }
  }

  return {
    hashtagCount: hashtagCount,
    longestTag: longestTag,
  };
};

// ================================================================
//  Problem 4
// ================================================================

const bonusScore = (scores) => {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }

  for (let score of scores) {
    if (typeof score !== "number") {
      return "Invalid";
    }
  }

  const updatedScores = scores.map((score) => {
    return score + 10;
  });

  let total = updatedScores.reduce((accumulator, score) => {
    return accumulator + score;
  }, 0);

  return total;
};

// ================================================================
//  Problem 5
// ================================================================

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
