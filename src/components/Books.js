import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { useEffect } from 'react';
import { getBooks } from '../redux/books/books';

const Books = () => { //eslint-disable-line
  const store = useSelector((state) => state.books);
  console.log(store)
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
