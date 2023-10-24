import { css } from '@emotion/css';

export const AuditFormBodyDateStyle = css({
	display: 'grid',
	gridTemplateColumns: '1.01fr 5.6fr',
	borderRight: '1px solid black',

	'> div': {
		display: 'flex',
		alignItems: 'center',
	},
	'> div:nth-child(1)': {
		borderRight: '1px solid black',
		justifyContent: 'center',
		backgroundColor: '#F2F2F2',
		'> span': {
			fontSize: 10,
			fontFamily: 'Pretendard-regular',
		},
	},
	'> div:nth-child(2)': {
		padding: '0 5.5%',
		'> input': {
			width: '100%',
			fontSize: 10,
			fontFamily: 'Pretendard-regular',
		},
		'> span': {
			fontSize: 10,
			fontFamily: 'Pretendard-regular',
		},
	},
});
