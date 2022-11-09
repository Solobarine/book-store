import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => { //eslint-disable-line
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ Id: Date.now(), Title: name, Author: author }));
  };

  return (
    <form className="form">
      <input
        type="text" 
        className="bookName" 
        placeholder="Enter Book Name" 
        onChange={(e) => setName(e.target.value)
        } />

      <input
        type="text"
        className="bookAuthor"
        placeholder="Enter Book Author"
        onChange={
        (e) => setAuthor(e.target.value)
        } />

      <button type="submit" className="submitBook" onClick={addNewBook}>Add Book</button>
    </form>
  );
};

export default AddBook;
