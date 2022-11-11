import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => { //eslint-disable-line
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const book = {
      item_id: Date.now(),
      Title: title,
      Author: author,
      Category: category,
  }
  console.log(book)
  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook(book))
  };

  return (
    <form className="form">
      <input
        type="text"
        className="bookName"
        placeholder="Enter Book Name"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        className="bookAuthor"
        placeholder="Enter Book Author"
        onChange={(e) => setAuthor(e.target.value)}
      />

      <select
      name="category"
      className="category"
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">Category</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Religion">Religion</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
          <option value="Science Fiction">Science Fiction</option>
      </select>
      <button type="submit" className="submitBook" onClick={addNewBook}>Add Book</button>
    </form>
  );
};

export default AddBook;
