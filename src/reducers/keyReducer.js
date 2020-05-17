import * as types from '../actions/actionTypes';

const initialState = {
  apiKey: '',
};

const keyReducer = (state = initialState, action) {
  switch(action.type) {
    case types.SET_API_KEY:
      return { ...state, apiKey: action.payload };
    default:
      return state;
  }
};