import { getBook } from '@/lib/books'
import BookDetails from '@/components/Home/BookDetails'
import React from 'react'

const BookDetailsPage =  async({params}:{params: Promise<{id: string}>}) => {
    const {id} = await params
    const book = await getBook(id)
  return (
    <div>
        <BookDetails key={book?.bookId} book={book} /> 
    </div>
  )
}

export default BookDetailsPage