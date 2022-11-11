import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import catReducer from './categories/categories';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    categories: catReducer,
    books: booksReducer,
  }
},
  applyMiddleware(thunk)
);

export default store;
