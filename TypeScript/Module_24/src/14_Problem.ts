// ==================================================
//      Esports Tournament Player Stats
// ==================================================

type Player = {
  name: string;
  scores: number[];
};

function getPlayerStats(player: Player): {
  name: string;
  average: number;
  rank: string;
} {
  if (player.scores.length === 0) {
    return {
      name: player.name,
      average: 0,
      rank: "Rookie",
    };
  }

  const name = player.name;
  const totalScore = player.scores.reduce((acc, score) => acc + score, 0);
  const average = totalScore / player.scores.length;

  let rank;
  if (average >= 80) {
    rank = "MVP";
  } else {
    rank = "Rookie";
  }
  return {
    name,
    average,
    rank,
  };
}

console.log(
  getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80],
  }),
);
