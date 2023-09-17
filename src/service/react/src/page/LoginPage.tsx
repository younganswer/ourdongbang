import React, { useState, FormEvent } from 'react';
import CustomInput from '../components/CustomInput';
// import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
	const [userId, setUserId] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const navigate = useNavigate();

	const loginHandler = async (e: FormEvent) => {
		try {
			e.preventDefault();
			if (userId.length < 3 || password.length < 6) {
				throw new Error('입력하신 정보가 올바르지 않습니다.');
			}
			// AuthContext 파일 생성후 SetMe 코드 추가 요망
			// 후에 axios 연동 요망
			// const result = await axios.patch('/auth/login', { userId, password });

			toast.success('로그인 했습니다.');
			navigate('/'); // 일단 임시로 PreviewPage 경로로 설정, MainPage 생성 후 경로 변경 요망
		} catch (err) {
			console.error(err);
			toast.error('로그인 중 오류가 발생했습니다.');
		}
	};
	return (
		// style은 디자인 팀에서 넘어오면 ../style에서 ToolBar에 css 새로운 클래스 추가 후 변경 요망
		<div
			style={{
				marginTop: 100,
				maxWidth: 350,
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<h3 style={{ color: 'black' }}>로그인</h3>
			<form onSubmit={loginHandler}>
				<CustomInput label="회원ID" value={userId} setValue={setUserId} />
				<CustomInput label="비밀번호" type="password" value={password} setValue={setPassword} />
				<button type="submit">로그인</button>
			</form>
		</div>
	);
};

export default LoginPage;
