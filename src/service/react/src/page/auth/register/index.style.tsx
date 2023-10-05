import { css } from '@emotion/css';
import { PageStyle } from 'page/page.style';

export const RegisterPageStyle = css(PageStyle, {
	display: 'flex',
	justifyContent: 'center',
	backgroundColor: 'white',

	'> div': {
		width: 400,
		height: 800,
		margin: '1rem auto 0 auto',
		display: 'grid',
		gridTemplateRows: '1fr 100px 150px 100px 1fr',
		rowGap: '2rem',

		'> h3': {
			gridRow: 2,
			margin: 0,
			fontSize: '32px',
			lineHeight: '100px',
			textAlign: 'center',
		},

		'> div:nth-child(3)': {
			gridRow: 4,
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

export const GoogleRegisterStyle = css({
	gridRow: 3,
	borderBottom: '1px solid #D9D9D9',
	display: 'flex',
	justifyContent: 'center',

	'> div': {
		margin: 'auto 0 auto 0',
	},

	'> span': {
		fontSize: '24px',
		lineHeight: '100px',
	},
});
