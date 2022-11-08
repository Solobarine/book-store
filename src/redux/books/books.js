const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const firstState = [];

const booksReducer = (state = firstState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

const addBook = () => ({
  type: ADD_BOOK,
});

const removeBook = () => ({
  type: REMOVE_BOOK,
});

export { addBook, removeBook };
export default booksReducer;
