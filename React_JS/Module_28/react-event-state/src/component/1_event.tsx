function Event() {
  function handleClick() {
    alert("Button Click");
  }

  const handleClick3 = () => {
    alert("Button click me 3");
  };

  const handleAddToCart = (itemID: number) => {
    alert(`Buying item: ${itemID}`);
  };

  return (
    <>
      <h1>What is an Event?</h1>

      <h3>
        An event is an action that happens in the user interface—something the
        user does that your app can respond to.
      </h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          margin: "70px auto",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button>Click</button>
        <button>Submit</button>
        <button>Input</button>
        <button>Change</button>
        <button>Mouse Interaction</button>
        <button>Keyboard Interaction</button>
      </div>

      <h2>User Action → Event → Event Handler → UI Response</h2>

      <hr />

      {/* <button onclick="handleClick()">Click ME</button> */}

      <button onClick={handleClick}>Click me 2: Default Function</button>

      <button onClick={handleClick3}>Click me 3: Arrow Function</button>

      <button onClick={() => alert("Click 4")}>
        Click me 4: Dynamic Function
      </button>

      <button onClick={() => handleAddToCart(65)}>Buy This</button>

      <p>
        The arrow function creates a callback. It lets React call the handler
        later, at click time, with the required argument.
      </p>
    </>
  );
}

export default Event;
