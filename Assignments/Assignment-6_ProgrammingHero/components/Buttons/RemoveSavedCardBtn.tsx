"use client";
import { MyPlanContext } from "@/Contexts/MyPlanContext";
import { CardData } from "@/types/CardData";
import { XIcon } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface PropsType {
  plan: CardData;
}

const RemoveSavedCardButton = ({ plan }: PropsType) => {
  const exerciseContext = useContext(MyPlanContext);
  if (!exerciseContext) {
    throw new Error("Error");
  }
  const { savedPlans, setSavedPlans } = exerciseContext;

  const handleRemove = (id: number) => {
    const findExercise = savedPlans.find((item) => item.id === id);
    setSavedPlans(savedPlans.filter((item) => item !== findExercise));
    toast.error(`"${findExercise?.name}" removed from saved ❌`);
  };
  return (
    <button
      onClick={() => handleRemove(plan.id)}
      type="button"
      aria-label="Remove exercise"
      className="p-2 rounded-full hover:text-red-400 hover:bg-red-500/10 transition-colors duration-200 cursor-pointer flex items-center justify-center bg-red-500/20 text-red-400"
    >
      <XIcon size={20} />
    </button>
  );
};

export default RemoveSavedCardButton;
