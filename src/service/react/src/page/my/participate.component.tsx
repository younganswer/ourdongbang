import React from 'react';
import { ParticipateStyle, ParticipatedStyle, ParticipationStyle } from './participate.style';
import { Me } from 'context/AuthContext';

const Participation = (props: { user: Me }) => {
	const { user } = props;
	const ratio = 0.65;
	const message = ['요즘 너무 바쁜거 같아요..', '평균 보다 더 많이 참여했어요!'];
	const progressBar = {
		width: `${ratio * 100}%`,
		height: '100%',
		backgroundColor: '#D9D9D9',
	};

	return (
		<div className={ParticipationStyle}>
			<div>
				<span>참여도 {ratio * 100}%</span>
				<span>{0.5 < ratio ? message[1] : message[0]}</span>
			</div>
			<div>
				<div style={progressBar}></div>
			</div>
		</div>
	);
	<>{user}</>;
};

const Activity = (props: { user: Me }) => {
	const { user } = props;
	const date = '09-30';

	return (
		<div>
			<div>{date}</div>
			<div>참여 활동</div>
			<div>활동 보기</div>
		</div>
	);
	<>{user}</>;
};

const Participated = (props: { user: Me }) => {
	const { user } = props;

	return (
		<div className={ParticipatedStyle}>
			<span>참여 활동</span>
			<div>
				<Activity user={user} />
				<Activity user={user} />
				<Activity user={user} />
			</div>
		</div>
	);
};

export const Participate = (props: { user: Me }) => {
	const { user } = props;

	return (
		<div className={ParticipateStyle}>
			<Participation user={user} />
			<Participated user={user} />
		</div>
	);
};

export default Participate;
