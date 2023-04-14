import { Product } from '@/services/product/product.types';
import Image from 'next/image';
import { FC } from 'react';
import styles from './product-item.module.scss';
import AddToCartButton from './add-to-cart-button/add-to-cart-button';

interface ProductItemProps {
	product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
	return (
		<li className={styles.item}>
			<h2 className={styles.title}>{product.title}</h2>
			<div className={styles.image}>
				<Image
					src={product.image}
					alt={product.title}
					fill
				/>
			</div>
			<div className={styles.footer}>
				<AddToCartButton product={product} />
				<p className={styles.price}>
					Цена: {product.regular_price.value} {product.regular_price.currency}
				</p>
			</div>
		</li>
	);
};

export default ProductItem;
