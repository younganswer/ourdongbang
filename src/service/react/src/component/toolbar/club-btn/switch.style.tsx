import { css } from '@emotion/css';

export const ClubBtnModalStyle = css({
	position: 'absolute',
	top: -12.5,
	right: -17,
	width: 0,
	height: 70,
	border: '1px solid black',
	borderRadius: 35,
	backgroundColor: '#EFEEEA',
	zIndex: 1000,

	'> div:last-child': {
		borderBottom: 'none',
	},
});

export const ClubBtnModalBtnStyle = css({
	width: '85%',
	height: 70,
	margin: '0 auto',
	display: 'grid',
	gridTemplateColumns: '1fr auto',
	alignItems: 'center',
	borderBottom: '1px solid black',

	'&:hover': {
		cursor: 'pointer',
	},
	'> span:nth-child(1)': {
		height: 70,
		lineHeight: '70px',
		fontSize: 18,
		textAlign: 'center',
		fontFamily: 'Pretendard-regular',
	},
	'> span:nth-child(2)': {
		borderRadius: '70%',
		width: 46,
		height: 46,
		lineHeight: '46px',
		textAlign: 'center',
	},
	'> div:nth-child(2)': {
		width: 46,
		height: 46,
		border: '1px solid black',
		borderRadius: '70%',
		backgroundColor: '#D9D9D9',
	},
});
