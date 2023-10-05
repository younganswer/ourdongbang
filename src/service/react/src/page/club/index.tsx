import React from 'react';
// import { AuthContext } from 'context/AuthContext';
import Rule from './rule'; // rule 폴더에서 가져옵니다.
import Member from './member'; // member 폴더에서 가져옵니다.

const ClubPage = () => {
	// AuthContext를 사용하여 전역 상태에 접근합니다.
	// const { me } = useContext(AuthContext);

	return (
		<div>
			<h1>클럽 페이지</h1>
			<h2>동아리 규칙</h2>
			<Rule /> {/* Rule 컴포넌트를 렌더링합니다. */}
			<h2>부원 정보</h2>
			<Member /> {/* Member 컴포넌트를 렌더링합니다. */}
		</div>
	);
};

export default ClubPage;
