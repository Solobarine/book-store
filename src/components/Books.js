import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';

const Books = () => { //eslint-disable-line
  const store = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks()); // eslint-disable-next-line
  }, [])
  const showBooks = store.map((book) => (
    <Book key={book.item_id} book={book} />
  ));
  return (
    <div className="bookList">
      {showBooks}
    </div>
  );
};

export default Books;
