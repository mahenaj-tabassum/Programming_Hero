import { getBooks } from "@/lib/books";
import BookCard from "@/components/Home/BookCard";

const Books = async () => {
  const booksData = await getBooks();

  return (
    <div className="bg-amber-200 grid grid-cols-3 gap-5">
      {booksData.map((book) => (
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default Books;
