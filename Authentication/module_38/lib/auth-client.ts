import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000",
});
export const { signIn, signUp, useSession, signOut } = createAuthClient();

/**
 * sign up: Register : Create Account : First Time User.
 * sign in: Log in : Already have account : Repeated User.
 * sign out: Log out
 */