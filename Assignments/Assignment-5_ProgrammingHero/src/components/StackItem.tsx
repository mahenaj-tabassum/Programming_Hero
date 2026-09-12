import { XIcon } from "lucide-react";

import type { TechnologiesType } from "../types/technology";
import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface StackItemProps {
  selectedStack: TechnologiesType[];
  setSelectedStack: Dispatch<SetStateAction<TechnologiesType[]>>;
}

const StackItem = ({ selectedStack, setSelectedStack }: StackItemProps) => {
  const handleRemove = (id: string) => {
    const removedTechnology = selectedStack.find((stack) => stack.id === id);

    setSelectedStack((prev) => prev.filter((stack) => stack.id !== id));
    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };
  return (
    <>
      {selectedStack.length !== 0 &&
        selectedStack.map((stack) => (
          <div
            key={stack.id}
            className="border border-gray-200 rounded-lg flex items-center justify-between px-5 py-3"
          >
            <div className="flex items-center gap-3">
              <img className="h-8" src={stack.icon} alt={stack.name} />
              <div>
                <p className="font-bold text-slate-900">{stack.name}</p>

                <p className="text-[12px] text-gray-400">{stack.category}</p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(stack.id)}
              className="cursor-pointer"
            >
              <XIcon className="text-red-500 size-5" />
            </button>
          </div>
        ))}
    </>
  );
};

export default StackItem;
