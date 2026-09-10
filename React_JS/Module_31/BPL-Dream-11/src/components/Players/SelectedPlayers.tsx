import type { Dispatch, SetStateAction } from "react";
import type { PlayersType } from "../../type/playersType";
import { Trash2Icon, User } from "lucide-react";
import { toast } from "react-toastify";

interface SelectedPlayersProps {
  selectedPlayers: PlayersType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>;
  coin?: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({
  setSelectedPlayers,
  selectedPlayers,
  // coin,
  setCoin,
}: SelectedPlayersProps) => {
  const handleRemovePlayer = (id: number) => {
    const removePlayer = selectedPlayers.find((player) => player.id === id);

    setSelectedPlayers(selectedPlayers.filter((player) => player.id !== id));

    if (removePlayer) {
      setCoin((previousCoin) => previousCoin + removePlayer.price);
    }

    toast.warning("Player deleted successfully!");
  };
  return selectedPlayers.length === 0 ? (
    <div className="h-[50vh]">
      <div className="text-center flex flex-col items-center justify-center py-10 border border-gray-300 rounded-xl">
        <User className="size-20 text-gray-300" />
        <h2 className="text-3xl text-gray-400 font-bold">
          No players selected
        </h2>
        <p className="text-gray-400 text-xs mt-2">
          Choose players from the Available Players list <br /> to build your
          BPL Dream Team.
        </p>
      </div>
    </div>
  ) : (
    <div>
      {selectedPlayers.map((player) => (
        <div
          key={player.id}
          className="flex justify-between items-center px-5 py-5 rounded-2xl border border-gray-300 my-6"
        >
          <div className="flex items-center gap-5">
            <img
              className="h-20 w-20 object-cover rounded-2xl"
              src={player.img}
              alt={player.name}
            />
            <div>
              <h3 className="text-2xl font-semibold">{player.name}</h3>
              <p className="text-gray-500">{player.battingStyle}</p>
            </div>
          </div>
          <button onClick={() => handleRemovePlayer(player.id)} type="button">
            <Trash2Icon className="text-red-400 h-5 cursor-pointer" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;
