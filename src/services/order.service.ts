import { ORDER_URL } from '@/shared/utils/consts';

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
		return fetch(ORDER_URL, {
			method: 'POST',
			headers: {
				'X-Requested-With': 'XMLHttpRequest',
			},
			body: JSON.stringify(data),
		});
	},
};
