import dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";

// Store the client and database for reuse
let client;
let database;

// Connect the application to MongoDB
export const connectToMongoDB = async () => {
  const url = process.env.MONGODB_DATABASE_URL;
  if (!url) {
    throw new Error("MONGODB_DATABASE_URL is missing");
  }
  // Create a MongoDB client using the connection URL
  client = new MongoClient(url);
  try {
    // Wait until the MongoDB connection is established
    await client.connect();
    database = client.db("module-44_CRUD");
    console.log("You successfully connected to MongoDB");

    // Return the connected client so other code can use it
    return database;
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    throw err;
  }
};

export const connectedClient = await connectToMongoDB();

// Provide database access to other files
export const getDB = () => {
  if (!database) {
    throw new Error("Database is not connected");
  }

  return database;
};
