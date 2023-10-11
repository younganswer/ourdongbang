import { css } from '@emotion/css';

export const AuditDocStyle = css({
	border: '1px solid black',
	height: '100%',
	marginTop: '40px',
	fontFamily: 'Pretendard-regular',
	'> span': {
		display: 'flex',
		margin: '30px',
		fontSize: '20px',
	},
	'> div': {
		display: 'flex',
		justifyContent: 'space-between',
		borderTop: '1px solid black',
		margin: '30px',
	},
});
