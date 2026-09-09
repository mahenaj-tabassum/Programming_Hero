import { useEffect, useState } from "react";

const UseEffect = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);
  return (
    <div>
      <h2>Todo: {todos.length}</h2>
    </div>
  );
};

export default UseEffect;
