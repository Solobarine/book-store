import { useReducer, useState } from 'react';

const ACTIONS = {
  ADD_BOOK: 'add-book',
  REMOVE_BOOK: 'remove-book',
}

const addNewBook => (bookTitle, bookAuthor) = { // eslint-disable-line
  return ({id: Date.now(), Title: bookTitle, Author: bookAuthor});
}

const reducer = (books, actions) => {
  switch (actions.type) {
    case ACTIONS.ADD_BOOK:
      return [...books, addNewBook(actions.payload.bookTitle, actions.payload.bookAuthor)];
      break;
    case ACTIONS.REMOVE_BOOK:
      books.filter((book) => book.id != actions.payload.id);
      break;
    default:
      return books;
      break;
  }
};

const [books, dispatch] = useReducer(reducer, []);
const [bookTitle, setBookTitle] = useState('');
const [bookAuthor, setBookAuthor] = useState('');

export { ACTIONS, books, dispatch, bookTitle, bookAuthor, setBookTitle, setBookAuthor };
export default reducer;
