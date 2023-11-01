import { css } from '@emotion/css';

export const MemberProfileStyle = css({
	height: 324,
	display: 'grid',
	gridTemplateRows: '255px 69px',
	border: '1px solid black',
	overflow: 'hidden',
	cursor: 'pointer',

	'&:hover': {
		outline: '5px auto -webkit-focus-ring-color',
	},
	'&:active': {
		outline: 'none',
	},

	'> div:nth-child(1)': {
		backgroundColor: '#D9D9D9',
		borderBottom: '1px solid black',
		overflow: 'hidden',
	},

	'> div:nth-child(2)': {
		gridRow: 2,
		display: 'flex',
		alignItems: 'center',
		padding: '0 20px',
		gap: 10,

		'> span': {
			fontSize: '18px',
			fontFamily: 'Pretendard-regular',
		},
	},
});
