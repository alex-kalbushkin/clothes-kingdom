import { useAppSelector } from '../../hooks';

export const useCategoriesState = () =>
  useAppSelector((state) => state.categories);
