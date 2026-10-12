import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const dbURL = process.env.BETTER_AUTH_DATABASE_URL;

if (!dbURL) {
  throw new Error("Database URL is not defined");
}

const client = new MongoClient(dbURL);

const db = client.db("better-auth-module-39");

export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET as string,
    },
    discord: {
      clientId: process.env.BETTER_AUTH_DISCORD_CLIENT_ID as string,
      clientSecret: process.env.BETTER_AUTH_DISCORD_CLIENT_SECRET as string,
    },
  },

  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, { client }),
});
