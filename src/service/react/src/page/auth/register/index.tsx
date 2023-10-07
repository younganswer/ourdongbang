import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterPageStyle, GoogleRegisterStyle } from './index.style';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { GoogleLoginButton } from 'component/google-login-button';
import axios from 'axios';
import RegisteredPage from './fail/registered';

const RegisterPage = () => {
	const [searchParams] = useSearchParams();
	const [name, setName] = React.useState<string | undefined>(undefined);
	const [, setHd] = React.useState<string | undefined>(undefined);
	const [email, setEmail] = React.useState<string | undefined>(undefined);
	const navigate = useNavigate();

	useEffect(() => {
		if (email) {
			axios
				.get(`${process.env.REACT_APP_NESTJS_URL}/user/email/${email}`)
				.then(() => {
					navigate('/auth/register?fail=registered');
				})
				.catch(() => {
					navigate(`/auth/register/form?name=${name}&email=${email}`);
				});
		}
	}, [email]);

	if (searchParams.get('fail') === 'registered') {
		return <RegisteredPage />;
	}

	return (
		<div className={RegisterPageStyle}>
			<div>
				<h3>회원가입</h3>
				<div className={GoogleRegisterStyle}>
					<GoogleLoginButton
						text="Google 계정으로 가입하기"
						width="270px"
						height="50px"
						setName={setName}
						setHd={setHd}
						setEmail={setEmail}
					/>
				</div>
				<div>
					<span>이미 회원이시라면</span>
					<Link to={'/auth/login'}>
						<span>로그인 하기</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
