import { BRANDS_URL } from '@/shared/utils/consts';
import { Brand } from './brand.types';
import axios from 'axios';

export const BrandService = {
	async getAll() {
		try {
			const { data } = await axios<Brand[]>({
				url: BRANDS_URL,
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			});

			return data;
		} catch (error) {
			console.log(error);
		}
	},
};
