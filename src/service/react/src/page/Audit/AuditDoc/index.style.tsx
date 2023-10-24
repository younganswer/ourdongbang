import { css } from '@emotion/css';

export const AuditDocStyle = css({
	border: '1px solid black',
	height: 1100,
	display: 'grid',
	gridTemplateRows: '105px auto',
});

export const AuditDocHeaderStyle = css({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 30px',
	borderBottom: '1px solid #000000',

	'> span:nth-child(1)': {
		fontSize: 24,
		fontFamily: 'Pretendard-medium',
	},

	'> div:nth-child(2)': {
		display: 'flex',
		alignItems: 'center',
		gap: 30,
		'> span': {
			fontSize: 20,
			fontFamily: 'Pretendard-regular',
		},
		'> div': {
			display: 'flex',
			alignItems: 'center',
			gap: 10,
			'> span': {
				fontSize: 20,
				fontFamily: 'Pretendard-regular',
			},
			'> svg': {
				'&:hover': {
					cursor: 'pointer',
				},
			},
		},
	},
});
