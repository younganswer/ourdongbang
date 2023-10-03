import React, { ChangeEvent } from 'react';
interface CustomInputProps {
	label: string;
	value: string;
	setValue: (value: string) => void;
	type?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, value, setValue, type = 'text' }) => {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<label style={{ color: 'black' }}>{label}</label>
			<input
				style={{ width: '100%', marginBottom: 30 }}
				value={value}
				type={type}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default CustomInput;
