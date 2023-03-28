import { IUserData } from './user';

export interface IUserAuthData {
  email: string;
  password: string;
}

export interface IUserAuthAdditionalData {
  displayName: string;
}

export type UserAuthWithAdditionalData = IUserAuthData &
  IUserAuthAdditionalData;

export interface ISignUpSuccessData {
  user: IUserData;
  additionalData: IUserAuthAdditionalData;
}
