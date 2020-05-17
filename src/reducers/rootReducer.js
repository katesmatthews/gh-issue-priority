import { combineReducers } from 'redux';
import keyReducer from './keyReducer';

const rootReducer = combineReducers({
  keyReducer,
});

export default rootReducer;