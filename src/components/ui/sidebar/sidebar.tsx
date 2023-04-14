import { FC } from 'react';
import styles from './sidebar.module.scss';
import Filters from './filters/filters';

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<h3 className={styles.title}>Бренды</h3>
			<Filters />
		</aside>
	);
};

export default Sidebar;
