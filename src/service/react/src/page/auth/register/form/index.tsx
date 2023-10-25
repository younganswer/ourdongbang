import React, { Dispatch, SetStateAction, useEffect } from 'react';
import axios from 'axios';
import { AuthContext, User } from 'context/AuthContext';
import { FormEvent, useContext, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
	RegisterFormPageStyle,
	RegisterFormStyle,
	RegisterPageCustomInputStyle,
} from './index.style';
import CustomInput from 'component/input';
import { RegisterContext, RegisterInfo } from 'context/RegisterContext';

const registerHandler = async (
	event: FormEvent,
	name: string | undefined,
	id: string | undefined,
	password: string | undefined,
	passwordCheck: string | undefined,
	email: string | undefined,
	setMe: Dispatch<SetStateAction<User | null>>,
	navigate: NavigateFunction,
) => {
	try {
		event.preventDefault();

		// if (username.length) < 1 throw new Error ('이름 길이가 짧습니다')
		// if (userEmail) - 어떻게 처리해줄지 생각나면 수정 요망
		// if (!id || id.length < 4) throw new Error('회원ID가 너무 짧습니다. 4글자 이상으로 해주세요.');
		// if (!password || password.length < 6)
		//	throw new Error('비밀번호가 너무 짧습니다. 6자 이상으로 입력해주세요');
		// if (!passwordCheck || password != passwordCheck)
		//	throw new Error('비밀번호가 다릅니다. 다시 확인해주세요');
		await axios
			.post(
				`${process.env.REACT_APP_NESTJS_URL}/auth/register`,
				{
					name,
					id,
					password,
					email,
				},
				{ withCredentials: true },
			)
			.then(response => {
				setMe(response.data);
				toast.success('회원가입이 완료되었습니다');
				navigate('/main/info');
			})
			.catch(error => {
				console.error(error);
				alert(error.response.data.message);
			});
	} catch (err: unknown) {
		if (err instanceof Error) {
			toast.error(err.message);
		}
	}
};

const RegisterForm = (props: { registerInfo: RegisterInfo }) => {
	const { registerInfo } = props;
	const email = registerInfo.email;
	const [name, setName] = useState<string | undefined>(registerInfo.name);
	const [id, setId] = useState<string | undefined>('');
	const [password, setPassword] = useState<string | undefined>('');
	const [passwordCheck, setPasswordCheck] = useState<string | undefined>('');
	const navigate = useNavigate();
	const { setMe } = useContext(AuthContext);

	return (
		<form
			className={RegisterFormStyle}
			onSubmit={event =>
				registerHandler(event, name, id, password, passwordCheck, email, setMe, navigate)
			}
		>
			<div>
				<CustomInput
					type="text"
					label="이름"
					value={name}
					setValue={setName}
					customInputStyle={RegisterPageCustomInputStyle}
				/>
				<CustomInput
					type="text"
					label="아이디"
					value={id}
					setValue={setId}
					customInputStyle={RegisterPageCustomInputStyle}
				/>
				<CustomInput
					type="password"
					label="비밀번호"
					value={password}
					setValue={setPassword}
					customInputStyle={RegisterPageCustomInputStyle}
				/>
				<CustomInput
					type="password"
					label="비밀번호 확인"
					value={passwordCheck}
					setValue={setPasswordCheck}
					customInputStyle={RegisterPageCustomInputStyle}
				/>
				<div>
					<span>{email}</span>
				</div>
				<button className="font-change" type="submit">
					회원가입
				</button>
			</div>
		</form>
	);
};

const RegisterFormPage = () => {
	const { registerInfo } = useContext(RegisterContext);
	const navigate = useNavigate();
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (!registerInfo) {
			if (!timer) {
				const timeoutId = setTimeout(() => {
					navigate('/auth/register');
				}, 10);
				setTimer(timeoutId);
			}
		} else {
			if (timer) {
				clearTimeout(timer);
			}
		}
		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [registerInfo, navigate, timer]);

	return (
		<div className={RegisterFormPageStyle}>
			{registerInfo ? (
				<div>
					<span>회원가입</span>
					<RegisterForm registerInfo={registerInfo} />
				</div>
			) : null}
		</div>
	);
};

export default RegisterFormPage;
