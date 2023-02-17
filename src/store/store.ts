import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { cartReducer } from './cart';
import { categoriesReducer } from './categories';
import { userReducer } from './user';

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const middleWares = [logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
