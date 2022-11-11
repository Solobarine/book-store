import { configureStore } from '@reduxjs/toolkit';

import catReducer from './categories/categories';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    categories: catReducer,
    books: booksReducer,
  },
});

export default store;
