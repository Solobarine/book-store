import React from 'react';

const AddBook = () => {
  return (
    <form className="form">
      <input type="text" className="bookName" placeholder="Enter Book Name"/>
      <input type="text" className="bookAuthor" placeholder="Enter Book Author"/>
      <button className="submitBook">Add Book</button>
    </form>
  );
}

export default AddBook
