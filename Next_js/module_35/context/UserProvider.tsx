"use client";

import { createContext } from "react";

export const UserContext = createContext("");

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  return <UserContext.Provider value="Tomato">{children}</UserContext.Provider>;
};
export default UserProvider;
