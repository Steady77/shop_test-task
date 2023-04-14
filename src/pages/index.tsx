import Home from '@/components/screens/home/home';
import { ProductProps } from '@/components/screens/home/home.types';
import { ProductService } from '@/services/product/product.service';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<ProductProps> = ({ products }) => {
	return <Home products={products} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const products = await ProductService.getAll();

		return {
			props: {
				products,
			},
		};
	} catch (error) {
		return {
			props: {
				products: [],
			},
		};
	}
};

export default HomePage;
