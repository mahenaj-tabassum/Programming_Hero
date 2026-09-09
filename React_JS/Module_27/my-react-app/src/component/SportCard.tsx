import type { SportType } from "../Types/type";

export default function SportCard({ sport }: { sport: SportType }) {
  return (
    <div className="student">
      <h2>Name: {sport.name}</h2>
      <p>Players: {sport.players}</p>
    </div>
  );
}
