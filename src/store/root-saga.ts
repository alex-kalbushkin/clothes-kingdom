import { all, call } from 'redux-saga/effects';
import { userSagas } from './user';

export function* rootSaga() {
  yield all([call(userSagas)]);
}
