"use client";

import { CardData } from "@/types/CardData";
import {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type PlanContextType = {
  todaysPlan: CardData[];
  setTodaysPlan: Dispatch<SetStateAction<CardData[]>>;
  savedPlans: CardData[];
  setSavedPlans: Dispatch<SetStateAction<CardData[]>>;
};

export const MyPlanContext = createContext<PlanContextType | undefined>(
  undefined,
);

const MyPlanContextProvider = ({ children }: { children: React.ReactNode }) => {
  // Load Today's Plan
  const [todaysPlan, setTodaysPlan] = useState<CardData[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("todaysPlan");
    return stored ? JSON.parse(stored) : [];
  });

  // Load Saved Plans
  const [savedPlans, setSavedPlans] = useState<CardData[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("savedPlans");
    return stored ? JSON.parse(stored) : [];
  });

  // Save Today's Plan whenever it changes
  useEffect(() => {
    localStorage.setItem("todaysPlan", JSON.stringify(todaysPlan));
  }, [todaysPlan]);

  // Save Saved Plans whenever they change
  useEffect(() => {
    localStorage.setItem("savedPlans", JSON.stringify(savedPlans));
  }, [savedPlans]);

  return (
    <MyPlanContext.Provider
      value={{
        todaysPlan,
        setTodaysPlan,
        savedPlans,
        setSavedPlans,
      }}
    >
      {children}
    </MyPlanContext.Provider>
  );
};

export default MyPlanContextProvider;
