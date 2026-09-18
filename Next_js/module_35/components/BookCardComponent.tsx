"use client";
import { Book } from "@/app/books/page";
import { UserContext } from "@/context/UserProvider";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
interface BookProps {
  book: Book;
}

const BookCardComponent = ({ book }: BookProps) => {
  const user = use(UserContext);
  return (
    <div className="overflow-hidden rounded-xl border bg-slate-900 shadow-sm transition hover:shadow-lg">
      {/* Book Cover */}
      <div className="relative h-72 w-full">
        <Image
          src={book.coverImage}
          alt={book.title}
          width={300}
          height={300}
          className="object-cover h-70"
        />
      </div>

      {/* Book Information */}
      <div className="p-5">
        <p className="mb-1 text-sm text-gray-500">{book.category}</p>

        <h2 className="mb-1 text-xl font-bold">{book.title}</h2>

        <p className="mb-3 text-sm text-gray-600">by {book.author}</p>

        <div className="mb-4 flex items-center justify-between">
          <span className="font-bold text-lg">${book.price}</span>

          <span className="text-sm">⭐ {book.rating}</span>
        </div>

        <div className="mb-4 flex justify-between text-sm text-gray-500">
          <span>{book.pages} pages</span>
          <span>{book.publishedYear}</span>
        </div>

        <Link href={`/books/${book.id}`}>
          <button className="w-full cursor-pointer rounded-lg bg-slate-700 px-4 py-2 text-white transition hover:bg-gray-800">
            View Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCardComponent;
