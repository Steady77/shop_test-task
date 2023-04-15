import SingleProduct from '@/components/screens/single-product/single-product';
import { ProductService } from '@/services/product/product.service';
import { Product } from '@/services/product/product.types';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface ProductPageProps {
	product: Product;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
	return <SingleProduct product={product} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const products = await ProductService.getAll();

		if (!products) {
			return {
				paths: [],
				fallback: false,
			};
		}

		const paths = products.map((product) => ({
			params: { id: String(product.id) },
		}));

		return { paths, fallback: 'blocking' };
	} catch {
		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const id = params?.id;

		const products = await ProductService.getAll();

		const product = products?.find((product) => String(product.id) === id);

		return {
			props: { product },
			revalidate: 60,
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};
export default ProductPage;
