import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToMongoDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

// Load environment variables from the .env file
dotenv.config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from other origins, such as a frontend application
app.use(cors());

// Parse incoming JSON request bodies into JavaScript objects
app.use(express.json());

// Define the root endpoint: GET /
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Server is running successfully" });
});

// Register user routes under the /users path
// All routes defined in userRoutes will start with /users
// GET: http://localhost:5000/users
app.use("/users", userRoutes);


// Connect to MongoDB and start the server
try {
  // Connect to the MongoDB database before starting the server
  await connectToMongoDB();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Failed to connect to MongoDB:", error.message);
  process.exit(1);
}
