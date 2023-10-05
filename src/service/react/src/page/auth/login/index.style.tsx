import { css } from '@emotion/css';
import { PageStyle } from 'page/page.style';

export const LoginPageStyle = css(PageStyle, {
	display: 'flex',
	justifyContent: 'center',
	backgroundColor: 'white',

	'> div': {
		width: 400,
		height: 800,
		margin: '1rem auto 0 auto',
		display: 'grid',
		gridTemplateRows: '1fr 100px 100px 100px 100px 1fr',
		rowGap: '2rem',

		'> h3': {
			gridRow: 2,
			margin: 0,
			fontSize: '32px',
			lineHeight: '100px',
			textAlign: 'center',
		},

		'> div:nth-child(3)': {
			borderTop: '1px solid #D9D9D9',
			width: '100%',
			height: '100%',
			gridRow: 4,
			display: 'flex',
			'> div': {
				marginTop: 'auto',
			},
		},

		'> div:nth-child(4)': {
			gridRow: 5,
			paddingTop: '4rem',
			display: 'flex',
			justifyContent: 'center',
			gap: '1rem',

			'> *': {
				height: 36,
				lineHeight: '36px',
			},

			'> a': {
				color: 'black',
				textDecoration: 'none',
				' > span': {
					textDecoration: 'underline',
					textUnderlinePosition: 'under',
					cursor: 'pointer',
				},
			},
		},
	},
});

export const LoginPageFormStyle = css({
	gridRow: 3,
	display: 'grid',
	gridTemplateColumns: '2fr 1fr',

	'> div': {
		display: 'grid',
		gridTemplateRows: '1fr 1fr',
		rowGap: '1rem',
	},

	'> button': {
		width: '100%',
		height: '100%',
		borderRadius: 5,
		border: '1px solid #D9D9D9',
		backgroundColor: '#D9D9D9',
		fontSize: '18px',

		':hover': {
			backgroundColor: '#BFBFBF',
		},
		'&:active': {
			backgroundColor: '#A6A6A6',
		},
	},
});

export const LoginPageCustomInputStyle = css({
	width: '90%',

	'> input': {
		width: '89%',
		height: '100%',
		borderRadius: 5,
		border: '1px solid #D9D9D9',
		padding: '0 1.2rem',
		fontSize: '16px',
	},
});
