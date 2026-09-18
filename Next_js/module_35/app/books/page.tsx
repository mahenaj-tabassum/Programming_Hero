import BookCardComponent from "@/components/BookCardComponent";

export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  publishedYear: number;
  pages: number;
  coverImage: string;
}

export const getBooks = async (): Promise<Book[]> => {
  const response = await fetch("http://localhost:5000/books", {
    next: {
      // ISR
      revalidate: 10,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};

const BooksPage = async () => {
  const books: Book[] = await getBooks();
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <BookCardComponent book={book} key={book.id} />
      ))}
    </div>
  );
};

export default BooksPage;
