import { useReducer, useState } from 'react';

const CAT_ACTIONS = {
  CHECK_STATUS: 'check-status'
};

const catReducer = (status, actions) => {
  switch (actions.type) {
    case CAT_ACTIONS.CHECK_STATUS:
      return 'Under Construction';
      break;
    default:
      return 'Unknown Action';
      break;
  }
};

export { CAT_ACTIONS };
export default catReducer;
