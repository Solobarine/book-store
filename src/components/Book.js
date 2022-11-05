import React from 'react';

const Book = () => {
  return (
    <div className="book">
      <div className="sectionOne">
        <div className="bookDetails">
          <p className="bookGenre"></p>
          <h3 className="bookName">Solomon</h3>
          <p className="bookAuthor"></p>
        </div>
        <ul className="buttons">
          <li className="button">Comments</li>
          <li className="button">Remove</li>
          <li className="button">Edit</li>
        </ul>
      </div>
      <div className="sectionTwo">
        <i className="fa-regular"></i>
        <div className="progress">
          <h3 className="percentage">70%</h3>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="sectionThree">
        <h3 className="current">CURRENT CHAPTER</h3>
        <p className="chapter"></p>
        <button className="remove">Remove Book</button>
      </div>
    </div>
  );
}

export default Book
