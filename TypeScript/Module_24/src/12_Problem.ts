// =================================================
//       Esports Player Profile Card
// =================================================

interface Player {
  username: string;
  level: number;
  region: string;
}
function formatPlayerCard(player: Player): string {
  return `${player.username} is a Level ${player.level} from ${player.region.charAt(0).toUpperCase() + player.region.slice(1)}.`;
}

console.log(
  formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia",
  }),
);
