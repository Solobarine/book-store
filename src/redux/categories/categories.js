const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

const firstState = [];

const checkStatus = () => ({
  type: CHECK_STATUS,
});

const catReducer = (state = firstState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export { checkStatus };
export default catReducer;
