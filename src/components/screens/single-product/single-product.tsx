import { FC } from 'react';
import styles from './single-product.module.scss';
import { Product } from '@/services/product/product.types';
import Meta from '@/components/meta';
import Layout from '@/components/layout/layout';
import Image from 'next/image';
import { convertPrice } from '@/shared/utils/convert-price';
import AddToCartButton from '@/components/ui/products/product-item/add-to-cart-button/add-to-cart-button';

interface SingleProductProps {
	product: Product;
}

const SingleProduct: FC<SingleProductProps> = ({ product }) => {
	return (
		<Meta title={product.title}>
			<Layout>
				<div className={styles.inner}>
					<div className={styles.imageContainer}>
						<Image
							className={styles.image}
							src={product.image}
							alt={product.title}
							fill
						/>
						<AddToCartButton
							className={styles.toCartBtn}
							product={product}
						/>
					</div>
					<div className={styles.content}>
						<h2 className={styles.title}>{product.title}</h2>
						<ul className={styles.list}>
							<li>Тип: {product.type}</li>
							<li>Размер: {product.sku}</li>
							<li>Цена: {convertPrice(product.regular_price.value)}</li>
						</ul>
					</div>
				</div>
			</Layout>
		</Meta>
	);
};

export default SingleProduct;
