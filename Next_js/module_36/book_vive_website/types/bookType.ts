export type Ripple = {
  id: number;
  x: number;
  y: number;
  size: number;
};

export interface BookType {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  about: string;
  publisher: string;
  yearOfPublishing: number;
}
