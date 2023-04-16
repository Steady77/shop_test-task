import { Dispatch, FC, SetStateAction } from 'react';
import Button from '../button/button';
import styles from './pagination.module.scss';
import { PER_PAGE } from '@/shared/utils/consts';

interface PaginationProps {
	length: number;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = ({
	length,
	currentPage,
	setCurrentPage,
}) => {
	const pagesCount = Math.ceil(length / PER_PAGE);

	if (pagesCount <= 1) {
		setCurrentPage(1);
		return null;
	}

	return (
		<div className={styles.pagination}>
			<p className={styles.count}>
				Страница {currentPage} из {pagesCount}
			</p>
			<Button
				onClick={() => setCurrentPage((prev) => prev - 1)}
				disabled={currentPage === 1}
			>
				Назад
			</Button>
			<Button
				onClick={() => setCurrentPage((prev) => prev + 1)}
				disabled={currentPage === pagesCount}
			>
				Вперед
			</Button>
		</div>
	);
};

export default Pagination;
