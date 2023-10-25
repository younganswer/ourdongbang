import { css } from '@emotion/css';
import { PageStyle } from 'page/page.style';
export const RegisterFormPageStyle = css(PageStyle, {
	margin: '0 auto',
	width: 1000,
	height: 800,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	'> div': {
		width: 400,
		display: 'grid',
		gridTemplateRows: 'auto auto',
		rowGap: '6rem',

		'> span': {
			fontSize: 36,
			fontFamily: 'Pretendard-medium',
			margin: '0 auto',
		},
	},
});

export const RegisterFormStyle = css({
	width: '100%',
	height: 'auto',

	'> div': {
		display: 'grid',
		gridTemplateRows: 'repeat(6, 1fr)',
		rowGap: '1rem',

		'> div': {
			display: 'flex',
			alignItems: 'center',
			width: '100%',
			height: '40px',
		},

		'>div > span': {
			marginLeft: '1.5rem',
			fontSize: 16,
			fontFamily: 'Pretendard-regular',
		},

		'> button': {
			width: '100%',
			height: '100%',
			borderRadius: 5,
			border: '1px solid #D9D9D9',
			backgroundColor: '#D9D9D9',
			fontSize: '16px',

			':hover': {
				backgroundColor: '#BFBFBF',
			},
			'&:active': {
				backgroundColor: '#A6A6A6',
			},
		},
	},
});

export const RegisterPageCustomInputStyle = css({
	width: '352px',

	'> input': {
		fontSize: 16,
		fontFamily: 'Pretendard-regular',
		width: '352px',
		height: '100%',
		borderRadius: 5,
		border: '1px solid #D9D9D9',
		padding: '0 1.5rem',
	},
});
