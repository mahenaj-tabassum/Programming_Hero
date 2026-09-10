import type { Dispatch, SetStateAction } from "react";
import type { PlayersType } from "../../type/playersType";
import PlayerCard from "./playerCard";

interface AvailablePlayersProps {
  players: PlayersType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers:PlayersType[]
  setSelectedPlayers: Dispatch<SetStateAction<PlayersType[]>>
  
}

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: AvailablePlayersProps) => {
  return (
    <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2  gap-7 my-10">
      {/* Render players */}
      {players.map((player) => {
        return (
          <div key={player.id}>
            <PlayerCard setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}  coin={coin} setCoin={setCoin} player={player} />
          </div>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
