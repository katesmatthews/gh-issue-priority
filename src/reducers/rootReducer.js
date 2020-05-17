import { combineReducers } from 'redux';
import keyReducer from './keyReducer';
import repoReducer from './repoReducer';
import issueReducer from './issueReducer';


const rootReducer = combineReducers({
  key: keyReducer,
  repos: repoReducer,
  issues: issueReducer,
});

export default rootReducer;
