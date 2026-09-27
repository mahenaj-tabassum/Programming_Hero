"use client";
import { BooksContext } from "@/Context/BooksContext";
import { BookType } from "@/types/bookType";
import { useContext, useState } from "react";

const ListedBooks = () => {
  const booksContext = useContext(BooksContext);
  if (!booksContext) {
    throw new Error("Error from Listed Books");
  }
  const { readBooks, wishList } = booksContext;
  const [activeTab, setActiveTab] = useState("read");
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year" | "none">(
    "none",
  );
  const sortBooks = (books: BookType[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      return sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      return sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortBy === "year") {
      return sortedBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing,
      );
    }
    return books;
  };
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishList = sortBooks(wishList);

  return (
    <div>
      <h2 className="text-2xl">Listed Books</h2>
      <div className="text-center">
        <select
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year" | "none")
          }
          className="border cursor-pointer"
          defaultValue="Sort by"
          value={sortBy}
        >
          <option disabled={true}>Sort by</option>
          <option value={"none"}>No Filter</option>
          <option value={"rating"}>Rating</option>
          <option value={"pages"}>Pages</option>
          <option value={"year"}>Published Year</option>
        </select>
      </div>
      <div className="flex gap-5">
        <button className="border" onClick={() => setActiveTab("read")}>
          Read List
        </button>
        <button className="border" onClick={() => setActiveTab("wish")}>
          Wish List
        </button>
      </div>
      <div></div>

      {activeTab === "read" &&
        sortedReadBooks.map((book) => (
          <div className="border" key={book.bookId}>
            <h2>{book.bookName}</h2>
          </div>
        ))}
      {activeTab === "wish" &&
        sortedWishList.map((wish) => (
          <div className="border mb-5" key={wish.bookId}>
            <h2>Wish: {wish.about}</h2>
          </div>
        ))}
    </div>
  );
};

export default ListedBooks;
