import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const dbURL = process.env.BETTER_AUTH_DATABASE_URL;

if (!dbURL) {
  throw new Error("Database URL is not defined");
}

const client = new MongoClient(dbURL);

const db = client.db("better-auth-module-40");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, { client }),
});
