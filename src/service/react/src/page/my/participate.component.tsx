import React from 'react';
import { ParticipateStyle, ParticipatedStyle, ParticipationStyle } from './participate.style';

const Participation = () => {
	const ratio = 0.65;
	const message = ['요즘 너무 바쁜거 같아요..', '평균 보다 더 많이 참여했어요!'];
	const progressBar = {
		width: `${ratio * 100}%`,
		height: '100%',
		backgroundColor: '#D9D9D9',
	};

	return (
		<div className={ParticipationStyle}>
			<div style={{ gridRow: 2, width: '90%', margin: '0 auto 0 auto' }}>
				<span
					style={{
						fontSize: '24px',
						fontWeight: 900,
						lineHeight: '150%' /* 36px */,
						letterSpacing: '-0.528px',
					}}
				>
					참여도 {ratio * 100}%
				</span>
				<span
					style={{
						marginLeft: '1rem',
						fontSize: '16px',
						fontWeight: 400,
						lineHeight: '150%' /* 24px */,
						letterSpacing: '-0.352px',
					}}
				>
					{0.5 < ratio ? message[1] : message[0]}
				</span>
			</div>
			<div style={{ gridRow: 3, width: '90%', margin: '0 auto 0 auto', border: '1px solid black' }}>
				<div style={progressBar}></div>
			</div>
		</div>
	);
};

const Participated = () => {
	return <div className={ParticipatedStyle}></div>;
};

export const Participate = () => {
	return (
		<div className={ParticipateStyle}>
			<Participation />
			<Participated />
		</div>
	);
};

export default Participate;
