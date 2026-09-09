interface BookProps {
  name: string;
}

function Books({ name }: BookProps) {
  const listStyle = {
    fontSize: "20px",
    border: "2px solid gray",
    margin: "20px",
    padding: "20px",
    borderRadius: "40px",
  };
  return <li style={listStyle}>Book name: {name}</li>;
}
export default Books;
