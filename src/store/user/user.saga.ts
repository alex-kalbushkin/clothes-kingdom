import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
  getCurrentUser,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from '../../utils/firebase';

import {
  IEmailSignInStart,
  ISignUpStart,
  ISignUpSuccess,
  UserActionTypes,
} from './types';
import { userActionCreators } from './user.actions';

function* getSnapshotFromUserAuth(userAuth, additionalInfo?) {
  try {
    const userSnapshot = yield call(
      createUserDocFromAuth,
      userAuth,
      additionalInfo
    );

    yield put(
      userActionCreators.signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(userActionCreators.signInFailed(error.message));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) {
      return;
    }
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(userActionCreators.signInFailed(error.message));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(userActionCreators.signInFailed(error.message));
  }
}

function* signInWithEmail({ payload: { email, password } }: IEmailSignInStart) {
  try {
    const { user } = yield call(
      signInUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(userActionCreators.signInFailed(error.message));
  }
}

function* signUp({ payload: { email, password, displayName } }: ISignUpStart) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    yield put(userActionCreators.signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(userActionCreators.signUpFailed(error.message));
  }
}

function* signInAfterSignUp({
  payload: { user, additionalData },
}: ISignUpSuccess) {
  yield call(getSnapshotFromUserAuth, user, additionalData);
}

function* signOut() {
  try {
    yield call(signOutUser);
    yield put(userActionCreators.signOutSuccess());
  } catch (error) {
    yield put(userActionCreators.signOutFailed(error.message));
  }
}

// start actions listeners block
export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}
// end actions listeners block

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
