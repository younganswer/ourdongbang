import React, { useState, FormEvent, useContext } from 'react';
import CustomInput from '../component/CustomInput';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';

const LoginPage: React.FC = () => {
	const [id, setId] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const { setMe } = useContext(AuthContext);

	const navigate = useNavigate();

	const loginHandler = async (e: FormEvent) => {
		try {
			e.preventDefault();
			if (id.length < 4 || password.length < 6) {
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
						profileImageId: response.data.profileImageId,
						clubs: response.data.clubs,
					});

					toast.success('로그인 완료');
					navigate('/main/calendar');
				})
				.catch(error => {
					console.error(error);
					throw error;
				});
			// AuthContext 파일 생성후 SetMe 코드 추가 요망
			// 후에 axios 연동 요망
			// const result = await axios.patch('/auth/login', { userId, password });
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
			<h3 className="font-change" style={{ color: 'black' }}>
				로그인
			</h3>
			<form className="font-change" onSubmit={loginHandler}>
				<CustomInput label="회원ID" value={id} setValue={setId} />
				<CustomInput label="비밀번호" type="password" value={password} setValue={setPassword} />
				<button className="font-change" type="submit">
					로그인
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
