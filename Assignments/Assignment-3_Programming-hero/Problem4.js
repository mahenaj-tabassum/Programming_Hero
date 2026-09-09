const numberArray = [80, 65, 90, 75]

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

console.log(bonusScore(numberArray));