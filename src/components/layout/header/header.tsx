import { FC } from 'react';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CartIcon from './cart-icon/cart-icon';
import Button from '@/components/ui/button/button';

const Header: FC = () => {
	const router = useRouter();

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.inner}>
					<Link href="/">
						<p className={styles.logo}>LOGO</p>
					</Link>

					{router.asPath !== '/' ? (
						<Button onClick={() => router.push('/')}>Назад</Button>
					) : (
						<CartIcon />
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
