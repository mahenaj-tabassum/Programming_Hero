import type { CardData } from "@/types/CardData";
import WorkoutCard from "./WorkoutCard";

const getCardData = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data: CardData[] = await response.json();
  return data;
};

const LibrarySection = async () => {
  const cardInfos: CardData[] = await getCardData();
  return (
    <section id="library">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-16">
        {cardInfos.map((card) => (
          <WorkoutCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default LibrarySection;
