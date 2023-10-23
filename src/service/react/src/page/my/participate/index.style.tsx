import { css } from '@emotion/css';

export const ParticipateStyle = css({
	display: 'grid',
	gridTemplateRows: '85px auto',
	border: '1px solid black',

	'> div:nth-child(1)': {
		padding: '0 5%',
	},

	'> div:nth-child(2)': {
		display: 'grid',
		gridTemplateRows: '68px 533px',
		padding: '5% 5%',
		gap: '5%',
	},
});

export const ParticipateHeaderStyle = css({
	height: 85,
	display: 'flex',
	alignItems: 'center',
	borderBottom: '1px solid black',
	gap: '0.7rem',
	fontFamily: 'Pretendard-medium',
	fontSize: '24px',
	paddingLeft: '5%',
});

export const ParticipationStyle = css({
	'> div:nth-child(1)': {
		display: 'flex',
		gap: '1rem',
		'> span:nth-child(1)': {
			marginBottom: '1rem',
			fontSize: '24px',
			fontFamily: 'Pretendard-medium',
		},
		'> span:nth-child(2)': {
			marginTop: 'auto',
			marginBottom: '1.1rem',
			fontSize: '16px',
			fontFamily: 'Pretendard-regular',
		},
	},

	'> div:nth-child(2)': {
		height: 20,
		border: '1px solid black',
	},
});

export const ParticipatedStyle = css({
	overflowY: 'scroll',
});

export const ParticipatedActivityStyle = css({
	height: 84,
	display: 'grid',
	gridTemplateColumns: '84px 1fr auto',
	marginTop: '37px',
	fontSize: '20px',
	lineHeight: '84px',

	'> div:nth-child(1)': {
		gridColumn: '1',
		backgroundColor: '#D9D9D9',
		fontFamily: 'Pretendard-regular',
		textAlign: 'center',
	},

	'> div:nth-child(2)': {
		gridColumn: '2',
		fontFamily: 'Pretendard-regular',
		margin: '0 2rem',
	},

	'> svg': {
		gridColumn: '3',
		margin: 'auto 0',
		padding: '0 10px',
		':hover': {
			cursor: 'pointer',
		},
	},
});
