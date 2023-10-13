import { css } from '@emotion/css';

export const ClubBtnStyle = css({
	gridColumn: 5,
	width: '46px',
	height: '46px',
	position: 'relative',

	'> div:nth-child(1)': {
		width: '46px',
		height: '46px',
		borderRadius: '70%',
		border: '1px solid black',
		backgroundColor: '#D9D9D9',
		'&:hover': {
			cursor: 'pointer',
		},
	},
});
