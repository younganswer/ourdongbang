import React, { useState } from 'react';
import { AuditRegisterButtonStyle, AuditRegisterStyle } from './index.style';
import RegisterImage from './registerModal';

const AuditRegisterButton = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setIsModalOpened } = props;

	return (
		<button
			className={AuditRegisterButtonStyle}
			onClick={() => {
				setIsModalOpened(true);
			}}
		>
			<div>
				<span>회계 내역 추가하기</span>
				<span>+</span>
			</div>
		</button>
	);
};

const AuditRegister = () => {
	const [isModalOpened, setIsModalOpened] = useState(false);

	return (
		<>
			<div className={AuditRegisterStyle}>
				<AuditRegisterButton setIsModalOpened={setIsModalOpened}></AuditRegisterButton>
			</div>
			{isModalOpened ? <RegisterImage setIsModalOpened={setIsModalOpened} /> : null}
		</>
	);
};

export default AuditRegister;
