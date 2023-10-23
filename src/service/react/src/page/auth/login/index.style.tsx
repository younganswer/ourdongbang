import { css } from '@emotion/css';
import { PageStyle } from 'page/page.style';

export const LoginPageStyle = css(PageStyle, {
	height: 800,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	'> div': {
		width: 400,
		display: 'grid',
		gridTemplateRows: 'repeat(5, auto)',
		rowGap: '3.5rem',

		'> *': {
			margin: '0 auto',
		},

		'> span:nth-child(1)': {
			gridRow: 1,
			fontSize: 32,
			fontFamily: 'Pretendard-medium',
		},

		'> div:nth-child(3)': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '1rem',
			'> span': {
				gridRow: 3,
				color: '#A7A7A7',
				fontSize: 16,
				fontFamily: 'Pretendard-medium',
			},
		},
	},
});

export const LoginPageFormStyle = css({
	gridRow: 2,
	width: '100%',
	height: 100,
	display: 'grid',
	gridTemplateColumns: '2fr 1fr',
	columnGap: '1rem',

	'> div': {
		display: 'grid',
		gridTemplateRows: '1fr 1fr',
		rowGap: '1rem',
	},

	'> button': {
		borderRadius: 5,
		border: '1px solid #D9D9D9',
		backgroundColor: '#D9D9D9',
		fontSize: 20,
		fontFamily: 'Pretendard-medium',
		':hover': {
			backgroundColor: '#BFBFBF',
		},
		'&:active': {
			backgroundColor: '#A6A6A6',
		},
	},
});

export const LoginPageCustomInputStyle = css({
	'> input': {
		width: '86%',
		height: '100%',
		borderRadius: 5,
		border: '1px solid #D9D9D9',
		padding: '0 7%',
		fontSize: 16,
		fontFamily: 'Pretendard-regular',
	},
});

export const LoginPageGoogleLoginStyle = css({
	gridRow: 4,
});

export const LoginPageFooterStyle = css({
	gridRow: 5,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '1rem',
	fontFamily: 'Pretendard-regular',

	'> a': {
		color: 'black',
		textDecoration: 'none',
		'> span': {
			textDecoration: 'underline',
			textUnderlinePosition: 'under',
			cursor: 'pointer',
		},
	},
});
