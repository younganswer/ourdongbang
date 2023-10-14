import { css } from '@emotion/css';

export const ProfileStyle = css({
	height: 789,
	gridColumn: '1',
	display: 'grid',
	gridTemplateRows: '85px 1fr',
	border: '1px solid black',

	'> div:nth-child(2)': {
		display: 'grid',
		gridTemplateRows: '1fr 60px',
	},
});

export const ProfileHeaderStyle = css({
	gridRow: '1',
	display: 'flex',
	justifyContent: 'space-between',
	width: '86%',
	margin: '0 auto',
	padding: '0 7%',
	alignItems: 'center',
	borderBottom: '1px solid black',

	'> span': {
		fontSize: '24px',
		fontFamily: 'Pretendard-bold',
	},
	'> div': {
		display: 'flex',
		alignItems: 'center',
		gap: '8px',

		'&:hover': {
			cursor: 'pointer',
		},

		'> span': {
			fontSize: '18px',
			fontFamily: 'Pretendard-regular',
		},
	},
});

export const ProfileBodyStyle = css({
	width: '80%',
	margin: '3rem auto 0 auto',
	gridRow: '1',
	display: 'grid',
	gridTemplateRows: 'auto 1fr',
	rowGap: '4rem',

	'> div:nth-child(1)': {
		display: 'grid',
		gridTemplateColumns: 'auto 1fr',
		gap: '2rem',

		'> div:nth-child(2)': {
			display: 'grid',
			gridTemplateRows: 'auto 1fr',
			padding: '0.5rem 0',
			gap: '1rem',

			'> span:nth-child(1)': {
				fontSize: '24px',
				fontFamily: 'Pretendard-medium',
			},
			'> span:nth-child(2)': {
				fontSize: '16px',
				fontFamily: 'Pretendard-regular',
			},
		},
	},
	'> div:nth-child(2)': {
		display: 'grid',
		gridTemplateRows: 'repeat(7, 1fr)',
	},
});

export const ProfileInformationStyle = css({
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gap: '2rem',
	alignItems: 'center',
	height: 30,
	lineHeight: '30px',

	'> :nth-child(1)': {
		width: 128,
		gridColumn: '1',
		display: 'grid',
		gridTemplateColumns: '20px 1fr',
		gap: '21px',
		alignItems: 'center',

		'> svg': {
			margin: '0 auto',
		},
		'> span': {
			fontSize: 20,
			fontFamily: 'Pretendard-regular',
		},
	},
	'> :nth-child(2)': {
		gridColumn: '2',
		fontSize: 16,
		fontFamily: 'Pretendard-light',
	},
});

export const ProfileFooterStyle = css({
	gridRow: '2',
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
