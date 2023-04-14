import { Product } from '@/services/product/product.types';

export const toggleIdInArray = (array: number[], id: number) => {
	if (array.includes(id)) {
		return array.filter((item) => item !== id);
	} else {
		return [...array, id];
	}
};

export const filterByBrand = (array: Product[], brandIds: number[]) => {
	return array.filter((item) => brandIds.includes(item.brand));
};
