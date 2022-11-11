export const ADD_BOOK = 'bookstore-react/books/ADD_BOOK';
export const GET_BOOKS = 'bookstore-react/books/GET_BOOKS';
export const REMOVE_BOOK = 'bookstore-react/books/REMOVE_BOOK';
export const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
export const key = 'YT5Zn3abbZAmKMoCagyt';

const bookReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case GET_BOOKS:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.book.item_id);
    default:
      return state;
  }
};

export const getBooks = () => async (dispatch) => {
  const collectBooks = await fetch(`${url}/apps/${key}/books`).then((res) => res.json());
  const books = [];
  Object.keys(collectBooks).forEach((e) => books.push({ ...collectBooks[e][0], item_id: e }));
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

export const addBook = (book) => async (dispatch) => {
  const data = {
    item_id: book.item_id,
    Title: book.Title,
    Author: book.Author,
    Category: book.Category,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await fetch(`${url}/apps/${key}/books`, options).then((res) => res.json());
  dispatch({
    type: ADD_BOOK,
    book,
  });
};

export const deleteBook = (book) => async (dispatch) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  await fetch(`${url}/apps/${key}/books/${book.item_id}`, options).then((res) => res.json());
  dispatch({
    type: REMOVE_BOOK,
    book,
  });
};

export default bookReducer;
