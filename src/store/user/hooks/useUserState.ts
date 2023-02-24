import { createSelector } from 'reselect';
import { useAppSelector } from '../../hooks';
import { RootState } from '../../store';

const selectUserReducer = (state: RootState) => state.user;

const selectUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

export const useCurrentUserState = () => useAppSelector(selectUser);
