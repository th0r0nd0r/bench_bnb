import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  session: sessionReducer
});

export default RootReducer;
