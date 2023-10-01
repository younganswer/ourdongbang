import { css } from '@emotion/css';

export const EditProfileInformationStyle = css({
	width: '90%',
	margin: '4rem auto 0 auto',

	'> div:nth-child(1)': {
		marginBottom: '2rem',
	},

	'> div:nth-child(n+2)': {
		width: '90%',
		margin: '0 auto',
		marginBottom: '1rem',
		display: 'flex',
		justifyContent: 'space-between',

		'> span:nth-child(2)': {
			width: '50%',
			textAlign: 'right',
		},

		'> input:nth-child(2)': {
			width: '48%',
			textAlign: 'right',
		},
	},
});
