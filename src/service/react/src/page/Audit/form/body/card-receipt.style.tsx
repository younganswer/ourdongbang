import { css } from '@emotion/css';

export const AuditFormBodyCardReceiptStyle = css({
	display: 'grid',
	gridTemplateRows: '1fr 6fr',

	'> div': {
		display: 'flex',
		alignItems: 'center',
	},
	'> div:nth-child(1)': {
		borderBottom: '1px solid black',
		justifyContent: 'center',
		backgroundColor: '#F2F2F2',
		'> span': {
			fontSize: 10,
			fontFamily: 'Pretendard-regular',
		},
	},
	'> div:nth-child(2)': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'> form': {
			width: '100%',
			height: '100%',
			'> input': {
				display: 'none',
			},
			'> div': {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '100%',
				cursor: 'pointer',
				'> span': {
					fontSize: 10,
					fontFamily: 'Pretendard-regular',
				},
			},
		},
	},
});
