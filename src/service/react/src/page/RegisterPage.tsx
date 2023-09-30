import React, { useState, FormEvent, useContext } from 'react';
import CustomInput from '../components/CustomInput';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../style/ToolBar.css';
import { AuthContext } from 'context/AuthContext';
// import { error } from 'console';

const RegisterPage: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [id, setId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [major, setMajor] = useState<string>('');
	const [studentId, setStudentId] = useState<string>('');
	const [passwordCheck, setPasswordCheck] = useState<string>('');

	const navigate = useNavigate();
	const { setMe } = useContext(AuthContext);

	const registerHandler = async (e: FormEvent) => {
		const majorList: string[] = [
			'소프트웨어학부',
			'인공지능학부',
			'자동차운송디자인학과',
			'공업디자인학과',
			'경영학과',
		];
		try {
			e.preventDefault();
			// if (username.length) < 1 throw new Error ('이름 길이가 짧습니다')
			if (studentId.length < 8) throw new Error('다시 확인 후 입력해주세요');
			if (!majorList.includes(major))
				throw new Error('잘못된 학부또는 학과 정보입니다. 다시 입력해주세요.');
			// if (userEmail) - 어떻게 처리해줄지 생각나면 수정 요망
			if (id.length < 4) throw new Error('회원ID가 너무 짧습니다. 4글자 이상으로 해주세요.');
			if (password.length < 6)
				throw new Error('비밀번호가 너무 짧습니다. 6자 이상으로 입력해주세요');
			if (password != passwordCheck) throw new Error('비밀번호가 다릅니다. 다시 확인해주세요');

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
					navigate('/'); // 일단 임시로 PreviewPage 경로로 설정, MainPage 생성 후 경로 변경 요망
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
	return (
		<div
			style={{
				marginTop: 100,
				maxWidth: 350,
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<h3 className="font-change" style={{ color: 'black' }}>
				회원가입
			</h3>
			<form className="font-change" onSubmit={registerHandler}>
				<CustomInput label="이름" value={name} setValue={setName} />
				<CustomInput label="아이디" value={id} setValue={setId} />
				<CustomInput label="비밀번호" type="password" value={password} setValue={setPassword} />
				<CustomInput
					label="비밀번호 확인"
					type="password"
					value={passwordCheck}
					setValue={setPasswordCheck}
				/>
				<CustomInput label="E-mail" value={email} setValue={setEmail} />
				<CustomInput label="전공" value={major} setValue={setMajor} />
				<CustomInput label="학번" value={studentId} setValue={setStudentId} />

				<button className="font-change" type="submit">
					회원가입
				</button>
			</form>
		</div>
	);
};

export default RegisterPage;
