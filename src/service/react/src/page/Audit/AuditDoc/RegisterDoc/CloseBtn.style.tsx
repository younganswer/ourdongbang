import { css } from '@emotion/css';

export const CloseBtnStyle = css({
	backgroundColor: 'transparent',
	zIndex: 5000,
	display: 'flex',
	justifyContent: 'flex-end',
	fontFamily: 'pretendard-regular',
	padding: '10px',
	'> div': {
		width: 'auto',
		height: 'auto',
	},
});
