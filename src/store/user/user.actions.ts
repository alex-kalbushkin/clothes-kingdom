import { createAction } from '../../utils/reducer';
import {
  ICheckUserSession,
  IEmailSignInStart,
  IGoogleSignInStart,
  ISignInFailed,
  ISignInSuccess,
  ISignOutFailed,
  ISignOutStart,
  ISignOutSuccess,
  ISignUpFailed,
  ISignUpStart,
  ISignUpSuccess,
  IUserAuthAdditionalData,
  IUserData,
  UserActionTypes,
} from './types';

const checkUserSession = (): ICheckUserSession =>
  createAction(UserActionTypes.CHECK_USER_SESSION);

const googleSignInStart = (): IGoogleSignInStart =>
  createAction(UserActionTypes.GOOGLE_SIGN_IN_START);

const emailSignInStart = (email: string, password: string): IEmailSignInStart =>
  createAction(UserActionTypes.EMAIL_SIGN_IN_START, {
    email,
    password,
  });

const signInSuccess = (user: IUserData): ISignInSuccess =>
  createAction(UserActionTypes.SIGN_IN_SUCCESS, user);

const signInFailed = (errorMessage: string): ISignInFailed =>
  createAction(UserActionTypes.SIGN_IN_FAILED, errorMessage);

const signUpStart = (
  email: string,
  password: string,
  displayName: string
): ISignUpStart =>
  createAction(UserActionTypes.SIGN_UP_START, { email, password, displayName });

const signUpSuccess = (
  user: IUserData,
  additionalData: IUserAuthAdditionalData
): ISignUpSuccess =>
  createAction(UserActionTypes.SIGN_UP_SUCCESS, { user, additionalData });

const signUpFailed = (errorMessage: string): ISignUpFailed =>
  createAction(UserActionTypes.SIGN_UP_FAILED, errorMessage);

const signOutStart = (): ISignOutStart =>
  createAction(UserActionTypes.SIGN_OUT_START);

const signOutSuccess = (): ISignOutSuccess =>
  createAction(UserActionTypes.SIGN_OUT_SUCCESS);

const signOutFailed = (errorMessage: string): ISignOutFailed =>
  createAction(UserActionTypes.SIGN_OUT_FAILED, errorMessage);

export const userActionCreators = {
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailed,
  signUpStart,
  signUpSuccess,
  signUpFailed,
  signOutStart,
  signOutSuccess,
  signOutFailed,
};
