import { FC, InputHTMLAttributes, forwardRef } from 'react';
import style from './input.module.scss';

type ButtonType = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, ButtonType>(
	({ children, className, ...rest }, ref) => {
		return (
			<input
				ref={ref}
				className={`${style.input} ${className}`}
				{...rest}
			>
				{children}
			</input>
		);
	},
);

Input.displayName = 'Input';

export default Input;
