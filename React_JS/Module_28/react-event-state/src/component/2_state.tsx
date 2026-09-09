import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  let counter = 0;
  const handleAddToCart = () => {
    counter = counter + 1;
  };

  const handleIncreaseCart = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {/* Cart */}
      <h1>Shopping Cart</h1>

      {/* Won't work */}
      <button onClick={handleAddToCart}>Add to Cart</button>

      <hr />
      {/* Increase Cart Item */}
      <button onClick={handleIncreaseCart}>Increase Cart Item</button>
      <h3>Items in the cart: {count}</h3>
    </div>
  );
};

export default State;

// function useState(initialValue) {
//   let state = initialValue;
//   function setState(newValue) {
//     state = newValue;
//   }
//   return [state, setState];
// }
// const [counter, setCounter] = useState(0)
// setCounter(counter + 1)