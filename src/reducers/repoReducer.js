import * as types from '../actions/actionTypes';

const initialState = {
  repoId: '',
  list: [],
  isPending: false,
};

const repoReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_SELECTED_REPO:
      return { ...state, repoId: action.payload };
    case types.REQUEST_REPOS_PENDING:
      return { ...state, isPending: true }
      case types.REQUEST_REPOS_SUCCESS:
        return { ...state, isPending: false, list: action.payload }
        case types.REQUEST_REPOS_FAILURE:
        return { ...state, isPending: false, err: action.payload }
    default:
      return state;
  }
};

export default repoReducer;
