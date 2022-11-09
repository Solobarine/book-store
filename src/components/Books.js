import React from 'react';
import {useSelector} from 'react-redux';
import Book from './Book';

const Books = () => { //eslint-disable-line
  const store = useSelector((state) => state.books);

  return (
    <div className="bookList">
      {
        store.forEach(element => {
          <Book element={element}/>
        })
      }
    </div>
  );
};

export default Books;
