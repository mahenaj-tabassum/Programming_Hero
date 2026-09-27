"use client";
import { MyPlanContext } from "@/Contexts/MyPlanContext";
import { CardData } from "@/types/CardData";
import { CalendarDays } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface AddToPlanButtonProps {
  exercise: CardData | undefined;
}

const AddToPlan = ({ exercise }: AddToPlanButtonProps) => {
  const todaysPlanContext = useContext(MyPlanContext);
  if (!todaysPlanContext) {
    throw new Error("Error");
  }
  const { todaysPlan, setTodaysPlan } = todaysPlanContext;

  const handleTodaysPlanButton = () => {
    if (!exercise) return;
    const alreadyExists = todaysPlan.some((item) => item.id === exercise.id);
    if (alreadyExists) {
      toast.warning(`"${exercise.name}" is already in today's plan ⚠️`);
      return;
    }

    if (todaysPlan.length >= 5) {
      toast.warning("Today's plan is full (5 workouts max).");
      return;
    }

    setTodaysPlan([...todaysPlan, exercise]);

    toast.success(`"${exercise.name}" added to today's plan ✅`);
  };

  return (
    <button
      onClick={handleTodaysPlanButton}
      className={`btn-primary flex items-center gap-1 ${
        todaysPlan.length >= 5 ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <CalendarDays size={17} />
      Add to {"today's"} plan
    </button>
  );
};

export default AddToPlan;
