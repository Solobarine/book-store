import React from 'react';
import {useSelector} from 'react-redux';
import Book from './Book';

const Books = () => { //eslint-disable-line
  const store = useSelector((state) => state.books);
  console.log(store)
  const showBooks = store.map(book => (
    <Book key={book.id} book={book} />
  ))
  return (
    <div className="bookList">
      { showBooks }
    </div>
  );
};

export default Books;
