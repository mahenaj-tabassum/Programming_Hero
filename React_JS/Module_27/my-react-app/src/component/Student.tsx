import type { SportType } from "../Types/type.tsx";
import SportCard from "./SportCard.tsx";

const sports: SportType[] = [
  { name: "Football", players: 11 },
  { name: "Kabaddi", players: 9 },
  { name: "Chess", players: 2 },
];
export default function Sports() {
  return (
    <div>
      {sports.map((sport) => (
        <SportCard sport={sport}></SportCard>
      ))}
    </div>
  );
}
