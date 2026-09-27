"use client";
import { CardData } from "@/types/CardData";
import { CheckIcon, Clock4, Flame, Star, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { MyPlanContext } from "@/Contexts/MyPlanContext";

interface PropsType {
  plan: CardData;
}

const TodayPlanCard = ({ plan }: PropsType) => {
  const [markAsDone, setMarkAsDone] = useState(false);
  const exerciseContext = useContext(MyPlanContext);
  if (!exerciseContext) {
    throw new Error("Error");
  }
  const { todaysPlan, setTodaysPlan } = exerciseContext;

  const handleRemove = (id: number) => {
    const findExercise = todaysPlan.find((item) => item.id === id);
    setTodaysPlan(todaysPlan.filter((item) => item !== findExercise));
    toast.error(`"${findExercise?.name}" removed from today's plan ❌`);
  };

  return (
    <div className="bg-card rounded-2xl p-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
      {/* Left section */}
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

      {/* Right section */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:justify-end">
        <Link
          href={`/exercise-details/${plan.id}`}
          className="btn-outline py-2 text-center"
        >
          View Details
        </Link>

        <button
          onClick={() => {
            setMarkAsDone(true);
            toast.success("Workout marked as done! 💪");
          }}
          disabled={markAsDone}
          className="btn-primary py-2 flex items-center justify-center gap-2 disabled:opacity-60"
        >
          <CheckIcon size={15} />
          <span>{markAsDone ? "Done" : "Mark as Done"}</span>
        </button>

        <button
          onClick={() => handleRemove(plan.id)}
          type="button"
          aria-label="Remove exercise"
          className="p-2 rounded-full hover:text-red-400 hover:bg-red-500/10 transition-colors duration-200 cursor-pointer flex items-center justify-center bg-red-500/20 text-red-400"
        >
          <XIcon size={20} />
        </button>
      </div>
    </div>
  );
};

export default TodayPlanCard;
