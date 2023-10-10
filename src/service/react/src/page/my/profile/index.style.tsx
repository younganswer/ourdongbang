import { css } from '@emotion/css';

export const ProfileStyle = css({
	height: 789,
	gridColumn: '1',
	display: 'grid',
	gridTemplateRows: '60px 1fr 60px',
	border: '1px solid black',
});

export const ProfileHeaderStyle = css({
	display: 'flex',
	justifyContent: 'space-between',
	width: '90%',
	margin: '0 auto',
	alignItems: 'center',

	'> span': {
		height: '25px',
		fontSize: '20px',
		fontFamily: 'Pretendard-regular',
		lineHeight: '25px',
		':hover': {
			cursor: 'pointer',
		},
	},
});

export const ProfileContentStyle = css({
	width: '80%',
	margin: '2rem auto 0 auto',
	gridRow: '2',
	display: 'grid',
	gridTemplateRows: 'auto 1rem 60px 1.5rem 1fr',

	'> :nth-child(1)': {
		gridRow: '1',
		margin: '0 auto',
	},
	'> :nth-child(2)': {
		gridRow: '3',
	},
	'> :nth-child(3)': {
		gridRow: '5',
		display: 'grid',
		gridTemplateRows: 'repeat(4, 24px) 1fr',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridGap: '1.5rem',
		columnGap: '1.5rem',

		'*': {},
		'> :nth-child(1)': {
			gridRow: '1',
			gridColumn: '1 / 3',
		},
		'> :nth-child(2)': {
			gridRow: '2',
			gridColumn: '1',
		},
		'> :nth-child(3)': {
			gridRow: '2',
			gridColumn: '2',
		},
		'> :nth-child(4)': {
			gridRow: '3',
			gridColumn: '1',
		},
		'> :nth-child(5)': {
			gridRow: '3',
			gridColumn: '2',
		},
		'> :nth-child(6)': {
			gridRow: '4',
			gridColumn: '1',
		},
		'> :nth-child(7)': {
			gridRow: '4',
			gridColumn: '2',
		},
		'> :nth-child(8)': {
			gridRow: '5',
			gridColumn: '1 / 3',
			display: 'grid',
			gridTemplateRows: '24px 1fr',
			gridGap: '0.5rem',
			'> span:nth-child(1)': {
				fontSize: '20px',
				fontFamily: 'Pretendard-regular',
				lineHeight: '24px',
			},
			'> span:nth-child(2)': {
				fontSize: '17px',
				fontFamily: 'Pretendard-light',
				lineHeight: '24px',
			},
		},
	},
});

export const ProfileImageStyle = css({
	margin: '0 auto',
	flexShrink: 0,
	alignSelf: 'center',
});

export const ProfileNameStyle = css({
	fontFamily: 'Pretendard-regular',
	fontSize: '24px',
	lineHeight: '60px',
	letterSpacing: '-0.528px',
	textAlign: 'center',
	alignSelf: 'center',
});

export const ProfileInformationStyle = css({
	display: 'flex',
	justifyContent: 'space-between',
	height: 'auto',

	'> :nth-child(1)': {
		fontSize: 19,
		fontFamily: 'Pretendard-regular',
		lineHeight: '24px',
	},
	'> :nth-child(2)': {
		fontSize: 17,
		fontFamily: 'Pretendard-light',
		lineHeight: '24px',
	},
});

export const ProfileFooterStyle = css({
	width: '90%',
	margin: '0 auto',
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',

	'> span': {
		height: '30px',
		fontSize: '20px',
		fontFamily: 'Pretendard-regular',
		lineHeight: '30px',
		':hover': {
			cursor: 'pointer',
		},
	},
});
