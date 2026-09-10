import { Suspense, useState, useMemo } from "react";
import BannerComponent from "./components/bannerComponent";
import NavbarComponent from "./components/navbarComponent";
import Players from "./components/Players/players";
import type { PlayersType } from "./type/playersType";
import { ToastContainer } from "react-toastify";
import NewsletterComponent from "./components/newsletterComponent";
import FooterComponent from "./components/footerComponent";

const playersPromise = async (): Promise<PlayersType[]> => {
  const response = await fetch("/dummy.json");
  const data = response.json();
  return data;
};

const App = () => {
  const [coin, setCoin] = useState<number>(5000);
  const stablePlayersPromise = useMemo(() => playersPromise(), []);

  return (
    <>
      {/* <Toaster position="bottom-right" /> */}
      <ToastContainer position="bottom-right" />
      <div className="mx-auto max-w-[80%]">
        <NavbarComponent coin={coin} />
        <BannerComponent />
        <Suspense fallback="Loading....">
          <Players
            setCoin={setCoin}
            coin={coin}
            playersPromise={stablePlayersPromise}
          />
        </Suspense>
        <NewsletterComponent />
      </div>
      <FooterComponent />
    </>
  );
};

export default App;
