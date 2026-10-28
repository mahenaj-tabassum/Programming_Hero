import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("This is Home Page!");
});

const users = [
  { id: 1, name: "John Doe", email: "john@gmail.com" },
  { id: 2, name: "Jane Smith", email: "jane@gmail.com" },
  { id: 3, name: "Michael Brown", email: "michael@gmail.com" },
  { id: 4, name: "Emily Davis", email: "emily@gmail.com" },
  { id: 5, name: "David Wilson", email: "david@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});
app.use(express.json());

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;

  // Temporary Data Storage
  users.push(newUser);
  console.log(req.body);
  res.send({ success: true, message: "User Added Successfully" });
});
app.listen(PORT, () => {
  console.log(`Express app is running on port: http://localhost:${PORT}`);
});
