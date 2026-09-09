interface QuizSummary {
  total: number;
  average: number;
}

function getQuizSummary(scores: number[]): QuizSummary {
  const total = scores.reduce((acc, num) => {
    return acc + num;
  }, 0);

  if (scores.length === 0) {
    return {
      total: 0,
      average: 0,
    };
  }
  const average = total / scores.length;

  return {
    total,
    average,
  };
}
