import { css } from '@emotion/css';

export const AuditRegisterButtonStyle = css({
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
