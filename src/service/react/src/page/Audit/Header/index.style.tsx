import { css } from '@emotion/css';

export const AuditPageHeaderStyle = css({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	borderBottom: '1px solid #000000',

	'> div': {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '20px',
		margin: '10px 0',
	},
	'> div:nth-child(1)': {
		'> span': {
			fontSize: 28,
			fontFamily: 'Pretendard-medium',
		},
	},
	'> div:nth-child(2)': {
		'> div': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '10px',

			'> span:nth-child(1)': {
				fontSize: 22,
				fontFamily: 'Pretendard-medium',
			},
			'> span:nth-child(2)': {
				fontSize: 22,
				fontFamily: 'Pretendard-regular',
			},
		},
	},
});
