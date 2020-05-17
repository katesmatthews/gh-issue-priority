import * as types from './actionTypes';

export const setApiKey = key => ({
  type: types.SET_API_KEY,
  payload: key,
});