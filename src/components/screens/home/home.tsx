import Sidebar from '@/components/ui/sidebar/sidebar';
import { FC } from 'react';
import styles from './home.module.scss';
import ProductsList from '@/components/ui/products/products-list';
import Meta from '@/components/meta';
import Layout from '@/components/layout/layout';
import { ProductProps } from './home.types';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { filterByBrand } from '@/shared/utils/array';

const Home: FC<ProductProps> = ({ products }) => {
	const { brandIds } = useTypedSelector((state) => state.brandFilter);
	const filtered =
		brandIds.length > 0 ? filterByBrand(products, brandIds) : products;

	return (
		<Meta title="Главная страница">
			<Layout>
				<div className={styles.inner}>
					<Sidebar />
					<ProductsList products={filtered} />
				</div>
			</Layout>
		</Meta>
	);
};

export default Home;
