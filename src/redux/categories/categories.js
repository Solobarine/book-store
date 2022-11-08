import { useReducer } from 'react';

const CAT_ACTIONS = {
  CHECK_STATUS: 'check-status',
};
const initialStatus = '';
const catReducer = (status = initialStatus, actions) => {
  switch (actions.type) {
    case CAT_ACTIONS.CHECK_STATUS:
      status = 'Under Construction'; //eslint-disable-line
      break;
    default:
      status = 'Unknown Action'; //eslint-disable-line
      break;
  }
};

const [category, dispatch] = useReducer(catReducer, ''); // eslint-disable-line

export { CAT_ACTIONS };
export default catReducer;
