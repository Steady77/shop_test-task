import Layout from '@/components/layout/layout';
import Meta from '@/components/meta';
import { FC, useState } from 'react';
import styles from './cart.module.scss';
import { useCart } from '@/hooks/use-cart';
import { useActions } from '@/hooks/use-actions';
import { useRouter } from 'next/router';
import CartItem from './cart-item/cart-item';
import { convertPrice } from '@/shared/utils/convert-price';
import Button from '@/components/ui/button/button';
import Input from '@/components/ui/input/input';
import { useMutation } from '@tanstack/react-query';
import { OrderService } from '@/services/order.service';
import { toast } from 'react-toastify';

const Cart: FC = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	const { items, total } = useCart();
	const { resetCart } = useActions();
	const { push } = useRouter();

	const { mutate: createOrder, isLoading } = useMutation(
		['create order'],
		() =>
			OrderService.create({
				name,
				phone,
				items: items.map((item) => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id,
				})),
			}),
		{
			onSuccess() {
				setName('');
				setPhone('');
				toast.success('Заказ отправлен');
				setTimeout(() => {
					push('/').then(() => resetCart());
				}, 3000);
			},

			onError: () => {
				toast.error('Ошибка. Заказ не отправлен', { delay: 10 });
			},
		},
	);

	const handleCreateOrder = () => {
		if (!name || !phone) {
			toast.error('Заполните форму');
			return;
		}

		createOrder();
	};

	return (
		<Meta title="Корзина">
			<Layout>
				<h4 className={styles.heading}>Корзина</h4>
				<div className={styles.cart}>
					{items.length > 0 ? (
						items.map((item) => (
							<CartItem
								key={item.product.id}
								cartItem={item}
							/>
						))
					) : (
						<div className={styles.empty}>В корзине ничего нет!</div>
					)}
				</div>
				{items.length > 0 && (
					<>
						<div className={styles.footer}>
							<div>Сумма:</div>
							<div>{convertPrice(total)}</div>
						</div>
						<div className={styles.form}>
							<Input
								type="text"
								placeholder="Имя"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<Input
								type="tel"
								placeholder="Телефон"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
							<Button
								onClick={handleCreateOrder}
								disabled={isLoading}
							>
								Оформить заказ
							</Button>
						</div>
					</>
				)}
			</Layout>
		</Meta>
	);
};

export default Cart;
