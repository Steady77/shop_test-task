import { ButtonHTMLAttributes, FC } from 'react';
import style from './button.module.scss';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonType> = ({ children, className, ...rest }) => {
	return (
		<button
			className={`${style.button} ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
