import { BookType } from "@/types/bookType";
import ReadButton from "../BookDetailsButton/ReadButton";
import WishListButton from "../BookDetailsButton/WishListButton";

interface BookDetailsProps {
  book: BookType | undefined;
}

const BookDetails = ({ book }: BookDetailsProps) => {
  return (
    <div className="border p-5">
      <h2> Name: {book?.bookName}</h2>
      <h2>Author: {book?.author}</h2>
      <div className="flex  gap-5">
        {/* Actions */}
        <ReadButton book={book} />
        <WishListButton book={book}/>
      </div>
    </div>
  );
};

export default BookDetails;
