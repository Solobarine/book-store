import React from 'react';
import { bookTitle, bookAuthor, setBookTitle, setBookAuthor } from '../redux/books/books';

const AddBook = () => { //eslint-disable-line

  return (
    <form className="form">
      <input type="text" className="bookName" placeholder="Enter Book Name" />
      <input type="text" className="bookAuthor" placeholder="Enter Book Author" />
      <button type="submit" className="submitBook">Add Book</button>
    </form>
  );
};

export default AddBook;
