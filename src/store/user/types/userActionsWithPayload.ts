import {
  ISignUpSuccessData,
  IUserAuthData,
  UserAuthWithAdditionalData,
} from './auth';
import { IUserData } from './user';
import { UserActionTypes } from './userActionTypes';

export interface ICheckUserSession {
  type: UserActionTypes.CHECK_USER_SESSION;
}

export interface IGoogleSignInStart {
  type: UserActionTypes.GOOGLE_SIGN_IN_START;
}

export interface IEmailSignInStart {
  type: UserActionTypes.EMAIL_SIGN_IN_START;
  payload: IUserAuthData;
}

export interface ISignInSuccess {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: IUserData;
}

export interface ISignInFailed {
  type: UserActionTypes.SIGN_IN_FAILED;
  payload: string;
}

export interface ISignUpStart {
  type: UserActionTypes.SIGN_UP_START;
  payload: UserAuthWithAdditionalData;
}

export interface ISignUpSuccess {
  type: UserActionTypes.SIGN_UP_SUCCESS;
  payload: ISignUpSuccessData;
}

export interface ISignUpFailed {
  type: UserActionTypes.SIGN_UP_FAILED;
  payload: string;
}

export interface ISignOutStart {
  type: UserActionTypes.SIGN_OUT_START;
}

export interface ISignOutSuccess {
  type: UserActionTypes.SIGN_OUT_SUCCESS;
}

export interface ISignOutFailed {
  type: UserActionTypes.SIGN_OUT_FAILED;
  payload: string;
}

export type UserActionsWithPayload =
  | ICheckUserSession
  | IGoogleSignInStart
  | IEmailSignInStart
  | ISignInSuccess
  | ISignInFailed
  | ISignUpStart
  | ISignUpSuccess
  | ISignUpFailed
  | ISignOutStart
  | ISignOutSuccess
  | ISignOutFailed;
