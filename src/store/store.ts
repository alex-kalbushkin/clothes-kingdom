import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart';
import { categoriesReducer } from './categories';
import { userReducer } from './user';

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const customReduxLogger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('currentState: ', store.getState());
  console.log('action: ', action);

  next(action);

  console.log('nextState: ', store.getState());
  console.log('---------------');
};

const middleWares = [customReduxLogger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
