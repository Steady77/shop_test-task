import { CartItem } from '@/shared/types/cart.interface';

export interface CartInitialState {
	items: CartItem[];
}

export interface AddToCartPayload extends Omit<CartItem, 'id'> {}

export interface ChangeQuantityPayload extends Pick<CartItem, 'id'> {
	type: 'minus' | 'plus';
}
