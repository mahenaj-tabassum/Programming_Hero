import { Coins } from "lucide-react";
import logo from "../assets/logo.png";

const NavbarComponent = ({ coin }: { coin: number }) => {
  return (
    <nav>
      <div className="flex h-28 items-center justify-between">
        <img className="h-15" src={logo} alt="Image" />
        <ul className="hidden md:flex items-center gap-10 text-[18px]">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <button className="btn btn-warning ">
          <Coins /> {coin} coins{" "}
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
