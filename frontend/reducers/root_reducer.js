import { combineReducers } from 'redux';
import errors from './errors_reducer';
import session from './session_reducer';

// debugger;
const RootReducer = combineReducers({
  errors,
  session
});

export default RootReducer;
