import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author} ({book.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
