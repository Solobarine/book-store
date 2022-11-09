import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import catReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  categories: catReducer,
  books: booksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
