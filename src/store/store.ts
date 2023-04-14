import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart/cart.slice';
import { brandFilterSlice } from './brand-filter/brand-filter.slice';

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	brandFilter: brandFilterSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type TypeRootState = ReturnType<typeof rootReducer>;
