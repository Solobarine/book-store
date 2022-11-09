export const ADD_BOOK = 'book-store/books/ADD_BOOK';
export const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const initialState = [
  {id: 0, Title: 'The Witcher', Author: 'Andrezj Sarpowsky'},
  {id: 1, Title: 'Lord of The Rings', Author: 'Tolkein'},
  {id: 2, Title: 'Percy Jackson', Author: 'Rick Rodini'},
  {id: 3, Title: 'Harry Potter', Author: 'J.K Rowling'},
  {id: 4, Title: 'Darwins Doubt', Author: 'John Meyers'}];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export { addBook, removeBook };
export default booksReducer;

