import { createSlice } from '@reduxjs/toolkit';

export const ADD_BOOK = 'book-store/books/ADD_BOOK';
export const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';


export const booksReducer = createSlice({
  name: 'bookStore',
  initialState: [
    {Title: 'The Witcher', Author: 'Andrezj Sarpowsky'},
    {Title: 'Lord of The Rings', Author: 'Tolkein'},
    {Title: 'Percy Jackson', Author: 'Rick Rodini'},
    {Title: 'Harry Potter', Author: 'J.K Rowling'},
    {Title: 'Darwins Doubt', Author: 'John Meyers'}],
  reducer: {
    addNewBook: (state, action) => {
      return [...state, action.payload]
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)
    },
  },
});

export const { addNewBook, removeBook} = booksReducer.actions;
export default booksReducer.reducer;
