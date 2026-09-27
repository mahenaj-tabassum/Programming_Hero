"use client";
import { BooksContext } from "@/Context/BooksContext";
import { BookType } from "@/types/bookType";
import { useContext } from "react";
import { toast } from "react-toastify";

interface BookDetailsProps {
  book: BookType | undefined;
}

const WishListButton = ({ book }: BookDetailsProps) => {
  const bookContext = useContext(BooksContext);
  if (!bookContext) {
    throw new Error("Error from Wish List Button");
  }
  const { wishList, setWishList } = bookContext;
  const handleWishList = () => {
    if (!book) return;
    const alreadyExists = wishList.some((item) => item.bookId === book.bookId);
    if (alreadyExists) return;

    setWishList([...wishList, book]);
    toast.success(`💜 "${book.bookName}" has been added to your wishlist!`);
  };
  return <button onClick={handleWishList}>WishListButton</button>;
};

export default WishListButton;
