import { combineReducers, configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './cart';
import { categoriesReducer } from './categories';
import { userReducer } from './user';

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const isNotProductionMode = process.env.NODE_ENV !== 'production';

const middleWares = [isNotProductionMode && logger].filter(Boolean);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
  devTools: isNotProductionMode,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
