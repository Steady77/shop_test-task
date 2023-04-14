import { FC, useState } from 'react';
import ProductItem from './product-item/product-item';
import { ProductProps } from '@/components/screens/home/home.types';
import styles from './products-list.module.scss';
import Pagination from '../pagination/pagination';
import { paginate } from '@/shared/utils/paginate';
import { PER_PAGE } from '@/shared/utils/consts';

const ProductsList: FC<ProductProps> = ({ products }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const paginatedProducts = paginate(products, currentPage, PER_PAGE);

	return (
		<div>
			<ul className={styles.list}>
				{paginatedProducts.map((product) => (
					<ProductItem
						key={product.id}
						product={product}
					/>
				))}
			</ul>
			<Pagination
				length={products.length}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
};

export default ProductsList;
