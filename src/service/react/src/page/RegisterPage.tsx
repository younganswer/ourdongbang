import React, { useState, FormEvent } from 'react';
import CustomInput from '../components/CustomInput';
// import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import '../style/ToolBar.css';

const RegisterPage: React.FC = () => {
	const [username, setUsername] = useState<string>('');
	const [studentId, setStudentId] = useState<string>('');
	const [major, setMajor] = useState<string>('');
	const [userEmail, setUserEmail] = useState<string>('');
	const [userId, setUserId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordCheck, setPasswordCheck] = useState<string>('');

	const navigate = useNavigate();

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
			if (userId.length < 4) throw new Error('회원ID가 너무 짧습니다. 4글자 이상으로 해주세요.');
			if (password.length < 6)
				throw new Error('비밀번호가 너무 짧습니다. 6자 이상으로 입력해주세요');
			if (password != passwordCheck) throw new Error('비밀번호가 다릅니다. 다시 확인해주세요');

			// AuthContext 파일 생성후 SetMe 코드 추가 요망
			// 후에 axios 연동 요망

			// const result = await axios.post('/auth/register', {
			// 	username,
			// 	studentId,
			// 	major,
			// 	userEmail,
			// 	userId,
			// 	password,
			// });
			toast.success('회원가입을 해주셔서 감사합니다.');
			navigate('/'); // 일단 임시로 PreviewPage 경로로 설정, MainPage 생성 후 경로 변경 요망
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
				<CustomInput label="이름" value={username} setValue={setUsername} />
				<CustomInput label="학번" value={studentId} setValue={setStudentId} />
				<CustomInput label="전공" value={major} setValue={setMajor} />
				<CustomInput label="E-mail" value={userEmail} setValue={setUserEmail} />
				<CustomInput label="아이디" value={userId} setValue={setUserId} />
				<CustomInput label="비밀번호" type="password" value={password} setValue={setPassword} />
				<CustomInput
					label="비밀번호 확인"
					type="password"
					value={passwordCheck}
					setValue={setPasswordCheck}
				/>
				<button className="font-change" type="submit">
					회원가입
				</button>
			</form>
		</div>
	);
};

export default RegisterPage;
