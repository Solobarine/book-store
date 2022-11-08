import { combineReducers } from 'react-redux';

import catReducer from './categories/categories';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  categories: catReducer,
  books: booksReducer,
});

export default rootReducer;
