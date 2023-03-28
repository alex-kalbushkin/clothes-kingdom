import { IUserState, UserActionsWithPayload, UserActionTypes } from './types';

const INITIAL_STATE: IUserState = {
  currentUser: null,
  isLoading: false,
  errorMessage: '',
};

export const currentUserReducer = (
  state: IUserState = INITIAL_STATE,
  action: UserActionsWithPayload
): IUserState => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.EMAIL_SIGN_IN_START:
    case UserActionTypes.SIGN_UP_START:
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      };

    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        errorMessage: '',
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
        errorMessage: '',
      };

    case UserActionTypes.SIGN_IN_FAILED:
    case UserActionTypes.SIGN_UP_FAILED:
    case UserActionTypes.SIGN_OUT_FAILED:
      return { ...state, errorMessage: action.payload, isLoading: false };

    default:
      return state;
  }
};
