import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import cart from '@/assets/images/cart.svg';
import styles from './cart-icon.module.scss';
import { useCart } from '@/hooks/use-cart';

const CartIcon: FC = () => {
	const { items } = useCart();
	return (
		<div className={styles.icon}>
			<Link href="/cart">
				<Image
					src={cart}
					alt="cart"
					priority
				/>
				<span className={styles.number}>{items.length}</span>
			</Link>
		</div>
	);
};

export default CartIcon;
