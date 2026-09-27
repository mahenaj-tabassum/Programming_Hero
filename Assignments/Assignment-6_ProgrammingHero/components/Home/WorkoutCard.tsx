import { CardData } from "@/types/CardData";
import { Clock4, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WorkoutCardProps {
  card: CardData;
}

const WorkoutCard = ({ card }: WorkoutCardProps) => {
  return (
    <Link href={`/exercise-details/${card.id}`}>
      <div className="bg-[#15171D] cursor-pointer rounded-2xl overflow-hidden ">
        {/* Image */}
        <Image
          alt={card.name}
          src={card.image}
          width={392}
          height={192}
          className="aspect-3/2 w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
        />

        <div className="p-6">
          {/* Tags */}
          <div className="flex gap-2">
            {card.muscleGroups.map((tag, idx) => (
              <span
                className="bg-accent text-black font-bold text-[12px] px-3 py-1 rounded-full"
                key={idx}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Name of the workout */}
          <h3 className="text-xl my-4 font-bold tracking-tight text-white">
            {card.name}
          </h3>

          {/* Equipment */}
          <p className="text-[14px] mb-5">{card.equipment}</p>
          <hr className="border-white" />

          {/* Bottom */}
          <div className="flex gap-3 mt-5 items-center">
            <span className="flex items-center gap-2">
              <Clock4 size={20} />
              {card.duration}
            </span>
            <span className="flex items-center gap-2">
              <Flame size={20} />
              {card.caloriesBurned}
            </span>
            <span className="flex items-center gap-2">
              <Star size={20} />
              {card.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
