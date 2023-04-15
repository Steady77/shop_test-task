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
			<Link href={`product/${cartItem.product.id}`}>
				<Image
					src={cartItem.product.image}
					alt={cartItem.product.title}
					width={100}
					height={100}
				/>
			</Link>
			<div>
				<div className={styles.name}>{cartItem.product.title}</div>
				<div className={styles.price}>
					{convertPrice(cartItem.product.regular_price.value)}
				</div>

				<CartActions item={cartItem} />
			</div>
		</div>
	);
};

export default CartItem;
