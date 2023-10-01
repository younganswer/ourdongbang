import React, { useContext } from 'react';
import Profile from './profile.component';
import { AuthContext } from 'context/AuthContext';
import { MyPageStyle } from './myPage.style';
import Participate from './participate.component';

const MyPage = () => {
	const { me } = useContext(AuthContext);

	if (!me) {
		return <div>로그인이 필요합니다.</div>;
	}

	return (
		<div className={MyPageStyle}>
			<Profile user={me} />
			<Participate user={me} />
		</div>
	);
};

export default MyPage;
