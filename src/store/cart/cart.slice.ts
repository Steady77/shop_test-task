import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
	AddToCartPayload,
	CartInitialState,
	ChangeQuantityPayload,
} from './cart.types';

const initialState: CartInitialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
			const isExist = state.items.some(
				(item) => item.product.id === action.payload.product.id,
			);

			if (!isExist) state.items.push({ ...action.payload, id: Date.now() });
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter((item) => item.id !== action.payload.id);
		},
		changeQuantity: (state, action: PayloadAction<ChangeQuantityPayload>) => {
			const { id, type } = action.payload;
			const item = state.items.find((item) => item.id === id);
			if (item) type === 'plus' ? item.quantity++ : item.quantity--;
		},
		resetCart: (state) => {
			state.items = [];
		},
	},
});
