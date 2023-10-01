import React, { useContext } from 'react';
import Profile from './profile';
import { AuthContext } from 'context/AuthContext';
import { MyPageStyle } from './index.style';
import Participate from './participate';

const MyPage = () => {
	const { me, setMe } = useContext(AuthContext);

	if (!me) {
		return <div className={MyPageStyle}>로그인이 필요합니다.</div>;
	}

	return (
		<div className={MyPageStyle}>
			<Profile me={me} setMe={setMe} />
			<Participate me={me} />
		</div>
	);
};

export default MyPage;
