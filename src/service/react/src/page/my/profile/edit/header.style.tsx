import { css } from '@emotion/css';

export const EditProfileHeaderStyle = css({
	gridRow: 1,
	marginTop: '0.5rem',
	display: 'grid',
	gridTemplateColumns: '50px 1fr 50px',
	textAlign: 'center',

	'> span': {
		lineHeight: '50px',
	},
	'> span:nth-child(1)': {
		gridColumn: 2,
		fontSize: '20px',
	},
	'> span:nth-child(2)': {
		gridColumn: 3,
		fontSize: '20px',
		':hover': {
			cursor: 'pointer',
		},
	},
});
