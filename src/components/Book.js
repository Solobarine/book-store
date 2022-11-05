import React from 'react';

const Book = () => { //eslint-disable-line

  return (
    <div className="book">
      <div className="sectionOne">
        <div className="bookDetails">
          <p className="bookGenre">Sci-Fi</p>
          <h3 className="bookName">Solomon</h3>
          <p className="bookAuthor">Solly</p>
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
        <button type="submit" className="remove">Remove Book</button>
      </div>
    </div>
  );
};

export default Book;
