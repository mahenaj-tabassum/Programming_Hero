"use client";

import { use } from "react";
import { UserContext } from "@/context/UserProvider";

const useUserHook = () => {
  const user = use(UserContext);

  return user;
};

export default useUserHook;
