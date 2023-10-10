import React, { useState, FormEvent, useContext, useEffect } from 'react';
import CustomInput from '../../../component/input';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, NavigateFunction, Link, useSearchParams } from 'react-router-dom';
import { AuthContext, Me } from 'context/AuthContext';
import { LoginPageCustomInputStyle, LoginPageFormStyle, LoginPageStyle } from './index.style';
import { GoogleLoginButton } from 'component/google-login-button';
import UnregisteredPage from './fail/unregistered';

const handleLogin = async (
	event: FormEvent,
	id: string | undefined,
	password: string | undefined,
	setMe: React.Dispatch<React.SetStateAction<Me | null>>,
	navigate: NavigateFunction,
) => {
	try {
		event.preventDefault();

		if (!id || !password || id.length < 4 || password.length < 6) {
			throw new Error('입력하신 정보가 올바르지 않습니다.');
		}

		await axios
			.patch(
				`${process.env.REACT_APP_NESTJS_URL}/auth/login`,
				{
					id,
					password,
				},
				{ withCredentials: true },
			)
			.then(response => {
				setMe({
					name: response.data.name,
					id: response.data.id,
					password: response.data.password,
					email: response.data.email,
					major: response.data.major,
					studentId: response.data.studentId,
					phoneNumber: response.data.phoneNumber || null,
					sns: response.data.sns || null,
					profileImageId: response.data.profileImageId || null,
					clubs: response.data.clubs || null,
				});
				toast.success('로그인 완료');
				navigate('/main/info');
			})
			.catch(error => {
				console.error(error);
				throw error;
			});
	} catch (err) {
		console.error(err);
		toast.error('로그인 중 오류가 발생했습니다.');
	}
};

const LoginForm = (props: {
	setMe: React.Dispatch<React.SetStateAction<Me | null>>;
	navigate: NavigateFunction;
}) => {
	const { setMe, navigate } = props;
	const [id, setId] = useState<string | undefined>(undefined);
	const [password, setPassword] = useState<string | undefined>(undefined);

	return (
		<form
			className={LoginPageFormStyle}
			onSubmit={event => handleLogin(event, id, password, setMe, navigate)}
		>
			<div>
				<CustomInput
					type="text"
					label="ID"
					value={id}
					setValue={setId}
					customInputStyle={LoginPageCustomInputStyle}
				/>
				<CustomInput
					type="password"
					label="비밀번호"
					value={password}
					setValue={setPassword}
					customInputStyle={LoginPageCustomInputStyle}
				/>
			</div>
			<button type="submit">로그인</button>
		</form>
	);
};

const LoginPage = () => {
	const [searchParams] = useSearchParams();
	const { setMe } = useContext(AuthContext);
	const navigate = useNavigate();
	const [, setName] = useState<string | undefined>(undefined);
	const [, setHd] = useState<string | undefined>(undefined);
	const [email, setEmail] = useState<string | undefined>(undefined);

	useEffect(() => {
		if (email) {
			axios
				.patch(
					`${process.env.REACT_APP_NESTJS_URL}/auth/login?social=google`,
					{
						email,
					},
					{ withCredentials: true },
				)
				.then(response => {
					setMe(response.data);
					navigate('/main/info');
				})
				.catch(error => {
					console.error(error);
					navigate('/auth/login?fail=unregistered');
				});
		}
	}, [email]);

	if (searchParams.get('fail') === 'unregistered') {
		return <UnregisteredPage />;
	}

	return (
		<div className={LoginPageStyle}>
			<div>
				<h3>로그인</h3>
				<LoginForm setMe={setMe} navigate={navigate} />
				<div>
					<GoogleLoginButton
						text={undefined}
						width={'300px'}
						height={'50px'}
						setName={setName}
						setHd={setHd}
						setEmail={setEmail}
					/>
				</div>
				<div>
					<span>아직 우리동방에 가입하지 않으셨나요?</span>
					<Link to={'/auth/register'}>
						<span>가입하기</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
