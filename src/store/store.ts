import { combineReducers, configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { cartReducer } from './cart';
import { categoriesReducer } from './categories';
import { rootSaga } from './root-saga';
import { currentUserReducer } from './user';

const rootReducer = combineReducers({
  user: currentUserReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const isNotProductionMode = process.env.NODE_ENV !== 'production';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  isNotProductionMode && logger,
  thunk,
  sagaMiddleware,
].filter(Boolean);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
  devTools: isNotProductionMode,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
