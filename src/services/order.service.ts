import { ORDER_URL } from '@/shared/utils/consts';
import axios from 'axios';

type TypeData = {
	name: string;
	phone: string;
	items: {
		quantity: number;
		price: number;
		productId: number;
	}[];
};

export const OrderService = {
	async create(data: TypeData) {
		return axios<{ result: string }>({
			url: ORDER_URL,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			data,
		});
	},
};
