import { Suspense, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologySection from "./components/TechnologySection";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";

const fetchDevStackData = async () => {
  const response = await fetch("/data/technology.json");
  const data = await response.json();
  return data;
};

const App = () => {
  const [devStackDataPromise] = useState(() => fetchDevStackData());
  return (
    <>
      <ToastContainer position="top-right" />
      <div className="md:bg-white bg-[#f8f6f6]">
        <Navbar />
        <div className="w-[85%] mx-auto">
          <Hero />
          <div>
            <h2 className="text-center md:text-4xl md:text-left font-bold text-3xl">
              Explore the{" "}
              <span className="text-pink-gradient">Technologies</span>
            </h2>
            <p className="text-center mb-8 mt-2 md:text-left text-sm text-gray-600">
              Pick one technology per category to build your ideal stack
            </p>

            <Suspense fallback={<Loading />}>
              <TechnologySection devStackDataPromise={devStackDataPromise} />
            </Suspense>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
