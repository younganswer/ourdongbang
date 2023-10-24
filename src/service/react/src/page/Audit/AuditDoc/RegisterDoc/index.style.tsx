import { css } from '@emotion/css';

export const AuditRegisterDocStyle = css({
	margin: '36px 0',
	display: 'grid',
	gridTemplateRows: '24px 878px',
	gap: 20.65,
	padding: '0 36px',

	'> div:nth-child(1)': {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: 20,
		'> span': {
			fontSize: 20,
			fontFamily: 'Pretendard-regular',
			textDecoration: 'underline',
			textUnderlinePosition: 'under',
		},
		'> svg': {
			'&:hover': {
				cursor: 'pointer',
			},
			marginTop: 3,
		},
	},
	'> div:nth-child(2)': {
		display: 'flex',
		flexWrap: 'wrap',
		gap: 20.65,
		overflowY: 'scroll',
	},
});

export const AddbuttonStyle = css({
	width: 264,
	height: 325,
	border: '1px solid black',
	backgroundColor: '#EFEEEA',

	'> button': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		padding: 0,
		backgroundColor: '#EFEEEA',
		border: 'none',
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: '#D8D8D8',
		},

		'> div': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 20,
			fontSize: 16,
			fontFamily: 'Pretendard-regular',
			color: '#A7A7A7',
		},
	},
});
