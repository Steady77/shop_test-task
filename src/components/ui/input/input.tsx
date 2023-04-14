import { FC, InputHTMLAttributes } from 'react';
import style from './input.module.scss';

type ButtonType = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<ButtonType> = ({ children, className, ...rest }) => {
	return (
		<input
			className={`${style.input} ${className}`}
			{...rest}
		>
			{children}
		</input>
	);
};

export default Input;
