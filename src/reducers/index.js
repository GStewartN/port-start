import { combineReducers } from 'redux';
import repoList from './repo-reducer';


const combinedReducer = combineReducers({
  repoList
});

export default combinedReducer;
