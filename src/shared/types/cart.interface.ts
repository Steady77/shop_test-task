import { Product } from '@/services/product/product.types';

export interface CartItem {
	id: number;
	product: Product;
	quantity: number;
	price: number;
}
