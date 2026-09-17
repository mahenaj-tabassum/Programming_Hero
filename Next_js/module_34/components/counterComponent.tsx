"use client";
import { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  // console.log("Component Re-rendered!");

  const handleIncrease = () => {
    // console.log("Increase button clicked");
    setCount(count + 1);
  };

  // console.log(count);
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Counter Component</h2>
      <button
        onClick={handleIncrease}
        className="bg-blue-500 cursor-pointer  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increase
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-blue-500 ml-5 cursor-pointer  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrease
      </button>
      <h1 className="text-5xl my-5">{count}</h1>
    </div>
  );
};

export default CounterComponent;
