import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => { //eslint-disable-line
  const dispatch = useDispatch();
  const text = props.book;
  const remove  = (e) => {
    e.preventDefault();
    dispatch(removeBook(text.id));
  }

  return (
    <div id={props.id} className="book">
      <div className="sectionOne">
        <div className="bookDetails">
          <p className="bookGenre">Sci-Fi</p>
          <h3 className="bookName">{text.Title}</h3>
          <p className="bookAuthor">{text.Author}</p>
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
        <button type="submit" className="remove" onClick={ remove }>Remove Book</button>
      </div>
    </div>
  );
};

export default Book;
