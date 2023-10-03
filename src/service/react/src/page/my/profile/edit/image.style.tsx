import { css } from '@emotion/css';

export const EditProfileImageStyle = css({
	gridRow: 2,
	margin: '4rem auto 0 auto',
	width: '90%',

	'> div:nth-child(1)': {
		display: 'flex',
		justifyContent: 'space-between',

		'> *:nth-child(2)': {
			display: 'none',
		},

		'> *:nth-child(3)': {
			color: '#0000FF',
			':hover': {
				cursor: 'pointer',
			},
		},
	},

	'> div:nth-child(2)': {
		marginTop: '1rem',
		display: 'flex',

		'> div': {
			margin: 'auto',
			width: 196,
			height: 196,
		},
		'> svg': {
			margin: 'auto',
			width: 196,
			height: 196,
		},
	},
});
