import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks';
import { userActionCreators } from '../user.actions';

export const useUserActions = () => {
  const allUserActions = { ...userActionCreators };
  const dispatch = useAppDispatch();

  return bindActionCreators(allUserActions, dispatch);
};
