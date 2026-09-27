"use client";
import { BooksContext } from "@/Context/BooksContext";
import { BookType } from "@/types/bookType";
import { useContext } from "react";
import { toast } from "react-toastify";

interface BookDetailsProps {
  book: BookType | undefined;
}

const ReadButton = ({ book }: BookDetailsProps) => {
  const booksProvider = useContext(BooksContext);

  if (!booksProvider) {
    throw new Error("Books Context must be used inside BooksProvider");
  }
  const { readBooks, setReadBooks } = booksProvider;

  const handleReadButton = () => {
    if (!book) return;
    const alreadyExists = readBooks.some((item) => item.bookId === book.bookId);
    if (alreadyExists) return;

    setReadBooks([...readBooks, book]);
    toast.success(`📚"${book.bookName}" added to your Read list!`);
  };

  return <button onClick={handleReadButton}>ReadButton</button>;
};

export default ReadButton;
