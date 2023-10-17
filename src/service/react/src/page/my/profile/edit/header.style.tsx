import { css } from '@emotion/css';

export const EditProfileHeaderStyle = css({
	gridRow: 2,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'Pretendard-medium',

	'> span': {
		lineHeight: '50px',
	},
	'> span:nth-child(1)': {
		gridColumn: 2,
		fontSize: '20px',
	},
});
