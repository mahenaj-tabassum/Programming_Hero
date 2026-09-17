"use client";

import FoodCard from "@/components/foodCard";

// ============================================================
// React Hooks
// ============================================================

// import { use } from "react";
import { useEffect, useState } from "react";

// ============================================================
// TypeScript Interface
// ============================================================

interface Food {
  id: number;
  dish_name: string;
  category: string;
  rating: number;
  price: number;
  cuisine: string;
  image_link: string;
}

// ============================================================
// API URL
// ============================================================

const API_URL = "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods";

// ============================================================
// OPTION 1: Fetch Data Using Async/Await
// ============================================================

// const FoodPromise = async () => {
//   const res = await fetch(API_URL);
//
//   const data = await res.json();
//
//   const foods = data.data;
//
//   return foods;
// };

// ============================================================
// OPTION 2: Fetch Data Using Promise Chaining
// ============================================================

// const FoodPromise2 = fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => data);

// ============================================================
// OPTION 3: Fetch Data Using use() Hook
// ============================================================

// const foodPromise = FoodPromise();

// const foods = use(foodPromise);

// ============================================================
// OPTION 4: Fetch Data Using useEffect + fetch()
// ============================================================

const MenuPage = () => {
  // ----------------------------------------------------------
  // These are examples of fetching data directly inside
  // a Server Component.
  //
  // They are commented out because this file is a
  // Client Component ("use client").
  // ----------------------------------------------------------

  // const res = fetch(API_URL);

  // const data = await res.json();

  // const foods = data.data;

  // console.log(foods);

  // ----------------------------------------------------------
  // Calling the promise functions from Option 1 and Option 2
  // ----------------------------------------------------------

  // const foodPromise = FoodPromise();

  // const foodPromise2 = FoodPromise2;

  // ----------------------------------------------------------
  // Using React's use() API
  // ----------------------------------------------------------

  // const foods = use(foodPromise);

  // ----------------------------------------------------------
  // State
  // ----------------------------------------------------------

  const [foods, setFoods] = useState<Food[]>([]);

  // ----------------------------------------------------------
  // Fetch data after the component mounts
  // ----------------------------------------------------------

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setFoods(data.data));
  }, []);

  // ----------------------------------------------------------
  // Render Food Cards
  // ----------------------------------------------------------

  return (
    <div className="mx-auto flex w-[95%] flex-wrap gap-5 p-5">
      {foods.map((food) => (
        <FoodCard food={food} key={food.id} />
      ))}
    </div>
  );
};

export default MenuPage;
