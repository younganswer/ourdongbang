import { css } from '@emotion/css';

export const ParticipateStyle = css({
	height: 789,
	gridColumn: '2',
	display: 'grid',
	gridTemplateRows: '147px 613px',
	rowGap: '29px',
});

export const ParticipationStyle = css({
	height: 147,
	gridRow: '1',
	display: 'grid',
	gridTemplateRows: '1fr 50px 20px 1fr',
	border: '1px solid black',

	'> *': {
		width: '90%',
		margin: '0 auto 0 auto',
	},

	'div:nth-child(1)': {
		gridRow: '2',
		display: 'flex',
		columnGap: '1rem',
		'> span': {
			margin: 'auto 0 1rem 0',
		},
		'> span:nth-child(1)': {
			fontSize: '24px',
			fontFamily: 'Pretendard-medium',
			lineHeight: '36px',
			letterSpacing: '-0.528px',
		},
		'> span:nth-child(2)': {
			fontSize: '16px',
			fontFamily: 'Pretendard-regular',
			lineHeight: '28px',
			letterSpacing: '-0.352px',
		},
	},

	'div:nth-child(2)': {
		gridRow: '3',
		border: '1px solid black',
	},
});

export const ParticipatedStyle = css({
	width: '100%',
	height: 613,
	gridRow: '2',
	display: 'grid',
	gridTemplateRows: 'auto 1fr',
	border: '1px solid black',
	'> *': {
		padding: '0 5%',
	},
	'> div:nth-child(1)': {
		gridRow: '1',
		height: 85,
		display: 'flex',
		alignItems: 'center',
		borderBottom: '1px solid black',
		gap: '0.7rem',

		'> span': {
			fontSize: '24px',
			fontFamily: 'Pretendard-medium',
		},
	},
	'> div:nth-child(2)': {
		gridRow: '2',
	},
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
