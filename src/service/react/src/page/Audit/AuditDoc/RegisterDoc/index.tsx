import React, { useState } from 'react';
import { AuditRegisterButtonStyle } from './index.style';
import RegisterImage from './registerModal';

const AuditRegisterButton = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setIsModalOpened } = props;

	return (
		<div className={AuditRegisterButtonStyle}>
			<button
				onClick={() => {
					setIsModalOpened(true);
				}}
			>
				<div>
					<span>회계 내역 추가하기</span>
					<span>+</span>
				</div>
			</button>
		</div>
	);
};

const AuditRegister = () => {
	const [isModalOpened, setIsModalOpened] = useState(false);

	return (
		<>
			<div className={undefined}>
				<AuditRegisterButton setIsModalOpened={setIsModalOpened}></AuditRegisterButton>
			</div>
			{isModalOpened ? <RegisterImage setIsModalOpened={setIsModalOpened} /> : null}
		</>
	);
};

export default AuditRegister;
