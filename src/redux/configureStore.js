import { combineReducers } from 'react-redux';

import catReducer from './categories/categories';
import booksReducer from './books/Books';

const rootReducer = combineReducers({
  categories: catReducer,
  books: booksReducer,
});

export default rootReducer;
