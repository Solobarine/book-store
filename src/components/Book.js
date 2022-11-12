import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { asyncDeleteBook } from '../redux/books/BooksAsync';
import { deleteBook } from '../redux/books/Books';

const Book = (props) => {
  Book.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };

  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(asyncDeleteBook(id));
    dispatch(deleteBook(id));
  };

  return (
    <div id={id} className="book">
      <div className="sectionOne">
        <div className="bookDetails">
          <p className="bookGenre">{category}</p>
          <h3 className="bookName">{title}</h3>
          <p className="bookAuthor">{author}</p>
        </div>
        <ul className="buttons">
          <li className="button">Comments</li>
          <li className="button">Remove</li>
          <li className="button">Edit</li>
        </ul>
      </div>
      <div className="sectionTwo">
        <i className="fa-regular" />
        <div className="progress">
          <h3 className="percentage">70%</h3>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="sectionThree">
        <h3 className="current">CURRENT CHAPTER</h3>
        <p className="chapter">Chapter 17</p>
        <button type="submit" className="remove" onClick={handleRemove}>Remove Book</button>
      </div>
    </div>
  );
};

export default Book;
