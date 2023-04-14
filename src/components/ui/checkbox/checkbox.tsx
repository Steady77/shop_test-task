import { FC, InputHTMLAttributes } from 'react';
import styles from './checkbox.module.scss';

type CheckboxType = InputHTMLAttributes<HTMLInputElement>;

const Checkbox: FC<CheckboxType> = ({ children, ...rest }) => {
	return (
		<label className={styles.label}>
			<input
				className={styles.input}
				type="checkbox"
				{...rest}
			/>
			<span className={styles.span}></span>
			<span>{children}</span>
		</label>
	);
};

export default Checkbox;
