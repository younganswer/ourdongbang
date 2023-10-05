import React, { useEffect } from 'react';
import axios from 'axios';
import { AuthContext, Me } from 'context/AuthContext';
import { FormEvent, useContext, useState } from 'react';
import { NavigateFunction, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
	RegisterFormPageStyle,
	RegisterFormStyle,
	RegisterPageCustomInputStyle,
} from './index.style';
import CustomInput from 'component/input';

const registerHandler = async (
	event: FormEvent,
	name: string | undefined,
	id: string | undefined,
	password: string | undefined,
	passwordCheck: string | undefined,
	email: string | undefined,
	major: string | undefined,
	studentId: string | undefined,
	setMe: React.Dispatch<React.SetStateAction<Me | null>>,
	navigate: NavigateFunction,
) => {
	const majorList: string[] = [
		'소프트웨어학부',
		'인공지능학부',
		'자동차운송디자인학과',
		'공업디자인학과',
		'경영학과',
	];

	try {
		event.preventDefault();

		// if (username.length) < 1 throw new Error ('이름 길이가 짧습니다')
		if (!studentId || studentId.length < 8) throw new Error('다시 확인 후 입력해주세요');
		if (!major || !majorList.includes(major))
			throw new Error('잘못된 학부또는 학과 정보입니다. 다시 입력해주세요.');
		// if (userEmail) - 어떻게 처리해줄지 생각나면 수정 요망
		if (!id || id.length < 4) throw new Error('회원ID가 너무 짧습니다. 4글자 이상으로 해주세요.');
		if (!password || password.length < 6)
			throw new Error('비밀번호가 너무 짧습니다. 6자 이상으로 입력해주세요');
		if (!passwordCheck || password != passwordCheck)
			throw new Error('비밀번호가 다릅니다. 다시 확인해주세요');
		await axios
			.post(
				`${process.env.REACT_APP_NESTJS_URL}/auth/register`,
				{
					name,
					id,
					password,
					email,
					major,
					studentId,
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
					profileImageId: null,
					clubs: null,
				});
				toast.success('회원가입을 해주셔서 감사합니다.');
				navigate('/main/info'); // 일단 임시로 PreviewPage 경로로 설정, MainPage 생성 후 경로 변경 요망
			})
			.catch(error => {
				console.error(error);
				throw error;
			});
	} catch (err: unknown) {
		if (err instanceof Error) {
			toast.error(err.message);
		}
	}
};

const RegisterForm = (props: { name: string; email: string }) => {
	const { email } = props;
	const [name, setName] = useState<string | undefined>(props.name);
	const [id, setId] = useState<string | undefined>('');
	const [password, setPassword] = useState<string | undefined>('');
	const [passwordCheck, setPasswordCheck] = useState<string | undefined>('');
	const [major, setMajor] = useState<string | undefined>('');
	const [studentId, setStudentId] = useState<string | undefined>('');
	const navigate = useNavigate();
	const { setMe } = useContext(AuthContext);

	useEffect(() => {
		setName(props.name);
	}, [props.name]);

	return (
		<form
			className={RegisterFormStyle}
			onSubmit={event =>
				registerHandler(
					event,
					name,
					id,
					password,
					passwordCheck,
					email,
					major,
					studentId,
					setMe,
					navigate,
				)
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
				<span>{email}</span>
				<CustomInput
					type="text"
					label="전공"
					value={major}
					setValue={setMajor}
					customInputStyle={RegisterPageCustomInputStyle}
				/>
				<CustomInput
					type="text"
					label="학번"
					value={studentId}
					setValue={setStudentId}
					customInputStyle={RegisterPageCustomInputStyle}
				/>
				<button className="font-change" type="submit">
					회원가입
				</button>
			</div>
		</form>
	);
};

const RegisterFormPage = () => {
	const [searchParams] = useSearchParams();
	const [name, setName] = useState<string | undefined>(undefined);
	const [email, setEmail] = useState<string | undefined>(undefined);

	useEffect(() => {
		setName(searchParams.get('name')?.replaceAll('"', '') || undefined);
		setEmail(searchParams.get('email') || undefined);
	}, [searchParams]);

	return (
		<div className={RegisterFormPageStyle}>
			<div>
				<span>회원가입</span>
				<RegisterForm name={name || ''} email={email || ''} />
			</div>
		</div>
	);
};

export default RegisterFormPage;
