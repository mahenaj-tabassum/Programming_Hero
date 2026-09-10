import { useState, type Dispatch, type SetStateAction } from "react";
import type { PlayersType } from "../../type/playersType";
import { User, Flag, Star } from "lucide-react";
import { toast } from "react-toastify";

interface PlayerProps {
  player: PlayersType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: PlayersType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>;
}
const PlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: PlayerProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPlayer = () => {
    setIsSelected(true);
    if (player.price > coin) {
      setIsSelected(false);
      toast.error("Your coin is insufficient to buy the players");
    } else {
      setCoin(coin - player.price);
      toast.success(`${player.name} added successfully`);
      // Selected Players
      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  return (
    <div className="w-full mx-auto max-w-xs rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Image placeholder */}
      <div className="h-40 w-full rounded-xl bg-gray-200 overflow-hidden">
        <img src={player.img} alt="" />
      </div>

      {/* Name */}
      <div className="mt-4 flex items-center gap-2">
        <User className="h-5 w-5 text-gray-800" strokeWidth={2} />
        <span className="font-semibold text-gray-900">{player.name}</span>
      </div>

      {/* Country + Role */}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-sm text-gray-500">
          <Flag className="h-4 w-4" strokeWidth={2} />
          <span>{player.origin}</span>
        </div>
        <span className="rounded-md border border-gray-200 px-2.5 py-1 text-xs text-gray-700">
          {player.type}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-900">Rating</p>
        <span className="flex items-center gap-1">
        <p className="text-[13px] text-gray-400">4.9</p>
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
        </span>
      </div>

      {/* Batting style + Price row */}
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm text-gray-500">{player.battingStyle}</span>
        <span className="text-sm text-gray-500">{player.bowlingStyle}</span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-900">
          Price: ${player.price}
        </span>
        <button
          type="button"
          onClick={handleSelectPlayer}
          className={`${
            isSelected
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-400 text-white cursor-pointer"
          } border-gray-50 rounded-md border px-3 py-1.5 text-sm`}
          disabled={isSelected}
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};
export default PlayerCard;
