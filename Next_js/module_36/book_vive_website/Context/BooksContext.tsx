"use client";
import React, { createContext, ReactNode, useState } from "react";
import { BookType } from "@/types/bookType";

interface BooksContextType {
  readBooks: BookType[];
  setReadBooks: React.Dispatch<React.SetStateAction<BookType[]>>;
  wishList: BookType[];
  setWishList: React.Dispatch<React.SetStateAction<BookType[]>>;
}

export const BooksContext = createContext<BooksContextType | null>(null);

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<BookType[]>([]);
  const [wishList, setWishList] = useState<BookType[]>([]);
  const sharedData = { readBooks, setReadBooks, wishList, setWishList };
  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
