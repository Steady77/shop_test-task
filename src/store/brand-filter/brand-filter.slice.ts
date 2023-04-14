import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BrandInitialState } from './brand-filter.types';
import { toggleIdInArray } from '@/shared/utils/array';

const initialState: BrandInitialState = {
	brandIds: [],
};

export const brandFilterSlice = createSlice({
	name: 'brand filter',
	initialState,
	reducers: {
		setBrandIds(state, action: PayloadAction<number>) {
			state.brandIds = toggleIdInArray(state.brandIds, action.payload);
		},
		resetBrandIds: (state) => {
			state.brandIds = [];
		},
	},
});
