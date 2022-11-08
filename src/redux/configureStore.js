import Redux from 'redux';
import reducer from './books/books'; //eslint-disable-line
import catReducer from './categories/categories';

const rootReducer = Redux.combineReducers({
  books: reducer,
  categories: catReducer,
});

const store = Redux.createStore(rootReducer); // eslint-disable-line
