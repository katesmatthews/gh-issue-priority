import * as types from '../actions/actionTypes';

const initialState = {
  list: null,
  isPending: false,
};

const issueReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.REQUEST_ISSUES_PENDING:
      return { ...state, isPending: true };
    case types.REQUEST_ISSUES_SUCCESS:
      return { ...state, isPending: false, list: action.payload };
    case types.REQUEST_ISSUES_FAILURE:
      return { ...state, isPending: false, err: action.payload };
    case types.UPDATE_ISSUES_ORDER:
      return { ...state, isPending: false, list: action.payload };
    default:
      return state;
  }
};

export default issueReducer;
