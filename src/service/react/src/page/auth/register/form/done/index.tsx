import React from 'react';
import { PartyPopperIcon } from './icon';
import { RegisterFormPageDoneStyle } from './index.style';
import { useNavigate } from 'react-router-dom';

const RegisterFormPageDone = () => {
	const navigate = useNavigate();

	return (
		<div className={RegisterFormPageDoneStyle}>
			<div>
				<span>우리동방</span>
				<span>회원가입 완료!</span>
			</div>
			<PartyPopperIcon width={192} height={174} />
			<button
				onClick={() => {
					navigate('/auth/login');
				}}
			>
				로그인 하기
			</button>
		</div>
	);
};

export default RegisterFormPageDone;
