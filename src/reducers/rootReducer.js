import { combineReducers } from 'redux';
import keyReducer from './keyReducer';
import repoReducer from './repoReducer';

const rootReducer = combineReducers({
  key: keyReducer,
  repos: repoReducer,
});

export default rootReducer;
