import { css } from '@emotion/css';

export const MemberProfileStyle = css({
	height: '280px',
	display: 'grid',
	gridTemplateRows: '3fr 1fr',
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

		'> img': {
			width: '100%',
			height: '100%',
		},
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
