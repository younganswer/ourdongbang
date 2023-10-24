import { css } from '@emotion/css';

export const AuditDocumentStyle = css({
	border: '1px solid black',
	height: 1100,
	display: 'grid',
	gridTemplateRows: '105px auto',
});

export const AuditDocumentHeaderStyle = css({
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

export const AuditDocumentBodyStyle = css({
	margin: '36px 0',
	display: 'grid',
	gridTemplateRows: '24px 878px',
	gap: 20.65,
	padding: '0 36px',

	'> div:nth-child(1)': {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: 20,
		'> span': {
			fontSize: 20,
			fontFamily: 'Pretendard-regular',
			textDecoration: 'underline',
			textUnderlinePosition: 'under',
		},
		'> svg': {
			'&:hover': {
				cursor: 'pointer',
			},
			marginTop: 3,
		},
	},
	'> div:nth-child(2)': {
		display: 'flex',
		flexWrap: 'wrap',
		gap: 20.65,
		overflowY: 'scroll',
	},
});
