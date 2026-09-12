import { StarIcon } from "lucide-react";
import type { BadgeType, TechnologiesType } from "../types/technology";
import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface TechnologyCardProps {
  // Object
  technology: TechnologiesType;
  setSelectedStack: Dispatch<SetStateAction<TechnologiesType[]>>;
  selectedStack: TechnologiesType[];
}
const badgeStyles: Record<BadgeType, string> = {
  Popular: "border-blue-200 bg-blue-50 text-blue-600",
  Flexible: "border-green-200 bg-green-50 text-green-600",
  Fast: "border-purple-200 bg-purple-50 text-purple-600",
  Essential: "border-red-200 bg-red-50 text-red-600",
  "Top SQL": "border-orange-200 bg-orange-50 text-orange-600",
  "Type-Safe": "border-cyan-200 bg-cyan-50 text-cyan-600",
  Modern: "border-pink-200 bg-pink-50 text-pink-600",
  Powerful: "border-indigo-200 bg-indigo-50 text-indigo-600",
  Containers: "border-yellow-200 bg-yellow-50 text-yellow-600",
};
const TechnologyCard = ({
  technology,
  setSelectedStack,
  selectedStack,
}: TechnologyCardProps) => {
  const isAdded = selectedStack.some((stack) => stack.id === technology.id);
  const handleIsAdded = () => {
    if (isAdded) {
      return toast.warning("You can't add same card again!");
    }
    toast.success(`${technology.name} added to stack`);
    setSelectedStack((prev) => [...prev, technology]);
  };

  return (
    <div>
      <div className="h-full relative px-5 py-8 rounded-xl bg-white border border-gray-200 flex flex-col ">
        <span
          className={`absolute right-5 top-5 text-[12px] border rounded p-1 ${badgeStyles[technology.badge]}`}
        >
          {technology.badge}
        </span>
        <img
          className="h-8 mb-5 self-start"
          src={technology.icon}
          alt={technology.name}
        />
        <h2 className="font-bold text-2xl">{technology.name}</h2>
        <p className="text-[12px] my-5 text-gray-500">
          {technology.description}
        </p>
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-[12px] bg-gray-200 px-2 py-1 rounded-lg">
              {technology.category}
            </span>
            <p className="text-[13px]">{technology.difficulty}</p>
            <span className="flex items-center text-[12px] gap-0.5">
              <StarIcon className="size-4 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-500">{technology.rating}</span>
            </span>
          </div>
          <button
            onClick={handleIsAdded}
            className={`mt-8 w-full  py-2 text-[15px] rounded-xl 
                ${isAdded ? "flex items-center justify-center gap-2 cursor-not-allowed bg-amber-50 border border-amber-600 text-amber-600" : "bg-slate-950 text-white cursor-pointer transition-transform duration-300 hover:-translate-y-1"}
                `}
            type="button"
            // disabled={isAdded}
          >
            {isAdded ? <>✓ Added to Stack</> : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
