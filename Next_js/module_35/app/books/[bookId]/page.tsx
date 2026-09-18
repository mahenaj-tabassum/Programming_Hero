import Image from "next/image";
import { Book } from "../page";

export async function generateStaticParams() {
  const books = await fetch("http://localhost:5000/books/").then((res) =>
    res.json(),
  );
  return books.map((book: Book) =>
    // Creating an array of Object
    ({
      bookId: book.id,
    }),
  );
}

const BookDetailsPage = async ({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) => {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await res.json();
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* Book Cover */}
        <Image
          src={book.coverImage}
          alt={book.title}
          width={300}
          height={300}
          className="h-72 w-full object-cover"
        />

        {/* Book Info */}
        <div className="p-5">
          <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
            {book.category}
          </span>

          <h1 className="mt-3 text-2xl font-bold text-gray-900">
            {book.title}
          </h1>

          <p className="mt-1 text-sm text-gray-500">by {book.author}</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              ${book.price}
            </span>

            <span className="text-sm text-yellow-600">⭐ {book.rating}</span>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            {book.stock} copies available
          </p>

          <button className="mt-5 w-full rounded-lg bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
