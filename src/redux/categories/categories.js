import { useReducer } from 'react';

const CAT_ACTIONS = {
  CHECK_STATUS: 'check-status'
};

const catReducer = (status, actions) => {
  switch (actions.type) {
    case CAT_ACTIONS.CHECK_STATUS:
      return category = 'Under Construction';
      break;
    default:
       return category = 'Unknown Action';
      break;
  }
};

const [category, dispatch] = useReducer(catReducer, '')

export { CAT_ACTIONS };
export default catReducer;
