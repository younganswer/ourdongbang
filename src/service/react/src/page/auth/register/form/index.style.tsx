import { css } from '@emotion/css';
import { PageStyle } from 'page/page.style';
export const RegisterFormPageStyle = css(PageStyle, {
	width: 1000,
	backgroundColor: '#FFFFFF',

	'> div': {
		width: 400,
		height: 800,
		margin: '0 auto',
		display: 'grid',
		gridTemplateRows: '1fr 4rem auto 1fr',
		rowGap: '3rem',

		'*': {
			margin: '0 auto',
		},

		'> span': {
			gridRow: 2,
			fontSize: '2rem',
			fontWeight: 700,
			lineHeight: '4rem',
		},
	},
});

export const RegisterFormStyle = css({
	gridRow: 3,
	width: '100%',
	height: 'auto',

	'> div': {
		display: 'grid',
		gridTemplateRows: 'repeat(8, 1fr)',
		rowGap: '1rem',

		'> div': {
			width: '100%',
			height: '40px',
		},

		'> span': {
			marginLeft: '1.5rem',
			fontSize: '20px',
			lineHeight: '40px',
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
		width: '352px',
		height: '100%',
		borderRadius: 5,
		border: '1px solid #D9D9D9',
		padding: '0 1.5rem',
		fontSize: '16px',
	},
});
