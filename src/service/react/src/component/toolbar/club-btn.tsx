import React from 'react';
import { ClubBtnStyle } from './club-btn.style';

const ClubBtn = (props: { club: string | null }) => {
	const { club } = props;

	if (!club) {
		return <div className={ClubBtnStyle}></div>;
	}
	return <div className={ClubBtnStyle}></div>;
};

export default ClubBtn;
