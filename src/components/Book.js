import React from 'react';
import remove from '../redux/books/books';
import { useDispatch } from 'react-redux';

const Book = ({props}) => { //eslint-disable-line
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div className="sectionOne">
        <div className="bookDetails">
          <p className="bookGenre">Sci-Fi</p>
          <h3 className="bookName">{props.Title}</h3>
          <p className="bookAuthor">{props.Author}</p>
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
        <button type="submit" className="remove" onClick={dispatch(remove())}>Remove Book</button>
      </div>
    </div>
  );
};

export default Book;
