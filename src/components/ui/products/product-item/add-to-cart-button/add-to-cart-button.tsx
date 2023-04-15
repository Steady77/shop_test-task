import Button from '@/components/ui/button/button';
import { useActions } from '@/hooks/use-actions';
import { useCart } from '@/hooks/use-cart';
import { Product } from '@/services/product/product.types';
import { FC } from 'react';

interface AddToCartButtonProps {
	product: Product;
	className?: string;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ product, className }) => {
	const { addToCart, removeFromCart } = useActions();
	const { items } = useCart();

	const currentElement = items.find(
		(cartItem) => cartItem.product.id === product.id,
	);

	const addToCartHandler = () => {
		currentElement
			? removeFromCart({ id: currentElement.id })
			: addToCart({
					product,
					quantity: 1,
					price: product.regular_price.value,
			  });
	};

	return (
		<div className={className}>
			<Button onClick={addToCartHandler}>{currentElement ? '-' : '+'}</Button>
		</div>
	);
};

export default AddToCartButton;
