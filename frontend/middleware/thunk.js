
const thunk = ({dispatch, getState}) => next => action => {
  if (action instanceof Function) {
    return action(dispatch);
  } else {
    return next(action);
  }
};



export default thunk;
