import React from 'react';
import {
	ParticipateStyle,
	ParticipatedActivityStyle,
	ParticipatedStyle,
	ParticipationStyle,
} from './index.style';
import { Me } from 'context/AuthContext';
import { HandIcon, RightArrowIcon } from './icon';

const Participation = (props: { me: Me }) => {
	const { me } = props;
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
	<>{me}</>;
};

const Activity = (props: { me: Me }) => {
	const { me } = props;
	const date = '09-30';

	return (
		<div className={ParticipatedActivityStyle}>
			<div>{date}</div>
			<div>참여 활동</div>
			<RightArrowIcon width={12} height={20} />
		</div>
	);
	<>{me}</>;
};

const Participated = (props: { me: Me }) => {
	const { me } = props;

	return (
		<div className={ParticipatedStyle}>
			<div>
				<HandIcon width={29} height={29} />
				<span>참여 활동</span>
			</div>
			<div>
				<Activity me={me} />
				<Activity me={me} />
				<Activity me={me} />
			</div>
		</div>
	);
};

export const Participate = (props: { me: Me }) => {
	const { me } = props;

	return (
		<div className={ParticipateStyle}>
			<Participation me={me} />
			<Participated me={me} />
		</div>
	);
};

export default Participate;
