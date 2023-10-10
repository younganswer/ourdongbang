import { css } from '@emotion/css';

export const EditProfileInformationStyle = css({
	width: '90%',
	margin: '0 auto',
	gridRow: 4,

	'> div:nth-child(1)': {
		marginBottom: '2rem',
		fontFamily: 'Pretendard-medium',
	},

	'> div:nth-child(n+2)': {
		width: '90%',
		margin: '0 auto',
		marginBottom: '1rem',
		display: 'flex',
		justifyContent: 'space-between',

		'> :nth-child(1)': {
			fontFamily: 'Pretendard-regular',
		},
		'> :nth-child(2)': {
			textAlign: 'right',
			fontFamily: 'Pretendard-light',
		},
	},
});
