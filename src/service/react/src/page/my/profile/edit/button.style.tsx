import { css } from '@emotion/css';

export const EditProfileButtonStyle = css({
	gridRow: 4,
	width: '90%',
	margin: '0 auto',

	'> button': {
		width: '100%',
		padding: '3px 0',
		fontFamily: 'Pretendard-medium',
		':hover': {
			cursor: 'pointer',
		},
	},
});
