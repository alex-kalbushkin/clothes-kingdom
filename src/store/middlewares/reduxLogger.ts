export const customReduxLogger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('currentState: ', store.getState());
  console.log('action: ', action);

  next(action);

  console.log('nextState: ', store.getState());
  console.log('---------------');
};
