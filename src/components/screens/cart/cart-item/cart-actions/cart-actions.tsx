import Button from '@/components/ui/button/button';
import { useActions } from '@/hooks/use-actions';
import { useCart } from '@/hooks/use-cart';
import { CartItem } from '@/shared/types/cart.interface';
import { FC } from 'react';
import styles from '../cart-item.module.scss';

const CartActions: FC<{ item: CartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions();

	const { items } = useCart();
	const quantity = items.find((cartItem) => cartItem.id === item.id)?.quantity;

	return (
		<div className={styles.actions}>
			<div className={styles.inner}>
				<Button
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					-
				</Button>

				<input
					disabled
					readOnly
					value={quantity}
					className={styles.input}
				/>

				<Button onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
					+
				</Button>

				<Button onClick={() => removeFromCart({ id: item.id })}>x</Button>
			</div>
		</div>
	);
};

export default CartActions;
