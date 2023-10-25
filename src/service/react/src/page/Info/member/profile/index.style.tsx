import { css } from '@emotion/css';

export const MemberProfileStyle = css({
	width: 263,
	height: 324,
	display: 'grid',
	gridTemplateRows: '255px 69px',
	border: '1px solid black',

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
