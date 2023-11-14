import { css } from '@emotion/css';

const TitleStyle = css({
	display: 'flex',
	justifyContent: 'center',

	'> span': {
		fontSize: 36,
		fontFamily: 'Pretendard-medium',
	},
});

const MetaDataStyle = css({
	display: 'grid',
	gridTemplateRows: 'repeat(3, 1fr)',
	borderTop: '1px solid black',
	borderLeft: '1px solid black',
	borderRight: '1px solid black',

	'> div': {
		height: '100%',
		display: 'grid',
		gridTemplateColumns: '2fr 3fr',
		'> div': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',

			'> span': {
				fontSize: 16,
				fontFamily: 'Pretendard-regular',
			},
		},
		'> div:first-child': {
			borderRight: '1px solid black',
		},
	},
	'> div:not(:last-child)': {
		borderBottom: '1px solid black',
	},
});

const HeaderStyle = css({
	'> div': {
		display: 'grid',
		gridTemplateColumns: '1fr 2.5fr 4.5fr 4.5fr 3.5fr 2.98fr 2.98fr',
		borderBottom: '1px solid black',
		'> div': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			'> span': {
				fontSize: 16,
				fontFamily: 'Pretendard-regular',
			},
		},
		'> div:not(:last-child)': {
			borderRight: '1px solid black',
		},
	},
	'> div:nth-child(1)': {
		height: '8.4mm',
		backgroundColor: 'black',
	},
	'> div:nth-child(2)': {
		height: '0.6mm',
	},
});

const AuditExportStyle = css({
	width: '210mm',
	height: '290mm',

	'> div:nth-child(1)': {
		width: '100%',
		height: '18.8mm',
		display: 'grid',
		gridTemplateColumns: '3fr 5fr 3fr',

		'> div': {
			height: '100%',
		},
		'> div:nth-child(2)': TitleStyle,
		'> div:nth-child(3)': MetaDataStyle,
	},
	'> div:nth-child(2)': {
		height: '243.3mm',
		borderTop: '1px solid black',
		borderLeft: '1px solid black',
		borderRight: '1px solid black',
		'> div:nth-child(1)': HeaderStyle,
	},
});

export default AuditExportStyle;
