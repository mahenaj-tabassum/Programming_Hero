import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

// Use Google's public DNS for MongoDB Atlas SRV lookup
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const dbURL = process.env.BETTER_AUTH_DB_URL!;
if (!dbURL) {
  throw new Error("BETTER_AUTH_DB_URL is not defined");
}
const client = new MongoClient(dbURL);
const db = client.db("better-auth-project");
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
});
