import CustomInput from 'component/input';
import React, { Dispatch, SetStateAction, useRef } from 'react';
import { RegisterPageCustomInputStyle } from '../index.style';
import { RegisterFormPagePasswordCheckInputStyle } from './index.style';

const RegisterFormPagePasswordCheckInput = (props: {
	password: string | undefined;
	passwordCheck: string | undefined;
	setPasswordCheck: Dispatch<SetStateAction<string | undefined>>;
}) => {
	const { password, passwordCheck, setPasswordCheck } = props;
	const spanRef = useRef<HTMLSpanElement>(null);
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		setValue: Dispatch<SetStateAction<string | undefined>>,
	) => {
		setValue(event.target.value);

		if (spanRef.current) {
			if (event.target.value !== password) {
				spanRef.current.style.display = 'block';
				spanRef.current.style.color = 'red';
				spanRef.current.innerText = 'X';
			} else {
				spanRef.current.style.display = 'block';
				spanRef.current.style.color = '#5EC33D';
				spanRef.current.innerText = 'O';
			}
		}
	};

	return (
		<div className={RegisterFormPagePasswordCheckInputStyle}>
			<CustomInput
				type="password"
				label="비밀번호 확인"
				value={passwordCheck}
				setValue={setPasswordCheck}
				onChange={handleChange}
				className={RegisterPageCustomInputStyle}
			/>
			<span ref={spanRef}></span>
		</div>
	);
};

export default RegisterFormPagePasswordCheckInput;
