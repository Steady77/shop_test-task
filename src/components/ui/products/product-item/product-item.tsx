import { Product } from '@/services/product/product.types';
import Image from 'next/image';
import { FC } from 'react';
import styles from './product-item.module.scss';
import AddToCartButton from './add-to-cart-button/add-to-cart-button';
import Link from 'next/link';

interface ProductItemProps {
	product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
	return (
		<li className={styles.item}>
			<Link
				className={styles.link}
				href={`product/${product.id}`}
			>
				<h2 className={styles.title}>{product.title}</h2>
				<div className={styles.image}>
					<Image
						src={product.image}
						alt={product.title}
						fill
					/>
				</div>
				<p className={styles.price}>
					Цена: {product.regular_price.value} {product.regular_price.currency}
				</p>
			</Link>
			<AddToCartButton
				className={styles.toCartBtn}
				product={product}
			/>
		</li>
	);
};

export default ProductItem;
