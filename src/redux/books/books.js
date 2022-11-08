import { useReducer, useState } from 'react';

const ACTIONS = {
  ADD_BOOK: 'add-book',
  REMOVE_BOOK: 'remove-book',
};

const reducer = (books, actions) => { //eslint-disable-line
  switch (actions.type) {
    case ACTIONS.ADD_BOOK:
      return [...books, {
        id: Date.now(),
        Title: actions.payload.bookTitle,
        Author: actions.payload.bookAuthor,
      }];
    case ACTIONS.REMOVE_BOOK:
      books.filter((book) => book.id !== actions.payload.id);
      break;
    default:
      return books;
  }
};

const [books, dispatch] = useReducer(reducer, []); //eslint-disable-line

const [bookTitle, setBookTitle] = useState(''); //eslint-disable-line

const [bookAuthor, setBookAuthor] = useState(''); //eslint-disable-line

export {
  ACTIONS, books, dispatch, bookTitle, bookAuthor, setBookTitle, setBookAuthor,
};
export default reducer;
