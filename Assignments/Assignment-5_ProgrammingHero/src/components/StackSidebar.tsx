import type { Dispatch, SetStateAction } from "react";
import type { TechnologiesType } from "../types/technology";
import StackItem from "./StackItem";
import { toast } from "react-toastify";

interface StackSidebarProps {
  selectedStack: TechnologiesType[];
  setSelectedStack: Dispatch<SetStateAction<TechnologiesType[]>>;
}
const StackSidebar = ({
  selectedStack,
  setSelectedStack,
}: StackSidebarProps) => {
  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.info("All technologies removed from your stack.");
  };
  return (
    <div className="mb-10 bg-white border border-gray-200 rounded-lg p-5">
      <p className="text-xl font-semibold">Your Stack</p>
      {selectedStack.length === 0 ? (
        <p className="text-[14px] ml-1 text-gray-400 mt-3 mb-5">
          No technologies selected yet
        </p>
      ) : (
        <p className="text-[14px] ml-1 text-gray-400 mt-3 mb-5">
          {selectedStack.length}{" "}
          {selectedStack.length === 1 ? "Technology" : "Technologies"} Selected
        </p>
      )}

      {selectedStack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-lg mt-5 flex items-center justify-center h-20">
          <p className="text-[14px] text-gray-400">Your stack is empty</p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <StackItem
            setSelectedStack={setSelectedStack}
            selectedStack={selectedStack}
          />
        </div>
      )}

      {selectedStack.length !== 0 ? (
        <button
          onClick={handleRemoveAll}
          className="w-full cursor-pointer mt-5 bg-red-50 border border-red-600 text-red-600 rounded-lg py-2"
          type="button"
        >
          Remove All
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default StackSidebar;
