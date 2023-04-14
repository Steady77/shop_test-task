import { FC, PropsWithChildren } from 'react';
import Header from './header/header';
import { ToastContainer } from 'react-toastify';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="wrapper">
			<ToastContainer />
			<Header />
			<main className="main">
				<section>
					<div className="container">{children}</div>
				</section>
			</main>
		</div>
	);
};

export default Layout;
