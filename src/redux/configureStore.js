import Redux from 'redux';

 const rootReducer = Redux.combineReducers({
    books: reducer,
    categories: catReducer
  });

  const store = Redux.createStore(rootReducer);
