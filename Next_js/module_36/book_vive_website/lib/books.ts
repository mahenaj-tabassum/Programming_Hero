import { BookType } from "@/types/bookType";
import BooksData from "@/data/booksData.json";

export const getBooks = async (): Promise<BookType[]> => {
  return BooksData;
};

export const getBook = async (id:string): Promise<BookType | undefined> => {
  return BooksData.find((book) => book.bookId === Number(id));
};
