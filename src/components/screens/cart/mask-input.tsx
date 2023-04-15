import Input from '@/components/ui/input/input';
import { ChangeEvent, FC } from 'react';
import { withMask } from 'use-mask-input';

const MaskInput: FC<{
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}> = ({ onChange, value }) => {
	return (
		<Input
			ref={withMask('9(999) 999-99-99')}
			type="tel"
			placeholder="Телефон"
			value={value}
			onChange={onChange}
		/>
	);
};

export default MaskInput;
