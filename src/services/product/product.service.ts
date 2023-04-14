import { PRODUCTS_URL } from '@/shared/utils/consts';
import { Product } from './product.types';
import axios from 'axios';

export const ProductService = {
	async getAll() {
		try {
			const { data } = await axios<Product[]>({
				url: PRODUCTS_URL,
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			});

			return data;
		} catch (error) {
			console.log(error);
		}
	},
};
