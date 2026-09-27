import { CardData } from "@/types/CardData";
import Image from "next/image";
import AddToPlan from "./Buttons/AddToPlan";
import SaveButton from "./Buttons/SaveButton";

interface ExercisesProps {
  exercise: CardData;
}

const CardDetails = ({ exercise }: ExercisesProps) => {
  return (
    <div className="my-10 flex flex-col lg:flex-row gap-8 items-start justify-between">
      <div className="mx-auto">
        <Image
          width={588}
          height={733}
          alt={exercise.name}
          src={exercise.image}
          className="rounded-2xl w-full h-auto max-w-147"
        />
      </div>
      <div>
        <h2 className="text-4xl mb-5 font-bold tracking-tight">
          {exercise.name}
        </h2>
        <p className="text-[16px]">{exercise.description}</p>
        <div className="py-6">
          {/* Tags */}
          <div className="flex gap-2">
            {exercise.muscleGroups.map((tag, idx) => (
              <span
                className="bg-accent text-black font-bold text-[12px] px-3 py-1 rounded-full"
                key={idx}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="bg-card px-5 py-5 rounded-2xl">
          <div className="flex items-center text-[12px] justify-between">
            <p className="uppercase">Equipment</p>
            <p>{exercise.equipment}</p>
          </div>
          <hr className="my-3 border-[#1A1F2A]" />
          <div className="flex items-center text-[12px] justify-between">
            <p className="uppercase">Difficulty</p>
            <p>{exercise.difficulty}</p>
          </div>
          <hr className="my-3 border-[#1A1F2A]" />
          <div className="flex items-center text-[12px] justify-between">
            <p className="uppercase">Sets</p>
            <p>{exercise.sets}</p>
          </div>
          <hr className="my-3 border-[#1A1F2A]" />
          <div className="flex items-center text-[12px] justify-between">
            <p className="uppercase">Reps</p>
            <p>{exercise.reps}</p>
          </div>
          <hr className="my-3 border-[#1A1F2A]" />
          <div className="flex items-center text-[12px] justify-between">
            <p className="uppercase">duration</p>
            <p>{exercise.duration}</p>
          </div>
          <hr className="my-3 border-[#1A1F2A]" />
          <div className="flex items-center text-[12px] justify-between">
            <p className="uppercase">Calories</p>
            <p>{exercise.caloriesBurned}</p>
          </div>
          <hr className="my-3 border-[#1A1F2A]" />
          <div className="flex items-center text-[12px] justify-between">
            <p className="uppercase">Rating</p>
            <p>{exercise.rating}</p>
          </div>
        </div>

        {/* Instructions */}
        <p className="font-bold uppercase text-white mt-6 mb-3">Instructions</p>
        <ol className="list-decimal marker:text-[#9CA3AF] list-inside space-y-2">
          {exercise.instructions.map((item, idx) => (
            <li key={idx} className="text-[#D1D5DB] text-[14px] ">
              {item}
            </li>
          ))}
        </ol>

        <div className="flex flex-col md:flex-row mt-5 gap-5 items-center">
          <AddToPlan exercise={exercise} />
          <SaveButton exercise={exercise} />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
