const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const firstState = [];

const catReducer = (state = firstState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
};

const checkStatus = () => ({
  type: CHECK_STATUS,
});

export { checkStatus };
export default catReducer;
