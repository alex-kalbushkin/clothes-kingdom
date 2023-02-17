import { useAppSelector } from '../../hooks';

export const useUserState = () => useAppSelector((state) => state.user);
