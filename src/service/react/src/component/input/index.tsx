import React, { ChangeEvent } from 'react';

const handleInputChange = (
	event: ChangeEvent<HTMLInputElement>,
	setValue: React.Dispatch<React.SetStateAction<string | undefined>>,
) => {
	setValue(event.target.value);
};

const CustomInput = (props: {
	type: string | undefined;
	label: string | undefined;
	value: string | undefined;
	setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
	customInputStyle: string | undefined;
}) => {
	const { label, value, setValue, customInputStyle } = props;
	const type = props.type || 'text';

	return (
		<div className={customInputStyle}>
			<input
				type={type}
				placeholder={label}
				value={value}
				onChange={event => handleInputChange(event, setValue)}
			/>
		</div>
	);
};

export default CustomInput;
