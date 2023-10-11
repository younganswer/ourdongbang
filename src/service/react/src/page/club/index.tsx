import React from 'react';
// import { AuthContext } from 'context/AuthContext';
import Rule from './rule'; // rule 폴더에서 가져옵니다.
import InfoPageMember from './member'; // member 폴더에서 가져옵니다.
import { ClubPageStyle } from './index.style';

const ClubPage = () => {
	// AuthContext를 사용하여 전역 상태에 접근합니다.
	// const { me } = useContext(AuthContext);

	return (
		<div className={ClubPageStyle}>
			<Rule /> {/* Rule 컴포넌트를 렌더링합니다. */}
			<InfoPageMember /> {/* Member 컴포넌트를 렌더링합니다. */}
		</div>
	);
};

export default ClubPage;
