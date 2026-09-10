import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayersType } from "../../type/playersType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
  playersPromise: Promise<PlayersType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
  const [buttonType, setButtonStyle] = useState("available"); // available or selected

  const handleUpdateButtonType = (type: "available" | "selected") => {
    setButtonStyle(type);
  };

  const players = use(playersPromise);

  const [selectedPlayers, setSelectedPlayers] = useState<PlayersType[]>([]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-5 justify-between items-center my-20">
        {buttonType === "available" ? (
          <h3 className="font-bold text-2xl">
            Available Players ({players.length - selectedPlayers.length})
          </h3>
        ) : (
          <h3 className="font-bold text-2xl">
            Selected Players ({selectedPlayers.length} / {players.length})
          </h3>
        )}
        <div className="flex">
          <button
            onClick={() => setButtonStyle("available")}
            className={`btn rounded-r-none ${buttonType === "available" ? "btn-success" : "btn"}`}
          >
            Available
          </button>
          <button
            onClick={() => handleUpdateButtonType("selected")}
            className={`btn ${buttonType === "selected" ? "btn-success" : "btn"}  rounded-l-none`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>

      {buttonType === "available" ? (
        <AvailablePlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          coin={coin}
          setCoin={setCoin}
          players={players}
        />
      ) : (
        <SelectedPlayers
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      )}
    </div>
  );
};

export default Players;
