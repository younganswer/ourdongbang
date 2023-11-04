import { css } from '@emotion/css';

export const RegisterFormPageDoneStyle = css({
	display: 'grid',
	gridTemplateRows: 'repeat(3, auto)',
	gap: '1rem',

	'> div': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '8px',

		'> span': {
			fontSize: 32,
			fontFamily: 'Pretendard-medium',
		},
	},
	'> svg': {
		margin: '0 auto',
	},
	'> button': {
		width: '100%',
		height: '3rem',
		fontSize: 16,
		fontFamily: 'Pretendard-medium',
		backgroundColor: 'transparent',
		border: '1px solid black',
		borderRadius: 5,
	},
});
