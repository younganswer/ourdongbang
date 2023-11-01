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
	padding: '0 40px',
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
			'&:hover': {
				cursor: 'pointer',
			},
			'> span': {
				fontSize: 20,
				fontFamily: 'Pretendard-regular',
			},
		},
	},
});

export const AuditDocumentBodyStyle = css({
	margin: '36px',
	display: 'grid',
	gridTemplateRows: '24px 878px',
	gap: 20,

	'> div:nth-child(1)': {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: '0 5px',
		gap: 21,
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
		overflowY: 'auto',

		'> div': {
			width: '99%',
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(259px, 1fr))',
			gap: 20,

			'> div': {
				width: '100%',
				height: 325,
				border: '1px solid black',
				'&:hover': {
					cursor: 'pointer',
				},
			},
		},
	},
});
