import React, { useContext } from 'react';
import Profile from './profile.component';
import { AuthContext } from 'context/AuthContext';
import { MyPageStyle } from './myPage.style';
import Participate from './participate.component';

const MyPage = () => {
	const { me, setMe } = useContext(AuthContext);

	if (!me) {
		setMe({
			name: '김연정',
			id: 'xeonxeong',
			password: 'password',
			email: 'yjart322@kookmin.ac.kr',
			major: '공업디자인학과',
			studentId: '20211523',
			profileImageId: null,
			clubs: [],
		});
		return <div>로그인이 필요합니다.</div>;
	}

	return (
		<div className={MyPageStyle}>
			<Profile user={me} />
			<Participate />
		</div>
	);
};

export default MyPage;
