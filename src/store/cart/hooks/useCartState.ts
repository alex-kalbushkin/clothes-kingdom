import { useAppSelector } from '../../hooks';

export const useCartState = () => useAppSelector((state) => state.cart);
