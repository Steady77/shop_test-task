import { FC } from 'react';
import styles from './cart-item.module.scss';
import { CartItem } from '@/shared/types/cart.interface';
import Image from 'next/image';
import { convertPrice } from '@/shared/utils/convert-price';
import CartActions from './cart-actions/cart-actions';
import Link from 'next/link';

interface CartItemProps {
	cartItem: CartItem;
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
	return (
		<div className={styles.item}>
			<Link
				href={`product/${cartItem.product.id}`}
				className={styles.link}
			>
				<Image
					src={cartItem.product.image}
					alt={cartItem.product.title}
					width={100}
					height={100}
				/>
				<div className={styles.rightContent}>
					<p className={styles.name}>{cartItem.product.title}</p>
					<p className={styles.price}>
						{convertPrice(cartItem.product.regular_price.value)}
					</p>
				</div>
			</Link>
			<CartActions item={cartItem} />
		</div>
	);
};

export default CartItem;
