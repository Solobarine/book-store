import { useReducer, useState } from 'react';

const ACTIONS = {
  ADD_BOOK: 'add-book',
  REMOVE_BOOK: 'remove-book',
}

const reducer = (books, actions) => {
  switch (actions.type) {
    case ACTIONS.ADD_BOOK:
      return [...books, {id: Date.now(), Title: actions.payload.bookTitle, Author: actions.payload.bookAuthor}];
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
