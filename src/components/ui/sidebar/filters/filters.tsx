import { FC, useState } from 'react';
import Checkbox from '../../checkbox/checkbox';
import styles from './filters.module.scss';
import Button from '../../button/button';
import { useQuery } from '@tanstack/react-query';
import { BrandService } from '@/services/brand/brand.service';
import { useActions } from '@/hooks/use-actions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const Filters: FC = () => {
	const { data } = useQuery(['brands'], () => BrandService.getAll());
	const { setBrandIds, resetBrandIds } = useActions();
	const { brandIds } = useTypedSelector((state) => state.brandFilter);

	return (
		<>
			<ul className={styles.filters}>
				{data?.length &&
					data.map((brand) => (
						<li
							key={brand.id}
							className={styles.item}
						>
							<Checkbox
								onChange={() => setBrandIds(brand.id)}
								checked={brandIds.includes(brand.id)}
							>
								{brand.title}
							</Checkbox>
						</li>
					))}
			</ul>
			<Button
				className={styles.button}
				onClick={() => resetBrandIds()}
			>
				Сбросить
			</Button>
		</>
	);
};

export default Filters;
