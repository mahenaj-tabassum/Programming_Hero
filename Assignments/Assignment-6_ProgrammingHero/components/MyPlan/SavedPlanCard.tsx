import { CardData } from "@/types/CardData";
import { Clock4, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RemoveSavedCardButton from "../Buttons/RemoveSavedCardBtn";

interface PropsType {
  plan: CardData;
}

const SavedPlanCard = ({ plan }: PropsType) => {
  return (
    <div className="bg-card rounded-2xl p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
        <Image
          width={144}
          height={90}
          alt={plan.name}
          src={plan.image}
          className="w-full sm:w-36 h-48 sm:h-22.5 rounded-2xl object-cover"
        />

        <div className="min-w-0">
          <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>

          <p className="py-1 text-secondary">{plan.equipment}</p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
            <span className="flex items-center gap-2">
              <Clock4 className="text-accent" size={18} />
              {plan.duration}
            </span>

            <span className="flex items-center gap-2">
              <Flame className="text-accent fill-accent" size={18} />
              {plan.caloriesBurned}
            </span>

            <span className="flex items-center gap-2">
              <Star className="text-accent" size={18} />
              {plan.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:justify-end">
        <Link
          href={`/exercise-details/${plan.id}`}
          className="btn-outline py-2 text-center"
        >
          View Details
        </Link>

        <RemoveSavedCardButton plan={plan} />
      </div>
    </div>
  );
};

export default SavedPlanCard;
