import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks';
import { userActions } from '../user.slice';

export const useUserActions = () => {
  const allUserActions = { ...userActions };
  const dispatch = useAppDispatch();

  return bindActionCreators(allUserActions, dispatch);
};
