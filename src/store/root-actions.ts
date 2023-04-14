import { brandFilterSlice } from './brand-filter/brand-filter.slice';
import { cartSlice } from './cart/cart.slice';

export const rootActions = {
	...cartSlice.actions,
	...brandFilterSlice.actions,
};
