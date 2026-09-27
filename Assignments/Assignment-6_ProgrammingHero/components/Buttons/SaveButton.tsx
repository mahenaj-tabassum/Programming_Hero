"use client";
import { MyPlanContext } from "@/Contexts/MyPlanContext";
import { CardData } from "@/types/CardData";
import { Bookmark } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface SaveButtonProps {
  exercise: CardData | undefined;
}
const SaveButton = ({ exercise }: SaveButtonProps) => {
  const saveContext = useContext(MyPlanContext);
  if (!saveContext) {
    throw new Error("Error");
  }
  const { savedPlans, setSavedPlans } = saveContext;

  const handleSaveButton = () => {
    if (!exercise) return;

    const alreadyExists = savedPlans.some((item) => exercise.id === item.id);
    if (alreadyExists) {
      toast.warning(`"${exercise.name}" is already saved ⭐`);
      return;
    }
    setSavedPlans([...savedPlans, exercise]);
    toast.success(`"${exercise.name}" saved! 💾`);
  };
  return (
    <div>
      <button
        onClick={handleSaveButton}
        className="btn-outline flex items-center gap-1 "
      >
        <span>
          <Bookmark size={17} />
        </span>
        Save For Later
      </button>
    </div>
  );
};

export default SaveButton;
