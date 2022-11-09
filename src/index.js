import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import booksReducer from './redux/books/books';
import catReducer from './redux/categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: catReducer,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') // eslint-disable-line
);
