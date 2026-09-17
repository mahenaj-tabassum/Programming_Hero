"use client";

import { useState } from "react";
import Image from "next/image";

interface Food {
  dish_name: string;
  category: string;
  rating: number;
  price: number;
  cuisine: string;
  image_link: string;
}

interface FoodCardProps {
  food: Food;
}

const FoodCard = ({ food }: FoodCardProps) => {
  const { dish_name, category, rating, price, cuisine, image_link } = food;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl border bg-slate-800 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image_link}
          alt={dish_name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          width={500}
          height={500}
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800 backdrop-blur">
          {category}
        </span>

        {/* Favorite Button */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl shadow transition hover:scale-110"
          aria-label="Add to favorites"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-white">{dish_name}</h2>

            <p className="mt-1 text-sm text-gray-400">{cuisine}</p>
          </div>

          <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-2 py-1">
            <span>⭐</span>
            <span className="font-semibold text-gray-800">{rating}</span>
          </div>
        </div>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-2xl font-bold text-gray-100">${price}</p>

          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-xl bg-black px-4 py-2.5 font-medium text-white transition hover:bg-gray-800 active:scale-95"
          >
            {isAdded ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
