import { BookType } from "@/types/bookType";
import Image from "next/image";
import Link from "next/link";
interface BookProps {
  book: BookType;
}

const BookCard = ({ book }: BookProps) => {
  return (
    <Link href={`books/${book.bookId}`} className="border mb-5">
      <Image src={book.image} alt={book.bookName} width={100} height={100} />
      <h2>{book.bookName}</h2>
      <h2>{book.author}</h2>
      <h2>{book.category}</h2>
    </Link>
  );
};

export default BookCard;
